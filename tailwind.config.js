/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tealBrand: '#0E7490',
        goldBrand: '#D97706',
        sandBg: '#FAF7F2',
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
