import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ 
  children, 
  className = '', 
  hover = true, 
  glow = '', // 'cyan', 'violet', 'emerald', 'rose'
  delay = 0,
  ...props 
}) => {
  const glowClasses = {
    cyan: 'glow-cyan border-cyan-500/20',
    violet: 'glow-violet border-violet-500/20',
    emerald: 'glow-emerald border-emerald-500/20',
    rose: 'glow-rose border-rose-500/20',
  };

  const selectedGlow = glow ? glowClasses[glow] || '' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ 
        duration: 0.5, 
        delay: delay, 
        ease: [0.25, 1, 0.5, 1] 
      }}
      whileHover={hover ? { 
        scale: 1.01, 
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        borderColor: 'rgba(255, 255, 255, 0.25)',
      } : undefined}
      className={`glass-panel ${selectedGlow} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
