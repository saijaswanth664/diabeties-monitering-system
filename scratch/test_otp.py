import requests, json, sys
url = 'http://localhost:8000/auth/request-otp'
payload = {'email': 'test@example.com'}
try:
    r = requests.post(url, json=payload, timeout=10)
    print('Status:', r.status_code)
    print('Response:', r.text)
except Exception as e:
    print('Error:', e)
