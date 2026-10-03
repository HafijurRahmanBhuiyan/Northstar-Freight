import React from 'react';

/**
 * Large Container Cargo Ship Vector Illustration for Ocean Freight Scene
 * Richly layered with tiered container stacks, navigational bridge tower,
 * bulbous bow, draft markings, and water line details.
 */
export const CargoShipArtwork: React.FC<{
  className?: string;
  hullOffset?: number;
}> = ({ className = '', hullOffset = 0 }) => {
  return (
    <div className={`relative select-none ${className}`}>
      <svg
        viewBox="0 0 880 340"
        className="w-full h-auto drop-shadow-2xl overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Northstar Transpacific Container Vessel"
      >
        <defs>
          {/* Hull Gradients */}
          <linearGradient id="shipHull" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="55%" stopColor="#0F172A" />
            <stop offset="75%" stopColor="#881337" />
            <stop offset="100%" stopColor="#4C0519" />
          </linearGradient>

          <linearGradient id="bridgeWhite" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          <linearGradient id="oceanWaveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0284C7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="waterReflection" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0A1128" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* CONTAINER STACKS (Positioned onto deck bays) */}
        {/* Tiered stacks from stern to bow */}
        <g id="containerBays">
          {/* Bay 1 (Stern stack, behind bridge) */}
          <g transform="translate(60, 110)">
            {/* Row 1 */}
            <rect x="0" y="32" width="68" height="24" rx="1.5" fill="#1D4ED8" stroke="#0F172A" strokeWidth="1" />
            <rect x="70" y="32" width="68" height="24" rx="1.5" fill="#F97316" stroke="#0F172A" strokeWidth="1" />
            {/* Row 2 */}
            <rect x="2" y="6" width="66" height="24" rx="1.5" fill="#047857" stroke="#0F172A" strokeWidth="1" />
            <rect x="70" y="6" width="68" height="24" rx="1.5" fill="#1E3A8A" stroke="#0F172A" strokeWidth="1" />
            {/* Container Ribs */}
            <line x1="22" y1="34" x2="22" y2="54" stroke="#60A5FA" strokeWidth="0.8" />
            <line x1="44" y1="34" x2="44" y2="54" stroke="#60A5FA" strokeWidth="0.8" />
            <line x1="92" y1="34" x2="92" y2="54" stroke="#FED7AA" strokeWidth="0.8" />
            <line x1="114" y1="34" x2="114" y2="54" stroke="#FED7AA" strokeWidth="0.8" />
          </g>

          {/* Bay 2 (Forward of Bridge - Main Tiered Cargo) */}
          <g transform="translate(305, 52)">
            {/* Lowest Tier (4 blocks) */}
            <rect x="0" y="90" width="76" height="26" rx="1.5" fill="#1E3A8A" stroke="#0F172A" strokeWidth="1" />
            <rect x="78" y="90" width="76" height="26" rx="1.5" fill="#D97706" stroke="#0F172A" strokeWidth="1" />
            <rect x="156" y="90" width="76" height="26" rx="1.5" fill="#047857" stroke="#0F172A" strokeWidth="1" />
            <rect x="234" y="90" width="76" height="26" rx="1.5" fill="#1D4ED8" stroke="#0F172A" strokeWidth="1" />
            <rect x="312" y="90" width="76" height="26" rx="1.5" fill="#475569" stroke="#0F172A" strokeWidth="1" />

            {/* Second Tier */}
            <rect x="0" y="62" width="76" height="26" rx="1.5" fill="#B91C1C" stroke="#0F172A" strokeWidth="1" />
            <rect x="78" y="62" width="76" height="26" rx="1.5" fill="#1E3A8A" stroke="#0F172A" strokeWidth="1" />
            <rect x="156" y="62" width="76" height="26" rx="1.5" fill="#F59E0B" stroke="#0F172A" strokeWidth="1" />
            <rect x="234" y="62" width="76" height="26" rx="1.5" fill="#065F46" stroke="#0F172A" strokeWidth="1" />
            <rect x="312" y="62" width="76" height="26" rx="1.5" fill="#1D4ED8" stroke="#0F172A" strokeWidth="1" />

            {/* Third Tier */}
            <rect x="4" y="34" width="72" height="26" rx="1.5" fill="#0284C7" stroke="#0F172A" strokeWidth="1" />
            <rect x="78" y="34" width="76" height="26" rx="1.5" fill="#047857" stroke="#0F172A" strokeWidth="1" />
            <rect x="156" y="34" width="76" height="26" rx="1.5" fill="#1E3A8A" stroke="#0F172A" strokeWidth="1" />
            <rect x="234" y="34" width="76" height="26" rx="1.5" fill="#E11D48" stroke="#0F172A" strokeWidth="1" />

            {/* Top Tier (High Value / Star Flagged) */}
            <rect x="80" y="6" width="74" height="26" rx="1.5" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.2" />
            <rect x="156" y="6" width="76" height="26" rx="1.5" fill="#1D4ED8" stroke="#0F172A" strokeWidth="1" />
            {/* Top Container Star Emblem */}
            <path
              d="M 112 14 L 114 18 L 118 19 L 114 20 L 112 24 L 110 20 L 106 19 L 110 18 Z"
              fill="#38BDF8"
            />
            <text x="122" y="22" fill="#E2E8F0" fontSize="6" fontWeight="700" fontFamily="sans-serif">
              NORTHSTAR
            </text>

            {/* Vertical Container Rib Texture */}
            {Array.from({ length: 24 }).map((_, i) => (
              <line
                key={i}
                x1={10 + i * 16}
                y1="64"
                x2={10 + i * 16}
                y2="114"
                stroke="#FFFFFF"
                strokeWidth="0.6"
                strokeOpacity="0.25"
              />
            ))}
          </g>
        </g>

        {/* BRIDGE SUPERSTRUCTURE (Navigation Tower & Accommodation) */}
        <g id="shipBridge" transform="translate(205, 54)">
          {/* Main White Tower Deck Block */}
          <rect x="0" y="24" width="85" height="92" rx="2" fill="url(#bridgeWhite)" stroke="#0F172A" strokeWidth="1.5" />

          {/* Cabin Port-hole Windows */}
          {Array.from({ length: 4 }).map((_, r) => (
            <g key={r}>
              {Array.from({ length: 6 }).map((_, c) => (
                <rect
                  key={c}
                  x={10 + c * 11}
                  y={40 + r * 14}
                  width="6"
                  height="7"
                  rx="1"
                  fill="#0369A1"
                  stroke="#0F172A"
                  strokeWidth="0.6"
                />
              ))}
            </g>
          ))}

          {/* Overhanging Navigation Bridge Deck (Top) */}
          <path
            d="M -10 12 L 95 12 L 88 26 L -3 26 Z"
            fill="#E2E8F0"
            stroke="#0F172A"
            strokeWidth="1.5"
          />
          {/* Bridge Continuous Panoramic Windshield */}
          <rect x="-6" y="14" width="97" height="9" rx="1" fill="#0284C7" stroke="#0F172A" strokeWidth="0.8" />
          <line x1="-4" y1="18" x2="88" y2="18" stroke="#BAE6FD" strokeWidth="1" strokeOpacity="0.7" />

          {/* Radar Antennas & Communication Mast */}
          <line x1="42" y1="-14" x2="42" y2="12" stroke="#475569" strokeWidth="2.5" />
          <line x1="28" y1="-4" x2="56" y2="-4" stroke="#475569" strokeWidth="1.5" />
          {/* Spinning Radar Scanner T-bar */}
          <line x1="32" y1="-12" x2="52" y2="-12" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <circle cx="42" cy="-14" r="2" fill="#EF4444" />
          {/* Satellite Radome Domes */}
          <circle cx="22" cy="6" r="6" fill="#F8FAFC" stroke="#64748B" strokeWidth="1" />
          <circle cx="62" cy="6" r="6" fill="#F8FAFC" stroke="#64748B" strokeWidth="1" />

          {/* Smokestack / Funnel (Aft of Bridge) */}
          <g transform="translate(-24, 18)">
            <path d="M 0 30 L 4 0 L 20 0 L 20 30 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
            <rect x="4" y="0" width="16" height="7" fill="#0284C7" />
            {/* Star insignia on funnel */}
            <polygon points="12,12 14,16 18,17 14,18 12,22 10,18 6,17 10,16" fill="#F8FAFC" />
          </g>
        </g>

        {/* SHIP HULL & BULBOUS BOW (Main Steel Body) */}
        <g id="mainHull">
          {/* Transom Stern, Main Keel, Raked Stem & Bulbous Bow */}
          <path
            d="M 40 168 
               L 720 168 
               C 770 170, 815 195, 835 225
               C 850 248, 842 270, 825 275
               C 805 280, 770 274, 750 268
               L 80 268
               C 55 268, 38 245, 36 215
               Z"
            fill="url(#shipHull)"
            stroke="#020617"
            strokeWidth="2.5"
          />

          {/* Boot-topping White Waterline Pinstripe */}
          <path
            d="M 42 228 L 795 228 C 812 238, 824 250, 828 260"
            stroke="#F8FAFC"
            strokeWidth="2"
            strokeOpacity="0.8"
          />

          {/* Forward Bulwark & Railings */}
          <path
            d="M 700 168 L 785 168 L 780 160 L 700 160 Z"
            fill="#334155"
            stroke="#0F172A"
            strokeWidth="1.2"
          />
          {/* Mooring Hawse Holes & Anchor Pocket */}
          <ellipse cx="780" cy="186" rx="5" ry="3.5" fill="#020617" stroke="#475569" strokeWidth="1" />
          <path d="M 780 189 L 778 202 M 774 200 C 778 205, 782 205, 786 200" stroke="#64748B" strokeWidth="1.5" />

          {/* Draft Marks at Bow (Roman/Metric Depth Scale) */}
          <g stroke="#F8FAFC" strokeWidth="0.8" strokeOpacity="0.7">
            <line x1="810" y1="230" x2="816" y2="230" />
            <line x1="810" y1="236" x2="815" y2="236" />
            <line x1="810" y1="242" x2="816" y2="242" />
            <line x1="810" y1="248" x2="815" y2="248" />
            <line x1="810" y1="254" x2="816" y2="254" />
          </g>

          {/* Ship Name Plate on Bow */}
          <text
            x="715"
            y="184"
            fill="#F8FAFC"
            fontSize="8"
            fontWeight="800"
            letterSpacing="0.1em"
            fontFamily="sans-serif"
          >
            NORTHSTAR POLARIS
          </text>
          <text
            x="715"
            y="193"
            fill="#94A3B8"
            fontSize="6"
            fontWeight="600"
            fontFamily="monospace"
          >
            IMO 9821940 · MONROVIA
          </text>
        </g>

        {/* OCEAN WATER SURFACE & WAKE DYNAMICS */}
        <g id="oceanWake" transform="translate(0, 240)">
          {/* Under-hull Deep Reflection */}
          <ellipse cx="440" cy="30" rx="420" ry="24" fill="url(#waterReflection)" />

          {/* Stern Propeller Wake Foaming */}
          <path
            d="M 0 24 Q 40 10 90 26 Q 140 38 180 22"
            stroke="#93C5FD"
            strokeWidth="3"
            strokeOpacity="0.7"
            strokeLinecap="round"
          />
          <path
            d="M 10 32 Q 60 18 120 34"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeOpacity="0.6"
            strokeLinecap="round"
          />

          {/* Midship Hull Wave Creases */}
          <path
            d="M 180 20 Q 320 32 460 20 Q 600 8 720 22"
            stroke="#38BDF8"
            strokeWidth="2.5"
            strokeOpacity="0.8"
            strokeLinecap="round"
          />

          {/* Dynamic Bow Wave & Breaking Foam Spray */}
          <path
            d="M 720 22 Q 770 12 815 14 Q 860 18 880 28"
            stroke="#BAE6FD"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 760 16 Q 810 4 845 10 Q 870 18 878 26"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeOpacity="0.9"
            strokeLinecap="round"
          />

          {/* Atmospheric Water Wave Overlay Strip */}
          <path
            d="M 0 35 C 150 15, 300 45, 450 25 C 600 5, 750 40, 880 25 L 880 60 L 0 60 Z"
            fill="url(#oceanWaveGrad)"
          />
        </g>
      </svg>
    </div>
  );
};
