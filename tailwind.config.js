/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./menPage.html",
    "./womenPage.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'move-right':{
          '0% , 100%' : {transform: 'translateX(5px)'},
          '50%': {transform: 'translateX(0)'}
        }
      },
      animation:{
        'move-right': 'move-right 1.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}