import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../store/authStore';
import { useToast } from '../../store/toastStore';
import { authAPI } from '../../api/services';
import FormField from '../../components/FormField';
import Button from '../../components/ui/Button';
import { Mail, Lock, LogIn } from 'lucide-react';

const Login = () => {
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!gmail || !password) {
      toast.warning('Please enter both your registered email and password.');
      return;
    }

    setLoading(true);
    try {
      const response = await authAPI.login(gmail, password);
      // login(access_token, user_data)
      login(response.data.access_token, {
        full_name: response.data.full_name,
        gmail: response.data.gmail
      });
      toast.success(`Welcome back, ${response.data.full_name}!`, 'Authorization Succeeded');
      navigate('/dashboard');
    } catch (err) {
      const errorMsg = err.response?.data?.detail || 'Incorrect password or unverified account. Please try again.';
      toast.error(errorMsg, 'Login Failed');
      
      // If user is unverified, redirect to OTP verification screen
      if (err.response?.status === 403) {
        navigate('/verify-otp', { state: { gmail } });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 select-none">
      <div className="flex flex-col gap-1 text-center">
        <h2 className="text-2xl font-black bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent tracking-tight">
          Secure Portal Access
        </h2>
        <p className="text-xs text-slate-500 font-semibold">
          Authenticate credentials to synchronize patient metrics.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-1.5">
        <FormField
          label="Registered Gmail Address"
          id="gmail"
          type="email"
          placeholder="your.name@gmail.com"
          icon={Mail}
          value={gmail}
          onChange={(e) => setGmail(e.target.value)}
          required
        />

        <div className="flex flex-col">
          <FormField
            label="Password"
            id="password"
            type="password"
            placeholder="••••••••"
            icon={Lock}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex justify-end -mt-3.5 mb-4">
            <Link 
              to="/forgot-password" 
              className="text-[10px] font-extrabold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          loading={loading}
          className="w-full py-3 flex items-center justify-center gap-2 text-xs font-bold mt-1"
        >
          <LogIn size={14} /> Synchronize Access
        </Button>
      </form>

      <div className="text-center text-[10px] text-slate-500 border-t border-white/5 pt-4">
        <span>New practitioner? </span>
        <Link 
          to="/signup" 
          className="text-cyan-400 font-extrabold hover:text-cyan-300 transition-colors"
        >
          Enroll Account Now
        </Link>
      </div>
    </div>
  );
};

export default Login;
