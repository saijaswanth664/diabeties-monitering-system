import React from 'react';
import GlassCard from '../GlassCard';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const StatCard = ({ 
  label, 
  value, 
  unit = '', 
  difference = null, 
  status = '', 
  icon: Icon,
  glow = 'cyan',
  delay = 0 
}) => {
  const isIncrease = difference > 0;
  const isDecrease = difference < 0;
  
  const getTrendIcon = () => {
    if (isIncrease) return <TrendingUp size={14} className="text-rose-400 shrink-0" />;
    if (isDecrease) return <TrendingDown size={14} className="text-emerald-400 shrink-0" />;
    return <Minus size={14} className="text-slate-400 shrink-0" />;
  };

  const getTrendClass = () => {
    if (status.includes('Risk') || (isIncrease && label !== 'Fasting Insulin')) return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
    if (status.includes('Improved') || status.includes('Reduced') || isDecrease) return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
    return 'text-slate-400 bg-white/5 border-white/5';
  };

  return (
    <GlassCard 
      glow={glow} 
      delay={delay}
      className="p-5 flex flex-col justify-between"
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase select-none">
            {label}
          </span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl font-black tracking-tight text-slate-100">
              {value}
            </span>
            {unit && (
              <span className="text-[10px] text-slate-400 font-medium">
                {unit}
              </span>
            )}
          </div>
        </div>
        
        {Icon && (
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 shrink-0">
            <Icon size={18} />
          </div>
        )}
      </div>

      {/* Difference Comparator Baseline */}
      {status && (
        <div className="mt-4 flex items-center gap-2">
          <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border ${getTrendClass()}`}>
            {getTrendIcon()}
            <span>
              {difference !== null && difference !== 0 ? `${difference > 0 ? '+' : ''}${difference}` : status}
            </span>
          </div>
          {difference !== null && difference !== 0 && (
            <span className="text-[10px] text-slate-500 font-medium truncate">
              {status}
            </span>
          )}
        </div>
      )}
    </GlassCard>
  );
};

export default StatCard;
