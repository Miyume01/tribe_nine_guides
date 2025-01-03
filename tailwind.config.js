/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{js,jsx,ts,tsx}',
    './**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'tribe-nav-purple': '#54086B',
        'tribe-nav-purple-light': '#7A2A8D', // Lighter shade
        'tribe-nav-purple-dark': '#3B0051', // Darker shade
        'tribe-nav-purple-bar': '#00BEC5',
        'tribe-nav-purple-bar-light': '#33D6D9', // Lighter shade
        'tribe-nav-purple-bar-dark': '#009B9D', // Darker shade
      },
    },
  },
  plugins: [],
}

