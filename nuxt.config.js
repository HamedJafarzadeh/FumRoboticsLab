
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
      { name: 'og:url', content: 'fumrobotics.ir' },
      { name: 'og:title', content: 'Hamed blog' },
      { name: 'og:description', content: 'I am computer and electronics engineer with over 5 years of software and hardware programming experiences in industry and academic projects' },
      { name: 'og:image', content: 'imgs/blogPicture.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script :[
      {src: '/js/jquery.min.js'},
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    //{ src: '~plugins/googleanalytics.js', mode: 'client' },
    //{ src: '~plugins/hjanalytics.js', mode: 'client' }
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
    '@nuxt/content',
    '@nuxtjs/axios'
  ],

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
