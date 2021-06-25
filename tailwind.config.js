const colors = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      backgroundColor: '#062021',
      white: '#fff' 
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
