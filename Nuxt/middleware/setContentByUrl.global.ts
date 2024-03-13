export default defineNuxtRouteMiddleware(async (to, from) => {
  const nuxtApp = useNuxtApp();
  // Only run on first load after SSR
  if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered)
    return;

  const contentStore = useContentStore();
  await contentStore.setPageByUrl(to.path);
});
