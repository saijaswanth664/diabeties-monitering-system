import React, { useEffect, useState } from 'react';
import { useTheme } from '../../store/themeStore';

const ParticleField = ({ count = 25 }) => {
  const [particles, setParticles] = useState([]);
  const { isDark } = useTheme();

  useEffect(() => {
    const generated = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * -20,
      opacity: Math.random() * 0.4 + 0.1,
      color: Math.random() > 0.5 ? 'rgba(6, 182, 212, 0.4)' : 'rgba(139, 92, 246, 0.4)'
    }));
    setParticles(generated);
  }, [count]);

  if (!isDark) return null; // Only show particles in dark mode for performance & visibility

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-40">
      {particles.map(p => (
        <span
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.left,
            bottom: '-20px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            opacity: p.opacity,
            animation: `particle-float ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            boxShadow: `0 0 8px ${p.color}`
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField;
