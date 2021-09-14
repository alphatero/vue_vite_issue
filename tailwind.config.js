// const colors = require('tailwindcss/colors')

// eslint-disable-next-line no-undef
module.exports = {
  mode: 'jit',
  purge: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    themeVariants: ['kemp', 'hr', 'lucent'],
    extend: {
      colors: {
        kemp: '#F7B500',
        lucent: {
          DEFAULT: '#F4B839',
          dark: '#F09400',
          light: '#fbe3b0',
        },
        orange: '#fd7e14',
      },
      backgroundImage: {
        'logo-kemp': "url('./src/assets/KempLogo.png')",
        'logo-lucent': "url('./src/assets/LOGO_dark.png')",
        'logo-lucent-md': "url('./src/assets/LOGO_light.png')",
      },
      boxShadow: {
        dark: '0 2px 2px 0 rgba(0, 0, 0, .7)',
        solid: 'inset 0px -4px 0px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeOut: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-100px)',
          },
        },
        fadeRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px)',
          },
        },
        fadeLeft: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0px)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(-100px)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out',
        fadeOut: 'fadeOut 0.4s ease-out',
        fadeRight: 'fadeRight 0.3s ease-out',
        fadeLeft: 'fadeLeft 0.3s ease-out',
      },
    },
    variants: {
      extend: {

      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-multi-theme')],
};
