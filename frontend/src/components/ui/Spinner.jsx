import React from 'react';

const Spinner = ({ 
  size = 'md', // 'sm', 'md', 'lg'
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-5 h-5 border-2',
    md: 'w-10 h-10 border-3',
    lg: 'w-16 h-16 border-4',
  };

  const selectedSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${selectedSize} rounded-full border-cyan-500/20 border-t-cyan-500 animate-spin glow-cyan`} />
    </div>
  );
};

export default Spinner;
