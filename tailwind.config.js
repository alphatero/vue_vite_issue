// const colors = require('tailwindcss/colors')

// eslint-disable-next-line no-undef
module.exports = {
  mode: 'jit',
  purge: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    themeVariants: ["kemp", "hr", "lucent"],
    extend: {
      colors: {
        kemp: '#F7B500',
        lucent: '#F4B839'
      },
      backgroundImage: {
        'logo-kemp': "url('./src/assets/KempLogo.png')",
        'logo-lucent': "url('./src/assets/LOGO_dark.png')",
        'logo-lucent-md': "url('./src/assets/LOGO_light.png')",
      }
    },
    variants: {
      extend: {
       
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-multi-theme")],
}