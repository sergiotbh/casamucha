module.exports = {
  siteMetadata: {
    url: 'https://casamucha.mx',
    title: 'Casa Mucha',
    description: 'Casa Mucha es una estancia y espacio creativo en el corazón de Guadalajara. Casa Mucha es el encuentro de barrios e ideas de nuestra ciudad, con puertas abiertas para todas las personas que buscan disfrutarla. Residencias artísticas, hospedaje cerca del centro de Guadalajara.',
    image: './src/assets/images/casa_mucha_home_graphic_01.jpg',
    menuLinks: [
      {
        name: 'El Barrio',
        link: '/el-barrio'
      },
      {
        name: 'La Recepcion',
        link: '/la-recepcion'
      },
      {
        name: 'Muchas',
        link: '/muchas'
      }
    ]
  },
  plugins: [
    'gatsby-plugin-postcss', 
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
        name: `images`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`es`],
        defaultLanguage: `es`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://casamucha.mx/`,
        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        // pages: [
        //   {
        //     matchPath: '/:lang?/blog/:uid',
        //     getLanguageFromPath: true,
        //     excludeLanguages: ['es']
        //   },
        //   {
        //     matchPath: '/preview',
        //     languages: ['en']
        //   }
        // ]
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Source Sans Pro`, `Roboto Slab`
        ],
        display: 'swap'
      }
    }
  ],
}