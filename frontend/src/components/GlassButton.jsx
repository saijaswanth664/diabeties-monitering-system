import React from 'react';
import { motion } from 'framer-motion';

const GlassButton = ({ 
  children, 
  variant = 'primary', // 'primary' or 'secondary'
  className = '', 
  ...props 
}) => {
  const variantClasses = {
    primary: 'glass-btn-primary',
    secondary: 'glass-btn-secondary',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${variantClasses[variant] || variantClasses.primary} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default GlassButton;
