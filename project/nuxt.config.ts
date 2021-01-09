import { NuxtConfig } from '@nuxt/types'


const nuxtConfig: NuxtConfig = {
  mode: 'universal',
  target: 'static',
  buildModules: ['@nuxt/typescript-build','@nuxtjs/vuetify'],
  // server: {
  //   port: 3000,
  //   host: 'localhost',
  // },
  head: {
    titleTemplate: '%s - project',
    title: 'project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: '#fff' },
  css: [
  ],
  plugins: [
  ],
  components: true,
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa',
  ],
  build: {
    extend(config, ctx) {
    }
  },
  axios: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
      },
    },
  },
  // srcDir: 'src/'
}
module.exports = nuxtConfig