/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation:{
        fade : 'fadeout 20s infinite',
        skew : 'skew 20s infinite',
        moveabit : 'moveabit 3s infinite'
      },
      keyframes: {
        moveabit :{
          '0%, 100%' : {
            transform: 'translate(0%,0%)',
          },
          '20%' : {
            transform: 'translate(10%,5%)',
          },
          '40%' : {
            transform: 'translate(25%,10%)',
          },
        },
        skew : {
          '0%, 100%' : {
            transform: 'translate(0%,0%) skew(0deg) ',
          },
          '10%' : {
            transform: 'translate(0%,0%) skew(0deg)',
          },
          '10.1%': {
            transform: 'translate(-1.2%,1.8%) skew(-10deg)',
          },
          '10.5%': {
            transform: 'translate(-1.2%,1.8%) skew(-10deg)',
          },
          '10.6%': {
            transform: 'translate(1.6%,-1.3%) skew(5deg)',
          },
          '11%': {
            transform: 'translate(0.6%,-1.3%) skew(5deg)',
          },
          '11.1%': {
            transform: 'translate(0%,0%) skew(0deg)',
          },
        },
        fadeout: {
          '0%' : {
            opacity: 1,
          },
          '15%' : {
            opacity: 1,
          },
          '25%': {
            opacity: 0,
          },
          '60%': {
            opacity: 0,
          },
          '90%':{
            opacity: 0,
          }
        },
      },
    },
  },
  plugins: [],
}

