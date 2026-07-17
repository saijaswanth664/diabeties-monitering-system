import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 
  (typeof window !== 'undefined' && (window.location.port === '5173' || window.location.hostname === 'localhost') 
    ? 'http://127.0.0.1:8000' 
    : '');

// Global switch to force mock data or let it auto-detect connection errors
export const MOCK_MODE = {
  active: false, // Set to false to strictly use your running FastAPI backend
};

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Automatically inject JWT tokens into all secure headers
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Intercept connection errors and serve realistic clinical mock data if server is offline
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const isConnectionError = !error.response || error.code === 'ERR_NETWORK';

    if ((isConnectionError && MOCK_MODE.active) || MOCK_MODE.active) {
      console.warn('[FALLBACK] FastAPI server is offline or Mock Mode is enabled. Serving simulated clinical data.');
      const mockResponse = getMockResponse(originalRequest.url, originalRequest.method, originalRequest.data);
      if (mockResponse) {
        return Promise.resolve({
          data: mockResponse,
          status: 200,
          statusText: 'OK',
          headers: {},
          config: originalRequest,
        });
      }
    }
    return Promise.reject(error);
  }
);

// --- Clinical Mock Data Generator ---
function getMockResponse(url, method, rawData) {
  const data = typeof rawData === 'string' ? JSON.parse(rawData) : rawData;
  const cleanUrl = url.replace(/^\/?api\//, ''); // Strip prefix

  // 1. Sign Up
  if (cleanUrl.includes('auth/signup')) {
    return { message: 'Registration successful. A 6-digit OTP has been sent to your Gmail.' };
  }

  // 2. OTP Verification
  if (cleanUrl.includes('auth/verify-otp')) {
    return { message: 'Email verified successfully. You can now login.' };
  }

  // 3. Authentication Login
  if (cleanUrl.includes('auth/login')) {
    return {
      access_token: 'mock_jwt_jsonwebtoken_token_sarah_jenkins',
      token_type: 'bearer',
      full_name: 'Dr. Sarah Jenkins',
      gmail: data?.username || 'sarah.jenkins@gmail.com',
    };
  }

  // 4. Reset Password
  if (cleanUrl.includes('auth/forgot-password')) {
    return { message: 'Verification code sent. Use it to reset your password.' };
  }
  if (cleanUrl.includes('auth/reset-password')) {
    return { message: 'Password reset successfully. You can now login with your new password.' };
  }

  // 5. Monthly Readings Upload
  if (cleanUrl.includes('health/upload-health-data')) {
    const outcome = data.glucose > 140 || data.bmi > 30 ? 1 : 0;
    const prob = outcome === 1 ? 0.75 + Math.random() * 0.2 : 0.15 + Math.random() * 0.2;
    
    // Simulate historic comparator
    const glucoseDiff = outcome === 1 ? 25.0 : -35.0;
    
    return {
      record: {
        record_id: Math.floor(Math.random() * 1000),
        month: data.month,
        glucose: data.glucose,
        insulin: data.insulin,
        bmi: data.bmi,
        age: data.age,
        outcome: outcome,
        created_at: new Date().toISOString(),
      },
      risk_level: outcome === 1 ? 'HIGH RISK (DIABETIC)' : 'LOW RISK (HEALTHY)',
      probability: prob,
      comparison: {
        glucose: { current: data.glucose, previous: data.glucose - glucoseDiff, difference: glucoseDiff, status: glucoseDiff > 0 ? 'Increased (Risk)' : 'Improved' },
        bmi: { current: data.bmi, previous: data.bmi - 2.0, difference: 2.0, status: 'Increased' },
        insulin: { current: data.insulin, previous: data.insulin, difference: 0.0, status: 'Stable' },
        risk_probability: prob
      },
      analysis: {
        warnings: outcome === 1 ? [
          'WARNING: Elevated Blood Glucose (Glucose > 140 mg/dL). Indicates potential prediabetes or uncontrolled glycemic response.',
          'WARNING: Clinical Obesity (BMI >= 30). Increases cardiovascular risk, insulin resistance, and overall morbidity.'
        ] : [],
        recommendations: [
          'Incorporate low-glycemic index foods (whole grains, leafy greens, lean proteins) into your diet.',
          'Perform 30 minutes of moderate aerobic exercise daily to improve insulin sensitivity.',
          'Consult a dietitian to establish a structured calorie-deficit meal plan.'
        ]
      }
    };
  }

  // 6. Chronological History Timeline
  if (cleanUrl.includes('health/history')) {
    return [
      { record_id: 101, month: '2026-03', glucose: 178.0, insulin: 195.0, bmi: 32.5, age: 42, outcome: 1, created_at: '2026-03-29T10:00:00Z' },
      { record_id: 102, month: '2026-04', glucose: 125.0, insulin: 82.0, bmi: 29.8, age: 42, outcome: 0, created_at: '2026-04-29T10:00:00Z' },
      { record_id: 103, month: '2026-05', glucose: 185.0, insulin: 210.0, bmi: 33.2, age: 42, outcome: 1, created_at: '2026-05-29T10:00:00Z' }
    ];
  }

  // 7. Clinical XAI Report Compiler
  if (cleanUrl.includes('reports/generate-report')) {
    return {
      message: 'Report generated successfully.',
      report_id: 42,
      pdf_path: '/reports_generated/report_user_1_mock.pdf',
      filename: 'report_user_1_mock.pdf',
      shap_values: { Glucose: 0.4004, Insulin: 0.0752, BMI: 0.0454, Age: 0.0546 },
      lime_values: {
        Glucose: { rule: 'Glucose > 0.61', weight: 0.3992 },
        Age: { rule: 'Age > 0.65', weight: 0.0884 },
        Insulin: { rule: 'Insulin > -0.10', weight: 0.0816 },
        BMI: { rule: '-0.02 < BMI <= 0.59', weight: 0.0575 }
      }
    };
  }

  // 8. SMTP Delivery
  if (cleanUrl.includes('reports/send-report')) {
    return { message: 'Clinical report successfully emailed to sarah.jenkins@gmail.com.' };
  }

  return null;
}

export default apiClient;
