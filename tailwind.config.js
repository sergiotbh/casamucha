module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grayBackground: '#faf9f5',
        white: {
          default: '#ffffff',
          background: "#FFFCF8"
        },
        brown: {
          100: '#F6F2EF',
          200: '#d3b094',
          300: '#AC886B',
          400: '#705844',
          500: '#745842',
          600: "#7B5231",
          700: "#44240A"
        }
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('../assets/images/casamucha.jpg')",
        'texture-1': "url('../assets/images/backgroundTextures/bg-texture-01.svg')",
        'texture-2': "url('../assets/images/backgroundTextures/bg-texture-02.svg')",
        'texture-3': "url('../assets/images/backgroundTextures/bg-texture-03.svg')",
        'texture-4': "url('../assets/images/backgroundTextures/bg-texture-04.svg')",
        'texture-5': "url('../assets/images/backgroundTextures/bg-texture-05.svg')",
        'texture-6': "url('../assets/images/backgroundTextures/bg-texture-06.svg')",
        'texture-7': "url('../assets/images/backgroundTextures/bg-texture-07.svg')",
        'texture-8': "url('../assets/images/backgroundTextures/bg-texture-08.svg')",
        'texture-9': "url('../assets/images/backgroundTextures/bg-texture-09.svg')"
      }),
      fontFamily: {
        serif: ['Roboto Slab'],
        sans: ['Source Sans Pro'],
      },
      backgroundOpacity: {
        15: '0.15'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}