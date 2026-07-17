from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime, timezone
from app.database.connection import Base

class HealthRecord(Base):
    __tablename__ = "health_records"

    record_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.user_id", ondelete="CASCADE"), nullable=False)
    month = Column(String(20), nullable=False)  # Example: "2026-05" or "January"
    glucose = Column(Float, nullable=False)
    bmi = Column(Float, nullable=False)
    age = Column(Integer, nullable=False)
    insulin = Column(Float, nullable=False)
    outcome = Column(Integer, nullable=False)  # 0 = Healthy, 1 = Diabetic Risk
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    # Relationships
    user = relationship("User", back_populates="records")
