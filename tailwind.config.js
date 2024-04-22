import { transform } from 'typescript';

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
            opacity: 0,
          },
          '10%' : {
            opacity: 0,
          },
          '20%': {
            opacity: 1,
          },
          '30%': {
            opacity: 0,
          },
          '100%':{
            opacity: 0,
          }
        },
      },
    },
  },
  plugins: [],
}

