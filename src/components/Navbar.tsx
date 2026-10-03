import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BRAND } from '../data/logisticsData';

interface NavbarProps {
  onOpenContact: (initialMode?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Handling & Fleet', href: '#handling' },
    { label: 'Services', href: '#services' },
    { label: 'Our Approach', href: '#approach' },
    { label: 'Ocean Freight', href: '#ocean' },
    { label: 'Air & Proof', href: '#testimonials' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
            : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="flex items-center gap-2.5 text-slate-900 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] rounded"
              aria-label="Northstar Freight - Home"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0F172A] flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
                {/* Clean Compass Star mark */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-[#38BDF8]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <polygon points="12,2 14.5,9.5 22,12 14.5,14.5 12,22 9.5,14.5 2,12 9.5,9.5" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 font-sans">
                {BRAND.name}
              </span>
            </a>

            {/* Zone 2: 4-6 clean text navigation links */}
            <nav
              className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
              aria-label="Primary Navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-slate-950 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] rounded px-1 py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenContact()}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0F172A] rounded-lg hover:bg-slate-800 active:scale-[0.98] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] whitespace-nowrap"
              >
                <span>Talk to our team</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7]"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 md:hidden bg-slate-950/60 backdrop-blur-sm transition-opacity"
        >
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#0F172A] flex items-center justify-center text-white">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#38BDF8]" fill="currentColor">
                      <polygon points="12,2 14.5,9.5 22,12 14.5,14.5 12,22 9.5,14.5 2,12 9.5,9.5" />
                    </svg>
                  </div>
                  <span className="font-bold text-slate-900">{BRAND.name}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-slate-800 hover:text-[#0284C7] py-1 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#0F172A] rounded-lg shadow-sm"
              >
                <span>Talk to our team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-center text-slate-500">
                Direct phone: {BRAND.phone}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
