/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:['Inter']
      },
      animation:{
        "loop-scroll":"loop-scroll 50s linear infinite",
      },
      keyframes:{
        "loop-scroll":{
          from:{transform:"translateX(0%)"},
          to:{transform: "translateX(-100%)"}
        }
      },
    },
  },
  plugins: [],
}

