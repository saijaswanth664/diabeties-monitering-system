import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useToast } from '../../store/toastStore';
import { authAPI } from '../../api/services';
import FormField from '../../components/FormField';
import Button from '../../components/ui/Button';
import { KeyRound, RefreshCw, CheckCircle2 } from 'lucide-react';

const OTPVerify = () => {
  const [gmail, setGmail] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Attempt to extract Gmail state passed from Signup or Login redirections
    if (location.state?.gmail) {
      setGmail(location.state.gmail);
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!gmail || !otp) {
      toast.warning('Please enter your email and the 6-digit verification code.');
      return;
    }

    if (otp.length !== 6) {
      toast.warning('The verification code must be exactly 6 digits.');
      return;
    }

    setLoading(true);
    try {
      const response = await authAPI.verifyOtp(gmail, otp);
      toast.success(response.data.message || 'Gmail verified successfully. Please login.', 'Account Verified');
      navigate('/login');
    } catch (err) {
      const errorMsg = err.response?.data?.detail || 'Invalid or expired OTP code. Please request a fresh code.';
      toast.error(errorMsg, 'Verification Failed');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!gmail) {
      toast.warning('Please specify your registered email first.');
      return;
    }

    setResending(true);
    try {
      const response = await authAPI.sendOtp(gmail);
      toast.success(response.data.message || 'A fresh 6-digit OTP has been issued.', 'OTP Code Dispatched');
    } catch (err) {
      const errorMsg = err.response?.data?.detail || 'Failed to dispatch verification code. Check email format.';
      toast.error(errorMsg, 'Resend Failed');
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 select-none">
      <div className="flex flex-col gap-1 text-center">
        <h2 className="text-2xl font-black bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent tracking-tight">
          Verify Verification Code
        </h2>
        <p className="text-xs text-slate-500 font-semibold">
          Enter the 6-digit activation code dispatched to your Gmail.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-1.5">
        <FormField
          label="Verification Gmail"
          id="gmail"
          type="email"
          placeholder="yourname@gmail.com"
          value={gmail}
          onChange={(e) => setGmail(e.target.value)}
          required
        />

        <FormField
          label="6-Digit OTP Code"
          id="otp"
          type="text"
          maxLength={6}
          placeholder="123456"
          icon={KeyRound}
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
          required
        />

        <Button 
          type="submit" 
          variant="primary" 
          loading={loading}
          className="w-full py-3 flex items-center justify-center gap-2 text-xs font-bold mt-2"
        >
          <CheckCircle2 size={14} /> Verify & Activate Account
        </Button>
      </form>

      <div className="flex flex-col gap-3 text-center border-t border-white/5 pt-4">
        <button
          onClick={handleResend}
          disabled={resending}
          className="text-[10px] font-extrabold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center gap-1.5 self-center"
        >
          <RefreshCw size={12} className={resending ? 'animate-spin' : ''} />
          {resending ? 'Re-issuing Code...' : 'Resend Verification Code'}
        </button>

        <span className="text-[10px] text-slate-500">
          Already verified? <Link to="/login" className="text-cyan-400 font-extrabold hover:text-cyan-300">Sign In</Link>
        </span>
      </div>
    </div>
  );
};

export default OTPVerify;
