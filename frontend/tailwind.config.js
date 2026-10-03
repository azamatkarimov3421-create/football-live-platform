/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pitch: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          glow: '#00ff87',
        },
        stadium: {
          950: '#070b12',
          900: '#0d131f',
          850: '#121a2b',
          800: '#1a243b',
          700: '#263452',
          600: '#394d75',
          border: '#1f2e4d',
        },
        neon: {
          green: '#00ff87',
          blue: '#00d2ff',
          amber: '#ffb703',
          red: '#ff3366',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 25px -5px rgba(0, 255, 135, 0.3)',
        'glow-blue': '0 0 25px -5px rgba(0, 210, 255, 0.3)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-fast': 'pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
