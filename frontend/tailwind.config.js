/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      colors: {
        navy:  '#0A0F1E',
        glass: 'rgba(255,255,255,0.04)',
      },
      animation: {
        'drift-slow': 'drift 8s ease-in-out infinite',
        'spin-slow':  'spin 12s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
