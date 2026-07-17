from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from app.config.settings import settings

database_url = settings.DATABASE_URL

# Apply specific flags for SQLite if used
connect_args = {}
if database_url.startswith("sqlite"):
    connect_args = {"check_same_thread": False}

engine = create_engine(
    database_url,
    connect_args=connect_args,
    pool_pre_ping=True  # Detect and recover from stale connections automatically
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# FastAPI DB dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
