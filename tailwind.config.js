
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          purple: '#8b5cf6',
          pink: '#ec4899',
          blue: '#3b82f6',
          dark: '#0f172a',
        }
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%)',
      }
    },
  },
  plugins: [],
}
