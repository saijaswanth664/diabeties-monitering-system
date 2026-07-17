import requests, json
url = "http://localhost:8000/api/auth/send-otp"
payload = {"gmail": "saijaswanth2518@gmail.com"}
response = requests.post(url, json=payload)
print('Status:', response.status_code)
print('Response:', response.text)
