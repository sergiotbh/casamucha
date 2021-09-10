module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grayBackground: {
          DEFAULT: '#faf9f5'
        }
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('../assets/images/casamucha.jpg')"
      }),
      fontFamily: {
        body: ['Merriweather']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}