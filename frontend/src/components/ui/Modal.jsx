import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { overlayVariants, modalVariants } from '../../animations/variants';
import { X } from 'lucide-react';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  maxWidth = 'max-w-lg', 
  showClose = true 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          {/* Backdrop Blur Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`w-full ${maxWidth} glass border-white/10 dark:border-slate-800/80 shadow-2xl rounded-3xl overflow-hidden z-50 text-slate-100 flex flex-col`}
          >
            {/* Header */}
            {title && (
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                <h3 className="font-bold text-sm bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                  {title}
                </h3>
                {showClose && (
                  <button 
                    onClick={onClose}
                    className="p-1.5 rounded-lg border border-white/5 hover:border-white/10 text-slate-400 hover:text-slate-100 transition-colors"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            )}

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[75vh]">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
