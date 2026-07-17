/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          cyan:    '#06b6d4',
          blue:    '#3b82f6',
          violet:  '#8b5cf6',
          emerald: '#10b981',
          rose:    '#f43f5e',
          amber:   '#f59e0b',
        },
        dark: {
          950: '#020817',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          400: '#94a3b8',
          200: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float':          'float 6s ease-in-out infinite',
        'float-slow':     'float 10s ease-in-out infinite',
        'pulse-glow':     'pulse-glow 3s ease-in-out infinite alternate',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'spin-slow':      'spin-slow 20s linear infinite',
        'shimmer':        'shimmer 1.5s linear infinite',
        'blob-drift':     'blob-drift 12s ease-in-out infinite',
        'fade-in-up':     'fade-in-up 0.5s ease forwards',
        'ring-pulse':     'ring-pulse 1.5s ease-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%':      { transform: 'translateY(-15px) rotate(1deg)' },
          '66%':      { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        'pulse-glow': {
          '0%':   { boxShadow: '0 0 10px rgba(6,182,212,0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(139,92,246,0.5), 0 0 60px rgba(6,182,212,0.2)' },
        },
        'gradient-shift': {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'blob-drift': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '25%':      { transform: 'translate(30px,-20px) scale(1.05)' },
          '50%':      { transform: 'translate(-20px,30px) scale(0.95)' },
          '75%':      { transform: 'translate(20px,20px) scale(1.02)' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'ring-pulse': {
          '0%':   { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '40px',
      },
      boxShadow: {
        'glass':      '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glow-cyan':  '0 0 20px rgba(6,182,212,0.3)',
        'glow-violet':'0 0 20px rgba(139,92,246,0.3)',
        'glow-blue':  '0 0 20px rgba(59,130,246,0.3)',
        'card':       '0 4px 24px rgba(0,0,0,0.3)',
      },
      backgroundImage: {
        'gradient-radial':   'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
