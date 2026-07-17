import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { healthAPI, reportsAPI } from '../../api/services';
import { useToast } from '../../store/toastStore';
import { useAuth } from '../../store/authStore';
import StatCard from '../../components/common/StatCard';
import TrendChart from '../../components/charts/TrendChart';
import HealthRadar from '../../components/charts/HealthRadar';
import GlassCard from '../../components/GlassCard';
import Button from '../../components/ui/Button';
import Spinner from '../../components/ui/Spinner';
import { 
  Heart, 
  Flame, 
  Sparkles, 
  FileText, 
  PlusCircle, 
  ArrowRight, 
  Activity, 
  Sparkle,
  Calendar,
  AlertCircle
} from 'lucide-react';

const Dashboard = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reportLoading, setReportLoading] = useState(false);
  const { user } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await healthAPI.getHistory();
      setHistory(response.data);
    } catch (err) {
      toast.error('Failed to load patient clinical history records.', 'Sync Failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleGenerateReport = async () => {
    setReportLoading(true);
    try {
      const response = await reportsAPI.generateReport();
      toast.success(response.data.message || 'Clinical PDF successfully generated.', 'Report Compiled');
      navigate('/reports');
    } catch (err) {
      toast.error(err.response?.data?.detail || 'Failed to generate visual report PDF.', 'Compile Error');
    } finally {
      setReportLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center gap-3 select-none">
        <Spinner size="md" />
        <span className="text-xs text-slate-500 font-bold tracking-wider uppercase">Fetching Health Dossier...</span>
      </div>
    );
  }

  // Extract current biomarker values from last chronologically created record
  const currentRecord = history.length > 0 
    ? [...history].sort((a,b) => new Date(b.created_at) - new Date(a.created_at))[0]
    : null;

  // Extract previous record for MoM difference math
  const previousRecord = history.length > 1
    ? [...history].sort((a,b) => new Date(b.created_at) - new Date(a.created_at))[1]
    : null;

  // Compute biomarker differences for display
  const getDiff = (key) => {
    if (!currentRecord || !previousRecord) return null;
    return parseFloat((currentRecord[key] - previousRecord[key]).toFixed(1));
  };

  return (
    <div className="flex flex-col gap-6 select-none text-slate-100 pb-12">
      {/* Top Banner Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-xl font-black bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
            Welcome back, {user?.full_name}
          </h2>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
            Clinical Diagnostic Dashboard Baseline
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Button 
            variant="glass" 
            onClick={handleGenerateReport} 
            loading={reportLoading}
            className="flex-1 sm:flex-initial text-xs font-bold py-2 border-white/5 hover:border-white/10"
          >
            <FileText size={14} /> Compile Report
          </Button>
          <Button 
            variant="primary" 
            onClick={() => navigate('/upload')}
            className="flex-1 sm:flex-initial text-xs font-bold py-2"
          >
            <PlusCircle size={14} /> Upload Biometrics
          </Button>
        </div>
      </div>

      {/* Conditional: No records empty state banner */}
      {history.length === 0 ? (
        <GlassCard className="p-8 text-center flex flex-col items-center justify-center gap-4 border-dashed border-white/10">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 animate-pulse">
            <Heart size={20} />
          </div>
          <div className="flex flex-col gap-1 max-w-sm">
            <h3 className="font-bold text-slate-200 text-sm">No Medical Biomarkers Available</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              No diagnostic biometrics have been logged yet for your clinical profile. Upload metrics to run Explainable AI models.
            </p>
          </div>
          <Button 
            variant="primary" 
            onClick={() => navigate('/upload')}
            className="px-6 text-xs font-bold"
          >
            Log Biometrics Now
          </Button>
        </GlassCard>
      ) : (
        <>
          {/* Diagnostic status alerts banner card */}
          {currentRecord?.outcome === 1 && (
            <GlassCard glow="rose" className="p-4 bg-rose-500/5 border-rose-500/20 flex gap-3.5 items-start">
              <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 mt-0.5">
                <AlertCircle size={18} />
              </div>
              <div className="flex flex-col gap-0.5">
                <h4 className="text-xs font-black text-rose-400 uppercase tracking-wider">High Risk Profile Confirmed</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  The ensemble neural network classified diabetic risk progression. Review individual biomarker contribution matrices and compile an official clinical recommendation report.
                </p>
              </div>
            </GlassCard>
          )}

          {/* Biometric Stats Card Panels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              label="Plasma Glucose"
              value={currentRecord.glucose}
              unit="mg/dL"
              difference={getDiff('glucose')}
              status={getDiff('glucose') > 0 ? 'Elevated (Risk)' : 'Reduced (Improved)'}
              icon={Activity}
              glow={currentRecord.glucose > 140 ? 'rose' : 'emerald'}
              delay={0.05}
            />
            
            <StatCard
              label="Body Mass Index"
              value={currentRecord.bmi}
              unit="kg/m²"
              difference={getDiff('bmi')}
              status={getDiff('bmi') > 0 ? 'Weight Gained' : 'Weight Improved'}
              icon={Flame}
              glow={currentRecord.bmi >= 30 ? 'rose' : 'emerald'}
              delay={0.1}
            />

            <StatCard
              label="Fasting Insulin"
              value={currentRecord.insulin}
              unit="μU/mL"
              difference={getDiff('insulin')}
              status={getDiff('insulin') > 0 ? 'Hyperinsulinemia' : 'Stable'}
              icon={Heart}
              glow={currentRecord.insulin > 166 ? 'rose' : 'emerald'}
              delay={0.15}
            />

            <StatCard
              label="Patient Age"
              value={currentRecord.age}
              unit="Years"
              status="Clinical Baseline"
              icon={Calendar}
              glow="cyan"
              delay={0.2}
            />
          </div>

          {/* Double column grid charts panels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Historical Biomarker Comparisons Trend line */}
            <GlassCard className="p-5 lg:col-span-2 flex flex-col justify-between" delay={0.25}>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-xs font-bold text-slate-200">Historical Biomarker Trend Tracking</h3>
                  <p className="text-[9px] text-slate-500">Double-axis progression tracking current Glucose vs. BMI readings</p>
                </div>
              </div>
              <TrendChart data={history} />
            </GlassCard>

            {/* Radar Bio Index Analysis */}
            <GlassCard className="p-5 flex flex-col justify-between" delay={0.3}>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-xs font-bold text-slate-200">Biomarker Index Radar</h3>
                  <p className="text-[9px] text-slate-500">A normalized vector map illustrating biological deviations</p>
                </div>
              </div>
              <HealthRadar currentRecord={currentRecord} />
            </GlassCard>

          </div>

          {/* Quick AI Diagnostics prompt redirect card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GlassCard className="p-5 relative overflow-hidden flex flex-col justify-between" delay={0.35}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full filter blur-xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Sparkles size={18} />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-slate-200 text-sm">Review SHAP Diagnostics</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    View explainable math arrays quantifying exactly how much each logged metric pushed your risk classification index.
                  </p>
                </div>
              </div>
              <Button 
                variant="glass" 
                onClick={() => navigate('/predict')}
                className="w-full text-xs font-bold py-2 mt-4 flex items-center justify-center gap-1.5 border-white/5 hover:border-white/10"
              >
                Launch XAI Viewer <ArrowRight size={14} />
              </Button>
            </GlassCard>

            <GlassCard className="p-5 relative overflow-hidden flex flex-col justify-between" delay={0.4}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/5 rounded-full filter blur-xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                  <FileText size={18} />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-slate-200 text-sm">Download Medical Report PDF</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Export a beautiful clinical-grade ReportLab PDF summarizing all diagnostic thresholds and automated lifestyle recommendations.
                  </p>
                </div>
              </div>
              <Button 
                variant="glass" 
                onClick={() => navigate('/reports')}
                className="w-full text-xs font-bold py-2 mt-4 flex items-center justify-center gap-1.5 border-white/5 hover:border-white/10"
              >
                Go to PDF Drawer <ArrowRight size={14} />
              </Button>
            </GlassCard>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
