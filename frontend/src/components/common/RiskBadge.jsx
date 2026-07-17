import React from 'react';
import { getRiskLevel } from '../../utils/formatters';

const RiskBadge = ({ 
  probability, 
  className = '' 
}) => {
  const risk = getRiskLevel(probability);

  return (
    <div 
      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border shrink-0 select-none shadow-sm ${className}`}
      style={{
        color: risk.color,
        borderColor: `${risk.color}30`,
        backgroundColor: risk.bg
      }}
    >
      <span 
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: risk.color }}
      />
      <span>{risk.label} Risk ({Math.round(probability * 100)}%)</span>
    </div>
  );
};

export default RiskBadge;
