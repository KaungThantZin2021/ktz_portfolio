// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Kaung Thant Zin | Portfolio',
      meta: [
        {
          name: 'description',
          content: 'This is portfolio of web developer Kaung Thant Zin.'
        },
        {
          name: 'keywords',
          content: 'kaung thant zin, web developer, portfolio, nuxt, nuxt3, vue, php, laravel, frontend developer, backend developer'
        },
        {
          property: 'og:title',                
          content: 'Kaung Thant Zin | Portfolio'
        },
        {
          property: 'og:description',
          content: 'This is portfolio of web developer Kaung Thant Zin.'
        }
      ]
    }
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
