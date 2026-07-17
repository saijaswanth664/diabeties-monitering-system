import os
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from app.config.settings import settings
from app.database.connection import engine
from app.database.base import Base
from app.routes import auth, health, reports

# 1. Initialize Database Tables on Startup
# This creates all required tables (Users, OTP, HealthRecords, Reports) if they do not exist
try:
    print("[*] Initializing database tables...")
    Base.metadata.create_all(bind=engine)
    print("[+] Database tables initialized successfully!")
except Exception as e:
    print(f"[ERROR] Failed to initialize database tables: {str(e)}")

# 2. Setup FastAPI App
app = FastAPI(
    title="Secure AI-Based Personalized Diabetes Monitoring & Analytics System",
    description="Production-ready clinical analytics API powered by FastAPI, SQLAlchemy, Random Forest models, and Explainable AI (SHAP & LIME).",
    version="1.0.0"
)

# 3. Mount CORS Middleware
# Configured to support local development and production frontends
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Restrict to specific domains in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 4. Register API Routers
app.include_router(auth.router)
app.include_router(health.router)
app.include_router(reports.router)

# 5. Serve Compiled React Frontend (Combined Single-Port Deployment)
# The frontend is built with Vite and output to frontend/dist/
FRONTEND_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "frontend", "dist")

# Ensure directory exists on startup to prevent mounting errors
os.makedirs(os.path.join(FRONTEND_DIR, "assets"), exist_ok=True)
app.mount("/assets", StaticFiles(directory=os.path.join(FRONTEND_DIR, "assets")), name="static-assets")
print(f"[+] Mounted frontend static assets from {FRONTEND_DIR}/assets")

# Serve root-level static files (favicon, icons, etc.)
@app.get("/favicon.svg", include_in_schema=False)
async def favicon():
    fav_path = os.path.join(FRONTEND_DIR, "favicon.svg")
    if os.path.exists(fav_path):
        return FileResponse(fav_path, media_type="image/svg+xml")

@app.get("/icons.svg", include_in_schema=False)
async def icons():
    icons_path = os.path.join(FRONTEND_DIR, "icons.svg")
    if os.path.exists(icons_path):
        return FileResponse(icons_path, media_type="image/svg+xml")

# 6. SPA Catch-All Route
# Any route that doesn't match an API endpoint serves the React index.html
# This allows React Router to handle client-side navigation
@app.get("/{catchall:path}", include_in_schema=False)
async def serve_spa(request: Request, catchall: str):
    # Don't catch API routes or docs
    if catchall.startswith("api/") or catchall in ("docs", "redoc", "openapi.json"):
        return None
    index_path = os.path.join(FRONTEND_DIR, "index.html")
    if os.path.exists(index_path):
        return FileResponse(index_path, media_type="text/html")
    # Fallback if frontend hasn't been built yet
    from fastapi.responses import HTMLResponse
    return HTMLResponse(
        content="<h1>Frontend not built</h1><p>Run <code>npm run build</code> in the frontend/ directory first.</p>",
        status_code=200
    )
