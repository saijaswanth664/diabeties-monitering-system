from datetime import datetime, timezone
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from pydantic import BaseModel, EmailStr, Field

from app.database.connection import get_db
from app.models.user import User
from app.auth.security import get_password_hash, verify_password, create_access_token
from app.services.otp_service import generate_otp, save_otp, send_otp_email, verify_otp, OTPEmailType

router = APIRouter(prefix="/api/auth", tags=["Authentication"])

# --- Pydantic Schema Declarations ---
class UserSignupSchema(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=100, example="John Doe")
    gmail: EmailStr = Field(..., example="john.doe@gmail.com")
    password: str = Field(..., min_length=6, max_length=50, example="secure123")

class OTPVerifySchema(BaseModel):
    gmail: EmailStr = Field(..., example="john.doe@gmail.com")
    otp: str = Field(..., min_length=6, max_length=6, example="123456")

class ForgotPasswordSchema(BaseModel):
    gmail: EmailStr = Field(..., example="john.doe@gmail.com")

class ResetPasswordSchema(BaseModel):
    gmail: EmailStr = Field(..., example="john.doe@gmail.com")
    otp: str = Field(..., min_length=6, max_length=6, example="123456")
    new_password: str = Field(..., min_length=6, max_length=50, example="newsecure123")

class TokenResponseSchema(BaseModel):
    access_token: str
    token_type: str
    full_name: str
    gmail: str

# --- Route Implementations ---

@router.post("/signup", status_code=status.HTTP_201_CREATED)
def signup(data: UserSignupSchema, db: Session = Depends(get_db)):
    """
    Registers a new account.
    Fails if the email is already registered and verified.
    Otherwise, issues a 6-digit OTP for email verification.
    """
    existing_user = db.query(User).filter(User.gmail == data.gmail).first()
    
    if existing_user:
        if existing_user.verified:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email is already registered and verified."
            )
        else:
            # Update credentials for existing unverified user
            existing_user.full_name = data.full_name
            existing_user.password_hash = get_password_hash(data.password)
            db.commit()
    else:
        # Create unverified user
        new_user = User(
            full_name=data.full_name,
            gmail=data.gmail,
            password_hash=get_password_hash(data.password),
            verified=False
        )
        db.add(new_user)
        db.commit()

    # Generate and send OTP
    otp = generate_otp()
    save_otp(db, data.gmail, otp)
    send_otp_email(data.gmail, otp)

    return {"message": "Registration successful. A 6-digit OTP has been sent to your Gmail."}

@router.post("/send-otp")
def send_otp(data: ForgotPasswordSchema, db: Session = Depends(get_db)):
    """
    Generates and sends a new 6-digit OTP to the requested email.
    """
    otp = generate_otp()
    save_otp(db, data.gmail, otp)
    sent = send_otp_email(data.gmail, otp)
    if not sent:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to send OTP. Please check server SMTP configuration."
        )
    return {"message": "OTP sent successfully."}

@router.post("/verify-otp")
def verify_user_otp(data: OTPVerifySchema, db: Session = Depends(get_db)):
    """
    Validates the 6-digit OTP.
    If valid and unexpired, activates/verifies the user account.
    """
    # Verify OTP
    is_valid = verify_otp(db, data.gmail, data.otp)
    if not is_valid:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid or expired OTP."
        )

    # Mark user as verified
    user = db.query(User).filter(User.gmail == data.gmail).first()
    if user:
        user.verified = True
        db.commit()
        return {"message": "Email verified successfully. You can now login."}
    
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail="User account not found."
    )

@router.post("/login", response_model=TokenResponseSchema)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    """
    Authenticates email and password. Returns a secure JWT access token.
    FastAPI OAuth2PasswordRequestForm expects username (our gmail) and password.
    """
    user = db.query(User).filter(User.gmail == form_data.username).first()
    
    if not user or not verify_password(form_data.password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
        
    if not user.verified:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Account unverified. Please verify your email using OTP first."
        )

    # Generate JWT Token
    access_token = create_access_token(data={"sub": user.gmail})
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "full_name": user.full_name,
        "gmail": user.gmail
    }

@router.post("/forgot-password")
def forgot_password(data: ForgotPasswordSchema, db: Session = Depends(get_db)):
    """
    Initiates password recovery.
    Verifies user existence and dispatches a reset OTP code.
    """
    user = db.query(User).filter(User.gmail == data.gmail).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="No account associated with this email."
        )
        
    otp = generate_otp()
    save_otp(db, data.gmail, otp)
    send_otp_email(data.gmail, otp, OTPEmailType.PASSWORD_RESET)
    
    return {"message": "Verification code sent. Use it to reset your password."}

@router.post("/reset-password")
def reset_password(data: ResetPasswordSchema, db: Session = Depends(get_db)):
    """
    Resets the user's password if the reset OTP code matches and is valid.
    """
    is_valid = verify_otp(db, data.gmail, data.otp)
    if not is_valid:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid or expired verification code."
        )
        
    user = db.query(User).filter(User.gmail == data.gmail).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User account not found."
        )
        
    # Update password hash
    user.password_hash = get_password_hash(data.new_password)
    db.commit()
    
    return {"message": "Password reset successfully. You can now login with your new password."}
