import React, { useMemo } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { CargoShipArtwork } from './illustrations/ShipIllustration';
import { OCEAN_CALLOUTS } from '../data/logisticsData';
import { Compass, Waves, ArrowRight, Anchor } from 'lucide-react';

interface OceanFreightSceneProps {
  onOpenContact: (mode?: string) => void;
}

export const OceanFreightScene: React.FC<OceanFreightSceneProps> = ({ onOpenContact }) => {
  const { containerRef, progress, scrollToProgress, prefersReducedMotion } =
    useScrollProgress();

  // Active callout based on progress thresholds
  const activeCalloutIndex = useMemo(() => {
    if (progress < 0.28) return 0;
    if (progress < 0.52) return 1;
    if (progress < 0.74) return 2;
    return 3;
  }, [progress]);

  // Ship movement along the ocean
  // Horizontal glide across the scene: from -60px to +140px
  const shipTranslateX = -60 + progress * 180;
  // Ship vertical rise and ocean swell pitch: rises smoothly into view, with subtle maritime pitch
  const shipRiseY = Math.max(0, (1 - Math.min(1, progress / 0.2)) * 50);
  const wavePitch = Math.sin(progress * Math.PI * 4) * 3;

  const targetProgress = [0.18, 0.42, 0.64, 0.88];

  return (
    <section
      id="ocean"
      ref={containerRef}
      className="relative w-full bg-[#071228] text-white"
      style={{ height: prefersReducedMotion ? 'auto' : '280vh' }}
    >
      {/* Sticky Full-Viewport Marine Theater */}
      <div
        className={`${
          prefersReducedMotion ? 'relative py-20' : 'sticky top-0 h-screen'
        } flex flex-col justify-between overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto`}
      >
        {/* Top Header & Chapter Prose */}
        <div className="pt-24 sm:pt-28 z-20 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#38BDF8] uppercase mb-3">
            <Anchor className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Transoceanic Operations</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">02 · Deep Sea Container Vessel</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-sans"
            style={{ textWrap: 'balance' }}
          >
            Global reach.{' '}
            <span className="text-[#38BDF8]">Seamless coordination.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl">
            Our transpacific and transatlantic services secure guaranteed vessel space
            with premier maritime alliances. As the vessel sails, Northstar synchronizes
            manifest documentation, port terminal discharge, and inland rail ramps.
          </p>

          {/* Interactive Feature Callout Navigation Pill Tabs */}
          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium hidden sm:inline">
              Ocean milestones:
            </span>
            <div className="flex items-center gap-1.5 p-1 bg-[#0F172A] border border-slate-800 rounded-lg shadow-sm">
              {OCEAN_CALLOUTS.map((callout, idx) => {
                const isActive = activeCalloutIndex === idx;
                return (
                  <button
                    key={callout.id}
                    type="button"
                    onClick={() => scrollToProgress(targetProgress[idx])}
                    className={`px-2.5 py-1 rounded-md font-medium text-xs transition-all ${
                      isActive
                        ? 'bg-[#0284C7] text-white shadow-xs'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <span>0{idx + 1}.</span>{' '}
                    <span className="hidden sm:inline">
                      {callout.title.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Central Stage: The Ocean & Container Ship Visual */}
        <div className="relative w-full flex-1 flex flex-col justify-end items-center pb-6 sm:pb-12 z-10 select-none">
          {/* Distant Sea Horizon Gradient & Navigational Beacons */}
          <div className="absolute inset-x-0 bottom-44 sm:bottom-52 h-40 pointer-events-none opacity-40">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent" />
            <div className="flex justify-around items-center px-12 pt-3">
              <span className="text-[10px] text-slate-500 font-mono tracking-widest">
                LANES: ASIA-PACIFIC · TRANS-ATLANTIC · PANAMA DIRECT
              </span>
              <span className="text-[10px] text-slate-500 font-mono tracking-widest hidden md:inline">
                LAT 34°12'N · LON 140°45'E
              </span>
            </div>
          </div>

          {/* Large Illustrated Container Ship */}
          <div
            className="relative w-full max-w-4xl transition-transform duration-100 ease-out"
            style={{
              transform: `translateX(${shipTranslateX}px) translateY(${
                shipRiseY + wavePitch
              }px)`,
            }}
          >
            <CargoShipArtwork />
          </div>

          {/* Understated Stylized Ocean Swells in Foreground */}
          <div className="w-full relative -mt-6 sm:-mt-8 z-20 pointer-events-none">
            <svg
              viewBox="0 0 1200 60"
              className="w-full h-8 sm:h-12 overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 0 30 Q 150 10 300 30 Q 450 50 600 30 Q 750 10 900 30 Q 1050 50 1200 30 L 1200 60 L 0 60 Z"
                fill="#050B18"
                fillOpacity="0.8"
              />
              <path
                d="M 0 42 Q 200 24 400 42 Q 600 60 800 42 Q 1000 24 1200 42 L 1200 60 L 0 60 Z"
                fill="#071228"
              />
            </svg>
          </div>
        </div>

        {/* Revealed Feature Callout Card (Positions callout clearly without obscuring ship) */}
        <div className="relative z-30 pb-8 sm:pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OCEAN_CALLOUTS.map((callout, idx) => {
              const isActive = activeCalloutIndex === idx;

              return (
                <div
                  key={callout.id}
                  className={`p-5 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-[#0F172A] border-[#38BDF8] shadow-lg shadow-sky-950/40 ring-1 ring-[#38BDF8]/40 scale-[1.02]'
                      : 'bg-[#0A1128]/70 border-slate-800/80 opacity-60 hover:opacity-90'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-semibold text-[#38BDF8]">
                      {callout.badge}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isActive ? 'bg-[#38BDF8] animate-pulse' : 'bg-slate-700'
                      }`}
                    />
                  </div>

                  <h3 className="text-sm font-bold text-white tracking-tight mb-1.5">
                    {callout.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {callout.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Bar Action */}
          <div className="mt-5 pt-4 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4 text-[#38BDF8]" />
              <span>Full Container Load (FCL) & Consolidated LCL Solutions</span>
            </div>

            <button
              type="button"
              onClick={() => onOpenContact('ocean')}
              className="text-[#38BDF8] hover:text-white font-semibold flex items-center gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] rounded"
            >
              <span>Explore Ocean Contract Capacity</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
