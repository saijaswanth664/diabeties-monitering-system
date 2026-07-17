// Shared utility functions
export const fmt = {
  percent: (v) => `${(v * 100).toFixed(1)}%`,
  fixed:   (v, n = 1) => parseFloat(v).toFixed(n),
  date:    (iso) => new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
  month:   (iso) => new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
  risk:    (outcome) => outcome === 1 ? 'HIGH RISK' : 'LOW RISK',
  riskColor: (outcome) => outcome === 1 ? 'text-rose-400' : 'text-emerald-400',
  diffSign:  (n) => n > 0 ? `+${n.toFixed(1)}` : n.toFixed(1),
};

export const getRiskLevel = (probability) => {
  if (probability >= 0.75) return { label: 'Critical', color: '#f43f5e', bg: 'rgba(244,63,94,0.15)' };
  if (probability >= 0.5)  return { label: 'High',     color: '#f97316', bg: 'rgba(249,115,22,0.15)' };
  if (probability >= 0.25) return { label: 'Moderate', color: '#f59e0b', bg: 'rgba(245,158,11,0.15)' };
  return                          { label: 'Low',      color: '#10b981', bg: 'rgba(16,185,129,0.15)' };
};

export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

export const truncate = (str, n = 30) => str?.length > n ? str.slice(0, n) + '…' : str;

export const initials = (name = '') =>
  name.split(' ').slice(0, 2).map(w => w[0]?.toUpperCase()).join('');

export const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const FEATURE_LABELS = {
  Glucose: 'Plasma Glucose',
  Insulin: 'Serum Insulin',
  BMI:     'Body Mass Index',
  Age:     'Patient Age',
};

export const NORMAL_RANGES = {
  glucose: { min: 70,   max: 140, unit: 'mg/dL' },
  insulin: { min: 15,   max: 166, unit: 'μU/mL' },
  bmi:     { min: 18.5, max: 24.9, unit: 'kg/m²' },
};
