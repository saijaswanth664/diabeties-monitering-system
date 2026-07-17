import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { reportsAPI } from '../../api/services';
import { useToast } from '../../store/toastStore';
import RiskMeter from '../../components/charts/RiskMeter';
import SHAPChart from '../../components/charts/SHAPChart';
import GlassCard from '../../components/GlassCard';
import Button from '../../components/ui/Button';
import Spinner from '../../components/ui/Spinner';
import Badge from '../../components/ui/Badge';
import { 
  Sparkles, 
  ArrowLeft, 
  AlertTriangle, 
  CheckCircle, 
  FilePieChart, 
  BrainCircuit, 
  HelpCircle 
} from 'lucide-react';

const PredictionResult = () => {
  const [prediction, setPrediction] = useState(null);
  const [shapValues, setShapValues] = useState({});
  const [limeValues, setLimeValues] = useState({});
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  const fetchXAIDiagnostics = async () => {
    try {
      // 1. Generate LIME & SHAP explanation outputs from the backend
      const response = await reportsAPI.generateReport();
      setShapValues(response.data.shap_values || {});
      setLimeValues(response.data.lime_values || {});
    } catch (err) {
      toast.warning('Failed to load local model SHAP/LIME contribution graphs.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location.state?.predictionData) {
      setPrediction(location.state.predictionData);
      fetchXAIDiagnostics();
    } else {
      // Fallback: If no direct state passed, retrieve from mock pipeline
      setLoading(true);
      // Construct realistic fallback prediction data block matching backend schemas
      const mockPrediction = {
        record: { glucose: 154, insulin: 92, bmi: 31.4, age: 42, outcome: 1, month: '2026-05' },
        risk_level: 'HIGH RISK (DIABETIC)',
        probability: 0.764,
        analysis: {
          warnings: [
            'WARNING: Elevated Blood Glucose (Glucose > 140 mg/dL). Indicates potential prediabetes.',
            'WARNING: Clinical Obesity (BMI >= 30). Increases cellular insulin resistance.'
          ],
          recommendations: [
            'Incorporate low-glycemic index whole foods into your daily meals.',
            'Perform 30 minutes of aerobic cardiovascular exercise daily to trigger insulin receptors.',
            'Consult an endocrinologist to request an HbA1c screening panel.'
          ]
        }
      };
      setPrediction(mockPrediction);
      fetchXAIDiagnostics();
    }
  }, [location]);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center gap-3 select-none">
        <Spinner size="md" />
        <span className="text-xs text-slate-500 font-bold tracking-wider uppercase">Running XAI Explainer Models...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 select-none text-slate-100 pb-12">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <button
          onClick={() => navigate('/dashboard')}
          className="text-xs font-extrabold text-slate-400 hover:text-slate-200 flex items-center gap-2 group transition-colors"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" /> Back to Dashboard
        </button>

        <Button 
          variant="glass" 
          onClick={() => navigate('/reports')}
          className="text-xs font-bold py-2 border-white/5 hover:border-white/10"
        >
          <FilePieChart size={14} /> Medical Report Drawer
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left Column: Risk Meter circular progress & Clinical recommendation cards */}
        <div className="flex flex-col gap-6">
          <GlassCard className="p-6 flex flex-col items-center justify-center gap-4 text-center" glow={prediction.record.outcome === 1 ? 'rose' : 'emerald'}>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Class Probability</h3>
            <RiskMeter probability={prediction.probability} size={160} />
            <div className="flex flex-col gap-0.5 mt-2">
              <span className="text-xs font-extrabold text-slate-200">Ensemble Neural Net Outcome</span>
              <span className="text-[10px] text-slate-500 font-medium">Model confidence threshold classification</span>
            </div>
          </GlassCard>

          {/* Clinical Warnings panel */}
          {prediction.analysis.warnings.length > 0 && (
            <GlassCard className="p-5 bg-rose-500/5 border-rose-500/20" glow="rose">
              <div className="flex items-center gap-2 mb-3 text-rose-400">
                <AlertTriangle size={16} />
                <h4 className="text-xs font-extrabold uppercase tracking-wider">Clinical Alerts</h4>
              </div>
              <ul className="flex flex-col gap-2.5">
                {prediction.analysis.warnings.map((w, idx) => (
                  <li key={idx} className="text-[11px] text-slate-300 leading-relaxed font-semibold">
                    • {w}
                  </li>
                ))}
              </ul>
            </GlassCard>
          )}

          {/* Clinical Lifestyle Guidelines Panel */}
          <GlassCard className="p-5" glow="cyan">
            <div className="flex items-center gap-2 mb-3 text-cyan-400">
              <CheckCircle size={16} />
              <h4 className="text-xs font-extrabold uppercase tracking-wider">Lifestyle Recommendations</h4>
            </div>
            <ul className="flex flex-col gap-2.5">
              {prediction.analysis.recommendations.map((r, idx) => (
                <li key={idx} className="text-[11px] text-slate-400 leading-relaxed font-medium">
                  • {r}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        {/* Right Column: Local Model interpretability SHAP contribution & LIME thresholds */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* SHAP Chart panel */}
          <GlassCard className="p-5 flex flex-col justify-between" glow="violet">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1.5 text-violet-400">
                  <BrainCircuit size={16} />
                  <h3 className="text-xs font-bold text-slate-200">Local Explainer Contribution Vectors (SHAP)</h3>
                </div>
                <p className="text-[9px] text-slate-500">Red represents factors driving risk higher, green represent protective factors</p>
              </div>
              <Badge variant="violet">SHAP Value Index</Badge>
            </div>
            <SHAPChart values={shapValues} />
          </GlassCard>

          {/* LIME rules table panel */}
          <GlassCard className="p-5 flex flex-col justify-between" glow="cyan">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <HelpCircle size={16} />
                  <h3 className="text-xs font-bold text-slate-200">Local Surrogate Clinical Rules (LIME)</h3>
                </div>
                <p className="text-[9px] text-slate-500">Linear models explaining predictions via local rules</p>
              </div>
              <Badge variant="cyan">LIME Explainer</Badge>
            </div>

            <div className="overflow-x-auto w-full">
              <table className="w-full text-[11px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 text-slate-500">
                    <th className="py-2.5 font-bold uppercase tracking-wider">Biomarker Feature</th>
                    <th className="py-2.5 font-bold uppercase tracking-wider">LIME Diagnostic Rule</th>
                    <th className="py-2.5 font-bold uppercase tracking-wider text-right">Feature Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  {Object.entries(limeValues).map(([feat, data]) => (
                    <tr key={feat} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 font-extrabold text-slate-200">{feat}</td>
                      <td className="py-3 font-medium font-mono text-[10px] text-slate-400">{data.rule}</td>
                      <td className={`py-3 text-right font-extrabold ${data.weight >= 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                        {data.weight >= 0 ? '+' : ''}{data.weight.toFixed(4)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>

        </div>

      </div>
    </div>
  );
};

export default PredictionResult;
