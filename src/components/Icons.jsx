const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

export function Logo({ className = "h-8 w-8" }) {
  // Real BT4YOU spherical network mark (from the product)
  return <img src="/brand/logo.svg" alt="BT4YOU" className={className} />
}

export const Arrow = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg>
)
export const Play = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M8 5v14l11-7L8 5Z" /></svg>
)
export const Check = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 12.5l4.5 4.5L20 6" /></svg>
)
export const Cross = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
)

// control / capability icons
export const Tracking = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></svg>
)
export const Meetings = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 5h16v10H7l-3 3V5Z" /><path d="M8 9h8M8 12h5" /></svg>
)
export const Agreements = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M6 3h8l4 4v14H6V3Z" /><path d="M14 3v4h4" /><path d="M9 13l2 2 4-4" /></svg>
)
export const Tasks = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 12l2.5 2.5L16 9" /></svg>
)
export const Comms = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 6h16v10H8l-4 3V6Z" /><path d="M8 10h.01M12 10h.01M16 10h.01" /></svg>
)
export const Decisions = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 18l5-6 4 3 7-9" /><path d="M20 6h-4M20 6v4" /></svg>
)

export const Finance = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 19V5M4 19h16" /><path d="M8 16v-4M12 16V8M16 16v-7" /></svg>
)

export const controlIcons = {
  FINANCE: Finance,
  TRACKING: Tracking,
  MEETINGS: Meetings,
  AGREEMENTS: Agreements,
  TASKS: Tasks,
  COMMUNICATION: Comms,
  DECISIONS: Decisions,
}
