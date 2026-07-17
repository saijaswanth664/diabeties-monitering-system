# Import all the models so that Base.metadata.create_all() works correctly
from app.database.connection import Base
from app.models.user import User
from app.models.otp import OTPVerification
from app.models.health_record import HealthRecord
from app.models.report import Report
