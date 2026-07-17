import os
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, status, Query
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.models.user import User
from app.models.health_record import HealthRecord
from app.models.report import Report
from app.auth.security import get_current_user
from app.services.ml_service import ml_service
from app.services.analytics_service import analytics_service
from app.services.graph_service import graph_service
from app.services.report_service import report_service
from app.services.email_service import email_service

router = APIRouter(prefix="/api/reports", tags=["Clinical Reports"])

@router.post("/generate-report")
def generate_report(
    record_id: Optional[int] = Query(None, description="The ID of the health record to build the report for. Defaults to the latest record."),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """
    Assembles clinical metrics, fetches historical trends, triggers local XAI values (SHAP/LIME),
    generates trend and SHAP charts, builds a premium ReportLab PDF, and returns file meta info.
    """
    # 1. Fetch relevant health record
    if record_id:
        current_record = db.query(HealthRecord).filter(
            HealthRecord.record_id == record_id,
            HealthRecord.user_id == current_user.user_id
        ).first()
        if not current_record:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Health record ID {record_id} not found."
            )
    else:
        # Default to the most recent record
        current_record = db.query(HealthRecord).filter(
            HealthRecord.user_id == current_user.user_id
        ).order_by(HealthRecord.created_at.desc()).first()
        
        if not current_record:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="No health records uploaded yet. Please upload health data first."
            )

    # 2. Fetch history and compute monthly comparison
    all_history = db.query(HealthRecord).filter(
        HealthRecord.user_id == current_user.user_id
    ).order_by(HealthRecord.created_at.asc()).all()

    # Find the immediately preceding record
    previous_record = db.query(HealthRecord).filter(
        HealthRecord.user_id == current_user.user_id,
        HealthRecord.created_at < current_record.created_at
    ).order_by(HealthRecord.created_at.desc()).first()

    comparison = analytics_service.compare_records(current_record, previous_record)
    
    # Run ML service to fetch prediction probabilities
    try:
        _, risk_probability = ml_service.predict_diabetes_risk(
            glucose=current_record.glucose,
            insulin=current_record.insulin,
            bmi=current_record.bmi,
            age=current_record.age
        )
    except FileNotFoundError as e:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=str(e)
        )
        
    comparison['risk_probability'] = risk_probability

    # 3. Generate Clinical Recommendations & Warnings
    analysis = analytics_service.generate_recommendations(current_record)

    # 4. Generate Explainable AI explanations (SHAP & LIME)
    shap_contributions = ml_service.generate_shap_explanation(
        glucose=current_record.glucose,
        insulin=current_record.insulin,
        bmi=current_record.bmi,
        age=current_record.age
    )
    lime_contributions = ml_service.generate_lime_explanation(
        glucose=current_record.glucose,
        insulin=current_record.insulin,
        bmi=current_record.bmi,
        age=current_record.age
    )

    # 5. Generate Matplotlib graphs
    trend_graph_path = graph_service.generate_patient_trend_graph(current_user.user_id, all_history)
    shap_graph_path = graph_service.generate_shap_bar_chart(current_user.user_id, shap_contributions)

    # 6. Generate ReportLab PDF
    pdf_path = report_service.generate_pdf_report(
        user=current_user,
        current_record=current_record,
        comparison=comparison,
        analysis=analysis,
        trend_graph_path=trend_graph_path,
        shap_graph_path=shap_graph_path
    )

    # 7. Record PDF in DB
    report = Report(
        user_id=current_user.user_id,
        pdf_path=pdf_path
    )
    db.add(report)
    db.commit()
    db.refresh(report)

    return {
        "message": "Report generated successfully.",
        "report_id": report.report_id,
        "pdf_path": report.pdf_path,
        "filename": os.path.basename(report.pdf_path),
        "shap_values": shap_contributions,
        "lime_values": lime_contributions
    }

