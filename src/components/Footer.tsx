import React from 'react';
import { BRAND } from '../data/logisticsData';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-[#0A1128] text-slate-400 border-t border-slate-800/80 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Wordmark */}
          <div>
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-[#0F172A] border border-slate-700 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-[#38BDF8]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <polygon points="12,2 14.5,9.5 22,12 14.5,14.5 12,22 9.5,14.5 2,12 9.5,9.5" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                {BRAND.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-2 max-w-sm">
              Coordinated multimodal linehaul, customs clearance, and global supply
              chain operations with single-thread accountability.
            </p>
          </div>

          {/* Navigation Links Mirror */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-medium">
            <a href="#handling" className="hover:text-white transition-colors">
              Handling & Fleet
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#approach" className="hover:text-white transition-colors">
              Our Approach
            </a>
            <a href="#ocean" className="hover:text-white transition-colors">
              Ocean Fleet
            </a>
            <a href="#testimonials" className="hover:text-white transition-colors">
              Testimonials
            </a>
            <button
              type="button"
              onClick={onOpenContact}
              className="text-[#38BDF8] hover:text-white transition-colors font-semibold"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Bottom Metadata & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>{BRAND.address}</span>
            <span aria-hidden="true">·</span>
            <span>Licensed FMC NVOCC & Customs Brokerage</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
