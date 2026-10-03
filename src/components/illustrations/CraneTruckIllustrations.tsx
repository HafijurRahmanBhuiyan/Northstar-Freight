import React from 'react';

/**
 * High-detail dimensional SVG artwork for the Crane, Shipping Container, and Flatbed Truck.
 * Built with layered geometry, shadows, metallic gradients, and realistic industrial details.
 */

// 40ft Shipping Container in Northstar Freight Livery
export const ContainerArtwork: React.FC<{
  className?: string;
  isLocked?: boolean;
}> = ({ className = '', isLocked = false }) => {
  return (
    <div className={`relative select-none ${className}`}>
      <svg
        viewBox="0 0 380 130"
        className="w-full h-auto drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Northstar Freight 40ft Shipping Container"
      >
        <defs>
          <linearGradient id="containerBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="25%" stopColor="#1D4ED8" />
            <stop offset="85%" stopColor="#172554" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <linearGradient id="containerRib" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#1D4ED8" />
            <stop offset="70%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="cornerCasting" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          <filter id="shadowFilter" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Shell & Main Body */}
        <rect
          x="10"
          y="15"
          width="360"
          height="100"
          rx="4"
          fill="url(#containerBody)"
          stroke="#0F172A"
          strokeWidth="2.5"
        />

        {/* Top Rim Highlight */}
        <line x1="12" y1="18" x2="368" y2="18" stroke="#60A5FA" strokeWidth="1.5" strokeOpacity="0.6" />

        {/* Corrugated Vertical Ribs */}
        {Array.from({ length: 22 }).map((_, i) => {
          const x = 24 + i * 15;
          return (
            <g key={i}>
              <rect x={x} y="20" width="9" height="90" fill="url(#containerRib)" />
              <line x1={x} y1="20" x2={x} y2="110" stroke="#93C5FD" strokeWidth="0.8" strokeOpacity="0.5" />
              <line x1={x + 9} y1="20" x2={x + 9} y2="110" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.7" />
            </g>
          );
        })}

        {/* Branding Plate (Center) */}
        <rect x="110" y="32" width="160" height="42" rx="3" fill="#0A1128" fillOpacity="0.9" stroke="#38BDF8" strokeWidth="1" />
        <g transform="translate(120, 42)">
          {/* Compass Star Icon */}
          <path
            d="M 12 0 L 15 9 L 24 12 L 15 15 L 12 24 L 9 15 L 0 12 L 9 9 Z"
            fill="#38BDF8"
          />
          <text
            x="32"
            y="13"
            fill="#FFFFFF"
            fontSize="11"
            fontWeight="800"
            letterSpacing="0.1em"
            fontFamily="system-ui, sans-serif"
          >
            NORTHSTAR
          </text>
          <text
            x="32"
            y="23"
            fill="#94A3B8"
            fontSize="7"
            fontWeight="600"
            letterSpacing="0.15em"
            fontFamily="system-ui, sans-serif"
          >
            GLOBAL FREIGHT · ISO 668
          </text>
        </g>

        {/* Container Serial & Specs Typography */}
        <text
          x="285"
          y="32"
          fill="#E2E8F0"
          fontSize="7.5"
          fontWeight="700"
          fontFamily="ui-monospace, monospace"
        >
          NSFU 984021 [4]
        </text>
        <text
          x="285"
          y="42"
          fill="#94A3B8"
          fontSize="6"
          fontWeight="600"
          fontFamily="ui-monospace, monospace"
        >
          45G1 · MAX GROSS
        </text>
        <text
          x="285"
          y="50"
          fill="#CBD5E1"
          fontSize="6"
          fontWeight="600"
          fontFamily="ui-monospace, monospace"
        >
          32,500 KG / 71,650 LB
        </text>

        {/* Safety Decals & Hazard Badges */}
        <rect x="25" y="78" width="14" height="14" rx="1" fill="#F59E0B" stroke="#78350F" strokeWidth="0.8" />
        <path d="M 28 89 L 32 81 L 36 89 Z" fill="#78350F" />
        
        <rect x="44" y="78" width="14" height="14" rx="1" fill="#EF4444" stroke="#7F1D1D" strokeWidth="0.8" />
        <circle cx="51" cy="85" r="4" fill="#FFFFFF" />

        {/* Four Heavy Steel Corner Castings */}
        {/* Top-Left */}
        <rect x="8" y="13" width="14" height="14" rx="2" fill="url(#cornerCasting)" stroke="#0F172A" strokeWidth="1" />
        <circle cx="15" cy="20" r="3" fill="#0F172A" />
        {/* Top-Right */}
        <rect x="358" y="13" width="14" height="14" rx="2" fill="url(#cornerCasting)" stroke="#0F172A" strokeWidth="1" />
        <circle cx="365" cy="20" r="3" fill="#0F172A" />
        {/* Bottom-Left */}
        <rect x="8" y="103" width="14" height="14" rx="2" fill="url(#cornerCasting)" stroke="#0F172A" strokeWidth="1" />
        <circle cx="15" cy="110" r="3" fill="#0F172A" />
        {/* Bottom-Right */}
        <rect x="358" y="103" width="14" height="14" rx="2" fill="url(#cornerCasting)" stroke="#0F172A" strokeWidth="1" />
        <circle cx="365" cy="110" r="3" fill="#0F172A" />

        {/* Locking Indicator Lights when Settled */}
        {isLocked && (
          <g>
            <circle cx="15" cy="110" r="2.5" fill="#10B981" />
            <circle cx="365" cy="110" r="2.5" fill="#10B981" />
          </g>
        )}
      </svg>
    </div>
  );
};

