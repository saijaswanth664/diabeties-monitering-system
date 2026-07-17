from sqlalchemy import Column, String, DateTime
from app.database.connection import Base

class OTPVerification(Base):
    __tablename__ = "otp_verification"

    gmail = Column(String(100), primary_key=True, index=True, nullable=False)
    otp = Column(String(6), nullable=False)
    expiry_time = Column(DateTime, nullable=False)
