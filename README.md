---
title: Diabetes Monitoring Backend
emoji: 🩺
colorFrom: blue
colorTo: green
sdk: docker
app_port: 7860
pinned: false
---

# Secure AI-Based Personalized Diabetes Monitoring & Analytics System

A production-ready, clinical-grade backend system built with **FastAPI**, **SQLAlchemy ORM**, **Scikit-learn**, and local **Explainable AI (SHAP & LIME)** models. It provides medical professionals and patients with secure logins, email-verified OTP enrollments, automated biomarker classification, historical metabolic comparisons, rules-engine recommendations, and beautifully compiled ReportLab PDF charts emailed automatically.

---

## 🌟 Core Features

- **Robust Security & Session Management**:
  - `bcrypt` hashing for passphrases.
  - Expirable JSON Web Token (JWT) OAuth2 bearer authorization.
- **2-Factor OTP Activation System**:
  - Cryptographically robust 6-digit One-Time Passwords (OTP) generated on signup and recovery.
  - Multi-mode OTP dispatch (automated SMTP email delivery or interactive terminal fallback logging).
- **Sub-Selected ML Classifier Pipeline**:
  - Automatically fetches and cleans the standard Pima Indians Diabetes Dataset.
  - Imputes invalid/missing biological parameters with medians.
  - Trains and compares four classifiers: **Logistic Regression**, **Random Forest**, **Support Vector Machine (SVM)**, and **MLP Neural Networks**.
  - Automatically serializes the best performing model (highest F1-score/Accuracy) for runtime predictions.
- **Explainable AI Diagnostics (XAI)**:
  - **SHAP (Shapley Additive exPlanations)**: Quantitative local feature impact measuring exactly how much each biomarker pushed the patient's risk profile.
  - **LIME (Local Interpretable Model-agnostic Explanations)**: Local linear surrogate models explaining individual metrics in descriptive rules.
- **Expert Clinical Rules Engine**:
  - Month-over-month biomarker delta calculators.
  - Personal health alerts (e.g. Hypoglycemia, Hyperinsulinemia, Obesity) and tailored nutrition/exercise guidelines based on medical thresholds.
- **Visual PDF Reporting System**:
  - Dynamic dual-axis trend lines plotting Glucose vs. BMI historical timeline.
  - Embedded SHAP horizontal contribution charts.
  - Dynamic **ReportLab** PDF generation using elegant slates/teals, patient profiles, comparison tables, warning cards, and embedded chart visuals.

---

## 📁 Repository Structure

```
c:\Users\saija\Downloads\diabetes/
│
├── app/
│   ├── main.py                 # FastAPI application entrypoint & middleware
│   ├── config/
│   │   └── settings.py         # Strongly-typed environment variables parser
│   ├── database/
│   │   ├── connection.py       # SQLAlchemy SessionLocal & engine manager
│   │   └── base.py             # Declarative Base metadata collector
│   ├── models/
│   │   ├── user.py             # User DB Model (Users table)
│   │   ├── otp.py              # OTP verification DB Model
│   │   ├── health_record.py    # Health Records DB Model (Glucose, BMI, Insulin)
│   │   └── report.py           # Generated PDF Reports DB Model
│   ├── routes/
│   │   ├── auth.py             # Signup, OTP activation, recovery endpoints
│   │   ├── health.py           # Clinical data upload & history timelines
│   │   └── reports.py          # PDF generation, downloads, and emailing
│   ├── services/
│   │   ├── ml_service.py       # Predictor loader & XAI calculator (SHAP/LIME)
│   │   ├── analytics_service.py# Historic comparator & rule recommendations
│   │   ├── graph_service.py    # Matplotlib line & XAI bar charts generator
│   │   ├── report_service.py   # ReportLab PDF structured compiler
│   │   └── email_service.py    # SMTP client with attachment support
│   └── auth/
│       └── security.py         # JWT generation & current-user protection
│
├── datasets/                   # Stores Pima Indians raw csv datasets
├── trained_models/             # Serialized models, scalers, and training summaries
├── reports_generated/          # Output PDF medical reports & temporary graphs
├── requirements.txt            # System library dependencies
├── .env                        # Local database & SMTP credentials configuration
└── README.md                   # System documentation and deployment guide
```

---

## 🛠️ Step-by-Step Installation & Setup

Ensure you have **Python 3.10+** installed on your machine.

### 1. Configure the Environment
A `.env` template file is prepared in the root directory.
By default, the system initializes on a self-contained local SQLite file database (`diabetes.db`) for immediate out-of-the-box operation. 

To connect to a live MySQL server:
1. Open `.env`
2. Uncomment the `DATABASE_URL` line and fill in your MySQL connection URL:
   ```env
   DATABASE_URL=mysql+pymysql://username:password@localhost:3306/your_database_name
   ```
3. Set your custom JWT security variables and Gmail App Passwords if SMTP emailing is desired.

### 2. Run the Machine Learning Training Pipeline
Initialize the datasets downloads and train the classifiers:
```bash
python app/ml/train.py
```
*This downloads the raw CSV data, pre-processes the dataset, trains all four models, displays a performance comparison table, selects the best model, and saves all assets in `trained_models/`.*

### 3. Run Automated E2E Verification
You can fully validate the entire API backend (all authentication routes, DB transactions, JWT validation, health uploads, SHAP/LIME calculations, and PDF compiles) in-memory by running the test suite:
```bash
python scratch/verify_endpoints.py
```
*This runs an exhaustive integration pipeline and outputs diagnostic values, local Explainable AI contributions, and checks PDF structures.*

### 4. Boot the Live Development Server
Start the FastAPI server on `http://127.0.0.1:8000`:
```bash
uvicorn app.main:app --reload
```
- Interactive OpenAPI documentation: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- Alternative Redoc documentation: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

---

## 🔌 API Documentation Cheat-Sheet

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/signup` | Registers username, generates verification OTP | No |
| `POST` | `/api/auth/send-otp` | Force dispatches a fresh 6-digit OTP | No |
| `POST` | `/api/auth/verify-otp` | Validates active OTP, activates account | No |
| `POST` | `/api/auth/login` | Validates password, returns secure JWT token | No |
| `POST` | `/api/auth/forgot-password` | Initiates reset workflow, sends recovery code | No |
| `POST` | `/api/auth/reset-password` | Accepts recovery code, resets password hash | No |
| `POST` | `/api/health/upload-health-data` | Uploads clinical reading, predicts risk, checks comparison | **Yes (JWT)** |
| `GET`  | `/api/health/history` | Returns complete patient historical timeline | **Yes (JWT)** |
| `POST` | `/api/reports/generate-report` | Generates trends, draws SHAP charts, compiles ReportLab PDF | **Yes (JWT)** |
| `GET`  | `/api/reports/download-report/{id}` | Accesses binary stream for client PDF downloads | **Yes (JWT)** |
| `POST` | `/api/reports/send-report/{id}` | Dispatches PDF report to patient registered email | **Yes (JWT)** |
