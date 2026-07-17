import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../../components/common/AnimatedBackground';
import ParticleField from '../../components/common/ParticleField';
import Button from '../../components/ui/Button';
import GlassCard from '../../components/GlassCard';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '../../animations/variants';
import { Activity, ShieldCheck, Cpu, ChevronRight, BarChart3, Database } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full relative flex flex-col justify-between overflow-x-hidden text-slate-100 p-4 md:p-6 lg:p-8 select-none">
      <AnimatedBackground />
      <ParticleField count={25} />

      {/* Top Header */}
      <header className="w-full max-w-6xl mx-auto flex items-center justify-between py-4 border-b border-white/5 z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center shrink-0 glow-cyan">
            <Activity size={18} className="text-white animate-pulse" />
          </div>
          <span className="font-extrabold text-sm tracking-wide bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            GLUCOSE AI
          </span>
        </div>
        <Button 
          variant="glass" 
          onClick={() => navigate('/login')}
          className="text-xs font-extrabold px-5 py-2 border-white/10 hover:border-white/20"
        >
          Portal Login
        </Button>
      </header>

      {/* Hero Content Section */}
      <main className="flex-1 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 py-12 lg:py-24 z-10">
        {/* Left column hero text info */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex-1 flex flex-col gap-6 text-center lg:text-left"
        >
          <motion.div 
            variants={staggerItem}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 w-max mx-auto lg:mx-0 select-none"
          >
            <ShieldCheck size={14} className="text-cyan-400" />
            <span className="text-[10px] font-extrabold text-cyan-400 uppercase tracking-widest">
              HIPAA Compliant Security
            </span>
          </motion.div>

          <motion.h1 
            variants={staggerItem}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400"
          >
            Autonomous Clinical <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent heading-glow">
              Diabetes Diagnostics
            </span>
          </motion.h1>

          <motion.p 
            variants={staggerItem}
            className="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium"
          >
            A high-fidelity patient monitoring framework leveraging serialized ensemble classifiers, rule recommendation matrices, and mathematical SHAP contribution vectors.
          </motion.p>

          <motion.div 
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2"
          >
            <Button 
              variant="primary" 
              onClick={() => navigate('/signup')}
              className="w-full sm:w-auto px-7 py-3 flex items-center justify-center gap-2 text-xs font-bold"
            >
              Get Started Now <ChevronRight size={14} />
            </Button>
            <Button 
              variant="glass" 
              onClick={() => navigate('/login')}
              className="w-full sm:w-auto px-7 py-3 border-white/5 hover:border-white/10 text-xs font-bold"
            >
              Access Demo Portal
            </Button>
          </motion.div>
        </motion.div>

        {/* Right column glass showcase cards */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="flex-1 w-full max-w-md relative flex flex-col gap-4"
        >
          {/* Animated floating widget effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-violet-500/15 rounded-3xl filter blur-xl -z-10 animate-pulse-glow" />

          {/* Main feature highlight cards */}
          <GlassCard className="p-6 relative overflow-hidden" glow="cyan">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <Cpu size={18} className="animate-spin-slow" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-slate-100 text-sm">Ensemble ML Predictor</h3>
                <p className="text-slate-400 text-xs leading-relaxed mt-0.5">
                  Dynamically evaluates patients across 4 optimized ML models (Random Forest, SVM, MLP Neural Nets, Logistic Regression) select-syncing optimal weights.
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 relative overflow-hidden" glow="violet" delay={0.1}>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                <BarChart3 size={18} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-slate-100 text-sm">Explainable XAI Local Modeling</h3>
                <p className="text-slate-400 text-xs leading-relaxed mt-0.5">
                  Translates risk scores into absolute mathematical feature impact vectors (SHAP values) and transparent LIME local thresholds.
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 relative overflow-hidden" glow="emerald" delay={0.2}>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Database size={18} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-slate-100 text-sm">SQL Database Integration</h3>
                <p className="text-slate-400 text-xs leading-relaxed mt-0.5">
                  Stores historical patient records, comparison matrices, and auto-generated ReportLab visual medical PDFs for clinical dispatch.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </main>

      {/* Bottom Footer */}
      <footer className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between py-6 border-t border-white/5 z-10 text-[10px] text-slate-500">
        <span>© 2026 Glucose AI Personal Diabetes Monitoring System. All Rights Reserved.</span>
        <div className="flex items-center gap-4 mt-2 sm:mt-0 font-semibold">
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Contact Support</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
