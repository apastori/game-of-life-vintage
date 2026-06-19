/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brass: {
          DEFAULT: '#c9a227',
          light: '#e8c84a',
          dark: '#8b6914',
          muted: '#a68b3c',
        },
        copper: {
          DEFAULT: '#b87333',
          light: '#d4956a',
          dark: '#7a4a22',
        },
        walnut: {
          DEFAULT: '#3d2817',
          light: '#5c3d2a',
          dark: '#1f140c',
        },
        charcoal: {
          DEFAULT: '#1a1a1e',
          light: '#2a2a30',
          dark: '#0d0d0f',
        },
        amber: {
          DEFAULT: '#ffb347',
          glow: '#ff9f1c',
          dim: '#cc7a2e',
        },
        monitor: {
          DEFAULT: '#39ff14',
          dim: '#2db810',
          glow: '#5cff3a',
        },
        warning: {
          DEFAULT: '#cc3333',
          dim: '#992626',
        },
        steel: {
          DEFAULT: '#4a6fa5',
          light: '#6b8fc4',
          dark: '#2d4a6e',
        },
        oxidized: {
          DEFAULT: '#4a5d4a',
          light: '#6b7d6b',
        },
        bakelite: {
          DEFAULT: '#2a2420',
          light: '#3d3530',
          dark: '#1a1614',
        },
      },
      fontFamily: {
        display: ['"Saira Stencil One"', '"Black Ops One"', 'sans-serif'],
        label: ['Oswald', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
      },
      boxShadow: {
        panel: 'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -2px 4px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.5)',
        'panel-raised': '0 2px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)',
        screw: 'inset 0 1px 2px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.1)',
        'button-raised': '0 3px 0 #0d0d0f, 0 5px 8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
        'button-pressed': 'inset 0 3px 6px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.04)',
        'button-hover': '0 5px 0 #0d0d0f, 0 8px 16px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
        chamber: 'inset 0 0 40px rgba(0,0,0,0.8), inset 0 2px 4px rgba(0,0,0,0.5), 0 0 0 3px #5c3d2a, 0 0 0 6px #8b6914',
        glow: '0 0 12px rgba(255,179,71,0.4), 0 0 24px rgba(255,179,71,0.2)',
        'glow-green': '0 0 8px rgba(57,255,20,0.5), 0 0 16px rgba(57,255,20,0.3)',
      },
      backgroundImage: {
        'brushed-metal': 'linear-gradient(135deg, #3d3530 0%, #2a2420 25%, #3d3530 50%, #2a2420 75%, #3d3530 100%)',
        walnut: 'linear-gradient(180deg, #5c3d2a 0%, #3d2817 40%, #1f140c 100%)',
        'glass-sheen': 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.04) 100%)',
        'amber-glow': 'radial-gradient(ellipse at center, rgba(255,179,71,0.15) 0%, transparent 70%)',
        vignette: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
      },
      keyframes: {
        'cell-birth': {
          '0%': { transform: 'scale(0.6)', opacity: '0.3', boxShadow: '0 0 0 rgba(255,179,71,0)' },
          '50%': { transform: 'scale(1.08)', opacity: '1', boxShadow: '0 0 8px rgba(255,179,71,0.8)' },
          '100%': { transform: 'scale(1)', opacity: '1', boxShadow: '0 0 4px rgba(255,179,71,0.4)' },
        },
        'cell-death': {
          '0%': { opacity: '1', filter: 'brightness(1)' },
          '40%': { opacity: '0.6', filter: 'brightness(0.8)' },
          '100%': { opacity: '0.15', filter: 'brightness(0.4)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.92' },
          '75%': { opacity: '0.97' },
        },
        blink: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 8px currentColor' },
          '50%': { opacity: '0.4', boxShadow: '0 0 2px currentColor' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'indicator-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        'cell-birth': 'cell-birth 0.35s ease-out forwards',
        'cell-death': 'cell-death 0.4s ease-out forwards',
        flicker: 'flicker 3s ease-in-out infinite',
        blink: 'blink 1.5s ease-in-out infinite',
        scanline: 'scanline 8s linear infinite',
        'indicator-pulse': 'indicator-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
