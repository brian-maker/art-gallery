/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bigShoulders: ['"Big Shoulders Display"','sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
      },
      fontWeight: {
        bigShoulders800: 800,
        bigShoulders900: 900,
        outfit300: 300,
      },
      colors: {
        'white':'hsl(0, 0%, 100%)',
        'gold': 'hsl(24, 56%, 63%)',
        'lightBlack':'hsl(0, 0%, 8%)',
        'darkGrey':'hsl(0, 0%, 27%)',
        'paracolor':'rgb(68, 68, 68)'
      },
      screens:{
        'custom-md':'900px',
      }
    },
  },
  plugins: [],
}