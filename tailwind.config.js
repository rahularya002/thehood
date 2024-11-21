/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans-serif': ['Montserrat', 'sans-serif'], 
      },
      colors: {
        'skin': '#f7f4ed',
        'blk': '#242424'
      }
    },
  },
  plugins: [],
}