// Spreader Bar and Hoist Cables
export const SpreaderBarArtwork: React.FC<{
  cableHeight?: number;
}> = ({ cableHeight = 80 }) => {
  return (
    <div className="relative w-[380px] select-none pointer-events-none">
      <svg
        viewBox="0 0 380 120"
        className="w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="spreaderMetal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Dual Hoist Steel Cables */}
        <line
          x1="55"
          y1={-cableHeight}
          x2="55"
          y2="70"
          stroke="#475569"
          strokeWidth="3"
          strokeDasharray="4 2"
        />
        <line
          x1="325"
          y1={-cableHeight}
          x2="325"
          y2="70"
          stroke="#475569"
          strokeWidth="3"
          strokeDasharray="4 2"
        />

        {/* Cable Pulley Sheaves */}
        <circle cx="55" cy="68" r="7" fill="#334155" stroke="#1E293B" strokeWidth="2" />
        <circle cx="55" cy="68" r="2.5" fill="#94A3B8" />
        <circle cx="325" cy="68" r="7" fill="#334155" stroke="#1E293B" strokeWidth="2" />
        <circle cx="325" cy="68" r="2.5" fill="#94A3B8" />

        {/* Heavy Telescopic Spreader Beam */}
        <rect
          x="30"
          y="72"
          width="320"
          height="16"
          rx="2"
          fill="url(#spreaderMetal)"
          stroke="#78350F"
          strokeWidth="1.5"
        />

        {/* Caution Chevrons on Spreader */}
        <g stroke="#78350F" strokeWidth="2" strokeLinecap="round">
          <line x1="60" y1="74" x2="66" y2="86" />
          <line x1="72" y1="74" x2="78" y2="86" />
          <line x1="84" y1="74" x2="90" y2="86" />
          <line x1="290" y1="74" x2="296" y2="86" />
          <line x1="302" y1="74" x2="308" y2="86" />
          <line x1="314" y1="74" x2="320" y2="86" />
        </g>

        {/* Center Hydraulic Pack */}
        <rect x="160" y="66" width="60" height="24" rx="2" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
        <rect x="175" y="70" width="30" height="8" rx="1" fill="#38BDF8" fillOpacity="0.8" />

        {/* Four Corner Twistlock Latches */}
        <rect x="22" y="86" width="16" height="14" fill="#1E293B" stroke="#0F172A" strokeWidth="1" />
        <polygon points="26,100 34,100 30,108" fill="#F59E0B" />

        <rect x="342" y="86" width="16" height="14" fill="#1E293B" stroke="#0F172A" strokeWidth="1" />
        <polygon points="346,100 354,100 350,108" fill="#F59E0B" />
      </svg>
    </div>
  );
};

