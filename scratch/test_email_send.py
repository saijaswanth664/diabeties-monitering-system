import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

SMTP_HOST = 'smtp.gmail.com'
SMTP_PORT = 587
SMTP_USER = 'diabetesmonitoring.system07@gmail.com'
SMTP_PASSWORD = 'project@2026'
SENDER_NAME = 'Secure AI Diabetes Monitoring System'

def send_test_email(to_addr):
    msg = MIMEMultipart()
    msg['From'] = f"{SENDER_NAME} <{SMTP_USER}>"
    msg['To'] = to_addr
    msg['Subject'] = 'Test Email from Diabetes Monitoring System'
    body = "This is a test email sent via the configured SMTP server."
    msg.attach(MIMEText(body, 'plain'))
    try:
        server = smtplib.SMTP(SMTP_HOST, SMTP_PORT)
        server.starttls()
        server.login(SMTP_USER, SMTP_PASSWORD)
        server.sendmail(SMTP_USER, to_addr, msg.as_string())
        server.quit()
        print('Email sent successfully')
    except Exception as e:
        print('Failed to send email:', e)

if __name__ == '__main__':
    send_test_email('saijaswanth2518@gmail.com')
