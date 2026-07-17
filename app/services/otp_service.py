import random
import smtplib
import logging
from datetime import datetime, timedelta, timezone
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from sqlalchemy.orm import Session
from app.models.otp import OTPVerification
from app.config.settings import settings
from enum import Enum

logger = logging.getLogger(__name__)

class OTPEmailType(Enum):
    VERIFICATION = "verification"
    PASSWORD_RESET = "password_reset"

def generate_otp() -> str:
    """Generate a cryptographically robust-looking 6-digit random number string."""
    otp = f"{random.randint(100000, 999999)}"
    logger.info("Generated OTP for user")
    return otp

def save_otp(db: Session, gmail: str, otp: str) -> OTPVerification:
    """Store or update the OTP in the database with a 5-minute expiry."""
    expiry_time = datetime.now(timezone.utc) + timedelta(minutes=5)
    
    # Check if OTP already exists for this email
    db_otp = db.query(OTPVerification).filter(OTPVerification.gmail == gmail).first()
    if db_otp:
        db_otp.otp = otp
        db_otp.expiry_time = expiry_time
    else:
        db_otp = OTPVerification(gmail=gmail, otp=otp, expiry_time=expiry_time)
        db.add(db_otp)
    
    db.commit()
    db.refresh(db_otp)
    logger.info("OTP saved successfully")
    return db_otp

def send_otp_email(gmail: str, otp: str, email_type: OTPEmailType = OTPEmailType.VERIFICATION) -> bool:
    """Send OTP email via Gmail SMTP only (Firebase completely removed)."""
    try:
        msg = MIMEMultipart()
        msg["From"] = f"{settings.SENDER_NAME} <{settings.SMTP_USER}>"
        msg["To"] = gmail
        if email_type == OTPEmailType.VERIFICATION:
            subject = "Verify Your Account - Diabetes Monitoring System"
            heading = "Email Verification"
            intro = "Thank you for signing up for the <strong>Secure Diabetes Monitoring and Healthcare Analytics System</strong>."
            instruction = "Please use the following 6-digit One-Time Password (OTP) to complete your registration. This OTP is valid for <strong>5 minutes</strong>."
        else:  # PASSWORD_RESET
            subject = "Password Reset Code - Diabetes Monitoring System"
            heading = "Password Reset"
            intro = "We received a request to reset the password associated with your account."
            instruction = "Please use the following 6-digit One-Time Password (OTP) to proceed with resetting your password. This OTP is valid for <strong>5 minutes</strong>."
        msg["Subject"] = subject

        html_body = f"""
        <html>
            <body style="font-family: Arial, sans-serif; background-color: #f7f9fc; padding: 20px; color: #1e293b;">
                <div style="max-width: 500px; margin: 0 auto; background: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); border-top: 4px solid #0d9488;">
                    <h2 style="color: #0d9488; text-align: center; margin-bottom: 20px;">{heading}</h2>
                    <p>{intro}</p>
                    <p>{instruction}</p>
                    <div style="background-color: #f0fdfa; border: 1px dashed #0d9488; border-radius: 6px; padding: 15px; text-align: center; font-size: 28px; font-weight: bold; letter-spacing: 4px; color: #0f766e; margin: 25px 0;">
                        {otp}
                    </div>
                    <p style="font-size: 12px; color: #64748b; text-align: center; margin-top: 30px;">
                        If you did not request this code, please ignore this email.
                    </p>
                </div>
            </body>
        </html>
        """
        msg.attach(MIMEText(html_body, "html"))

        logger.info("Connecting to SMTP server")
        server = smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT)
        server.starttls()
        server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
        logger.info("Connected to SMTP server")
        server.sendmail(settings.SMTP_USER, gmail, msg.as_string())
        server.quit()

        if email_type == OTPEmailType.VERIFICATION:
            logger.info("Verification OTP sent successfully")
        else:
            logger.info("Password Reset OTP sent successfully")
        return True
    except Exception as e:
        logger.error("Full SMTP exception traceback", exc_info=True)
        logger.warning(f"[TEST FALLBACK] OTP for {gmail} is {otp}")
        return False

def verify_otp(db: Session, gmail: str, submitted_otp: str) -> bool:
    """Compare user input with database record and check expiration."""
    db_otp = db.query(OTPVerification).filter(OTPVerification.gmail == gmail).first()
    if not db_otp:
        return False
        
    # Check expiry
    expiry = db_otp.expiry_time
    if expiry.tzinfo is None:
        expiry = expiry.replace(tzinfo=timezone.utc)
        
    now = datetime.now(timezone.utc)
    
    if now > expiry:
        # Delete expired OTP record
        db.delete(db_otp)
        db.commit()
        return False
        
    if db_otp.otp == submitted_otp:
        # Delete OTP record after successful verification
        db.delete(db_otp)
        db.commit()
        return True
        
    return False
