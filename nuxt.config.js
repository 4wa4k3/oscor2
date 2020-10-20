export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    // title: process.env.npm_package_name || '',
    title:'Oscor',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href:'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css' },
    { rel: 'preconnect', href:'https://fonts.gstatic.com', crossorigin:'crossorigin' },
    { rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,300&family=Oswald:wght@300;400;500&family=Roboto:wght@400;500;900&display=swap',  }],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/prismic',
    'nuxt-i18n',

  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  prismic: {
    endpoint: 'https://oscor.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    preview: false

  },
  i18n: {
    lazy: true,
      locales:[
        {
          code: 'en',
          name: 'English',
          iso: 'en-US',
          file: 'en.js'
        },
        {
          code: 'es',
          name: 'Español',
          iso: 'es-ES',
          file: 'es.js'
        },
        {
          code: 'de',
          name: 'Deutsch',
          iso: 'de-DE',
          file: 'de.js' 

        }
      ],
      defaultLocale: 'en',
      langDir: 'locales/',
      encodePaths: false,
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {

    transpile: [
      "gsap"
    ],

    extend(config, ctx) {
      if(ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre', 
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }// eslint fix rules
    }
  },
}