// Gantry Crane Framework (Overhead portal frame)
export const CraneFrameworkArtwork: React.FC<{
  trolleyX?: number;
}> = ({ trolleyX = 0 }) => {
  return (
    <svg
      viewBox="0 0 1000 320"
      className="w-full h-auto select-none pointer-events-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="craneBeamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <pattern id="craneTruss" width="40" height="30" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="40" y2="30" stroke="#475569" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="40" y1="0" x2="0" y2="30" stroke="#475569" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="0" y1="30" x2="40" y2="30" stroke="#334155" strokeWidth="2" />
        </pattern>
      </defs>

      {/* Left Tower Stanchion & Diagonal Braces */}
      <g opacity="0.9">
        <rect x="40" y="30" width="30" height="290" fill="url(#craneBeamGrad)" />
        <rect x="120" y="30" width="24" height="290" fill="url(#craneBeamGrad)" />
        <rect x="40" y="30" width="104" height="270" fill="url(#craneTruss)" />
        {/* Rail Wheel Carriage Bottom */}
        <rect x="25" y="300" width="130" height="18" rx="2" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
        <circle cx="50" cy="316" r="8" fill="#475569" stroke="#0F172A" strokeWidth="2" />
        <circle cx="130" cy="316" r="8" fill="#475569" stroke="#0F172A" strokeWidth="2" />
      </g>

      {/* Right Tower Stanchion */}
      <g opacity="0.9">
        <rect x="856" y="30" width="24" height="290" fill="url(#craneBeamGrad)" />
        <rect x="930" y="30" width="30" height="290" fill="url(#craneBeamGrad)" />
        <rect x="856" y="30" width="104" height="270" fill="url(#craneTruss)" />
        {/* Rail Wheel Carriage Bottom */}
        <rect x="845" y="300" width="130" height="18" rx="2" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
        <circle cx="870" cy="316" r="8" fill="#475569" stroke="#0F172A" strokeWidth="2" />
        <circle cx="950" cy="316" r="8" fill="#475569" stroke="#0F172A" strokeWidth="2" />
      </g>

      {/* Main Overhead Horizontal Gantry Double-Girder Beam */}
      <rect x="10" y="18" width="980" height="42" fill="url(#craneBeamGrad)" stroke="#0F172A" strokeWidth="2" />
      <line x1="10" y1="20" x2="990" y2="20" stroke="#64748B" strokeWidth="1.5" />
      {/* Maintenance Walkway Handrails */}
      <line x1="20" y1="10" x2="980" y2="10" stroke="#64748B" strokeWidth="1.5" />
      {Array.from({ length: 30 }).map((_, i) => (
        <line key={i} x1={30 + i * 32} y1="10" x2={30 + i * 32} y2="18" stroke="#475569" strokeWidth="1.2" />
      ))}

      {/* Warning Hazard Stripes Along Crane Boom */}
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={i}
          x1={420 + i * 16}
          y1="22"
          x2={428 + i * 16}
          y2="42"
          stroke="#F59E0B"
          strokeWidth="3"
        />
      ))}

      {/* Overhead Trolley Carriage */}
      <g transform={`translate(${440 + trolleyX}, 46)`}>
        <rect x="-40" y="0" width="80" height="20" rx="3" fill="#D97706" stroke="#78350F" strokeWidth="1.5" />
        {/* Operator Cabin suspended under trolley */}
        <rect x="-35" y="16" width="30" height="26" rx="2" fill="#0F172A" stroke="#334155" strokeWidth="1.2" />
        <rect x="-30" y="20" width="20" height="16" fill="#38BDF8" fillOpacity="0.4" />
        {/* Cable Drum Winches */}
        <circle cx="15" cy="10" r="7" fill="#334155" />
        <circle cx="28" cy="10" r="7" fill="#334155" />
      </g>
    </svg>
  );
};

