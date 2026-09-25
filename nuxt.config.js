module.exports = {
  ssr: true,
  target: 'server',
  head: {
    title: 'Brands',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  components: true,
  css: [
    '~/assets/css/main.css',
    '~/assets/css/brands.css',
    '~/assets/css/brand_details.css',
    '~/assets/css/form.css'
  ],
  build: {}
}
