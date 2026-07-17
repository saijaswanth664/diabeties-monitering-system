import React from 'react';
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar 
} from 'recharts';
import { NORMAL_RANGES } from '../../utils/formatters';

const HealthRadar = ({ 
  currentRecord 
}) => {
  if (!currentRecord) {
    return (
      <div className="h-56 flex items-center justify-center border border-white/5 bg-slate-950/20 rounded-2xl select-none">
        <span className="text-xs text-slate-500 font-semibold">No active biomarker record loaded.</span>
      </div>
    );
  }

  // Normalize metrics relative to typical clinical range limits for display
  const data = [
    {
      subject: 'Plasma Glucose',
      value: Math.min((currentRecord.glucose / NORMAL_RANGES.glucose.max) * 100, 150),
      fullMark: 150
    },
    {
      subject: 'Serum Insulin',
      value: Math.min((currentRecord.insulin / NORMAL_RANGES.insulin.max) * 100, 150),
      fullMark: 150
    },
    {
      subject: 'Body Mass Index',
      value: Math.min((currentRecord.bmi / NORMAL_RANGES.bmi.max) * 100, 150),
      fullMark: 150
    },
    {
      subject: 'Age Factor',
      value: Math.min((currentRecord.age / 75) * 100, 150),
      fullMark: 150
    }
  ];

  return (
    <div className="w-full h-56 flex items-center justify-center select-none">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
          <PolarGrid stroke="rgba(255,255,255,0.05)" />
          <PolarAngleAxis 
            dataKey="subject" 
            stroke="rgba(255,255,255,0.4)" 
            tick={{ fontSize: 9, fontWeight: 'bold' }} 
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 150]} 
            stroke="transparent" 
            tick={false} 
          />
          <Radar
            name="Patient Biomarkers"
            dataKey="value"
            stroke="#8b5cf6"
            fill="#8b5cf6"
            fillOpacity={0.25}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HealthRadar;
