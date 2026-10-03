import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { AirplaneArtwork } from './illustrations/AirplaneIllustration';
import { TESTIMONIALS } from '../data/logisticsData';
import { Plane, Quote, Star, ArrowUpRight } from 'lucide-react';

interface AirFreightTestimonialsSectionProps {
  onOpenContact: (mode?: string) => void;
}

export const AirFreightTestimonialsSection: React.FC<AirFreightTestimonialsSectionProps> = ({
  onOpenContact,
}) => {
  const { containerRef, progress, prefersReducedMotion } = useScrollProgress();

  // Airplane flight path across the sky
  // Airplane travels from top-left toward bottom-right as visitor scrolls through section
  const planeTranslateX = -120 + progress * 520;
  const planeTranslateY = 10 + Math.sin(progress * Math.PI) * 40;
  const bankAngle = -3 + progress * 8; // subtle banking angle

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="relative w-full bg-white text-[#0F172A] py-24 sm:py-32 overflow-hidden border-t border-slate-200"
    >
      {/* High-Altitude Sky Field & Geodesic Navigation Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(#94A3B8 1px, transparent 1px), linear-gradient(135deg, #F8FAFC 25%, transparent 25%)',
          backgroundSize: '40px 40px, 80px 80px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            <Plane className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Air Cargo Linehaul</span>
            <span aria-hidden="true">·</span>
            <span>03 · Transcontinental Flight</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4 font-sans"
            style={{ textWrap: 'balance' }}
          >
            Trusted by businesses across the world.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            When minutes matter, our air freight network secures prioritized nose-door
            loading and tarmac ramp supervision. Leading enterprises rely on our
            predictable linehaul execution for their mission-critical global supply chains.
          </p>
        </div>

        {/* Dynamic Illustrated Airplane Sky Stage */}
        <div className="relative w-full h-[180px] sm:h-[240px] md:h-[280px] mb-16 overflow-hidden rounded-2xl bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE]/40 border border-sky-100 flex items-center justify-center">
          {/* Subtle Waypoint Coordinates */}
          <div className="absolute top-4 left-6 text-[10px] font-mono text-slate-400">
            FLIGHT PATH: FRA ➔ ANC ➔ NRT ➔ ORD · ALTITUDE: 38,000 FT
          </div>
          <div className="absolute bottom-4 right-6 text-[10px] font-mono text-slate-400">
            RADAR BEACON: ACTIVE · B777F FREIGHTER
          </div>

          {/* Gliding Cargo Aircraft */}
          <div
            className="absolute transition-transform duration-100 ease-out select-none"
            style={{
              transform: prefersReducedMotion
                ? 'translateX(0px) translateY(0px)'
                : `translateX(${planeTranslateX}px) translateY(${planeTranslateY}px) rotate(${bankAngle}deg)`,
              width: '420px',
              maxWidth: '85vw',
            }}
          >
            <AirplaneArtwork />
          </div>
        </div>

        {/* 3 Tasteful Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8FAFC] rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Verified Operational Outcome Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-mono font-semibold text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                    {item.verifiedMetric}
                  </span>
                  <Quote className="w-5 h-5 text-slate-300" aria-hidden="true" />
                </div>

                {/* Concise Testimonial Quote */}
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal mb-8">
                  “{item.quote}”
                </p>
              </div>

              {/* Attribution: Name, Role, Company, and Clean Initials Avatar */}
              <div className="pt-6 border-t border-slate-200 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold text-xs shrink-0 tracking-wider">
                  {item.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 leading-tight">
                    {item.author}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 font-normal">
                    {item.role}, <span className="font-medium text-slate-700">{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Disclaimer & Service Action Note */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            * Illustrative corporate scenarios based on representative multimodal enterprise service levels.
          </p>

          <button
            type="button"
            onClick={() => onOpenContact('air')}
            className="text-[#0284C7] hover:text-slate-950 font-semibold inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0284C7] rounded self-start sm:self-auto"
          >
            <span>Charter or Reserve Air Freight Space</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