@router.post("/send-report/{report_id}")
def send_report(
    report_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """
    Dynamically generates the PDF report for the given health record ID (report_id matches record_id from client)
    and sends it to the user's registered email.
    """
    record = db.query(HealthRecord).filter(
        HealthRecord.record_id == report_id,
        HealthRecord.user_id == current_user.user_id
    ).first()
    
    if not record:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Health record ID {report_id} not found."
        )

    # Compile report on the fly to guarantee PDF exists and is up to date
    try:
        all_history = db.query(HealthRecord).filter(
            HealthRecord.user_id == current_user.user_id
        ).order_by(HealthRecord.created_at.asc()).all()

        previous_record = db.query(HealthRecord).filter(
            HealthRecord.user_id == current_user.user_id,
            HealthRecord.created_at < record.created_at
        ).order_by(HealthRecord.created_at.desc()).first()

        comparison = analytics_service.compare_records(record, previous_record)
        
        _, risk_probability = ml_service.predict_diabetes_risk(
            glucose=record.glucose,
            insulin=record.insulin,
            bmi=record.bmi,
            age=record.age
        )
        comparison['risk_probability'] = risk_probability
        analysis = analytics_service.generate_recommendations(record)
        
        shap_contributions = ml_service.generate_shap_explanation(
            glucose=record.glucose,
            insulin=record.insulin,
            bmi=record.bmi,
            age=record.age
        )
        
        trend_graph_path = graph_service.generate_patient_trend_graph(current_user.user_id, all_history)
        shap_graph_path = graph_service.generate_shap_bar_chart(current_user.user_id, shap_contributions)
        
        pdf_path = report_service.generate_pdf_report(
            user=current_user,
            current_record=record,
            comparison=comparison,
            analysis=analysis,
            trend_graph_path=trend_graph_path,
            shap_graph_path=shap_graph_path
        )
        
        report = Report(
            user_id=current_user.user_id,
            pdf_path=pdf_path
        )
        db.add(report)
        db.commit()
        db.refresh(report)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to generate clinical report PDF: {str(e)}"
        )

    # Email PDF report
    dispatched = email_service.send_report_email(
        recipient_gmail=current_user.gmail,
        patient_name=current_user.full_name,
        pdf_path=pdf_path
    )
    
    if not dispatched:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to send report email. Please check server SMTP configuration."
        )
        
    return {"message": f"Clinical report successfully emailed to {current_user.gmail}."}

@router.get("/download-report/{report_id}")
def download_report(
    report_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """
    Dynamically generates the PDF report for the given health record ID (report_id matches record_id from client)
    and returns it for direct download.
    """
    record = db.query(HealthRecord).filter(
        HealthRecord.record_id == report_id,
        HealthRecord.user_id == current_user.user_id
    ).first()
    
    if not record:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Health record ID {report_id} not found."
        )

    # Compile report on the fly to guarantee PDF exists and is up to date
    try:
        all_history = db.query(HealthRecord).filter(
            HealthRecord.user_id == current_user.user_id
        ).order_by(HealthRecord.created_at.asc()).all()

        previous_record = db.query(HealthRecord).filter(
            HealthRecord.user_id == current_user.user_id,
            HealthRecord.created_at < record.created_at
        ).order_by(HealthRecord.created_at.desc()).first()

        comparison = analytics_service.compare_records(record, previous_record)
        
        _, risk_probability = ml_service.predict_diabetes_risk(
            glucose=record.glucose,
            insulin=record.insulin,
            bmi=record.bmi,
            age=record.age
        )
        comparison['risk_probability'] = risk_probability
        analysis = analytics_service.generate_recommendations(record)
        
        shap_contributions = ml_service.generate_shap_explanation(
            glucose=record.glucose,
            insulin=record.insulin,
            bmi=record.bmi,
            age=record.age
        )
        
        trend_graph_path = graph_service.generate_patient_trend_graph(current_user.user_id, all_history)
        shap_graph_path = graph_service.generate_shap_bar_chart(current_user.user_id, shap_contributions)
        
        pdf_path = report_service.generate_pdf_report(
            user=current_user,
            current_record=record,
            comparison=comparison,
            analysis=analysis,
            trend_graph_path=trend_graph_path,
            shap_graph_path=shap_graph_path
        )
        
        report = Report(
            user_id=current_user.user_id,
            pdf_path=pdf_path
        )
        db.add(report)
        db.commit()
        db.refresh(report)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to generate clinical report PDF: {str(e)}"
        )
        
    return FileResponse(
        path=pdf_path,
        filename=os.path.basename(pdf_path),
        media_type="application/pdf"
    )

