import React from 'react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Cell 
} from 'recharts';
import { FEATURE_LABELS } from '../../utils/formatters';

const SHAPChart = ({ 
  values = {} 
}) => {
  const data = Object.entries(values).map(([key, val]) => ({
    name: FEATURE_LABELS[key] || key,
    value: parseFloat(val)
  })).sort((a, b) => Math.abs(b.value) - Math.abs(a.value));

  if (data.length === 0) {
    return (
      <div className="h-56 flex items-center justify-center border border-white/5 bg-slate-950/20 rounded-2xl select-none">
        <span className="text-xs text-slate-500 font-semibold">No model interpretability values loaded.</span>
      </div>
    );
  }

  return (
    <div className="w-full h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
        >
          <XAxis 
            type="number" 
            stroke="rgba(255,255,255,0.2)" 
            tick={{ fontSize: 9, fontWeight: 'bold' }} 
          />
          <YAxis 
            dataKey="name" 
            type="category" 
            stroke="rgba(255,255,255,0.3)" 
            tick={{ fontSize: 9, fontWeight: 'bold' }} 
            width={90}
          />
          <Tooltip
            contentStyle={{
              background: 'rgba(15,23,42,0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              fontSize: '10px',
              color: '#e2e8f0',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
            }}
            formatter={(value) => [value.toFixed(4), 'SHAP Contribution']}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => {
              const isPositive = entry.value >= 0;
              return (
                <Cell 
                  key={`cell-${index}`} 
                  fill={isPositive ? 'url(#positiveGradient)' : 'url(#negativeGradient)'}
                />
              );
            })}
          </Bar>

          {/* Define gradients for the positive/negative SHAP values */}
          <defs>
            <linearGradient id="positiveGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="negativeGradient" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#10b981" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#10b981" stopOpacity={1} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SHAPChart;
