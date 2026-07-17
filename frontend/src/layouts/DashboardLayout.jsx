import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../store/authStore';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
import AnimatedBackground from '../components/common/AnimatedBackground';
import ParticleField from '../components/common/ParticleField';
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition } from '../animations/variants';

const DashboardLayout = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-slate-950">
        <div className="w-12 h-12 rounded-2xl border-4 border-cyan-500/20 border-t-cyan-500 animate-spin glow-cyan" />
      </div>
    );
  }

  // Redirect to Auth login if session does not exist
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen flex w-full relative">
      {/* Background aesthetics */}
      <AnimatedBackground />
      <ParticleField count={30} />

      {/* Main sidebar container */}
      <Sidebar />

      {/* Main dashboard content region */}
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto w-full">
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
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
