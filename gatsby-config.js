module.exports = {
  // siteMetadata: {
  //   title: 'Casa Mucha',
  //   menuLinks: [
  //     {
  //       name: 'Home',
  //       link: '/'
  //     },
  //     {
  //       name: 'Gallery',
  //       link: '/gallery'
  //     }
  //   ]
  // },
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