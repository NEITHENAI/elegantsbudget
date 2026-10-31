/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        uganda: {
          dark: '#0f172a',
          navy: '#1e293b',
          blue: '#1d4ed8',
          gold: '#d97706',
          yellow: '#facc15',
          red: '#dc2626'
        }
      }
    },
  },
  plugins: [],
}
