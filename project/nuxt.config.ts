import { NuxtConfig } from '@nuxt/types'

const nuxtConfig: NuxtConfig = {
  mode: 'universal',
  buildModules: ['@nuxt/typescript-build'],
  server: {
    port: 5000,
    host: 'localhost',
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
  ],
  plugins: [
  ],
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
  ],
  build: {
    extend(config, ctx) {
    }
  },
  srcDir: 'src/'
}
module.exports = nuxtConfig