/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors : {
      "primary" : '#141A31',
      "secoundary" : '#14C2A3',
      "white" : "#fff",
      "thard" : "#04fc43",
      "info" : "#050301"
    },
    extend: { 
      fontFamily : {
        Lobster: ['Lobster', 'cursive'],
        Noto: ['Noto Sans Mono', 'monospace'],
        Roboto : ['Mulish', 'sans-serif']
      },
      boxShadow : {
        "3xl" : "0 0 16px",
        "2xl" : "0 0 8px",
        "skillshadow" : "0 0 10px 0 0 30px",
        "chackBoxShadow" : "inset 0 0 5px rgba(0,0,0,.2)",
        "chackBoxBeforeShadow" : "inset 0 2px 5px rgba(0,0,0,.2)"
      },      
     
      backgroundImage: {
        circlarLight : 'repeating-radial-gradient(#14C2A3 2px, transparent 5px, transparent 100px)'
      },
    },

    
  },
  plugins: [],
}
