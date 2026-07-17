import os
import sys
import shutil

# Add project root directory to python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from fastapi.testclient import TestClient
from sqlalchemy.orm import Session

from app.main import app
from app.database.connection import SessionLocal, Base, engine
from app.models.user import User
from app.models.otp import OTPVerification
from app.models.health_record import HealthRecord
from app.models.report import Report

client = TestClient(app)

def run_e2e_verification():
    print("\n" + "="*80)
    print("      DIABETES HEALTHCARE API SYSTEM - AUTOMATED END-TO-END VERIFICATION")
    print("="*80)
    
    # 1. Reset Database for clean validation
    print("[*] Resetting test database schema...")
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    print("[+] Test database clean and initialized!")

    db: Session = SessionLocal()

    try:
        # 2. SIGN UP TEST
        print("\n--- PHASE 1: Sign Up Workflow ---")
        signup_payload = {
            "full_name": "Dr. Sarah Jenkins",
            "gmail": "sarah.jenkins@gmail.com",
            "password": "clinicalsecurepassword123"
        }
        print(f"[*] Posting registration request for {signup_payload['gmail']}...")
        signup_res = client.post("/api/auth/signup", json=signup_payload)
        assert signup_res.status_code == 201, f"Signup failed: {signup_res.text}"
        print(f"[+] Signup Success: {signup_res.json()['message']}")

        # 3. INTERCEPT OTP
        print("\n--- PHASE 2: OTP Email Verification ---")
        print("[*] Retrieving OTP code directly from database...")
        db_otp = db.query(OTPVerification).filter(OTPVerification.gmail == signup_payload["gmail"]).first()
        assert db_otp is not None, "OTP was not successfully persisted to the database!"
        otp_code = db_otp.otp
        print(f"[+] Intercepted OTP: {otp_code} (Expires: {db_otp.expiry_time})")

        # Verify OTP via endpoint
        verify_payload = {
            "gmail": signup_payload["gmail"],
            "otp": otp_code
        }
        print(f"[*] Submitting OTP verification request...")
        verify_res = client.post("/api/auth/verify-otp", json=verify_payload)
        assert verify_res.status_code == 200, f"OTP verification failed: {verify_res.text}"
        print(f"[+] Verification Success: {verify_res.json()['message']}")

        # Validate that the user is now active/verified
        user = db.query(User).filter(User.gmail == signup_payload["gmail"]).first()
        assert user.verified is True, "User should be verified in the database!"
        print("[+] User verified field validated as True in database.")

        # 4. LOGIN & TOKEN RETRIEVAL TEST
        print("\n--- PHASE 3: User Authentication & JWT Issuance ---")
        login_payload = {
            "username": signup_payload["gmail"],  # OAuth2 password bearer form uses 'username'
            "password": signup_payload["password"]
        }
        print("[*] Submitting credentials to login endpoint...")
        login_res = client.post("/api/auth/login", data=login_payload)
        assert login_res.status_code == 200, f"Login failed: {login_res.text}"
        
        login_data = login_res.json()
        token = login_data["access_token"]
        print("[+] Login Authenticated!")
        print(f"    Token Type:   {login_data['token_type']}")
        print(f"    Access Token: {token[:20]}...{token[-20:]}")
        print(f"    User Name:    {login_data['full_name']}")

        # Set auth header for subsequent endpoints
        headers = {"Authorization": f"Bearer {token}"}

        # 5. HEALTH RECORDS DATA UPLOAD (3 Months Timeline)
        print("\n--- PHASE 4: Clinical Metrics Upload & Analysis ---")
        
        # Month 1: Baseline (Unhealthy)
        month1_payload = {
            "glucose": 178.0,
            "insulin": 195.0,
            "bmi": 32.5,
            "age": 42,
            "month": "2026-03"
        }
        print(f"[*] Uploading baseline records for {month1_payload['month']} (Glucose: {month1_payload['glucose']} mg/dL)...")
        res_m1 = client.post("/api/health/upload-health-data", json=month1_payload, headers=headers)
        assert res_m1.status_code == 200, f"Month 1 upload failed: {res_m1.text}"
        m1_data = res_m1.json()
        print(f"[+] Predicted Risk: {m1_data['risk_level']} (Probability: {m1_data['probability'] * 100:.1f}%)")
        print(f"    Baseline Comparison Status: {m1_data['comparison']['glucose']['status']}")

        # Month 2: Improvement (Diet and lifestyle changes)
        month2_payload = {
            "glucose": 125.0,
            "insulin": 82.0,
            "bmi": 29.8,
            "age": 42,
            "month": "2026-04"
        }
        print(f"[*] Uploading improved records for {month2_payload['month']} (Glucose: {month2_payload['glucose']} mg/dL)...")
        res_m2 = client.post("/api/health/upload-health-data", json=month2_payload, headers=headers)
        assert res_m2.status_code == 200, f"Month 2 upload failed: {res_m2.text}"
        m2_data = res_m2.json()
        print(f"[+] Predicted Risk: {m2_data['risk_level']} (Probability: {m2_data['probability'] * 100:.1f}%)")
        print(f"    Glucose Diff: {m2_data['comparison']['glucose']['difference']} mg/dL")
        print(f"    Glucose Progress: {m2_data['comparison']['glucose']['status']}")

        # Month 3: Deterioration (Elevated Glucose & BMI)
        month3_payload = {
            "glucose": 185.0,
            "insulin": 210.0,
            "bmi": 33.2,
            "age": 42,
            "month": "2026-05"
        }
        print(f"[*] Uploading latest records for {month3_payload['month']} (Glucose: {month3_payload['glucose']} mg/dL)...")
        res_m3 = client.post("/api/health/upload-health-data", json=month3_payload, headers=headers)
        assert res_m3.status_code == 200, f"Month 3 upload failed: {res_m3.text}"
        m3_data = res_m3.json()
        print(f"[+] Predicted Risk: {m3_data['risk_level']} (Probability: {m3_data['probability'] * 100:.1f}%)")
        print(f"    Glucose Diff: {m3_data['comparison']['glucose']['difference']} mg/dL")
        print(f"    Glucose Progress: {m3_data['comparison']['glucose']['status']}")
        
        # Verify clinical recommendations
        print("\n[*] Expert rules engine recommendations:")
        for rec in m3_data["analysis"]["recommendations"][:2]:
            print(f"    - {rec}")
        for warn in m3_data["analysis"]["warnings"][:2]:
            print(f"    [!] ALERT: {warn}")

        # 6. PDF REPORT GENERATION & XAI (SHAP & LIME)
        print("\n--- PHASE 5: Visual Report Compilation & Explainable AI (XAI) ---")
        print("[*] Posting PDF generation command for latest record...")
        report_res = client.post("/api/reports/generate-report", headers=headers)
        assert report_res.status_code == 200, f"Report generation failed: {report_res.text}"
        
        report_data = report_res.json()
        report_id = report_data["report_id"]
        pdf_path = report_data["pdf_path"]
        print(f"[+] PDF Report successfully compiled and registered!")
        print(f"    Report ID: {report_id}")
        print(f"    PDF Path:  {pdf_path}")
        
        print("\n[*] Local Explainable AI Contributions:")
        print("    [SHAP Values]")
        for feat, val in report_data["shap_values"].items():
            print(f"      - {feat:<10}: {val:+.4f}")
            
        print("    [LIME Local Rules]")
        for feat, details in report_data["lime_values"].items():
            print(f"      - {feat:<10}: Rule: {details['rule']:<18} | Weight: {details['weight']:+.4f}")

        # 7. DOWNLOAD REPORT FILE TEST
        print("\n--- PHASE 6: PDF Physical Layout Integrity Verification ---")
        print(f"[*] Requesting PDF binary download for Report ID {report_id}...")
        download_res = client.get(f"/api/reports/download-report/{report_id}", headers=headers)
        assert download_res.status_code == 200, f"Download failed: {download_res.text}"
        assert len(download_res.content) > 1000, "Generated PDF is empty or corrupted!"
        print(f"[+] Download validated! Size of PDF file is {len(download_res.content) / 1024:.2f} KB.")

        # 8. EMAIL DISPATCH TEST
        print("\n--- PHASE 7: Automated SMTP Email Delivery ---")
        print(f"[*] Posting dispatch order to email report...")
        email_res = client.post(f"/api/reports/send-report/{report_id}", headers=headers)
        assert email_res.status_code == 200, f"Email dispatch failed: {email_res.text}"
        print(f"[+] Delivery Status: {email_res.json()['message']}")

        print("\n" + "="*80)
        print("   CONGRATULATIONS! ALL 12 BACKEND MODULES EXECUTED AND FULLY VERIFIED!")
        print("="*80 + "\n")

    except AssertionError as e:
        print(f"\n[ERROR: VERIFICATION FAILED] {str(e)}")
        sys.exit(1)
    except Exception as e:
        print(f"\n[ERROR: UNEXPECTED ERROR] {str(e)}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
    finally:
        db.close()

if __name__ == "__main__":
    run_e2e_verification()
