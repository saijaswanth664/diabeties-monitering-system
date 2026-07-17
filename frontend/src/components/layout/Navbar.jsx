import React, { useState } from 'react';
import { useAuth } from '../../store/authStore';
import { useTheme } from '../../store/themeStore';
import { Sun, Moon, Bell, Menu, Activity, X } from 'lucide-react';
import { useNavigate, NavLink } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { isDark, toggle } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Report Compiled', message: 'Glucose_AI_Report_6.pdf is successfully generated.', time: '2 mins ago', unread: true },
    { id: 2, title: 'Biometrics Uploaded', message: 'New Plasma Glucose: 135 mg/dL was successfully logged.', time: '1 hour ago', unread: false },
    { id: 3, title: 'SMTP Dispatch Successful', message: 'Report delivered successfully via SMTP server.', time: '1 day ago', unread: false }
  ]);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    navigate('/');
  };

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Upload Metrics', path: '/upload' },
    { name: 'AI Diagnostics', path: '/predict' },
    { name: 'Medical Reports', path: '/reports' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <>
      <header className="sticky top-0 w-full h-16 border-b border-white/5 bg-slate-950/60 dark:bg-slate-950/40 backdrop-blur-lg z-40 select-none px-4 md:px-6 flex items-center justify-between text-slate-100">
        {/* Left Side: Mobile Menu Button & Platform Name */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-1.5 rounded-lg border border-white/10 hover:border-white/20 text-slate-400 hover:text-slate-100 transition-colors"
          >
            <Menu size={18} />
          </button>
          
          <div className="flex items-center gap-2 md:hidden">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center glow-cyan shrink-0">
              <Activity size={16} className="text-white" />
            </div>
            <span className="font-bold text-xs tracking-wide bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              GLUCOSE AI
            </span>
          </div>

          <div className="hidden md:flex flex-col">
            <h1 className="text-sm font-bold text-slate-100">Futuristic Clinical Portal</h1>
            <p className="text-[10px] text-slate-500">Autonomous Biomarker Classifier & Explainable AI Pipeline</p>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Light/Dark mode switcher */}
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-xl border border-white/10 dark:border-slate-800 bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-slate-100 transition-all active:scale-95 duration-200"
          >
            {isDark ? <Sun size={16} className="text-amber-400 animate-pulse" /> : <Moon size={16} className="text-indigo-400" />}
          </button>

          {/* Clinical Updates Notifications */}
          <div className="relative">
            <button 
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="w-9 h-9 rounded-xl border border-white/10 dark:border-slate-800 bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-slate-100 relative transition-all active:scale-95 duration-200"
            >
              <Bell size={16} />
              {notifications.some(n => n.unread) && (
                <>
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-500" />
                </>
              )}
            </button>

            {notificationsOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setNotificationsOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-80 rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl p-4 z-50 text-slate-100 flex flex-col gap-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <span className="text-xs font-bold text-slate-200">Clinical Notifications</span>
                    <button 
                      onClick={() => setNotifications(prev => prev.map(n => ({ ...n, unread: false })))}
                      className="text-[10px] text-cyan-400 hover:text-cyan-300 font-bold uppercase tracking-wider"
                    >
                      Mark all read
                    </button>
                  </div>
                  <div className="flex flex-col gap-2 max-h-64 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <span className="text-[10px] text-slate-500 text-center py-4">No recent updates</span>
                    ) : (
                      notifications.map(n => (
                        <div key={n.id} className={`p-2.5 rounded-xl border transition-all ${n.unread ? 'bg-cyan-500/5 border-cyan-500/10' : 'bg-white/5 border-transparent'}`}>
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[11px] font-bold text-slate-200">{n.title}</span>
                            <span className="text-[9px] text-slate-500">{n.time}</span>
                          </div>
                          <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{n.message}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </>
            )}
          </div>


          {/* User profile dropdown avatar info */}
          {user && (
            <div className="hidden md:flex items-center gap-2.5 pl-2 border-l border-white/10">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold border border-white/10">
                {user.full_name ? user.full_name.split(' ').map(n=>n[0]).join('').slice(0, 2).toUpperCase() : 'U'}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-200 leading-tight">{user.full_name}</span>
                <span className="text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded-full w-max mt-0.5 font-semibold">Verified Clinician</span>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Sidebar Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop Blur overlay */}
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />
          
          <div className="relative w-72 max-w-[80vw] h-full bg-slate-900 border-r border-white/10 p-5 flex flex-col justify-between z-50">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center">
                    <Activity size={16} className="text-white" />
                  </div>
                  <span className="font-bold text-xs tracking-wide text-slate-100">GLUCOSE AI</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-lg border border-white/10 text-slate-400 hover:text-slate-100"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Mobile Drawer Menu links */}
              <nav className="mt-5 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) => 
                      `sidebar-item ${isActive ? 'active' : ''}`
                    }
                  >
                    <span className="text-xs font-semibold">{link.name}</span>
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="pt-5 border-t border-white/5">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-all"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
