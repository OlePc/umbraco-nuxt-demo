// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false, //todo: Solve why content is not fetched in SSR
  runtimeConfig: {
    public: {
      umbraco: {
        domain: "https://localhost:44311/",
        apiKey: "2351caca-a16c-4cce-8b8d-ba687cda4e66",
        previewEnabled: true
      },
    },
  },
  modules: ["@pinia/nuxt"],
});
