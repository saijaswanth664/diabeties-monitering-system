import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useToast } from '../../store/toastStore';
import { authAPI } from '../../api/services';
import FormField from '../../components/FormField';
import Button from '../../components/ui/Button';
import { User, Mail, Lock, UserPlus } from 'lucide-react';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !gmail || !password) {
      toast.warning('Please fill in all clinical registration fields.');
      return;
    }

    if (password.length < 6) {
      toast.warning('Password must contain at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      const response = await authAPI.signup({
        full_name: fullName,
        gmail: gmail,
        password: password
      });
      toast.success(response.data.message || 'OTP issued for Gmail verification.', 'Account Enrolled');
      // Redirect to OTP Verification screen
      navigate('/verify-otp', { state: { gmail } });
    } catch (err) {
      const errorMsg = err.response?.data?.detail || 'Account enrollment failed. This email may already be verified.';
      toast.error(errorMsg, 'Signup Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 select-none">
      <div className="flex flex-col gap-1 text-center">
        <h2 className="text-2xl font-black bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent tracking-tight">
          Practioner Enrollment
        </h2>
        <p className="text-xs text-slate-500 font-semibold">
          Create an encrypted account to manage diagnostics.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-1.5">
        <FormField
          label="Full Clinical Name"
          id="fullName"
          type="text"
          placeholder="Dr. Sarah Jenkins"
          icon={User}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <FormField
          label="Gmail Address"
          id="gmail"
          type="email"
          placeholder="sarah.jenkins@gmail.com"
          icon={Mail}
          value={gmail}
          onChange={(e) => setGmail(e.target.value)}
          required
        />

        <FormField
          label="Access Passphrase"
          id="password"
          type="password"
          placeholder="••••••••"
          icon={Lock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button 
          type="submit" 
          variant="primary" 
          loading={loading}
          className="w-full py-3 flex items-center justify-center gap-2 text-xs font-bold mt-2"
        >
          <UserPlus size={14} /> Register & Generate OTP
        </Button>
      </form>

      <div className="text-center text-[10px] text-slate-500 border-t border-white/5 pt-4">
        <span>Already enrolled? </span>
        <Link 
          to="/login" 
          className="text-cyan-400 font-extrabold hover:text-cyan-300 transition-colors"
        >
          Portal Sign In
        </Link>
      </div>
    </div>
  );
};

export default Signup;
