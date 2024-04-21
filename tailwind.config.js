/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        fade : 'fadeout 10s infinite'
      },
      keyframes: {
        fadeout: {
          '0%' : {
            opacity: 1,
          },
          '2%' : {
            opacity: 0,
          },
          '3%' : {
            opacity: 0,
          },
          '5%' : {
            opacity: 1,
          },
          '8%': {
            opacity: 0,
          },
          '98%':{
            opacity: 0,
          }
        },
      },
    },
  },
  plugins: [],
}

