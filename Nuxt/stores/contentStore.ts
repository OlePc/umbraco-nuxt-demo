import { defineStore } from "pinia";

export const useContentStore = defineStore("contentStore", {
  state: () => {
    return {
      currentPage: {},
    };
  },
  actions: {
    async setPageByUrl(url: string) {
      const { fetchItem } = useUmbracoContentDeliveryApi();
      if (url === "/") url = "";
      const data = await fetchItem(url, "");
      if (data) {
        this.currentPage = data;
      }
    },
  },
});
