
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'FUM Robotics Laboratory',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'og:url', content: 'www.fumrobotics.ir' },
      { name: 'og:title', content: 'FUM Robotics Lab' },
      { name: 'og:description', content: 'The Robotics Laboratory of Ferdowsi University of Mashhad (FUM Robotics) was established in 2010. As one of the most comprehensive centers for multi-disciplinary robotics research in Iran, our lab is dedicated not only to education and research, but also addressing industrial needs.' },
      { name: 'og:image', content: 'imgs/fum-logo.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script :[
      {src: '/js/jquery.min.js'},
      {src:'https://www.googletagmanager.com/gtag/js?id=G-488P25G4VX', async:true},
      {src: '/js/googletag.js'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    //{ src: '~plugins/googleanalytics.js', mode: 'client' },
    { src: '~plugins/hjanalytics.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    ['nuxt-fontawesome', {
      component: 'fa',
    }
    ]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/axios'
  ],

  sitemap: {
    hostname: 'https://fumrobotics.ir',
    gzip: true,
    // exclude: [
    //   '/secret',
    //   '/admin/**'
    // ],
    // routes: [
    //   '/page/1',
    //   '/page/2',
    //   {
    //     url: '/page/3',
    //     changefreq: 'daily',
    //     priority: 1,
    //     lastmod: '2017-06-30T13:30:00.000Z'
    //   }
    // ]
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set:'@fortawesome/free-brands-svg-icons',
        icons :['fab']
      }
    ]
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-vs.css'
      }
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    typescript:{
      typeCheck:true
    }
  }
}
