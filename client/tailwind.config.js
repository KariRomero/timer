/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'white':'#e4e4e7',
      'black':'#09090b',
      'green':'#84cc16'
    },
    fontFamily:{
      sans:["Teko", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}