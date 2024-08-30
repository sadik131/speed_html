/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'], 
      },
      colors: {
        'custom-blue-light': '#2C89FF',
        'custom-blue-dark': '#1660BE',
        'custom-blue-light-alt': '#2C5E9D',
        'custom-blue-dark-alt': '#013576',
      },
     
    },
  },
  plugins: [],
}
