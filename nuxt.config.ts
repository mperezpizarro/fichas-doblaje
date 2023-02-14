// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  modules: ["nuxt-icon"],

  app: {
    head: {
      htmlAttrs: {
        lang: "es"
      },
      title: "Fichas de doblaje",
      meta: [
        {name: "description", content: "Fichas de doblaje en castellano, catalán y gallego."}
      ]
    }
  }
})
