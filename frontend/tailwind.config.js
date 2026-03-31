/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'Inter', 'sans-serif'],
      },
      colors: {
        navy:    '#080d1a',
        dark:    '#0a0f1e',
        darker:  '#060a14',
        surface: '#0f1629',
        glass:   'rgba(255,255,255,0.04)',
        cyan:    '#22d3ee',
        sky:     '#38bdf8',
        violet:  '#818cf8',
        pink:    '#f472b6',
        muted:   '#64748b',
        subtle:  '#334155',
      },
      animation: {
        'drift-slow':   'drift 9s ease-in-out infinite',
        'drift-rev':    'drift 11s ease-in-out infinite reverse',
        'drift-alt':    'drift 7s ease-in-out infinite 2s',
        'spin-slow':    'spin 10s linear infinite',
        'spin-rev':     'spin 14s linear infinite reverse',
        'pulse-glow':   'pulseGlow 2s ease-in-out infinite',
        'float':        'float 6s ease-in-out infinite',
        'float-delay':  'float 6s ease-in-out infinite 3s',
        'marquee':      'marquee 28s linear infinite',
        'blink':        'blink .9s step-end infinite',
        'shimmer':      'shimmer 2s linear infinite',
        'bounce-y':     'bounceY 2s ease-in-out infinite',
        'glow-pulse':   'glowPulse 3s ease-in-out infinite',
        'slide-up':     'slideUp .5s ease forwards',
        'fade-in':      'fadeIn .6s ease forwards',
      },
      keyframes: {
        drift: {
          '0%,100%': { transform: 'translateY(0) scale(1)' },
          '50%':     { transform: 'translateY(-28px) scale(1.07)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 14px rgba(34,211,238,0.35)' },
          '50%':     { boxShadow: '0 0 40px rgba(34,211,238,0.65)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%,100%': { opacity: 1 },
          '50%':     { opacity: 0 },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        bounceY: {
          '0%,100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%':     { transform: 'translateX(-50%) translateY(9px)' },
        },
        glowPulse: {
          '0%,100%': { opacity: 0.07 },
          '50%':     { opacity: 0.14 },
        },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to:   { opacity: 1 },
        },
      },
      backgroundImage: {
        'grad-primary':   'linear-gradient(135deg, #1e788a, #0284C7)',
        'grad-cyan':      'linear-gradient(135deg, #22d3ee, #38bdf8)',
        'grad-aurora':    'linear-gradient(135deg, #22d3ee, #818cf8, #f472b6)',
        'grad-text':      'linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%)',
        'grad-accent':    'linear-gradient(90deg, #1e788a, #22d3ee, #0284C7)',
      },
    },
  },
  plugins: [],
}
