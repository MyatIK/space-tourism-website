/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primary:['Bellefair'],
        secondary: ['Barlow_Condensed']
      }
    },
  },
  plugins: [],
}

