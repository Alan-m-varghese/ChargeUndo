/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080A09',
        'background-secondary': '#111411',
        'accent-green': '#8CF06B',
        'secondary-green': '#39DCA8',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A5A1',
        brand: {
          dark: '#080A09',
          surface: '#111411',
          card: '#131814',
          cardHover: '#18201a',
          accent: '#8CF06B',
          accentHover: '#9ef581',
          accentSecondary: '#39DCA8',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: 'rgba(255, 255, 255, 0.04)',
          borderActive: 'rgba(140, 240, 107, 0.3)',
          muted: '#A0A5A1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(140, 240, 107, 0.25)',
        'glow-md': '0 0 25px rgba(140, 240, 107, 0.35)',
        'glow-lg': '0 0 45px rgba(140, 240, 107, 0.45)',
      }
    },
  },
  plugins: [],
}
