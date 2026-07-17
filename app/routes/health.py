from datetime import datetime, timezone
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from pydantic import BaseModel, Field

from app.database.connection import get_db
from app.models.user import User
from app.models.health_record import HealthRecord
from app.auth.security import get_current_user
from app.services.ml_service import ml_service
from app.services.analytics_service import analytics_service

router = APIRouter(prefix="/api/health", tags=["Health Clinical Data"])

# --- Pydantic Schema Declarations ---
class HealthRecordUploadSchema(BaseModel):
    glucose: float = Field(..., gt=0, lt=500, description="Plasma glucose concentration (2 hours in oral glucose tolerance test)", example=145.0)
    insulin: float = Field(..., gt=0, lt=1000, description="2-Hour serum insulin (mu U/ml)", example=85.0)
    bmi: float = Field(..., gt=10, lt=80, description="Body Mass Index (weight in kg/(height in m)^2)", example=28.4)
    age: int = Field(..., gt=0, lt=120, description="Patient age (years)", example=34)
    month: str = Field(..., min_length=2, max_length=20, description="Reporting period name (e.g. YYYY-MM or Month)", example="2026-05")

class HealthRecordResponseSchema(BaseModel):
    record_id: int
    month: str
    glucose: float
    insulin: float
    bmi: float
    age: int
    outcome: int
    created_at: datetime

    class Config:
        from_attributes = True

class PredictionResultSchema(BaseModel):
    record: HealthRecordResponseSchema
    risk_level: str
    probability: float
    comparison: dict
    analysis: dict

# --- Route Implementations ---

@router.post("/upload-health-data", response_model=PredictionResultSchema)
def upload_health_data(
    data: HealthRecordUploadSchema,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """
    Accepts monthly biometric readings, triggers the ML prediction engine to calculate risk probability,
    compares with the previous month's baseline, runs clinical recommendations rules, and persists to DB.
    """
    # 1. Trigger ML Prediction
    try:
        outcome, risk_probability = ml_service.predict_diabetes_risk(
            glucose=data.glucose,
            insulin=data.insulin,
            bmi=data.bmi,
            age=data.age
        )
    except FileNotFoundError as e:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=str(e)
        )

    # 2. Persist to Database
    new_record = HealthRecord(
        user_id=current_user.user_id,
        month=data.month,
        glucose=data.glucose,
        bmi=data.bmi,
        age=data.age,
        insulin=data.insulin,
        outcome=outcome
    )
    db.add(new_record)
    db.commit()
    db.refresh(new_record)

    # 3. Retrieve Historical Comparison (exclude the newly added record)
    previous_record = db.query(HealthRecord)\
        .filter(HealthRecord.user_id == current_user.user_id, HealthRecord.record_id != new_record.record_id)\
        .order_by(HealthRecord.created_at.desc())\
        .first()

    comparison = analytics_service.compare_records(new_record, previous_record)
    
    # Inject predicted risk probability into comparison dictionary for PDF compiler
    comparison['risk_probability'] = risk_probability

    # 4. Generate Clinical Recommendation & Warnings
    analysis = analytics_service.generate_recommendations(new_record)

    risk_level = "HIGH RISK (DIABETIC)" if outcome == 1 else "LOW RISK (HEALTHY)"

    return {
        "record": new_record,
        "risk_level": risk_level,
        "probability": round(risk_probability, 4),
        "comparison": comparison,
        "analysis": analysis
    }

@router.get("/history", response_model=List[HealthRecordResponseSchema])
def get_history(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """
    Fetches the patient's entire chronological clinical history from the database.
    """
    records = db.query(HealthRecord)\
        .filter(HealthRecord.user_id == current_user.user_id)\
        .order_by(HealthRecord.created_at.asc())\
        .all()
    return records
