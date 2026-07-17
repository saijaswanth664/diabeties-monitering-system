import React from 'react';
import { motion } from 'framer-motion';
import { getRiskLevel } from '../../utils/formatters';

const RiskMeter = ({ 
  probability, 
  size = 180 
}) => {
  const risk = getRiskLevel(probability);
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = probability * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center select-none" style={{ width: size, height: size }}>
      
      {/* Glow Effect Overlay behind the circle */}
      <div 
        className="absolute w-2/3 h-2/3 rounded-full filter blur-[24px] opacity-25"
        style={{ backgroundColor: risk.color }}
      />

      <svg className="transform -rotate-90" width={size} height={size}>
        {/* Track circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="rgba(255,255,255,0.03)"
          strokeWidth={strokeWidth}
        />
        {/* Animated Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={risk.color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - progress }}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
          strokeLinecap="round"
        />
      </svg>

      {/* Label and Risk Level description at center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Risk Score</span>
        <motion.span 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-black tracking-tighter text-slate-100 mt-0.5"
        >
          {Math.round(probability * 100)}%
        </motion.span>
        <span 
          className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border mt-1.5"
          style={{ 
            color: risk.color, 
            borderColor: `${risk.color}25`, 
            backgroundColor: `${risk.color}10` 
          }}
        >
          {risk.label}
        </span>
      </div>
    </div>
  );
};

export default RiskMeter;
