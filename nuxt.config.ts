// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  srcDir: "src",
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/global.css"],
  modules: ["nuxt-icons", "@pinia/nuxt"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.jpg" }],
    },
  },
});
