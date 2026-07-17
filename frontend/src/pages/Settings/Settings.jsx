import React, { useState } from 'react';
import { useAuth } from '../../store/authStore';
import { useTheme } from '../../store/themeStore';
import { useToast } from '../../store/toastStore';
import GlassCard from '../../components/GlassCard';
import Button from '../../components/ui/Button';
import FormField from '../../components/FormField';
import { MOCK_MODE } from '../../api/axios';
import { 
  User, 
  Mail, 
  Settings as SettingsIcon, 
  Lock, 
  Database, 
  MailCheck, 
  Check 
} from 'lucide-react';

const Settings = () => {
  const { user } = useAuth();
  const { isDark, toggle } = useTheme();
  const toast = useToast();

  // Temporary Settings parameters
  const [fullName, setFullName] = useState(user?.full_name || 'Dr. Sarah Jenkins');
  const [gmail, setGmail] = useState(user?.gmail || 'sarah.jenkins@gmail.com');
  const [smtpServer, setSmtpServer] = useState('smtp.gmail.com');
  const [smtpPort, setSmtpPort] = useState('587');
  const [smtpUser, setSmtpUser] = useState(user?.gmail || 'sarah.jenkins@gmail.com');
  
  const [mockActive, setMockActive] = useState(MOCK_MODE.active);
  const [saving, setSaving] = useState(false);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      toast.success('Clinical settings updated successfully.', 'Profile Updated');
    }, 800);
  };

  const handleToggleMock = () => {
    const nextVal = !mockActive;
    MOCK_MODE.active = nextVal;
    setMockActive(nextVal);
    toast.success(
      nextVal ? 'Axios interceptors utilizing local clinical mocks.' : 'Axios client connecting strictly to FastAPI backend.',
      nextVal ? 'Mock Mode Enabled' : 'Live Mode Enabled'
    );
  };

  return (
    <div className="flex flex-col gap-6 select-none text-slate-100 pb-12">
      {/* Header */}
      <div className="flex flex-col gap-0.5">
        <h2 className="text-xl font-black bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
          System Settings
        </h2>
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
          Manage practitioner profiles, visual parameters and server configurations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Profile and Preferences Forms */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* User profile parameters card */}
          <GlassCard className="p-6">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2 pb-2 border-b border-white/5">
              <User size={16} className="text-cyan-400" /> Practitioner Profile
            </h3>
            
            <form onSubmit={handleSaveProfile} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  label="Practitioner Full Name"
                  id="fullName"
                  type="text"
                  placeholder="e.g. Dr. Sarah Jenkins"
                  icon={User}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                
                <FormField
                  label="Registered Gmail"
                  id="gmail"
                  type="email"
                  placeholder="yourname@gmail.com"
                  icon={Mail}
                  value={gmail}
                  onChange={(e) => setGmail(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                loading={saving}
                className="w-max text-xs font-bold py-2 px-6 self-end"
              >
                <Check size={14} /> Update Profile
              </Button>
            </form>
          </GlassCard>

          {/* Secure SMTP Configurations */}
          <GlassCard className="p-6">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2 pb-2 border-b border-white/5">
              <MailCheck size={16} className="text-violet-400" /> SMTP Dispatch Configuration
            </h3>
            
            <form onSubmit={handleSaveProfile} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <FormField
                  label="SMTP Server Host"
                  id="smtpServer"
                  type="text"
                  placeholder="smtp.gmail.com"
                  value={smtpServer}
                  onChange={(e) => setSmtpServer(e.target.value)}
                  required
                />

                <FormField
                  label="SMTP SSL Port"
                  id="smtpPort"
                  type="text"
                  placeholder="587"
                  value={smtpPort}
                  onChange={(e) => setSmtpPort(e.target.value)}
                  required
                />

                <FormField
                  label="SMTP User Account"
                  id="smtpUser"
                  type="text"
                  placeholder="user@gmail.com"
                  value={smtpUser}
                  onChange={(e) => setSmtpUser(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                loading={saving}
                className="w-max text-xs font-bold py-2 px-6 self-end"
              >
                <Check size={14} /> Save SMTP Credentials
              </Button>
            </form>
          </GlassCard>

        </div>

        {/* Global toggles side widgets */}
        <div className="flex flex-col gap-4">
          
          {/* Visual controls */}
          <GlassCard className="p-5" glow="cyan">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3 border-b border-white/5 pb-2">
              Visual Preferences
            </h4>
            <div className="flex items-center justify-between py-2 text-[11px] text-slate-300 font-semibold border-b border-white/5 pb-3">
              <div className="flex flex-col">
                <span>Adaptive Theme Mode</span>
                <span className="text-[9px] text-slate-500 font-medium">Switch dark / light backgrounds</span>
              </div>
              <button
                onClick={toggle}
                className="px-3 py-1 rounded-full text-[9px] font-extrabold uppercase border border-cyan-500/10 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-all active:scale-95"
              >
                {isDark ? 'Dark Mode' : 'Light Mode'}
              </button>
            </div>
            
            <div className="flex items-center justify-between py-2 text-[11px] text-slate-300 font-semibold mt-1">
              <div className="flex flex-col">
                <span>Floating Particles Overlay</span>
                <span className="text-[9px] text-slate-500 font-medium">Toggle background animation count</span>
              </div>
              <span className="text-[10px] text-cyan-400 font-black">25 Dynamic Blobs</span>
            </div>
          </GlassCard>

          {/* Database & mock controls */}
          <GlassCard className="p-5" glow="violet">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3 border-b border-white/5 pb-2">
              Server Synchronization
            </h4>
            
            <div className="flex items-center justify-between py-2 text-[11px] text-slate-300 font-semibold border-b border-white/5 pb-3">
              <div className="flex flex-col">
                <span>Integrated DB Status</span>
                <span className="text-[9px] text-slate-500 font-medium">Self-contained SQLite engine</span>
              </div>
              <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                Connected
              </span>
            </div>

            <div className="flex items-center justify-between py-2 text-[11px] text-slate-300 font-semibold mt-1">
              <div className="flex flex-col">
                <span>Diagnostic Mock Fallback</span>
                <span className="text-[9px] text-slate-500 font-medium">Permit mock response interception</span>
              </div>
              
              <button
                onClick={handleToggleMock}
                className={`px-3 py-1 rounded-full text-[9px] font-extrabold uppercase border transition-all active:scale-95 ${mockActive ? 'bg-amber-500/10 border-amber-500/20 text-amber-400 hover:bg-amber-500/20' : 'bg-slate-800 border-white/5 text-slate-400'}`}
              >
                {mockActive ? 'Active (Mock)' : 'Disabled (Live)'}
              </button>
            </div>
          </GlassCard>

        </div>

      </div>
    </div>
  );
};

export default Settings;
