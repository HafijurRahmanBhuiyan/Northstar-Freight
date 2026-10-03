import React, { useMemo } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import {
  CraneFrameworkArtwork,
  SpreaderBarArtwork,
  ContainerArtwork,
  TruckArtwork,
} from './illustrations/CraneTruckIllustrations';
import { ShieldCheck, CheckCircle2, ChevronRight, Gauge } from 'lucide-react';

interface CraneTruckSceneProps {
  onOpenContact: () => void;
}

export const CraneTruckScene: React.FC<CraneTruckSceneProps> = ({ onOpenContact }) => {
  const { containerRef, progress, scrollToProgress, prefersReducedMotion } =
    useScrollProgress();

  // Stage calculations based on scroll progress (0.00 to 1.00)
  const currentStage = useMemo(() => {
    if (progress < 0.25) return 1;
    if (progress < 0.55) return 2;
    if (progress < 0.72) return 3;
    return 4;
  }, [progress]);

  // Stage 1: Truck Entry (0.0 -> 0.25)
  // Truck moves from left (-140px) to resting docking position (0px)
  const truckEntryProgress = Math.min(1, Math.max(0, progress / 0.25));
  const initialTruckX = (1 - truckEntryProgress) * -160;

  // Stage 2: Container Descent (0.25 -> 0.55)
  // Container lowers from high elevation (-170px) down to 0px (on truck chassis)
  const descentProgress = Math.min(
    1,
    Math.max(0, (progress - 0.25) / (0.55 - 0.25))
  );
  // Ease curve for smooth mechanical crane lowering
  const easedDescent = Math.sin((descentProgress * Math.PI) / 2);
  const containerElevationY = -170 * (1 - easedDescent);

  // Stage 3: Chassis Alignment & Twist-Lock Settle (0.55 -> 0.72)
  const settleProgress = Math.min(
    1,
    Math.max(0, (progress - 0.55) / (0.72 - 0.55))
  );
  const isSettled = progress >= 0.58;
  const isLocked = progress >= 0.65;
  // Subtle suspension compression when container settles
  const suspensionSqueeze = isSettled ? (1 - Math.abs(settleProgress - 0.5) * 2) * 2.5 : 0;
  // Spreader bar retracts upward slightly after locking in Stage 3/4
  const spreaderRetractY = progress >= 0.68 ? -Math.min(50, (progress - 0.68) * 180) : 0;

  // Stage 4: Outbound Dispatch (0.72 -> 1.00)
  // Truck drives across to the right and exits
  const exitProgress = Math.min(1, Math.max(0, (progress - 0.72) / (1.0 - 0.72)));
  const exitTruckX = Math.pow(exitProgress, 1.4) * 620;

  // Combined horizontal position of truck
  const finalTruckX = progress >= 0.72 ? exitTruckX : initialTruckX;

  // Container follows truck during exit
  const containerX = progress >= 0.72 ? exitTruckX : 0;
  const finalContainerY = containerElevationY + suspensionSqueeze;

  const stages = [
    { num: 1, title: 'Inbound Positioning', range: '0.0 - 0.25', target: 0.12 },
    { num: 2, title: 'Hoist Descent', range: '0.25 - 0.55', target: 0.40 },
    { num: 3, title: 'Chassis Lock & Verification', range: '0.55 - 0.72', target: 0.65 },
    { num: 4, title: 'Outbound Linehaul', range: '0.72 - 1.00', target: 0.88 },
  ];

  return (
    <section
      id="handling"
      ref={containerRef}
      className="relative w-full bg-[#F8F9FA] border-t border-slate-200/80"
      // Height gives ample smooth scroll distance (260vh)
      style={{ height: prefersReducedMotion ? 'auto' : '260vh' }}
    >
      {/* Sticky Full-Viewport Container */}
      <div
        className={`${
          prefersReducedMotion ? 'relative py-16' : 'sticky top-0 h-screen'
        } flex flex-col justify-between overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto`}
      >
        {/* Top Header & Editorial Section Prose */}
        <div className="pt-24 sm:pt-28 z-20 max-w-3xl">
          {/* Unboxed Metadata / Chapter Index */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            <span>Intermodal Terminal</span>
            <span aria-hidden="true">·</span>
            <span>01 · Handling & Overland Transfer</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4 font-sans"
            style={{ textWrap: 'balance' }}
          >
            Careful handling.{' '}
            <span className="text-[#0284C7]">Reliable delivery.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
            From the moment your freight arrives at our intermodal depot, every
            container transfer is governed by certified rigging procedures,
            calibrated twist-lock chassis mating, and precision-timed overland
            dispatch. We eliminate transfer delays through automated yard
            scheduling and immediate highway release.
          </p>

          {/* Interactive Stage Scrubber & Status Pill */}
          <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
            <span className="text-slate-400 font-medium hidden sm:inline">
              Sequence progress:
            </span>
            <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-lg shadow-2xs">
              {stages.map((st) => {
                const isActive = currentStage === st.num;
                return (
                  <button
                    key={st.num}
                    type="button"
                    onClick={() => scrollToProgress(st.target)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-all ${
                      isActive
                        ? 'bg-[#0F172A] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                    title={`Click to jump to ${st.title}`}
                  >
                    <span className="text-[10px] font-mono opacity-80">
                      {st.num}.
                    </span>
                    <span className="truncate max-w-[110px] sm:max-w-none">
                      {st.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Scroll instruction indicator */}
            <span className="text-[11px] text-slate-400 hidden lg:inline-flex items-center gap-1 ml-2">
              <Gauge className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Scroll to scrub forward or backward</span>
            </span>
          </div>
        </div>

        {/* Central Illustrated Logistics Scene */}
        <div className="relative w-full flex-1 flex flex-col justify-end items-center pb-8 sm:pb-12 z-10 select-none">
          {/* Depot Ground Line & Asphalt Yard */}
          <div className="w-full relative">
            {/* Terminal Safety Markings */}
            <div className="w-full flex justify-between px-4 pb-1 text-[10px] text-slate-400 font-mono">
              <span>BAY 04 · GANTRY RIG ALPHA</span>
              <span className="hidden sm:inline">
                STATUS: {currentStage === 4 ? 'DISPATCHED' : isLocked ? 'CHASSIS LOCKED' : 'TRANSFER ACTIVE'}
              </span>
              <span>40FT STANDARD INTERMODAL</span>
            </div>

            <div className="w-full h-2.5 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded-sm relative overflow-hidden">
              <div
                className="h-full bg-[#0284C7]/40 transition-all duration-75"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            {/* Ground Asphalt Stripe Markings */}
            <div className="w-full flex justify-between px-6 pt-1">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-8 sm:w-12 h-1 bg-amber-400/70 rounded-xs" />
              ))}
            </div>
          </div>

          {/* Dynamic Scene Stage Wrapper */}
          <div className="relative w-full max-w-4xl h-[280px] sm:h-[340px] md:h-[400px] flex items-end justify-center overflow-visible">
            {/* 1. Overhead Gantry Crane Frame (Fixed structural framework) */}
            <div className="absolute inset-x-0 top-0 w-full z-0">
              <CraneFrameworkArtwork trolleyX={0} />
            </div>

            {/* 2. Flatbed Freight Truck (Moves in Stage 1, settles in Stage 3, departs in Stage 4) */}
            <div
              className="absolute z-10 w-[380px] sm:w-[480px] md:w-[540px] transition-transform duration-75 ease-out"
              style={{
                transform: `translateX(${finalTruckX}px)`,
                bottom: '18px',
                left: 'calc(50% - 240px)',
              }}
            >
              <TruckArtwork
                hasLoadedCargo={isSettled}
                className={isSettled ? 'drop-shadow-2xl' : ''}
              />
            </div>

            {/* 3. Shipping Container (Lowers in Stage 2, Locks in Stage 3, Drives away in Stage 4) */}
            <div
              className="absolute z-20 w-[270px] sm:w-[330px] md:w-[380px] transition-transform duration-75 ease-out"
              style={{
                bottom: '106px',
                left: 'calc(50% - 240px)',
                transform: `translate(${containerX}px, ${finalContainerY}px)`,
              }}
            >
              <ContainerArtwork isLocked={isLocked} />
            </div>

            {/* 4. Spreader Bar & Hoist Cables (Lowers with container, detaches in Stage 4) */}
            <div
              className={`absolute z-15 w-[270px] sm:w-[330px] md:w-[380px] transition-all duration-75 ease-out pointer-events-none ${
                progress >= 0.78 ? 'opacity-0' : 'opacity-100'
              }`}
              style={{
                bottom: '180px',
                left: 'calc(50% - 240px)',
                transform: `translate(0px, ${
                  progress >= 0.65 ? finalContainerY + spreaderRetractY : finalContainerY
                }px)`,
              }}
            >
              <SpreaderBarArtwork
                cableHeight={Math.max(60, 200 - Math.abs(finalContainerY))}
              />
            </div>
          </div>
        </div>

        {/* Bottom Status Ribbon & Real-Time Specifications */}
        <div className="pb-6 z-20 border-t border-slate-200/80 pt-3 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-slate-800">
              <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
              <span>Rigging Protocol: Certified Dual-Spreader Latch</span>
            </span>
            <span className="hidden md:inline" aria-hidden="true">·</span>
            <span className="hidden md:inline">Weight tolerance: +/- 0.5% calibrated</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>
                {currentStage === 1 && 'Waiting for Dock Placement'}
                {currentStage === 2 && 'Controlled Hoist Lowering'}
                {currentStage === 3 && 'Twist-locks Engaged & Verified'}
                {currentStage === 4 && 'Released to Highway Transit'}
              </span>
            </div>

            <button
              type="button"
              onClick={onOpenContact}
              className="text-[#0284C7] hover:text-[#0369A1] font-semibold flex items-center gap-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0284C7] rounded"
            >
              <span>Dispatch an Overland Consignment</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
