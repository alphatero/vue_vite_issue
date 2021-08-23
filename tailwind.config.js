// const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    themeVariants: ["k", "h", "l"],
    extend: {
      colors: {
        k: '#F7B500',
      },
    },
    variants: {
      extend: {
       
      }
    },
  },
  plugins: [require("tailwindcss-multi-theme")],
}