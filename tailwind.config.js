module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          900: '#0b0e11',
          800: '#151a21',
          700: '#242c37',
          600: '#323d4d',
          300: '#5d7290',
          200: '#b2bdcd',
          100: '#dee3ea',
          button: '#fff',
          accent: '#fd4d4d',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