// Heavy Modern Flatbed Freight Truck
export const TruckArtwork: React.FC<{
  className?: string;
  hasLoadedCargo?: boolean;
}> = ({ className = '', hasLoadedCargo = false }) => {
  return (
    <div className={`relative select-none ${className}`}>
      <svg
        viewBox="0 0 540 180"
        className="w-full h-auto drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Northstar Heavy Flatbed Transport Truck"
      >
        <defs>
          <linearGradient id="cabBody" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B132B" />
            <stop offset="60%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <linearGradient id="windshield" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="chassisBeam" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          <linearGradient id="tireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>
        </defs>

        {/* Flatbed Trailer Chassis (Rear to Center) */}
        {/* Main longitudinal I-beam frame */}
        <rect x="10" y="96" width="375" height="14" rx="2" fill="url(#chassisBeam)" stroke="#0F172A" strokeWidth="1.5" />
        <rect x="8" y="90" width="380" height="7" rx="1" fill="#334155" stroke="#0F172A" strokeWidth="1.2" />

        {/* Chassis cross-members and tie-down hooks */}
        {Array.from({ length: 9 }).map((_, i) => (
          <circle key={i} cx={25 + i * 42} cy="103" r="2.5" fill="#0F172A" />
        ))}

        {/* Trailer Twist Locks (Front and Rear bolsters) */}
        <rect x="14" y="82" width="14" height="9" rx="1" fill="#F59E0B" stroke="#78350F" strokeWidth="1" />
        <rect x="368" y="82" width="14" height="9" rx="1" fill="#F59E0B" stroke="#78350F" strokeWidth="1" />

        {/* Mudguards over trailer axles */}
        <path d="M 40 92 Q 80 78 120 92 L 120 102 L 40 102 Z" fill="#0F172A" />
        <path d="M 125 92 Q 165 78 205 92 L 205 102 L 125 102 Z" fill="#0F172A" />

        {/* Underbody storage box & air tanks */}
        <rect x="220" y="102" width="55" height="20" rx="2" fill="#334155" stroke="#1E293B" strokeWidth="1.2" />
        <rect x="285" y="104" width="45" height="12" rx="6" fill="#64748B" stroke="#334155" strokeWidth="1" />

        {/* Semi-Tractor Cab (Front) */}
        <g transform="translate(360, 0)">
          {/* Cab rear panel & sleeper cabin */}
          <path
            d="M 10 90 L 10 24 Q 10 18 16 16 L 90 14 Q 115 14 125 40 L 148 78 Q 155 90 155 105 L 155 125 L 0 125 L 0 90 Z"
            fill="url(#cabBody)"
            stroke="#020617"
            strokeWidth="2"
          />

          {/* Aerodynamic Roof Fairing & Wind Deflector */}
          <path
            d="M 12 18 Q 65 6 95 12 L 85 24 L 14 24 Z"
            fill="#0284C7"
            stroke="#0369A1"
            strokeWidth="1"
          />

          {/* Windshield & Side Window */}
          <path
            d="M 85 24 L 118 42 L 140 76 L 90 76 L 85 24 Z"
            fill="url(#windshield)"
            stroke="#0F172A"
            strokeWidth="1.5"
          />
          {/* Side Door & Window */}
          <rect x="42" y="34" width="38" height="32" rx="2" fill="url(#windshield)" stroke="#0F172A" strokeWidth="1.2" />
          <line x1="40" y1="30" x2="40" y2="105" stroke="#0F172A" strokeWidth="1.5" />
          <rect x="44" y="70" width="8" height="3" rx="1" fill="#CBD5E1" />

          {/* Front Chrome Grille */}
          <rect x="144" y="80" width="16" height="32" rx="3" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
          <line x1="146" y1="86" x2="158" y2="86" stroke="#94A3B8" strokeWidth="1.5" />
          <line x1="146" y1="92" x2="158" y2="92" stroke="#94A3B8" strokeWidth="1.5" />
          <line x1="146" y1="98" x2="158" y2="98" stroke="#94A3B8" strokeWidth="1.5" />
          <line x1="146" y1="104" x2="158" y2="104" stroke="#94A3B8" strokeWidth="1.5" />

          {/* High-Intensity LED Headlights */}
          <polygon points="152,106 158,106 157,114 150,114" fill="#38BDF8" />
          <line x1="158" y1="110" x2="178" y2="110" stroke="#38BDF8" strokeWidth="3" strokeOpacity="0.4" strokeLinecap="round" />

          {/* Side Mirror */}
          <rect x="100" y="38" width="6" height="18" rx="2" fill="#0F172A" stroke="#334155" strokeWidth="1" />
          <line x1="92" y1="44" x2="100" y2="44" stroke="#0F172A" strokeWidth="1.5" />

          {/* Vertical Exhaust Stack behind cab */}
          <rect x="4" y="0" width="6" height="45" rx="2" fill="#94A3B8" stroke="#475569" strokeWidth="1" />
          <line x1="2" y1="0" x2="12" y2="4" stroke="#64748B" strokeWidth="1.2" />

          {/* Steer Axle Mudguard */}
          <path d="M 80 102 Q 115 88 150 102 L 150 115 L 80 115 Z" fill="#0F172A" />

          {/* Front Bumper & Air Dam */}
          <rect x="135" y="112" width="28" height="14" rx="2" fill="#0F172A" stroke="#334155" strokeWidth="1" />
        </g>

        {/* Wheels & Tires Assembly */}
        {/* Trailer Dual Axle 1 */}
        <g transform="translate(68, 126)">
          <circle cx="0" cy="0" r="24" fill="url(#tireGrad)" stroke="#0F172A" strokeWidth="2" />
          <circle cx="0" cy="0" r="14" fill="url(#rimGrad)" stroke="#475569" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="6" fill="#0F172A" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * Math.PI) / 4;
            return (
              <circle
                key={i}
                cx={Math.cos(angle) * 10}
                cy={Math.sin(angle) * 10}
                r="1.2"
                fill="#F8FAFC"
              />
            );
          })}
        </g>

        {/* Trailer Dual Axle 2 */}
        <g transform="translate(152, 126)">
          <circle cx="0" cy="0" r="24" fill="url(#tireGrad)" stroke="#0F172A" strokeWidth="2" />
          <circle cx="0" cy="0" r="14" fill="url(#rimGrad)" stroke="#475569" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="6" fill="#0F172A" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * Math.PI) / 4;
            return (
              <circle
                key={i}
                cx={Math.cos(angle) * 10}
                cy={Math.sin(angle) * 10}
                r="1.2"
                fill="#F8FAFC"
              />
            );
          })}
        </g>

        {/* Tractor Drive Axle */}
        <g transform="translate(415, 126)">
          <circle cx="0" cy="0" r="24" fill="url(#tireGrad)" stroke="#0F172A" strokeWidth="2" />
          <circle cx="0" cy="0" r="14" fill="url(#rimGrad)" stroke="#475569" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="6" fill="#0F172A" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * Math.PI) / 4;
            return (
              <circle
                key={i}
                cx={Math.cos(angle) * 10}
                cy={Math.sin(angle) * 10}
                r="1.2"
                fill="#F8FAFC"
              />
            );
          })}
        </g>

        {/* Tractor Steer Axle */}
        <g transform="translate(485, 126)">
          <circle cx="0" cy="0" r="24" fill="url(#tireGrad)" stroke="#0F172A" strokeWidth="2" />
          <circle cx="0" cy="0" r="14" fill="url(#rimGrad)" stroke="#475569" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="6" fill="#0F172A" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * Math.PI) / 4;
            return (
              <circle
                key={i}
                cx={Math.cos(angle) * 10}
                cy={Math.sin(angle) * 10}
                r="1.2"
                fill="#F8FAFC"
              />
            );
          })}
        </g>

        {/* Ground Asphalt Contact Shadow */}
        <ellipse cx="270" cy="154" rx="260" ry="6" fill="#0F172A" fillOpacity="0.3" filter="blur(3px)" />
      </svg>
    </div>
  );
};
