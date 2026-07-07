import type { Config } from 'tailwindcss';

/**
 * DESIGN TOKENS — 墨の道 / The Way of Ink
 *
 * washi  — handmade paper. The world everything lives on.
 * sumi   — ink, in four dilutions (900 wet black → 300 faded wash).
 * shu    — muted vermilion. ONLY the hanko seal may use it.
 * ai     — dark indigo. Reserved; unused in v1 on purpose.
 * kin    — antique gold. Reserved; unused in v1 on purpose.
 *
 * Restraint is the palette.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        washi: { DEFAULT: '#F5F1E8', deep: '#ECE6D8' },
        sumi: {
          950: '#0D0B08',
          900: '#16130E',
          700: '#2B2620',
          500: '#5A544B',
          300: '#9B948A',
        },
        shu: '#8E3B2F',
        ai: '#2C3A4F',
        kin: '#9C7E46',
      },
      fontFamily: {
        display: ['"Shippori Mincho"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide2: '0.18em',
        calligraphy: '0.35em',
      },
      transitionTimingFunction: {
        ink: 'cubic-bezier(0.22, 0.08, 0.14, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
