import os
import smtplib
import logging
from email import encoders
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from datetime import datetime

from app.config.settings import settings

logger = logging.getLogger(__name__)

class EmailService:
    def send_report_email(self, recipient_gmail: str, patient_name: str, pdf_path: str) -> bool:
        """
        Emails the generated clinical report PDF to the patient.
        If SMTP configurations are missing in .env, logs a robust-styled message and saves locally.
        """
        has_smtp = all([settings.SMTP_HOST, settings.SMTP_PORT, settings.SMTP_USER, settings.SMTP_PASSWORD])
        
        if not has_smtp:
            print("\n" + "="*70)
            print("|" + " "*19 + "DIABETES MONITORING SYSTEM" + " "*23 + "|")
            print("|" + " "*20 + "PDF REPORT COMPLETED" + " "*28 + "|")
            print("="*70)
            print(f"  Recipient Name:  {patient_name}")
            print(f"  Recipient Gmail: {recipient_gmail}")
            print(f"  PDF Report Path: {pdf_path}")
            print(f"  Status:          Saved locally. SMTP details not configured in .env.")
            print("="*70 + "\n")
            return True

        try:
            # Create email envelope
            msg = MIMEMultipart()
            msg["From"] = f"{settings.SENDER_NAME} <{settings.SMTP_USER}>"
            msg["To"] = recipient_gmail
            msg["Subject"] = f"Your Diabetes Clinical Analytics Report - {datetime.now().strftime('%B %Y')}"

            # Create clean, inviting HTML body
            html_body = f"""
            <html>
                <body style="font-family: Arial, sans-serif; background-color: #f7f9fc; padding: 25px; color: #1e293b;">
                    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 40px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); border-top: 5px solid #0d9488;">
                        <h2 style="color: #0d9488; margin-bottom: 20px;">Personalized Clinical Health Report</h2>
                        <p>Dear <strong>{patient_name}</strong>,</p>
                        <p>We have compiled your monthly clinical results and generated your personalized <strong>Secure Diabetes Monitoring and Healthcare Analytics Report</strong>.</p>
                        <p>Our machine learning analysis engine evaluated your latest biomarkers (including Glucose, Insulin, and BMI) and projected your risk progression along with localized Explainable AI (SHAP/LIME) feature importance.</p>
                        <div style="background-color: #f0fdfa; border-left: 4px solid #0d9488; padding: 15px; margin: 20px 0; border-radius: 4px;">
                            <strong style="color: #0f766e;">What is included in your report:</strong>
                            <ul style="margin: 8px 0 0 0; padding-left: 20px; color: #334155;">
                                <li>Current clinical readings summary</li>
                                <li>Month-over-month biomarker comparisons</li>
                                <li>AI Risk prediction outcomes and probability metrics</li>
                                <li>SHAP-based diagnostic biomarker driving factors</li>
                                <li>Personalized exercise and nutritional guidelines</li>
                            </ul>
                        </div>
                        <p>Please find your complete, styled PDF report attached to this email.</p>
                        <p style="margin-top: 30px; font-size: 13px; color: #64748b;">
                             Warm regards,<br>
                             <strong>The Diabetes Healthcare Team</strong><br>
                             Secure personalized health analytics portal
                        </p>
                    </div>
                </body>
            </html>
            """
            msg.attach(MIMEText(html_body, "html"))

            # Attach PDF report
            with open(pdf_path, "rb") as attachment:
                part = MIMEBase("application", "octet-stream")
                part.set_payload(attachment.read())
                
            encoders.encode_base64(part)
            part.add_header(
                "Content-Disposition",
                f"attachment; filename= {os.path.basename(pdf_path)}",
            )
            msg.attach(part)

            # Transmit email
            logger.info("Connecting to SMTP server")
            server = smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT)
            server.starttls()
            server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
            logger.info("Connected to SMTP server")
            server.sendmail(settings.SMTP_USER, recipient_gmail, msg.as_string())
            server.quit()
            
            logger.info("PDF report emailed successfully")
            print(f"[+] PDF report email dispatched successfully to {recipient_gmail}")
            return True
        except Exception as e:
            logger.error("Full SMTP exception traceback", exc_info=True)
            print(f"[ERROR] Failed to email PDF report to {recipient_gmail}: {str(e)}")
            return False

email_service = EmailService()
