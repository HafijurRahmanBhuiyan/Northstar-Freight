import React from 'react';
import { ArrowDown, ArrowUpRight, Compass } from 'lucide-react';
import { BRAND } from '../data/logisticsData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F8F9FA]">
      {/* Background Architectural Vector Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(to right, #F1F5F9 1px, transparent 1px)',
          backgroundSize: '36px 36px, 120px 120px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Subtle Category Kicker - Unboxed, no pill badges */}
          <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider text-slate-500 uppercase mb-6">
            <Compass className="w-3.5 h-3.5 text-[#0284C7]" aria-hidden="true" />
            <span>Multimodal Freight Forwarding</span>
            <span aria-hidden="true">·</span>
            <span>Global Operations Infrastructure</span>
          </div>

          {/* Bold, Oversized Headline with Balanced Wrap */}
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#0F172A] tracking-tight leading-[1.08] mb-6 font-sans"
            style={{ textWrap: 'balance' }}
          >
            We move freight.{' '}
            <span className="text-[#1E3A8A] block sm:inline">We own the outcome.</span>
          </h1>

          {/* Clear, readable supporting copy */}
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-10">
            {BRAND.subtagline}
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0F172A] rounded-lg hover:bg-slate-800 active:scale-[0.98] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] whitespace-nowrap"
            >
              <span>Explore our services</span>
              <ArrowDown className="w-4 h-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 active:scale-[0.98] transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] whitespace-nowrap"
            >
              <span>Talk to our team</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Quantified Foundation Markers - Unboxed editorial metrics adjacent to proposition */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight tabular-nums">
              120+
            </div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              Global Deep-Water Ports
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight tabular-nums">
              99.4%
            </div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              Linehaul Schedule Adherence
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight tabular-nums">
              24-48 hrs
            </div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              Priority Air Transit Average
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight tabular-nums">
              Single Desk
            </div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              Direct Human Operations Contact
            </div>
          </div>
        </div>

        {/* Scroll hint indicator */}
        <div className="mt-12 flex items-center justify-between text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
            <span>Active Yard Dispatch · Intermodal Depot Terminal</span>
          </div>

          <a
            href="#handling"
            className="hidden sm:flex items-center gap-1.5 hover:text-slate-700 transition-colors"
          >
            <span>Scroll down to experience the transfer</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
