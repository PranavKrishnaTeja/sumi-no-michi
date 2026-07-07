/**
 * MOTION VOCABULARY
 *
 * One easing language for the whole piece. Ink does not bounce,
 * overshoot, or spin — it arrives, settles, and dries.
 *
 *  soak  — how text arrives (blur sharpening = wet ink drying)
 *  sweep — how large elements travel (a confident brush pull)
 *  draw  — how strokes trace themselves (steady hand)
 */
export const EASE = {
  soak: 'power3.out',
  sweep: 'power4.inOut',
  draw: 'power2.inOut',
} as const;

export const DUR = {
  fast: 0.5,
  base: 0.9,
  slow: 1.5,
} as const;

/** Media queries used to gate motion. */
export const MQ = {
  motionOK: '(prefers-reduced-motion: no-preference)',
  reduce: '(prefers-reduced-motion: reduce)',
  desktop: '(min-width: 900px)',
} as const;

export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia(MQ.reduce).matches;
