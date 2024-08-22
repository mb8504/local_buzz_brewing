/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PT Sans Narrow, sans-serif']
      },
      colors: {
        'navBlack': '#121212',
      }
    },
  },
  plugins: [],
}