/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        'cairo': ['Cairo Play', 'sans-serif'],
        'dotgothic': ['DotGothic16', 'sans-serif'],
        'fugaz': ['Fugaz One', 'sans-serif'],
        'josefin': ['Josefin Sans', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'tiny5': ['Tiny5', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
      },
      
      boxShadow: {
        'card':' 15px 15px 50px',
        'size':' 0px 0px 1px 2px inset',
        'nav-glow':' 0px 50px 50px 8px #00bec5',
      },

      dropShadow: {
        'glow': "0 0 10px #00F5FF, 0 0 20px #00F5FF",
      },

      colors: {
        'logo-blue': '#00bec5',
        'selected-tab': '#54086b',
        'ex-mode': '#ff0bac',
        'page-background': '#131431',
        'middle-background': 'rgba(0, 0, 0, 0.2)',
      },

      backgroundImage: {
        'gradient-left-right': 'linear-gradient(to left,#FF0BAC, #00BEC5)',
      },

      screens: {
        'mobile': '480px',
      },
    },
  },
  plugins: [],
}

