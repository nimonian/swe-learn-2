// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["@/assets/css/main.css", "@/assets/css/markdown.css"],
  modules: ["@nuxt/content"],
  content: {
    documentDriven: true,
    highlight: {
      theme: "dark-plus",
    },
  },
  nitro: {
    preset: 'service-worker'
  }
});
