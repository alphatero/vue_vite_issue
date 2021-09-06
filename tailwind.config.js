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
        lucent: {
          default: '#F4B839',
          dark: '#F09400'
        },
        orange: '#fd7e14',
      },
      backgroundImage: {
        'logo-kemp': "url('./src/assets/KempLogo.png')",
        'logo-lucent': "url('./src/assets/LOGO_dark.png')",
        'logo-lucent-md': "url('./src/assets/LOGO_light.png')",
      },
      boxShadow: {
        dark: '0 2px 2px 0 rgba(0, 0, 0, .7)'
      },
    },
    variants: {
      extend: {
       
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-multi-theme")],
}