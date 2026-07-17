import React from 'react';
import { useTheme } from '../../store/themeStore';

const AnimatedBackground = () => {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden pointer-events-none select-none">
      {/* Dynamic Background Base */}
      <div 
        className="absolute inset-0 transition-colors duration-700" 
        style={{
          background: isDark 
            ? 'radial-gradient(circle at 50% 50%, #090d1a 0%, #02040a 100%)' 
            : 'radial-gradient(circle at 50% 50%, #f8fafc 0%, #e2e8f0 100%)'
        }}
      />

      {/* Floating Gradient Blobs */}
      <div 
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full filter blur-[120px] mix-blend-screen opacity-20 dark:opacity-25 animate-blob-drift"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.6) 0%, rgba(59,130,246,0) 70%)',
          animationDuration: '18s'
        }}
      />

      <div 
        className="absolute top-[40%] -right-[10%] w-[50vw] h-[50vw] rounded-full filter blur-[120px] mix-blend-screen opacity-15 dark:opacity-20 animate-blob-drift"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(244,63,94,0) 70%)',
          animationDuration: '22s',
          animationDelay: '-4s'
        }}
      />

      <div 
        className="absolute -bottom-[20%] left-[20%] w-[55vw] h-[55vw] rounded-full filter blur-[120px] mix-blend-screen opacity-20 dark:opacity-25 animate-blob-drift"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.5) 0%, rgba(6,182,212,0) 70%)',
          animationDuration: '26s',
          animationDelay: '-8s'
        }}
      />

      {/* Overlay Mesh Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${isDark ? '#ffffff' : '#000000'} 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
