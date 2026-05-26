import React from 'react';

const SW = 1.6;

/* ─────────────────────────────────────────
   Gallery filter icon
───────────────────────────────────────── */
export const AllIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
  </svg>
);

/* ═══════════════════════════════════════════
   8 SERVICE ICONS
═══════════════════════════════════════════ */

/* FRAMING — house skeleton with pitched roof + visible studs */
export const FramingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
    {/* Roof */}
    <path d="M2 10L12 2l10 8" />
    {/* Ridge pole */}
    <path d="M12 2v8" />
    {/* Exterior walls */}
    <path d="M3 10v12h18V10" />
    {/* Vertical studs */}
    <path d="M8 10v12M16 10v12" />
    {/* Door rough opening */}
    <path d="M10.5 22v-6h3v6" />
    {/* Top plate */}
    <path d="M3 10h18" />
  </svg>
);

/* FINISHING — wide plastering trowel with smooth-finish arcs */
export const FinishingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
    {/* Trowel blade (trapezoid) */}
    <path d="M3 19h18l-3-8H6l-3 8z" />
    {/* Handle neck */}
    <path d="M12 11V7" />
    {/* Handle grip */}
    <path d="M9 7h6" />
    <path d="M10 5h4v2h-4z" />
    {/* Smooth finish lines radiating from trowel */}
    <path d="M6 19c0-3 2-5 6-5s6 2 6 5" />
  </svg>
);

/* BACKING — two vertical studs with three horizontal blocking bars */
export const BackingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
    {/* Studs */}
    <path d="M5 2v20M19 2v20" />
    {/* Top plate */}
    <rect x="3" y="2" width="18" height="2.5" rx="0.5" />
    {/* Bottom plate */}
    <rect x="3" y="19.5" width="18" height="2.5" rx="0.5" />
    {/* Blocking #1 */}
    <rect x="5" y="7.5" width="14" height="2.5" rx="0.5" />
    {/* Blocking #2 */}
    <rect x="5" y="13.5" width="14" height="2.5" rx="0.5" />
  </svg>
);

/* SHEATHING — two OSB/plywood panels with grain lines + nail dots */
export const SheathingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
    {/* Left panel */}
    <rect x="1.5" y="2" width="10" height="20" rx="0.5" />
    {/* Right panel */}
    <rect x="12.5" y="2" width="10" height="20" rx="0.5" />
    {/* Grain / horizontal joint lines */}
    <path d="M1.5 10h10M1.5 16h10" />
    <path d="M12.5 8h10M12.5 15h10" />
    {/* Corner nail dots */}
    <circle cx="4"  cy="4.5" r="0.7" fill="currentColor" />
    <circle cx="9"  cy="4.5" r="0.7" fill="currentColor" />
    <circle cx="15" cy="4.5" r="0.7" fill="currentColor" />
    <circle cx="20" cy="4.5" r="0.7" fill="currentColor" />
    <circle cx="4"  cy="19.5" r="0.7" fill="currentColor" />
    <circle cx="9"  cy="19.5" r="0.7" fill="currentColor" />
    <circle cx="15" cy="19.5" r="0.7" fill="currentColor" />
    <circle cx="20" cy="19.5" r="0.7" fill="currentColor" />
  </svg>
);

/* TRUSSES — Fink / W-truss with top chords, bottom chord & webbing */
export const TrussIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
    {/* Bottom chord */}
    <path d="M2 20h20" />
    {/* Top chords (rafters) */}
    <path d="M2 20L12 4l10 16" />
    {/* Centre vertical (king post) */}
    <path d="M12 4v10" />
    {/* W-webbing diagonals */}
    <path d="M2 20l5-6M22 20l-5-6" />
    <path d="M7 14l5-10 5 10" />
    {/* Queen post verticals */}
    <path d="M7 14v6M17 14v6" />
  </svg>
);

/* STUCCO — wall surface with concentric arc swirl (trowel marks) */
export const StuccoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
    {/* Wall border */}
    <rect x="2" y="2" width="20" height="20" rx="1" />
    {/* Trowel swirl marks top-left */}
    <path d="M5 8c0-1.7 1.3-3 3-3" />
    <path d="M5 11c0-3.3 2.7-6 6-6" />
    {/* Trowel swirl marks bottom-right */}
    <path d="M19 16c0 1.7-1.3 3-3 3" />
    <path d="M19 13c0 3.3-2.7 6-6 6" />
    {/* Centre texture dots */}
    <circle cx="10" cy="11" r="0.7" fill="currentColor" />
    <circle cx="13" cy="10" r="0.7" fill="currentColor" />
    <circle cx="14" cy="14" r="0.7" fill="currentColor" />
    <circle cx="10" cy="15" r="0.7" fill="currentColor" />
  </svg>
);

