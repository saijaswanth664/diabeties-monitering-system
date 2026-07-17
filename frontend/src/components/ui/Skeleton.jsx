import React from 'react';

const Skeleton = ({ 
  className = '', 
  variant = 'text', // 'text', 'avatar', 'rect', 'card'
  ...props 
}) => {
  const baseClasses = {
    text:   'h-4 w-full rounded-md',
    avatar: 'w-10 h-10 rounded-xl shrink-0',
    rect:   'w-full h-24 rounded-2xl',
    card:   'w-full h-44 rounded-3xl',
  };

  const selected = baseClasses[variant] || '';

  return (
    <div 
      className={`skeleton bg-white/5 border border-white/5 ${selected} ${className}`} 
      {...props}
    />
  );
};

export default Skeleton;
