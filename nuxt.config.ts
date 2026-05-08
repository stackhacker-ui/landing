import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/icon", "@nuxtjs/color-mode", "@vueuse/nuxt", "shadcn-nuxt"],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  colorMode: {
    classSuffix: "",
  },
  routeRules: {
    "/": { prerender: true },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2025-07-15",
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["shaders", "shaders/vue"],
    },
  },
  eslint: {
    config: {
      stylistic: {
        quotes: "double",
        semi: true,
      },
    },
  },
  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },
});
