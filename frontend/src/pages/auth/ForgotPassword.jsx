import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useToast } from '../../store/toastStore';
import { authAPI } from '../../api/services';
import FormField from '../../components/FormField';
import Button from '../../components/ui/Button';
import { Mail, ArrowLeft, Send } from 'lucide-react';

const ForgotPassword = () => {
  const [gmail, setGmail] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!gmail) {
      toast.warning('Please specify your registered Gmail address.');
      return;
    }

    setLoading(true);
    try {
      const response = await authAPI.forgotPassword(gmail);
      toast.success(response.data.message || 'Recovery reset OTP code sent.', 'Email Verified');
      // Redirect to Reset password form screen passing Gmail context
      navigate('/reset-password', { state: { gmail } });
    } catch (err) {
      const errorMsg = err.response?.data?.detail || 'No account corresponds to the registered email.';
      toast.error(errorMsg, 'Recovery Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 select-none">
      <div className="flex flex-col gap-1 text-center">
        <h2 className="text-2xl font-black bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent tracking-tight">
          Recover Password
        </h2>
        <p className="text-xs text-slate-500 font-semibold">
          Enter email to receive your secure recovery OTP reset code.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-1.5">
        <FormField
          label="Registered Gmail"
          id="gmail"
          type="email"
          placeholder="your.name@gmail.com"
          icon={Mail}
          value={gmail}
          onChange={(e) => setGmail(e.target.value)}
          required
        />

        <Button 
          type="submit" 
          variant="primary" 
          loading={loading}
          className="w-full py-3 flex items-center justify-center gap-2 text-xs font-bold mt-2"
        >
          <Send size={14} /> Send Recovery Code
        </Button>
      </form>

      <div className="text-center border-t border-white/5 pt-4">
        <Link 
          to="/login" 
          className="text-[10px] font-extrabold text-slate-400 hover:text-slate-200 transition-colors flex items-center justify-center gap-1.5 self-center"
        >
          <ArrowLeft size={12} /> Back to Sign In
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
