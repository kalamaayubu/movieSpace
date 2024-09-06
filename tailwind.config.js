/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js,tsx,ts}",
  ],
  theme: {
    extend: {
      zIndex: {
        '15':'15', // Custom z-index for the card overlay when hovered
        '55':'55', // Custom z-index for the watching page
      }
    },
  },
  plugins: [],
}

