import React from 'react';

/**
 * Modern High-Detail Cargo Freighter Aircraft Vector Illustration
 * Layered with sweeping swept-wings, turbofan engines, aerodynamic winglets,
 * cockpit flight deck, fuselage cargo doors, and twin vapor contrails.
 */
export const AirplaneArtwork: React.FC<{
  className?: string;
  bankAngle?: number;
}> = ({ className = '', bankAngle = 0 }) => {
  return (
    <div className={`relative select-none ${className}`}>
      <svg
        viewBox="0 0 720 280"
        className="w-full h-auto drop-shadow-xl overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Northstar Air Cargo Freighter Aircraft"
      >
        <defs>
          <linearGradient id="fuselageBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F1F5F9" />
            <stop offset="85%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>

          <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="60%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          <linearGradient id="engineNacelle" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B132B" />
            <stop offset="35%" stopColor="#1E293B" />
            <stop offset="70%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          <linearGradient id="contrailGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0" />
            <stop offset="70%" stopColor="#BAE6FD" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="cockpitGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Condensation Vapor Contrails trailing from engine exhausts */}
        <g id="contrails" opacity="0.85">
          <path
            d="M -120 180 C 40 182, 160 178, 280 172"
            stroke="url(#contrailGrad)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M -180 195 C 20 196, 180 190, 310 184"
            stroke="url(#contrailGrad)"
            strokeWidth="12"
            strokeLinecap="round"
          />
        </g>

        {/* Port (Far) Wing & Engine in perspective */}
        <g id="farWing">
          <polygon
            points="290,105 380,48 425,48 350,110"
            fill="url(#wingGradient)"
            stroke="#94A3B8"
            strokeWidth="1"
          />
          {/* Far Winglet */}
          <polygon points="425,48 435,28 428,28 420,48" fill="#0284C7" />
          {/* Far Engine Nacelle */}
          <rect x="330" y="70" width="46" height="18" rx="7" fill="url(#engineNacelle)" stroke="#0F172A" strokeWidth="1" />
          <ellipse cx="376" cy="79" rx="5" ry="9" fill="#0284C7" />
        </g>

        {/* Horizontal & Vertical Tailplane Stabilizer */}
        <g id="tailFin">
          {/* Horizontal Tailplane (Far) */}
          <polygon points="120,110 80,82 105,82 145,115" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />

          {/* Swept Vertical Stabilizer Tail Fin */}
          <path
            d="M 175 118 L 88 12 Q 82 8 76 10 L 62 10 L 98 125 Z"
            fill="#0F172A"
            stroke="#020617"
            strokeWidth="1.5"
          />
          {/* Tail Fin Livery Accent */}
          <path
            d="M 125 120 L 76 10 L 62 10 L 80 120 Z"
            fill="#1D4ED8"
          />
          {/* Northstar Compass Star on Tail Fin */}
          <g transform="translate(90, 36) scale(0.9)">
            <polygon
              points="14,0 18,10 28,14 18,18 14,28 10,18 0,14 10,10"
              fill="#38BDF8"
            />
            <circle cx="14" cy="14" r="3" fill="#FFFFFF" />
          </g>
        </g>

        {/* MAIN FUSELAGE HULL */}
        <g id="fuselage">
          {/* Streamlined Nose Cone to APU Tailcone */}
          <path
            d="M 80 128
               C 100 124, 180 118, 300 115
               L 520 112
               C 580 112, 630 124, 650 138
               C 662 146, 660 156, 642 162
               C 610 170, 560 172, 480 172
               L 260 170
               C 160 170, 95 152, 70 138
               C 62 134, 68 130, 80 128 Z"
            fill="url(#fuselageBody)"
            stroke="#64748B"
            strokeWidth="1.5"
          />

          {/* Cockpit Flight Deck Panoramic Windows */}
          <path
            d="M 622 132 L 642 142 L 634 148 L 615 142 Z"
            fill="url(#cockpitGlass)"
            stroke="#0F172A"
            strokeWidth="1"
          />
          <line x1="628" y1="135" x2="626" y2="145" stroke="#0F172A" strokeWidth="1" />
          <line x1="635" y1="139" x2="633" y2="146" stroke="#0F172A" strokeWidth="1" />

          {/* Main Deck Forward Cargo Loading Door Outline */}
          <rect
            x="510"
            y="124"
            width="55"
            height="36"
            rx="3"
            fill="none"
            stroke="#0284C7"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          <circle cx="560" cy="142" r="2" fill="#0284C7" />
          <text x="514" y="132" fill="#0284C7" fontSize="5" fontWeight="700" fontFamily="monospace">
            CARGO DOOR
          </text>

          {/* Fuselage Brand Typography */}
          <g transform="translate(310, 134)">
            <text
              x="0"
              y="14"
              fill="#0F172A"
              fontSize="16"
              fontWeight="800"
              letterSpacing="0.08em"
              fontFamily="sans-serif"
            >
              NORTHSTAR
            </text>
            <text
              x="138"
              y="14"
              fill="#0284C7"
              fontSize="16"
              fontWeight="800"
              letterSpacing="0.08em"
              fontFamily="sans-serif"
            >
              AIR
            </text>
            <text
              x="0"
              y="25"
              fill="#64748B"
              fontSize="6.5"
              fontWeight="600"
              letterSpacing="0.12em"
              fontFamily="sans-serif"
            >
              GLOBAL MULTIMODAL LOGISTICS · HEAVY FREIGHT DIVISION
            </text>
          </g>

          {/* Aircraft Registration Code */}
          <text
            x="160"
            y="156"
            fill="#475569"
            fontSize="7"
            fontWeight="700"
            fontFamily="monospace"
          >
            N784NS · B777F
          </text>
        </g>

        {/* Starboard (Near) Main Wing & High-Bypass Turbofan Engine */}
        <g id="nearWing">
          {/* Swept Wing Surface */}
          <polygon
            points="310,148 450,215 485,215 390,145"
            fill="url(#wingGradient)"
            stroke="#64748B"
            strokeWidth="1.2"
          />
          {/* Winglet Raked Upward */}
          <polygon points="485,215 500,242 490,242 478,215" fill="#0284C7" stroke="#0369A1" strokeWidth="0.8" />
          {/* Wingtip Green Navigation Strobe */}
          <circle cx="496" cy="238" r="3" fill="#10B981" />
          <circle cx="496" cy="238" r="6" fill="#10B981" fillOpacity="0.3" />

          {/* Slats and Flap Track Fairings under wing */}
          <rect x="360" y="172" width="22" height="7" rx="2" fill="#475569" />
          <rect x="400" y="192" width="20" height="6" rx="2" fill="#475569" />

          {/* Large GE90 / Trent Class Turbofan Engine Nacelle */}
          <g transform="translate(365, 160)">
            {/* Pylon mount */}
            <polygon points="12,0 28,0 24,12 8,12" fill="#475569" />
            {/* Engine Cowling */}
            <rect
              x="0"
              y="10"
              width="68"
              height="28"
              rx="12"
              fill="url(#engineNacelle)"
              stroke="#020617"
              strokeWidth="1.5"
            />
            {/* Front Air Intake Fan Cowl */}
            <ellipse cx="66" cy="24" rx="7" ry="13" fill="#0F172A" stroke="#CBD5E1" strokeWidth="1.5" />
            {/* Fan Spinner Cone */}
            <polygon points="66,24 54,21 54,27" fill="#F8FAFC" />
            {/* Exhaust Cone (Aft) */}
            <ellipse cx="2" cy="24" rx="4" ry="9" fill="#0369A1" />
          </g>
        </g>
      </svg>
    </div>
  );
};
