import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../store/authStore';
import AnimatedBackground from '../components/common/AnimatedBackground';
import ParticleField from '../components/common/ParticleField';
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import { Activity } from 'lucide-react';

const AuthLayout = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-slate-950">
        <div className="w-12 h-12 rounded-2xl border-4 border-cyan-500/20 border-t-cyan-500 animate-spin glow-cyan" />
      </div>
    );
  }

  // Redirect if logged in
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-4">
      {/* Background visual components */}
      <AnimatedBackground />
      <ParticleField count={20} />

      {/* Main split layout panel */}
      <div className="w-full max-w-5xl h-[85vh] min-h-[500px] glass-panel backdrop-blur-xl border-white/10 dark:border-slate-800/80 rounded-3xl overflow-hidden flex shadow-2xl relative">
        
        {/* Left Side Info Panel (Scenic AI illustration branding) */}
        <div className="hidden lg:flex flex-col justify-between w-1/2 p-10 relative overflow-hidden bg-gradient-to-br from-slate-900/60 to-slate-950/80 border-r border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.15),transparent_60%)] pointer-events-none" />
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center shrink-0 glow-cyan">
              <Activity size={18} className="text-white animate-pulse" />
            </div>
            <span className="font-extrabold text-sm tracking-wide bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              GLUCOSE AI
            </span>
          </div>

          <div className="z-10 flex flex-col gap-4">
            <h2 className="text-3xl font-black leading-tight bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Clinical Intelligence, <br />
              Simplified with XAI.
            </h2>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Unlock local feature impact predictions via custom SHAP explainer tables and LIME rulesets directly validated by clinical biomarkers.
            </p>
          </div>

          <div className="z-10 flex items-center justify-between border-t border-white/5 pt-4 text-[10px] text-slate-500">
            <span>Clinical Grade v1.0.0</span>
            <span>Secure End-to-End Encryption</span>
          </div>
        </div>

        {/* Right Side Form Panel (Loads active Auth Routes) */}
        <div className="flex-1 h-full overflow-y-auto p-6 sm:p-10 md:p-14 flex items-center justify-center relative">
          <div className="w-full max-w-md">
            <AnimatePresence mode="wait">
              <motion.div
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full"
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
