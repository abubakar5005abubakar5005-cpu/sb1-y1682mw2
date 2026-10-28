/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          burgundy: '#1A030E',
          burgundySoft: '#2B0A1C',
          gold: '#D4AF37',
          goldLight: '#F4E8C1',
          obsidian: '#0A0A0A',
          ivory: '#FAFAFA',
          muted: '#E8D7A8',
          panel: '#170910',
          border: '#5B3B2C',
        },
      },
      boxShadow: {
        royal: '0 18px 48px rgba(212, 175, 55, 0.18)',
        glow: '0 10px 30px rgba(244, 232, 193, 0.18)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F4E8C1 0%, #D4AF37 50%, #A87800 100%)',
      },
      fontFamily: {
        display: ['var(--font-cinzel)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0%' },
          '100%': { backgroundPosition: '-200% 0%' },
        },
      },
      animation: {
        shimmer: 'shimmer 5s linear infinite',
      },
    },
  },
  plugins: [],
};
