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
      "thard" : "#04fc43"
    },
    extend: { 
      fontFamily : {
        Noto: ['Noto Sans Mono', 'monospace'],
        Roboto : ['Roboto', 'sans-serif']
      },
      boxShadow : {
        "3xl" : "0 0 16px",
        "2xl" : "0 0 8px",
        "skillshadow" : "0 0 10px 0 0 30px"
      },
     
      backgroundImage: {
        circlarLight : 'repeating-radial-gradient(#14C2A3 2px, transparent 5px, transparent 100px)'
      },
    },

    
  },
  plugins: [],
}
