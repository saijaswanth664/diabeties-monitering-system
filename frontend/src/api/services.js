// Auth & Health API service functions
import apiClient from './axios';

export const authAPI = {
  signup: (data) => apiClient.post('/api/auth/signup', data),
  sendOtp: (gmail) => apiClient.post('/api/auth/send-otp', { gmail }),
  verifyOtp: (gmail, otp) => apiClient.post('/api/auth/verify-otp', { gmail, otp }),
  login: (username, password) => {
    const form = new URLSearchParams();
    form.append('username', username);
    form.append('password', password);
    return apiClient.post('/api/auth/login', form, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  },
  forgotPassword: (gmail) => apiClient.post('/api/auth/forgot-password', { gmail }),
  resetPassword: (gmail, otp, new_password) =>
    apiClient.post('/api/auth/reset-password', { gmail, otp, new_password }),
};

export const healthAPI = {
  uploadHealthData: (data) => apiClient.post('/api/health/upload-health-data', data),
  getHistory: () => apiClient.get('/api/health/history'),
};

export const reportsAPI = {
  generateReport: () => apiClient.post('/api/reports/generate-report'),
  downloadReport: (id) => apiClient.get(`/api/reports/download-report/${id}`, { responseType: 'blob' }),
  sendReport: (id) => apiClient.post(`/api/reports/send-report/${id}`),
};
