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
        'size':' 0px 0px 1px 2px inset'
      },
      colors: {
        'logo-blue': '#00bec5',
        'selected-tab': '#54086b',
        'ex-mode': '#ff0bac',
        'page-background': '#131431',
        'middle-background': 'rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}

