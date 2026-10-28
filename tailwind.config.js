/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Exact new prompt palette
          navy: '#10152B',       // Deep midnight navy
          indigo: '#1B1B45',     // Dark indigo
          violet: '#7657FF',     // Electric violet
          'violet-hover': '#6344E8',
          cyan: '#28D7E5',       // Bright cyan
          lavender: '#F0EDFF',   // Soft lavender
          'pale-blue': '#EAF3FF',// Pale blue
          bg: '#F5F6FC',         // Light neutral background
          card: '#FFFFFF',       // White
          text: '#161B32',       // Main text
          muted: '#68708A',      // Secondary text
          success: '#10B981',

          // Compatibility aliases
          blue: '#7657FF',
          'blue-hover': '#6344E8',
          purple: '#7657FF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-violet': '0 0 35px -5px rgba(118, 87, 255, 0.25)',
        'glow-cyan': '0 0 35px -5px rgba(40, 215, 229, 0.25)',
        'premium': '0 10px 30px -5px rgba(16, 21, 43, 0.08), 0 4px 12px -2px rgba(16, 21, 43, 0.04)',
      }
    },
  },
  plugins: [],
}
