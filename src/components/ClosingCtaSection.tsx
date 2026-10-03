import React from 'react';
import { ArrowRight, Phone, Mail, Clock } from 'lucide-react';
import { BRAND } from '../data/logisticsData';

interface ClosingCtaSectionProps {
  onOpenContact: () => void;
}

export const ClosingCtaSection: React.FC<ClosingCtaSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0F172A] text-white overflow-hidden">
      {/* Subtle Background Accent Lighting */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, #0284C7 0%, transparent 40%), radial-gradient(circle at 20% 80%, #1E3A8A 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#38BDF8] uppercase mb-6">
            <span>Direct Operations Inquiry</span>
            <span aria-hidden="true">·</span>
            <span>Immediate Response Desk</span>
          </div>

          {/* Headline and Supporting Sentence as specified in brief */}
          <h2
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 font-sans"
            style={{ textWrap: 'balance' }}
          >
            Have a shipment to move?
          </h2>

          <p className="text-xl sm:text-2xl text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
            Let’s build a dependable plan for your next shipment.
          </p>

          {/* Prominent Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-[#0F172A] bg-white hover:bg-slate-100 active:scale-[0.98] rounded-xl transition-all shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            >
              <span>Talk to our team</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Direct Operations Contacts */}
          <div className="mt-14 pt-10 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-slate-400">
            <div className="flex items-center justify-center gap-2.5">
              <Phone className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />
              <span>{BRAND.phone}</span>
            </div>

            <div className="flex items-center justify-center gap-2.5">
              <Mail className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />
              <span>{BRAND.email}</span>
            </div>

            <div className="flex items-center justify-center gap-2.5">
              <Clock className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />
              <span>24/7 Monitored Dispatch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
