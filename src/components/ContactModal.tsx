import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, Send, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { BRAND } from '../data/logisticsData';
import { FreightMode, QuoteFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'ocean',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    company: '',
    mode: (initialMode as FreightMode) || 'ocean',
    origin: '',
    destination: '',
    estimatedVolume: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Update mode if initialMode changes
  useEffect(() => {
    if (initialMode) {
      setFormData((prev) => ({
        ...prev,
        mode: (initialMode as FreightMode) || 'ocean',
      }));
    }
  }, [initialMode]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    if (!formData.notes.trim()) {
      newErrors.notes = 'Please include a brief overview of your shipment';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift local routing
    setTimeout(() => {
      const randomCode = `NSF-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceCode(randomCode);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      mode: 'ocean',
      origin: '',
      destination: '',
      estimatedVolume: '',
      notes: '',
    });
    setErrors({});
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Top Header */}
        <div className="bg-[#0F172A] text-white px-6 sm:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-[#38BDF8]">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <polygon points="12,2 14.5,9.5 22,12 14.5,14.5 12,22 9.5,14.5 2,12 9.5,9.5" />
              </svg>
            </div>
            <div>
              <h3 id="contact-modal-title" className="text-lg font-bold">
                Talk to our operations team
              </h3>
              <p className="text-xs text-slate-300">
                Single-thread logistics dispatch · Direct lane planning
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="py-6 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-5">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-2">
                Inquiry Received & Routed
              </h4>

              <div className="inline-block bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-md font-mono text-sm font-bold text-slate-800 my-3">
                Reference: {referenceCode}
              </div>

              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6">
                Thank you, {formData.fullName}. Your shipment details have been dispatched
                to our {formData.mode.toUpperCase()} operations coordinator. We will
                review lane availability and reach out to {formData.email} within 2 business hours.
              </p>

              <div className="bg-[#F8FAFC] rounded-xl p-4 border border-slate-200 text-xs text-slate-500 max-w-md mx-auto mb-8 text-left space-y-1">
                <div className="flex justify-between">
                  <span>Routing Lead:</span>
                  <span className="font-semibold text-slate-800">Northstar West Coast Desk</span>
                </div>
                <div className="flex justify-between">
                  <span>Target Mode:</span>
                  <span className="font-semibold text-slate-800 uppercase">{formData.mode}</span>
                </div>
                <div className="flex justify-between">
                  <span>Assigned SLA:</span>
                  <span className="font-semibold text-emerald-600">&lt; 120 Minutes Response</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0F172A] hover:bg-slate-800 rounded-lg shadow-sm"
              >
                <span>Done</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Freight Mode Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Preferred Transport Mode
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'ocean', label: 'Ocean FCL / LCL' },
                    { id: 'air', label: 'Air Freight' },
                    { id: 'overland', label: 'Overland Drayage' },
                    { id: 'customs', label: 'Customs Clearance' },
                  ].map((modeOption) => (
                    <button
                      key={modeOption.id}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          mode: modeOption.id as FreightMode,
                        }))
                      }
                      className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all ${
                        formData.mode === modeOption.id
                          ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-xs'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {modeOption.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="e.g. Jordan Miller"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                      errors.fullName
                        ? 'border-red-500 bg-red-50/30'
                        : 'border-slate-300 focus:border-[#0284C7]'
                    } focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="jordan@company.com"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                      errors.email
                        ? 'border-red-500 bg-red-50/30'
                        : 'border-slate-300 focus:border-[#0284C7]'
                    } focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Company & Volume Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Meridian Enterprises"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                      errors.company
                        ? 'border-red-500 bg-red-50/30'
                        : 'border-slate-300 focus:border-[#0284C7]'
                    } focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20`}
                  />
                  {errors.company && (
                    <p className="text-xs text-red-600 mt-1">{errors.company}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="estimatedVolume"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Estimated Volume or Frequency
                  </label>
                  <input
                    id="estimatedVolume"
                    type="text"
                    value={formData.estimatedVolume}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        estimatedVolume: e.target.value,
                      })
                    }
                    placeholder="e.g. 5x 40ft FCL / month, or 2,500 kg air"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20"
                  />
                </div>
              </div>

              {/* Origin and Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="origin"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Origin (City or Port)
                  </label>
                  <input
                    id="origin"
                    type="text"
                    value={formData.origin}
                    onChange={(e) =>
                      setFormData({ ...formData, origin: e.target.value })
                    }
                    placeholder="e.g. Shanghai (CNSHA) or Hamburg"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="destination"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Destination (City or Port)
                  </label>
                  <input
                    id="destination"
                    type="text"
                    value={formData.destination}
                    onChange={(e) =>
                      setFormData({ ...formData, destination: e.target.value })
                    }
                    placeholder="e.g. Los Angeles (USLAX) or Chicago"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20"
                  />
                </div>
              </div>

              {/* Shipment Details / Notes */}
              <div>
                <label
                  htmlFor="notes"
                  className="block text-xs font-semibold text-slate-700 mb-1"
                >
                  Cargo Overview & Constraints <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="Describe your cargo commodity, required delivery date, customs needs, or temperature controls..."
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                    errors.notes
                      ? 'border-red-500 bg-red-50/30'
                      : 'border-slate-300 focus:border-[#0284C7]'
                  } focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20`}
                />
                {errors.notes && (
                  <p className="text-xs text-red-600 mt-1">{errors.notes}</p>
                )}
              </div>

              {/* Submit Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Confidential commercial data · No spam guarantee</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0F172A] hover:bg-slate-800 active:scale-[0.98] rounded-lg transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="w-4 h-4 animate-spin" />
                      <span>Dispatching to controller...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Shipment Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
