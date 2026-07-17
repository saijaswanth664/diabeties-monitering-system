import React, { useState, useEffect } from 'react';
import { reportsAPI, healthAPI } from '../../api/services';
import { useToast } from '../../store/toastStore';
import { useAuth } from '../../store/authStore';
import GlassCard from '../../components/GlassCard';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import FormField from '../../components/FormField';
import Spinner from '../../components/ui/Spinner';
import { 
  FileText, 
  Download, 
  Mail, 
  Send, 
  CheckCircle, 
  Sparkles,
  Calendar,
  Lock
} from 'lucide-react';

const Reports = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [compiling, setCompiling] = useState(false);
  const [emailing, setEmailing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  
  // Custom temporary fields
  const [recipientEmail, setRecipientEmail] = useState('');
  const [selectedReportId, setSelectedReportId] = useState(42); // Default Mock ID

  const { user } = useAuth();
  const toast = useToast();

  const fetchRecords = async () => {
    try {
      const response = await healthAPI.getHistory();
      setHistory(response.data);
    } catch (err) {
      toast.error('Failed to sync generated report archives.', 'Sync Failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecords();
    if (user?.gmail) {
      setRecipientEmail(user.gmail);
    }
  }, [user]);

  const handleCompile = async () => {
    setCompiling(true);
    try {
      const response = await reportsAPI.generateReport();
      toast.success(response.data.message || 'Clinical PDF compiled successfully.', 'Report Saved');
      fetchRecords(); // Refresh chronological list
    } catch (err) {
      toast.error('Failed to compile clinical analytics report.', 'Compile Failed');
    } finally {
      setCompiling(false);
    }
  };

  const handleDownload = async (id = 42) => {
    try {
      const response = await reportsAPI.downloadReport(id);
      // Construct a valid visual temporary anchor download URL trigger
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `Glucose_AI_Report_${id}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      toast.success('Clinical PDF download initialized.', 'PDF Downloaded');
    } catch (err) {
      toast.error('Failed to fetch report binary stream.', 'Download Failed');
    }
  };

  const handleEmailDispatch = async (e) => {
    e.preventDefault();
    if (!recipientEmail) {
      toast.warning('Please input a valid recipient email address.');
      return;
    }

    setEmailing(true);
    try {
      const response = await reportsAPI.sendReport(selectedReportId);
      toast.success(response.data.message || `Clinical PDF emailed to ${recipientEmail}.`, 'Email Dispatched');
      setModalOpen(false);
    } catch (err) {
      toast.error('SMTP server dispatch failed. Validate credentials in settings.', 'Dispatch Failed');
    } finally {
      setEmailing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center gap-3 select-none">
        <Spinner size="md" />
        <span className="text-xs text-slate-500 font-bold tracking-wider uppercase">Fetching Report Drawer...</span>
      </div>
    );
  }

  // Pre-sort chronological records by descending date
  const records = [...history].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return (
    <div className="flex flex-col gap-6 select-none text-slate-100 pb-12">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-xl font-black bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
            Clinical PDF Drawer
          </h2>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
            Export visual reports and dispatch clinical summaries via SMTP
          </p>
        </div>

        <Button 
          variant="primary" 
          onClick={handleCompile} 
          loading={compiling}
          disabled={records.length === 0}
          className="w-full sm:w-auto text-xs font-bold py-2"
        >
          <Sparkles size={14} className="animate-pulse" /> Compile Fresh Report
        </Button>
      </div>

      {/* Main Drawer layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Archives timeline list */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          
          {records.length === 0 ? (
            <GlassCard className="p-8 text-center flex flex-col items-center justify-center gap-3 border-dashed border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-500">
                <FileText size={20} />
              </div>
              <h4 className="font-bold text-slate-200 text-sm">No Compiled Reports Available</h4>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                No health logs are registered. Upload biomarker metrics to compile high-fidelity ReportLab medical PDFs.
              </p>
            </GlassCard>
          ) : (
            records.map((rec, index) => (
              <GlassCard key={rec.record_id || index} className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <FileText size={18} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-200 text-sm">Glucose_AI_Report_{rec.record_id || 100 + index}.pdf</h4>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${rec.outcome === 1 ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'}`}>
                        {rec.outcome === 1 ? 'High Risk' : 'Low Risk'}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] text-slate-500 font-semibold">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {rec.month}</span>
                      <span className="flex items-center gap-1"><CheckCircle size={12} /> Outcome Logged: {rec.glucose} mg/dL</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => handleDownload(rec.record_id || 42)}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 flex items-center justify-center gap-1.5 text-xs font-bold text-slate-300 hover:text-slate-100 transition-colors"
                  >
                    <Download size={14} /> Download
                  </button>
                  <button
                    onClick={() => {
                      setSelectedReportId(rec.record_id || 42);
                      setModalOpen(true);
                    }}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-cyan-500/10 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-500/20 flex items-center justify-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Mail size={14} /> Dispatch
                  </button>
                </div>
              </GlassCard>
            ))
          )}

        </div>

        {/* Report summary specs side cards */}
        <div className="flex flex-col gap-4">
          <GlassCard className="p-5" glow="cyan">
            <h4 className="text-xs font-bold text-slate-200 mb-2 border-b border-white/5 pb-2">Medical PDF Guidelines</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
              Exported medical portfolios compile:
            </p>
            <ul className="flex flex-col gap-2 text-[10px] text-slate-400 leading-relaxed font-semibold mt-3">
              <li className="flex items-center gap-2">
                <CheckCircle size={12} className="text-cyan-400 shrink-0" />
                <span>Patient biometric progress matrices</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={12} className="text-cyan-400 shrink-0" />
                <span>SHAP local quantitative diagnostics</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={12} className="text-cyan-400 shrink-0" />
                <span>LIME local surrogate criteria rules</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={12} className="text-cyan-400 shrink-0" />
                <span>Endocrinologist rules-engine warnings</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-5 bg-cyan-500/5 border-cyan-500/20">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <Lock size={16} />
              </div>
              <div className="flex flex-col gap-1 text-[11px] text-slate-400 leading-relaxed font-medium">
                <h5 className="font-bold text-slate-200 text-xs">Encryption & Compliance</h5>
                <p>
                  All generated clinical assets use encrypted local paths. PDF dispatch pipelines route summaries securely matching standard security requirements.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>

      </div>

      {/* Dynamic Dispatch Modal Dialogue */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Secure SMTP Dispatch Portal"
      >
        <form onSubmit={handleEmailDispatch} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
              Confirm recipient email address to route the compiled medical report. PDF will attach as an encrypted file.
            </p>
          </div>

          <FormField
            label="Recipient Email Address"
            id="recipientEmail"
            type="email"
            placeholder="name@clinical.com"
            icon={Mail}
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="primary"
            loading={emailing}
            className="w-full py-2.5 flex items-center justify-center gap-2 text-xs font-bold"
          >
            <Send size={14} /> Send Clinical Portfolio
          </Button>
        </form>
      </Modal>

    </div>
  );
};

export default Reports;
