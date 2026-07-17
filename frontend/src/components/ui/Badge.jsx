import React from 'react';

const Badge = ({ 
  children, 
  variant = 'cyan', // 'cyan', 'violet', 'emerald', 'rose', 'amber'
  className = '' 
}) => {
  const badgeClasses = {
    cyan:    'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
    violet:  'bg-violet-500/10 border-violet-500/20 text-violet-400',
    emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    rose:    'bg-rose-500/10 border-rose-500/20 text-rose-400',
    amber:   'bg-amber-500/10 border-amber-500/20 text-amber-400',
  };

  const selected = badgeClasses[variant] || badgeClasses.cyan;

  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${selected} shrink-0 select-none tracking-wide ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
