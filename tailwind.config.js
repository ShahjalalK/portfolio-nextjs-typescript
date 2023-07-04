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
      "white" : "#fff"
    },
    extend: { 
      fontFamily : {
        Noto: ['Noto Sans Mono', 'monospace'],
      },
      boxShadow : {
        "3xl" : "0 0 16px"
      },    
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },

    
  },
  plugins: [],
}
