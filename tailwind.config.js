module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grayBackground: '#faf9f5',
        mediumBrown: '#AC886B',
        
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('../assets/images/casamucha.jpg')"
      }),
      fontFamily: {
        serif: ['Roboto Slab'],
        sans: ['Source Sans Pro']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}