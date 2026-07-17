import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../store/authStore';
import { sidebarVariants } from '../../animations/variants';
import { 
  LayoutDashboard, 
  UploadCloud, 
  BrainCircuit, 
  FilePieChart, 
  Settings, 
  LogOut, 
  ChevronLeft, 
  ChevronRight, 
  Activity
} from 'lucide-react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Upload Metrics', path: '/upload', icon: UploadCloud },
    { name: 'AI Diagnostics', path: '/predict', icon: BrainCircuit },
    { name: 'Medical Reports', path: '/reports', icon: FilePieChart },
    { name: 'System Settings', path: '/settings', icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <motion.aside
      variants={sidebarVariants}
      animate={collapsed ? 'closed' : 'open'}
      className="hidden md:flex flex-col h-screen shrink-0 sticky top-0 border-r border-white/5 bg-slate-950/60 dark:bg-slate-950/40 backdrop-blur-lg select-none z-50 text-slate-100"
    >
      {/* Brand Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-white/5">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center shrink-0 glow-cyan">
            <Activity size={18} className="text-white" />
          </div>
          {!collapsed && (
            <span className="font-bold text-sm tracking-wide bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent truncate">
              GLUCOSE AI
            </span>
          )}
        </div>
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="w-7 h-7 rounded-lg border border-white/10 hover:border-white/20 flex items-center justify-center text-slate-400 hover:text-slate-100 transition-colors"
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 py-4 px-2.5 flex flex-col gap-1.5 overflow-y-auto overflow-x-hidden">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `sidebar-item ${isActive ? 'active' : ''} ${collapsed ? 'justify-content' : ''}`
              }
            >
              <div className="shrink-0">
                <Icon size={18} />
              </div>
              {!collapsed && (
                <span className="truncate text-xs font-semibold">{item.name}</span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* User Section / Logout */}
      <div className="p-3 border-t border-white/5 flex flex-col gap-2">
        {!collapsed && user && (
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
              {user.full_name ? user.full_name.split(' ').map(n=>n[0]).join('').slice(0, 2).toUpperCase() : 'U'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-slate-100 truncate">{user.full_name}</p>
              <p className="text-[10px] text-slate-500 truncate">{user.gmail}</p>
            </div>
          </div>
        )}
        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-all active:scale-95 ${collapsed ? 'justify-center' : ''}`}
        >
          <LogOut size={18} className="shrink-0" />
          {!collapsed && <span>Sign Out</span>}
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
