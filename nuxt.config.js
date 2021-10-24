export default {
  target: 'static',

  head: {
    title: 'DadosPET - Comissão Nacional de Centralização e Processamento de dados dos Grupos PET',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A DadosPET - Comissão Nacional de Centralização e Processamento de dados dos Grupos PET, é uma comissão criada na assembleia geral do XXV ENAPET, sendo portanto vinculada à CENAPET.',
      },
      { property: 'og:title', content: 'DadosPET' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:description',
        content:
          'A DadosPET - Comissão Nacional de Centralização e Processamento de dados dos Grupos PET, é uma comissão criada na assembleia geral do XXV ENAPET, sendo portanto vinculada à CENAPET.',
      },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:url', content: 'https://dadospet.github.io/' },
      // {
      //   property: 'og:image',
      //    substituir aqui no content pela preview do dadospet
      //   content: 'https://pet.cin.ufpe.br/www/images/artworks/app-cover.png',
      // },
    ],
    link: [
      // { rel: 'icon', type: 'image/png', href: 'images/logos/favicon.png' },
      { rel: 'icon', type: 'image/png', href: 'images/logos/teste-logo.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css',
      },
    ],
  },

  css: [],

  plugins: [
    { src: '~/plugins/vue-enlargeable-image.ts' },
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
  ],

  modules: ['@nuxt/content'],

  content: {},

  build: {},

  router: {
    base: '/',
  },

  components: [
    '~/components/elements',
    '~/components/sections',
  ],

  googleAnalytics: {
    id: 'UA-109129944-5',
  },
}
