import React from 'react';
import { motion } from 'framer-motion';
import { buttonTap } from '../../animations/variants';

const Button = ({ 
  children, 
  variant = 'primary', // 'primary', 'glass', 'danger', 'secondary'
  loading = false, 
  className = '', 
  onClick, 
  type = 'button',
  disabled = false,
  ...props 
}) => {
  const baseClasses = {
    primary:   'btn-primary',
    glass:     'btn-glass',
    danger:    'btn-danger',
    secondary: 'btn-glass bg-white/5 hover:bg-white/10 text-slate-300 border-white/5',
  };

  const selectedClass = baseClasses[variant] || baseClasses.primary;

  return (
    <motion.button
      variants={buttonTap}
      whileHover={disabled || loading ? undefined : "whileHover"}
      whileTap={disabled || loading ? undefined : "whileTap"}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${selectedClass} disabled:opacity-50 disabled:pointer-events-none ${className}`}
      {...props}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin shrink-0" />
          <span>Syncing...</span>
        </div>
      ) : children}
    </motion.button>
  );
};

export default Button;