/* INSULATION — batting rolls between wall studs (classic pink-batt look) */
export const InsulationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
    {/* Left & right studs */}
    <path d="M4 2v20M20 2v20" />
    {/* Batt 1 — top */}
    <path d="M4 3c1.5 0 1.5 3 3 3s1.5-3 3-3 1.5 3 3 3 1.5-3 3-3 1.5 3 4 3" />
    <path d="M4 9c1.5 0 1.5-3 3-3s1.5 3 3 3 1.5-3 3-3 1.5 3 3 3 1.5-3 4-3" />
    {/* Batt 2 — middle */}
    <path d="M4 10c1.5 0 1.5 3 3 3s1.5-3 3-3 1.5 3 3 3 1.5-3 3-3 1.5 3 4 3" />
    <path d="M4 16c1.5 0 1.5-3 3-3s1.5 3 3 3 1.5-3 3-3 1.5 3 3 3 1.5-3 4-3" />
    {/* Batt 3 — bottom */}
    <path d="M4 17c1.5 0 1.5 3 3 3s1.5-3 3-3 1.5 3 3 3 1.5-3 3-3 1.5 3 4 3" />
    <path d="M4 22c1.5 0 1.5-3 3-3s1.5 3 3 3 1.5-3 3-3 1.5 3 3 3 1.5-3 4-3" />
  </svg>
);

/* HANGING — large drywall sheet with seam tape lines + screw pattern */
export const HangingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
    {/* Sheet */}
    <rect x="2" y="3" width="20" height="16" rx="0.5" />
    {/* Vertical tape/seam lines */}
    <path d="M9 3v16M15 3v16" />
    {/* Horizontal mid joint */}
    <path d="M2 11h20" />
    {/* Screw fastener dots — top row */}
    <circle cx="5.5" cy="5.5" r="0.8" fill="currentColor" />
    <circle cx="12"  cy="5.5" r="0.8" fill="currentColor" />
    <circle cx="18.5" cy="5.5" r="0.8" fill="currentColor" />
    {/* Screw fastener dots — bottom row */}
    <circle cx="5.5" cy="16.5" r="0.8" fill="currentColor" />
    <circle cx="12"  cy="16.5" r="0.8" fill="currentColor" />
    <circle cx="18.5" cy="16.5" r="0.8" fill="currentColor" />
    {/* Lift arrows below */}
    <path d="M7 22l-2-3h4l-2 3zM12 22l-2-3h4l-2 3zM17 22l-2-3h4l-2 3z" fill="currentColor" stroke="none" />
  </svg>
);

/* ═══════════════════════════════════════════
   Legacy icons (kept for Gallery filter etc.)
═══════════════════════════════════════════ */
export const CommercialIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22V4a1 1 0 011-1h14a1 1 0 011 1v18" /><path d="M2 22h20" />
    <path d="M8 8h2M14 8h2" /><path d="M8 12h2M14 12h2" /><path d="M8 16h2M14 16h2" />
    <path d="M10 22v-5h4v5" />
  </svg>
);
export const ResidentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11L12 3l9 8" /><path d="M5 9.5V22h14V9.5" /><path d="M9 22v-7h6v7" />
  </svg>
);
export const DrywallIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3"  width="20" height="5" rx="1" />
    <rect x="2" y="10" width="20" height="5" rx="1" />
    <rect x="2" y="17" width="20" height="5" rx="1" />
  </svg>
);
export const EpoxyFloorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12l4 5-10 13L2 8l4-5z" /><path d="M2 8h20" />
    <path d="M12 8l3-5M12 8l-3-5" /><path d="M12 8v13" />
  </svg>
);
export const WallCoveringIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="13" height="7" rx="1" />
    <path d="M15 6h2.5A1.5 1.5 0 0119 7.5v1A1.5 1.5 0 0117.5 10H15" />
    <line x1="8" y1="11" x2="8" y2="20" /><path d="M5 20h6" />
  </svg>
);
export const PowerWashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 17l5-5 9-5" /><path d="M17 7l2-3 3 1-1 3-4-1z" />
    <path d="M8 12l-5 5" /><path d="M3 17h5v2H3z" />
    <path d="M16 10l2 5M18 8l2 4M20 6l2 3" />
  </svg>
);
export const PaintingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.37 2.63L14 7l-1.59-1.59a2 2 0 00-2.82 0L8 7l9 9 1.59-1.59a2 2 0 000-2.82L17 10l4.37-4.37a2.12 2.12 0 00-3-3z" />
    <path d="M9 8c-2 3-4 3.5-7 4l8 8c1-.5 3.5-2 4-7" />
  </svg>
);
export const FlooringIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 5h18M3 10h18M3 15h18M3 20h18M7 5v15M12 5v15M17 5v15" />
  </svg>
);
export const WaterproofingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
export const TextureIcon = WallCoveringIcon;
export const StuccoIconLegacy = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16v16H4z" /><path d="M4 12h16M12 4v16" />
    <circle cx="8" cy="8" r="0.5" fill="currentColor" /><circle cx="16" cy="16" r="0.5" fill="currentColor" />
  </svg>
);

export const TradeIcons = {
  /* ── 8 main services ── */
  framing:      <FramingIcon />,
  finishing:    <FinishingIcon />,
  backing:      <BackingIcon />,
  sheathing:    <SheathingIcon />,
  trusses:      <TrussIcon />,
  stucco:       <StuccoIcon />,
  insulation:   <InsulationIcon />,
  hanging:      <HangingIcon />,
  /* ── legacy / gallery ── */
  all:           <AllIcon />,
  commercial:    <CommercialIcon />,
  resident:      <ResidentIcon />,
  drywall:       <DrywallIcon />,
  epoxyFloor:    <EpoxyFloorIcon />,
  wallCovering:  <WallCoveringIcon />,
  powerWash:     <PowerWashIcon />,
  painting:      <PaintingIcon />,
  flooring:      <FlooringIcon />,
  waterproofing: <WaterproofingIcon />,
  texture:       <WallCoveringIcon />,
};
