/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: '#0A0F24', // Deep Midnight Blue
        goldAccent: '#C5A880',  // Warm Champagne Gold
        goldBrand: '#D97706',   // Shimmering Golden Amber
        terracotta: '#C2410C',  // Elegant Terracotta Red-Orange
        sandBg: '#FCFAF7',      // Warm Alabaster/Cream background
        charcoalText: '#1E293B',
        creamBg: '#FFFDF9',
        greyBorder: '#E2E8F0',
        pureWhite: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        bengali: ['Hind Siliguri', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
