import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './store/authStore';
import { ThemeProvider } from './store/themeStore';
import { ToastProvider } from './store/toastStore';
import Spinner from './components/ui/Spinner';

// Layout Wrappers
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Lazy-Loaded Pages for code-splitting optimization
const Landing = lazy(() => import('./pages/Landing'));
const Login = lazy(() => import('./pages/auth/Login'));
const Signup = lazy(() => import('./pages/auth/Signup'));
const OTPVerify = lazy(() => import('./pages/auth/OTPVerify'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/auth/ResetPassword'));

const Dashboard = lazy(() => import('./pages/Dashboard'));
const HealthUpload = lazy(() => import('./pages/Health/HealthUpload'));
const PredictionResult = lazy(() => import('./pages/Prediction/PredictionResult'));
const Reports = lazy(() => import('./pages/Reports/Reports'));
const Settings = lazy(() => import('./pages/Settings/Settings'));

const LoadingFallback = () => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-950/20">
    <Spinner size="md" />
  </div>
);

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <ToastProvider>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                {/* 1. Landing Public Route */}
                <Route path="/" element={<Landing />} />

                {/* 2. Public Authentication Sub-Routes */}
                <Route element={<AuthLayout />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/verify-otp" element={<OTPVerify />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/reset-password" element={<ResetPassword />} />
                </Route>

                {/* 3. Secure Clinician Dashboard Sub-Routes */}
                <Route element={<DashboardLayout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/upload" element={<HealthUpload />} />
                  <Route path="/predict" element={<PredictionResult />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/settings" element={<Settings />} />
                </Route>

                {/* 4. Global Wildcard Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </ToastProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
