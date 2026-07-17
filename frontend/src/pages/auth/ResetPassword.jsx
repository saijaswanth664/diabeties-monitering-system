import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useToast } from '../../store/toastStore';
import { authAPI } from '../../api/services';
import FormField from '../../components/FormField';
import Button from '../../components/ui/Button';
import { KeyRound, Lock, ArrowLeft, RefreshCw } from 'lucide-react';

const ResetPassword = () => {
  const [gmail, setGmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.gmail) {
      setGmail(location.state.gmail);
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!gmail || !otp || !newPassword) {
      toast.warning('Please complete all credential reset inputs.');
      return;
    }

    if (otp.length !== 6) {
      toast.warning('Verification code must contain exactly 6 digits.');
      return;
    }

    if (newPassword.length < 6) {
      toast.warning('New password must contain at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      const response = await authAPI.resetPassword(gmail, otp, newPassword);
      toast.success(response.data.message || 'Password reset successfully.', 'Credentials Restored');
      navigate('/login');
    } catch (err) {
      const errorMsg = err.response?.data?.detail || 'Invalid reset code. Check credentials or request another code.';
      toast.error(errorMsg, 'Reset Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 select-none">
      <div className="flex flex-col gap-1 text-center">
        <h2 className="text-2xl font-black bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent tracking-tight">
          Reset Credentials
        </h2>
        <p className="text-xs text-slate-500 font-semibold">
          Submit the 6-digit recovery code to authenticate password reset.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-1.5">
        <FormField
          label="Verification Gmail"
          id="gmail"
          type="email"
          placeholder="your.name@gmail.com"
          value={gmail}
          onChange={(e) => setGmail(e.target.value)}
          required
        />

        <FormField
          label="6-Digit Reset Code"
          id="otp"
          type="text"
          maxLength={6}
          placeholder="123456"
          icon={KeyRound}
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
          required
        />

        <FormField
          label="New Access Password"
          id="newPassword"
          type="password"
          placeholder="••••••••"
          icon={Lock}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <Button 
          type="submit" 
          variant="primary" 
          loading={loading}
          className="w-full py-3 flex items-center justify-center gap-2 text-xs font-bold mt-2"
        >
          <RefreshCw size={14} /> Establish New Credentials
        </Button>
      </form>

      <div className="text-center border-t border-white/5 pt-4">
        <Link 
          to="/login" 
          className="text-[10px] font-extrabold text-slate-400 hover:text-slate-200 transition-colors flex items-center justify-center gap-1.5 self-center"
        >
          <ArrowLeft size={12} /> Return to login
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;
