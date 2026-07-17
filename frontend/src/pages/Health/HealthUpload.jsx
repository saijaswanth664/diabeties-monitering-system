import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../store/toastStore';
import { healthAPI } from '../../api/services';
import FormField from '../../components/FormField';
import Button from '../../components/ui/Button';
import GlassCard from '../../components/GlassCard';
import { 
  Activity, 
  Sparkles, 
  Heart, 
  Flame, 
  Calendar, 
  AlertCircle 
} from 'lucide-react';

const HealthUpload = () => {
  const [glucose, setGlucose] = useState(140.0);
  const [insulin, setInsulin] = useState(80.0);
  const [bmi, setBmi] = useState(28.0);
  const [age, setAge] = useState(30);
  const [month, setMonth] = useState(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
  });
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!month || !glucose || !insulin || !bmi || !age) {
      toast.warning('Please input all necessary patient biometrics.');
      return;
    }

    setLoading(true);
    try {
      const response = await healthAPI.uploadHealthData({
        glucose: parseFloat(glucose),
        insulin: parseFloat(insulin),
        bmi: parseFloat(bmi),
        age: parseInt(age),
        month: month
      });

      toast.success('Patient metrics processed successfully.', 'Metrics Analysed');
      // Pass the computed prediction data response straight to XAI prediction viewer screen
      navigate('/predict', { state: { predictionData: response.data } });
    } catch (err) {
      const errMsg = err.response?.data?.detail || 'Failed to submit clinical parameters to prediction engine.';
      toast.error(errMsg, 'Processing Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 select-none pb-12">
      <div className="flex flex-col gap-0.5">
        <h2 className="text-xl font-black bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
          Biometric Diagnostic Upload
        </h2>
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
          Feed clinical biometric inputs to the ensemble network
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Upload Form Panel */}
        <div className="lg:col-span-2">
          <GlassCard className="p-6 relative overflow-hidden">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Reporting period */}
                <FormField
                  label="Reporting Month Period"
                  id="month"
                  type="text"
                  placeholder="YYYY-MM (e.g. 2026-05)"
                  icon={Calendar}
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  required
                />

                {/* Patient Age */}
                <FormField
                  label="Patient Age (Years)"
                  id="age"
                  type="number"
                  placeholder="e.g. 34"
                  icon={Calendar}
                  min={1}
                  max={120}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>

              {/* Slider Input: Plasma Glucose */}
              <div className="flex flex-col gap-2 p-4 rounded-xl border border-white/5 bg-slate-950/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-200">
                    <Activity size={16} className="text-cyan-400" />
                    <span className="text-xs font-bold">Plasma Glucose Concentration</span>
                  </div>
                  <span className="text-sm font-black text-cyan-400">{glucose} <span className="text-[10px] text-slate-500 font-bold">mg/dL</span></span>
                </div>
                <input
                  type="range"
                  min={40}
                  max={400}
                  step={0.5}
                  value={glucose}
                  onChange={(e) => setGlucose(parseFloat(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-900 rounded-lg"
                />
                <span className="text-[9px] text-slate-500 font-semibold">Typical healthy fasting level should read below 100 mg/dL. Levels above 140 indicate potential prediabetes.</span>
              </div>

              {/* Slider Input: Body Mass Index (BMI) */}
              <div className="flex flex-col gap-2 p-4 rounded-xl border border-white/5 bg-slate-950/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-200">
                    <Flame size={16} className="text-violet-400" />
                    <span className="text-xs font-bold">Body Mass Index (BMI)</span>
                  </div>
                  <span className="text-sm font-black text-violet-400">{bmi} <span className="text-[10px] text-slate-500 font-bold">kg/m²</span></span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={60}
                  step={0.1}
                  value={bmi}
                  onChange={(e) => setBmi(parseFloat(e.target.value))}
                  className="w-full accent-violet-500 cursor-pointer h-1.5 bg-slate-900 rounded-lg"
                />
                <span className="text-[9px] text-slate-500 font-semibold">Typical target values range between 18.5 and 24.9. Values over 30 represent clinical obesity.</span>
              </div>

              {/* Slider Input: Fasting Insulin */}
              <div className="flex flex-col gap-2 p-4 rounded-xl border border-white/5 bg-slate-950/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-200">
                    <Heart size={16} className="text-emerald-400" />
                    <span className="text-xs font-bold">2-Hour Serum Insulin</span>
                  </div>
                  <span className="text-sm font-black text-emerald-400">{insulin} <span className="text-[10px] text-slate-500 font-bold">μU/mL</span></span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={500}
                  step={1}
                  value={insulin}
                  onChange={(e) => setInsulin(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-900 rounded-lg"
                />
                <span className="text-[9px] text-slate-500 font-semibold">Insulin values above 166 suggest cellular insulin resistance in clinical contexts.</span>
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                loading={loading}
                className="w-full py-3 flex items-center justify-center gap-2 text-xs font-bold mt-2"
              >
                <Sparkles size={14} className="animate-pulse" /> Launch Diagnostic Analysis
              </Button>
            </form>
          </GlassCard>
        </div>

        {/* Diagnostic Guide Info Cards */}
        <div className="flex flex-col gap-4">
          <GlassCard className="p-5" glow="cyan">
            <h4 className="text-xs font-bold text-slate-200 mb-2 border-b border-white/5 pb-2">Biometric Specifications</h4>
            <ul className="flex flex-col gap-3 text-[11px] text-slate-400 leading-relaxed font-medium">
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Plasma Glucose:</span>
                <span className="text-cyan-400 font-bold">40 - 400 mg/dL</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Body Mass Index:</span>
                <span className="text-violet-400 font-bold">10 - 60 kg/m²</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Serum Insulin:</span>
                <span className="text-emerald-400 font-bold">5 - 500 μU/mL</span>
              </li>
              <li className="flex justify-between">
                <span>Target Age:</span>
                <span className="text-slate-200 font-bold">1 - 120 Years</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-5 bg-cyan-500/5 border-cyan-500/20">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <AlertCircle size={16} />
              </div>
              <div className="flex flex-col gap-1 text-[11px] text-slate-400 leading-relaxed font-medium">
                <h5 className="font-bold text-slate-200 text-xs">Model Pipeline Execution</h5>
                <p>
                  Upon submission, the scaled vectors trigger a multi-classifier pipeline. The best model makes predictions, compared to baseline, triggering explainability SHAP models.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>

      </div>
    </div>
  );
};

export default HealthUpload;
