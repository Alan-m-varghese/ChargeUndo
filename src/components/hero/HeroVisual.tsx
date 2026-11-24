import React from 'react';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1100px] mx-auto flex flex-col items-center justify-end select-none overflow-visible">
      {/* Background ambient radial glow and floor vignette */}
      <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#080A09] to-transparent z-10 pointer-events-none" />
      <div className="absolute left-1/2 -bottom-6 sm:-bottom-8 -translate-x-1/2 w-[340px] xs:w-[520px] sm:w-[800px] h-[110px] sm:h-[160px] bg-[#8CF06B]/[0.08] rounded-full blur-[90px] pointer-events-none" />

      {/* Main Unified EV Car + Charger + Glowing Cable Artwork */}
      <div className="relative w-full flex items-end justify-center px-4 sm:px-6">
        <div className="relative w-full max-w-[920px] aspect-[960/380] flex items-end justify-center pointer-events-none">
          <svg
            className="w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)] overflow-visible"
            fill="none"
            viewBox="0 0 960 380"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Metallic body gradient with subtle highlights */}
              <linearGradient id="evBodyGrad" x1="120" y1="80" x2="680" y2="320" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#323d37" />
                <stop offset="25%" stopColor="#1e2722" />
                <stop offset="65%" stopColor="#121815" />
                <stop offset="100%" stopColor="#080c0a" />
              </linearGradient>

              {/* Tinted cabin glass with ambient sky reflection */}
              <linearGradient id="evRoofGlass" x1="280" y1="80" x2="540" y2="180" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3d4942" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#16201b" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#050806" />
              </linearGradient>

              {/* Headlight beam projection */}
              <linearGradient id="headlightBeam" x1="120" y1="235" x2="240" y2="255" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="35%" stopColor="#8CF06B" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#8CF06B" stopOpacity="0" />
              </linearGradient>

              {/* Alloy rim metallic sheen */}
              <linearGradient id="alloyRimGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#627068" />
                <stop offset="50%" stopColor="#1b241e" />
                <stop offset="100%" stopColor="#38433c" />
              </linearGradient>

              {/* Charger pillar body gradient */}
              <linearGradient id="chargerGrad" x1="755" y1="80" x2="865" y2="350" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1c2620" />
                <stop offset="50%" stopColor="#101612" />
                <stop offset="100%" stopColor="#070a08" />
              </linearGradient>

              {/* Glowing cable gradient */}
              <linearGradient id="cableGreen" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8CF06B" />
                <stop offset="100%" stopColor="#39DCA8" />
              </linearGradient>

              {/* Soft neon blur filter */}
              <filter id="neonBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Ground Contact Shadows */}
            <ellipse cx="430" cy="340" rx="350" ry="18" fill="#000000" filter="blur(14px)" opacity="0.92" />
            <ellipse cx="440" cy="336" rx="290" ry="9" fill="#000000" opacity="0.95" />
            <ellipse cx="810" cy="348" rx="75" ry="10" fill="#000000" filter="blur(8px)" opacity="0.8" />

            {/* Headlight beam projection forward on ground */}
            <polygon points="120,246 0,290 0,340 150,260" fill="url(#headlightBeam)" opacity="0.2" />

            {/* --- 1. CHARGER PILLAR (Placed at rear right) --- */}
            <g id="chargerPillar">
              {/* Pillar Body */}
              <rect
                x="755"
                y="85"
                width="112"
                height="260"
                rx="20"
                fill="url(#chargerGrad)"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.5"
              />

              {/* Charger Base Platform */}
              <rect
                x="740"
                y="342"
                width="142"
                height="10"
                rx="5"
                fill="#131815"
                stroke="rgba(255,255,255,0.08)"
              />

              {/* Top LED Indicator Blade */}
              <rect
                x="791"
                y="102"
                width="40"
                height="5"
                rx="2.5"
                fill="#8CF06B"
                filter="url(#neonBlur)"
              />

              {/* Embedded Digital Screen Frame */}
              <rect
                x="767"
                y="124"
                width="88"
                height="138"
                rx="14"
                fill="#040605"
                stroke="rgba(255,255,255,0.1)"
              />

              {/* Screen Readout: 150 kW | CCS 2 */}
              <text x="777" y="142" fill="#8CF06B" fontSize="9.5" fontFamily="monospace" fontWeight="700">
                150 kW
              </text>
              <text x="845" y="142" fill="#A0A5A1" fontSize="8.5" fontFamily="monospace" textAnchor="end">
                CCS 2
              </text>
              <line x1="777" y1="149" x2="845" y2="149" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

              {/* Screen Readout: 82% CHARGING */}
              <text x="811" y="186" fill="#FFFFFF" fontSize="28" fontFamily="monospace" fontWeight="900" textAnchor="middle">
                82<tspan fill="#8CF06B" fontSize="14">%</tspan>
              </text>
              <text x="811" y="202" fill="#8CF06B" fontSize="8" fontFamily="monospace" fontWeight="700" letterSpacing="2" textAnchor="middle">
                CHARGING
              </text>

              {/* Segmented Progress Gauge Bar */}
              <rect x="777" y="218" width="68" height="6.5" rx="3.25" fill="#151a17" stroke="rgba(255,255,255,0.08)" />
              <rect x="778" y="219" width="56" height="4.5" rx="2.25" fill="url(#cableGreen)" filter="url(#neonBlur)" />

              {/* Dispenser Socket Notch */}
              <rect x="793" y="304" width="36" height="10" rx="5" fill="#090c0a" stroke="#252e28" strokeWidth="1.5" />
            </g>

            {/* --- 2. EV SPORTS SEDAN VEHICLE --- */}
            <g id="evCar">
              {/* Vehicle Aerodynamic Body Shell */}
              <path
                d="M 105 250 C 118 225, 150 210, 215 200 C 285 188, 350 135, 428 112 C 495 95, 615 118, 680 172 C 725 200, 758 225, 768 252 C 772 270, 762 284, 722 294 C 682 302, 205 306, 125 294 C 102 285, 96 270, 105 250 Z"
                fill="url(#evBodyGrad)"
                stroke="#3f4d44"
                strokeWidth="1.5"
              />

              {/* Cabin Glasshouse */}
              <path
                d="M 240 192 C 290 148, 355 116, 426 110 C 490 105, 580 124, 634 175 C 576 180, 370 184, 240 192 Z"
                fill="url(#evRoofGlass)"
                stroke="#2a362e"
                strokeWidth="1.5"
              />

              {/* Aerodynamic Shoulder Lightline Accent */}
              <path
                d="M 215 202 C 285 192, 450 175, 670 178"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1.2"
              />

              {/* Window Pillar Separator */}
              <path d="M 450 112 L 460 182" stroke="#121714" strokeWidth="5" />

              {/* Sleek Headlight Blade */}
              <path
                d="M 120 242 Q 170 240 220 228 Q 170 252 130 254 Z"
                fill="url(#headlightBeam)"
                opacity="0.95"
              />
              <circle cx="128" cy="242" r="2.5" fill="#ffffff" filter="drop-shadow(0 0 4px #8CF06B)" />

              {/* Front Lower Air Dam */}
              <path d="M 120 265 Q 165 285 205 282" fill="none" stroke="#222b26" strokeWidth="2.5" />

              {/* Front Wheel Arch & Aero Rim */}
              <g transform="translate(185, 238)">
                <circle cx="45" cy="48" r="42" fill="#080a09" stroke="#212a24" strokeWidth="3" />
                <circle cx="45" cy="48" r="32" fill="none" stroke="url(#alloyRimGrad)" strokeWidth="4.5" />
                <circle cx="45" cy="48" r="18" fill="#0e1310" stroke="#2c372f" strokeWidth="2" />
                <circle cx="45" cy="48" r="6" fill="#1b221d" stroke="#8CF06B" strokeWidth="1.5" />
              </g>

              {/* Rear Wheel Arch & Aero Rim */}
              <g transform="translate(565, 238)">
                <circle cx="45" cy="48" r="42" fill="#080a09" stroke="#212a24" strokeWidth="3" />
                <circle cx="45" cy="48" r="32" fill="none" stroke="url(#alloyRimGrad)" strokeWidth="4.5" />
                <circle cx="45" cy="48" r="18" fill="#0e1310" stroke="#2c372f" strokeWidth="2" />
                <circle cx="45" cy="48" r="6" fill="#1b221d" stroke="#8CF06B" strokeWidth="1.5" />
              </g>

              {/* Vehicle Charging Port Door with Neon Halo */}
              <circle
                cx="685"
                cy="216"
                r="8"
                fill="#0d120f"
                stroke="#8CF06B"
                strokeWidth="2.5"
                filter="url(#neonBlur)"
              />
              <circle cx="685" cy="216" r="3" fill="#8CF06B" />
            </g>

            {/* --- 3. GLOWING NEON CABLE: Anchored directly from car port (685, 216) to charger socket (793, 309) --- */}
            <g id="chargingCable">
              {/* Ambient neon blur aura */}
              <path
                d="M 685 216 C 685 320, 730 355, 793 309"
                fill="none"
                stroke="#8CF06B"
                strokeWidth="11"
                strokeOpacity="0.25"
                filter="blur(7px)"
              />
              {/* Solid electric green cable */}
              <path
                d="M 685 216 C 685 320, 730 355, 793 309"
                fill="none"
                stroke="#8CF06B"
                strokeWidth="4"
                strokeLinecap="round"
                className="glow-cable"
              />
              {/* Inner animated electron dash core */}
              <path
                d="M 685 216 C 685 320, 730 355, 793 309"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.6"
                strokeLinecap="round"
                className="energy-flow-cable"
              />
            </g>
          </svg>
        </div>

        {/* Desktop/Tablet Floating Stats Card - Anchored on the bottom-left with generous spacing */}
        <div className="hidden sm:block absolute left-6 lg:left-10 bottom-3 lg:bottom-6 z-30 pointer-events-auto">
          <div className="backdrop-blur-xl bg-[#090E0B]/90 border border-white/[0.08] px-5 py-3 rounded-2xl flex items-center gap-6 shadow-[0_15px_30px_rgba(0,0,0,0.75)] relative overflow-hidden">
            <div className="absolute -left-4 -bottom-4 w-14 h-14 bg-[#8CF06B]/15 rounded-full blur-xl pointer-events-none" />

            <div>
              <div className="text-xl font-bold tracking-tight text-white flex items-baseline">
                1,200<span className="text-[#8CF06B] text-sm font-normal">+</span>
              </div>
              <div className="text-[10px] text-zinc-400 whitespace-nowrap">
                Mapped <span className="text-white font-medium">Stations</span>
              </div>
            </div>

            <div className="w-[1px] h-6 bg-white/10" />

            <div>
              <div className="text-xl font-bold tracking-tight text-white flex items-baseline">
                100<span className="text-[#8CF06B] text-sm font-normal">%</span>
              </div>
              <div className="text-[10px] text-zinc-400 whitespace-nowrap">
                Verified <span className="text-white font-medium">Hosts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Only: Relaxed, spacious Telemetry Bar placed comfortably below the visual */}
      <div className="flex sm:hidden justify-center w-full mt-6 px-4 z-30 pointer-events-auto">
        <div className="backdrop-blur-2xl bg-[#0A0E0C]/90 border border-white/[0.1] px-6 py-3 rounded-2xl flex items-center justify-around w-full max-w-[340px] shadow-[0_10px_25px_rgba(0,0,0,0.8)] relative overflow-hidden">
          <div className="absolute -left-4 -bottom-4 w-12 h-12 bg-[#8CF06B]/15 rounded-full blur-lg pointer-events-none" />

          <div className="text-center relative z-10">
            <div className="text-base font-bold text-white flex items-baseline justify-center tracking-tight">
              1,200<span className="text-[#8CF06B] text-xs font-semibold ml-0.5">+</span>
            </div>
            <div className="text-[10px] text-zinc-400 font-medium mt-0.5">
              Mapped Stations
            </div>
          </div>

          <div className="w-[1px] h-6 bg-white/10 relative z-10" />

          <div className="text-center relative z-10">
            <div className="text-base font-bold text-white flex items-baseline justify-center tracking-tight">
              100<span className="text-[#8CF06B] text-xs font-semibold ml-0.5">%</span>
            </div>
            <div className="text-[10px] text-zinc-400 font-medium mt-0.5">
              Verified Hosts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};