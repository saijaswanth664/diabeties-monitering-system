import React from 'react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Legend 
} from 'recharts';

const TrendChart = ({ 
  data = [] 
}) => {
  if (data.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center border border-white/5 bg-slate-950/20 rounded-2xl select-none">
        <span className="text-xs text-slate-500 font-semibold">No medical history records available.</span>
      </div>
    );
  }

  // Pre-sort by created_at chronological order
  const sorted = [...data].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sorted} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
          
          <XAxis 
            dataKey="month" 
            stroke="rgba(255,255,255,0.3)" 
            tick={{ fontSize: 10, fontWeight: 'bold' }} 
            dy={8}
          />
          
          <YAxis 
            yAxisId="left"
            stroke="rgba(6, 182, 212, 0.4)" 
            tick={{ fontSize: 10, fontWeight: 'bold' }}
            domain={['auto', 'auto']}
          />
          
          <YAxis 
            yAxisId="right"
            orientation="right"
            stroke="rgba(139, 92, 246, 0.4)" 
            tick={{ fontSize: 10, fontWeight: 'bold' }}
            domain={['auto', 'auto']}
          />

          <Tooltip
            contentStyle={{
              background: 'rgba(15,23,42,0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              fontSize: '11px',
              color: '#e2e8f0',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
            }}
          />
          
          <Legend 
            verticalAlign="top" 
            height={36} 
            iconType="circle"
            wrapperStyle={{ fontSize: '11px', fontWeight: 'bold' }}
          />

          <Line
            yAxisId="left"
            type="monotone"
            dataKey="glucose"
            name="Plasma Glucose (mg/dL)"
            stroke="#06b6d4"
            strokeWidth={3}
            activeDot={{ r: 6, fill: '#06b6d4', stroke: '#020817', strokeWidth: 2 }}
            dot={{ r: 4, fill: '#020817', stroke: '#06b6d4', strokeWidth: 2 }}
          />

          <Line
            yAxisId="right"
            type="monotone"
            dataKey="bmi"
            name="Body Mass Index (BMI)"
            stroke="#8b5cf6"
            strokeWidth={3}
            activeDot={{ r: 6, fill: '#8b5cf6', stroke: '#020817', strokeWidth: 2 }}
            dot={{ r: 4, fill: '#020817', stroke: '#8b5cf6', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendChart;
