import { useState, useCallback, createContext, useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';
import { toastVariants } from '../animations/variants';

const ToastContext = createContext(null);

const ICONS = {
  success: <CheckCircle size={18} className="text-emerald-400" />,
  error:   <XCircle    size={18} className="text-rose-400" />,
  warning: <AlertCircle size={18} className="text-amber-400" />,
  info:    <Info        size={18} className="text-cyan-400" />,
};

const BORDERS = {
  success: 'border-emerald-500/30',
  error:   'border-rose-500/30',
  warning: 'border-amber-500/30',
  info:    'border-cyan-500/30',
};

function ToastItem({ toast, onRemove }) {
  return (
    <motion.div
      key={toast.id}
      variants={toastVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`flex items-start gap-3 px-4 py-3 rounded-xl border ${BORDERS[toast.type] || BORDERS.info} max-w-sm w-full`}
      style={{
        background: 'rgba(15,23,42,0.92)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
      }}
    >
      <div className="mt-0.5 shrink-0">{ICONS[toast.type]}</div>
      <div className="flex-1 min-w-0">
        {toast.title && (
          <p className="text-sm font-semibold text-slate-100 mb-0.5">{toast.title}</p>
        )}
        <p className="text-xs text-slate-400 leading-relaxed">{toast.message}</p>
      </div>
      <button
        onClick={() => onRemove(toast.id)}
        className="text-slate-500 hover:text-slate-300 transition-colors mt-0.5 shrink-0"
      >
        <X size={14} />
      </button>
    </motion.div>
  );
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(({ title, message, type = 'info', duration = 4000 }) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, title, message, type }]);
    if (duration > 0) {
      setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), duration);
    }
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const toast = {
    success: (message, title) => addToast({ type: 'success', message, title }),
    error:   (message, title) => addToast({ type: 'error',   message, title }),
    warning: (message, title) => addToast({ type: 'warning', message, title }),
    info:    (message, title) => addToast({ type: 'info',    message, title }),
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      {/* Toast container */}
      <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none">
        <AnimatePresence mode="popLayout">
          {toasts.map(t => (
            <div key={t.id} className="pointer-events-auto">
              <ToastItem toast={t} onRemove={removeToast} />
            </div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
