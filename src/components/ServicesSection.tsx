import React, { useState } from 'react';
import { SERVICES } from '../data/logisticsData';
import {
  AirFreightVector,
  OceanFreightVector,
  CustomsClearanceVector,
} from './illustrations/ServiceIcons';
import { ArrowUpRight, Check, Clock, Globe2 } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceMode: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeDetailId, setActiveDetailId] = useState<string | null>(null);

  const getVectorIcon = (mode: string) => {
    switch (mode) {
      case 'air':
        return <AirFreightVector className="w-16 h-16 sm:w-20 sm:h-20" />;
      case 'ocean':
        return <OceanFreightVector className="w-16 h-16 sm:w-20 sm:h-20" />;
      case 'customs':
        return <CustomsClearanceVector className="w-16 h-16 sm:w-20 sm:h-20" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-[#0B132B] text-white overflow-hidden"
    >
      {/* Background Subtle Nautical Coordinate Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#38BDF8] uppercase mb-3">
            <span>Multimodal Portfolio</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Integrated Freight Execution</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-sans"
            style={{ textWrap: 'balance' }}
          >
            Every mode.{' '}
            <span className="text-[#38BDF8]">One coordinated team.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Rather than juggling fragmented carriers, isolated freight forwarders,
            and external customs brokers, Northstar unifies global air charters,
            ocean container allocations, and regulatory clearance under a single
            accountable operations team.
          </p>
        </div>

        {/* 3 Clearly Organized Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const isExpanded = activeDetailId === service.id;

            return (
              <div
                key={service.id}
                tabIndex={0}
                role="article"
                aria-label={service.title}
                className={`group relative bg-[#0F172A] rounded-2xl p-7 sm:p-8 border transition-all duration-200 flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
                  isExpanded
                    ? 'border-[#38BDF8] shadow-lg shadow-sky-950/50'
                    : 'border-slate-800 hover:border-slate-700 hover:bg-[#111C38]'
                }`}
              >
                <div>
                  {/* Top Bar inside Card: Mode index + Original Vector artwork */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-xs font-mono font-semibold text-slate-400 tracking-wider">
                        0{index + 1}. MODE SPECIFICATION
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 tracking-tight">
                        {service.title}
                      </h3>
                    </div>

                    <div className="transition-transform duration-200 group-hover:scale-105 shrink-0 ml-2">
                      {getVectorIcon(service.mode)}
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm font-semibold text-[#38BDF8] mb-3">
                    {service.tagline}
                  </p>

                  {/* Body description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Key Operational Features list */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs text-slate-300"
                      >
                        <span className="w-4 h-4 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer: Metrics & Direct Action */}
                <div className="pt-6 border-t border-slate-800/80">
                  <div className="grid grid-cols-2 gap-3 mb-5 text-xs">
                    <div>
                      <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>Transit Horizon</span>
                      </div>
                      <div className="text-sm font-bold text-white mt-0.5 tabular-nums">
                        {service.transitTime}
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                        <Globe2 className="w-3 h-3 text-slate-400" />
                        <span>{service.metrics.label}</span>
                      </div>
                      <div className="text-sm font-bold text-[#38BDF8] mt-0.5 tabular-nums">
                        {service.metrics.value}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectService(service.mode)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-slate-800 hover:bg-[#0284C7] active:bg-[#0369A1] rounded-lg transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                  >
                    <span>Request {service.title} Booking</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
