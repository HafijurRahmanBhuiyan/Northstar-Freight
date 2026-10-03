import React, { useState } from 'react';
import { APPROACH_MILESTONES } from '../data/logisticsData';
import { Globe, Headset, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

interface OurApproachSectionProps {
  onOpenContact: () => void;
}

export const OurApproachSection: React.FC<OurApproachSectionProps> = ({ onOpenContact }) => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

  return (
    <section id="approach" className="relative bg-[#F8F9FA] text-[#0F172A] pt-0 pb-24 sm:pb-32 overflow-hidden">
      {/* Elegant Arch Transition from Dark Navy (#0B132B) to Warm White (#F8F9FA) */}
      <div className="w-full overflow-hidden leading-none bg-[#0B132B]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-24 md:h-28 block"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Smooth architectural arch curve */}
          <path
            d="M 0 0 C 480 110, 960 110, 1440 0 L 1440 120 L 0 120 Z"
            fill="#F8F9FA"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            <span>Operational Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Multimodal Governance</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-5 font-sans"
            style={{ textWrap: 'balance' }}
          >
            Reliability at every milestone.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Northstar coordinates shipments across modes, partners, and milestones.
            By maintaining single-thread operational responsibility, our controllers
            bridge every handover between deep-sea vessels, transshipment ramps,
            customs authorities, and overland drayage—eliminating the blind spots
            where traditional logistics falter.
          </p>
        </div>

        {/* Interactive Milestone Step Coordinator */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono font-semibold text-[#0284C7] uppercase tracking-wider">
                End-to-End Chain of Custody
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                The Northstar Milestone Journey
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Select any phase along the custody pathway to review our verification,
              telemetry, and handover protocols.
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-8">
            {APPROACH_MILESTONES.map((m, idx) => {
              const isSelected = selectedMilestone === idx;
              return (
                <button
                  key={m.number}
                  type="button"
                  onClick={() => setSelectedMilestone(idx)}
                  className={`text-left p-4 rounded-xl border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? 'text-[#38BDF8]' : 'text-slate-400'
                      }`}
                    >
                      PHASE {m.number}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? 'bg-[#38BDF8]' : 'bg-slate-300'
                      }`}
                    />
                  </div>
                  <div className="text-sm font-bold tracking-tight line-clamp-1">
                    {m.title}
                  </div>
                  <div
                    className={`text-xs mt-1 ${
                      isSelected ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {m.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Milestone Detail Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-6 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#0F172A] text-white flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-[#38BDF8]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  {APPROACH_MILESTONES[selectedMilestone].title}
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed max-w-2xl">
                  {APPROACH_MILESTONES[selectedMilestone].detail}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shrink-0 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7]"
            >
              <span>Consult an Operator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Two Supporting Core Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Feature 1: GLOBAL NETWORK COVERAGE */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0284C7] mb-6">
                <Globe className="w-6 h-6" aria-hidden="true" />
              </div>

              <div className="text-xs font-mono font-semibold text-slate-400 tracking-wider uppercase mb-1">
                CONNECTED INFRASTRUCTURE
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight mb-3">
                GLOBAL NETWORK COVERAGE
              </h3>

              <p className="text-base text-slate-600 leading-relaxed mb-6 font-normal">
                “A trusted network designed to connect your shipment to the world.”
              </p>

              <p className="text-sm text-slate-500 leading-relaxed">
                Direct contractual relationships across 140+ countries, 120
                deep-water maritime hubs, and over 380 international commercial
                airports. We eliminate third-party broker friction by establishing
                audited cargo handoff protocols at every major global gateway.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
              <span>Bonded partner facilities in Asia, Europe, and the Americas</span>
              <span className="font-semibold text-slate-900">140+ Nations</span>
            </div>
          </div>

          {/* Feature 2: 24/7 CUSTOMER SUPPORT */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0284C7] mb-6">
                <Headset className="w-6 h-6" aria-hidden="true" />
              </div>

              <div className="text-xs font-mono font-semibold text-slate-400 tracking-wider uppercase mb-1">
                SINGLE THREAD ACCOUNTABILITY
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight mb-3">
                24/7 CUSTOMER SUPPORT
              </h3>

              <p className="text-base text-slate-600 leading-relaxed mb-6 font-normal">
                “Clear communication and responsive support when it matters.”
              </p>

              <p className="text-sm text-slate-500 leading-relaxed">
                You never interact with an anonymous ticket queue or generic call
                center. Every Northstar client is paired with a named operational lead
                who tracks your cargo around the clock and possesses direct
                authority to re-route consignments when weather or port congestion strikes.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
              <span>Average controller escalation response time</span>
              <span className="font-semibold text-slate-900">&lt; 15 Minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
