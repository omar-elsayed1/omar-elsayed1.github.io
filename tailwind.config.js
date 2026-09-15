/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08090A',
          900: '#0E0F12',
          800: '#17181C',
          700: '#212227',
          600: '#2C2D33',
          500: '#3A3B42',
        },
        paper: {
          100: '#F6F5F1',
          200: '#E7E5DE',
          300: '#C9C7C0',
          400: '#9B9A96',
          500: '#75746F',
        },
        gold: {
          200: '#F5DFA0',
          300: '#F0CE73',
          400: '#E7B84A',
          500: '#D5A22E',
          600: '#A97D1F',
          700: '#7C5B17',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(180deg, rgba(231,184,74,0) 0%, rgba(231,184,74,0.06) 100%)',
      },
    },
  },
  plugins: [],
}
