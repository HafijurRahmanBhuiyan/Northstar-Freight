import React from 'react';

export const AirFreightVector: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="60" cy="60" r="54" stroke="#1E293B" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="46" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
      {/* Flight Vector Path */}
      <path d="M 22 84 C 40 76, 70 54, 98 32" stroke="#0284C7" strokeWidth="2" strokeDasharray="4 3" />
      {/* Sleek Jet Aircraft Silhouette */}
      <path
        d="M 98 32 
           L 84 39 
           L 72 32 
           L 66 35 
           L 74 44 
           L 52 54 
           L 44 50 
           L 40 52 
           L 44 58 
           L 30 65 
           L 26 63 
           L 24 66 
           L 32 71 
           C 42 66, 68 54, 82 46 
           L 96 46 
           Z"
        fill="#38BDF8"
      />
      {/* Airspeed indicator ticks */}
      <line x1="88" y1="26" x2="94" y2="22" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="96" y1="36" x2="102" y2="34" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="98" cy="32" r="3" fill="#FFFFFF" />
    </svg>
  </div>
);

export const OceanFreightVector: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="60" cy="60" r="54" stroke="#1E293B" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="46" stroke="#0284C7" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
      {/* Ocean Swell Waves */}
      <path d="M 18 78 Q 36 68 54 78 Q 72 88 90 78 Q 102 70 106 74" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 24 88 Q 42 80 60 88 Q 78 96 96 88" stroke="#1D4ED8" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      {/* Cargo Vessel Keel & Superstructure */}
      <path
        d="M 28 66 L 90 66 L 98 72 L 24 72 Z"
        fill="#0284C7"
      />
      {/* Tiered Container Boxes on Vessel */}
      <rect x="36" y="52" width="14" height="12" rx="1" fill="#38BDF8" />
      <rect x="52" y="52" width="14" height="12" rx="1" fill="#F59E0B" />
      <rect x="68" y="52" width="14" height="12" rx="1" fill="#10B981" />
      <rect x="44" y="40" width="14" height="11" rx="1" fill="#60A5FA" />
      <rect x="60" y="40" width="14" height="11" rx="1" fill="#F97316" />
      {/* Bridge Mast */}
      <rect x="28" y="46" width="6" height="18" fill="#E2E8F0" />
      <line x1="31" y1="38" x2="31" y2="46" stroke="#94A3B8" strokeWidth="1.5" />
      <circle cx="31" cy="38" r="1.5" fill="#EF4444" />
    </svg>
  </div>
);

export const CustomsClearanceVector: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="60" cy="60" r="54" stroke="#1E293B" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="46" stroke="#10B981" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
      {/* Customs Declaration Passport / Manifest Shield */}
      <path
        d="M 60 26 
           L 84 36 
           C 84 62, 72 80, 60 88 
           C 48 80, 36 62, 36 36 
           Z"
        fill="#0F172A"
        stroke="#38BDF8"
        strokeWidth="1.8"
      />
      {/* Internal Security Seal Pattern */}
      <path
        d="M 60 36 
           L 76 43 
           C 76 60, 67 72, 60 78 
           C 53 72, 44 60, 44 43 
           Z"
        fill="#1E293B"
      />
      {/* Approved Checkmark & Electronic Border Release */}
      <path
        d="M 50 56 L 57 63 L 71 48"
        stroke="#10B981"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Barcode Lines at Bottom */}
      <line x1="48" y1="94" x2="48" y2="102" stroke="#64748B" strokeWidth="2" />
      <line x1="53" y1="94" x2="53" y2="102" stroke="#64748B" strokeWidth="1" />
      <line x1="57" y1="94" x2="57" y2="102" stroke="#64748B" strokeWidth="2.5" />
      <line x1="63" y1="94" x2="63" y2="102" stroke="#64748B" strokeWidth="1" />
      <line x1="67" y1="94" x2="67" y2="102" stroke="#64748B" strokeWidth="2" />
      <line x1="72" y1="94" x2="72" y2="102" stroke="#64748B" strokeWidth="1.5" />
    </svg>
  </div>
);
