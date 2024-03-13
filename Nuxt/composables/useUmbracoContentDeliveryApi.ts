export const useUmbracoContentDeliveryApi = () => {
  const config = useRuntimeConfig();
  const addExpand = (url: string, expand: string | null) => {
    if (expand) {
      return `${url}expand=property:${expand}&`;
    }

    return url;
  };

  const addFilter = (url: string, filter: string | null) => {
    if (filter) {
      return `${url}filter=contentType:${filter}&`;
    }

    return url;
  };

  const fetchItems = async ({
    expand = null,
    filter = null,
    skip = null,
    take = null,
  }) => {
    let url = `${config.public.umbraco.domain}umbraco/delivery/api/v2/content/?`;
    url = addExpand(url, expand);
    url = addFilter(url, filter);

    console.log(url);
    return callContentDeliveryAPI(url);
  };

  async function fetchItem(pathOrId: string, expand: string) {
    let url = `${config.public.umbraco.domain}umbraco/delivery/api/v2/content/item/${pathOrId}?`;
    url = addExpand(url, expand);

    console.log(url, config.apiKey, config.previewEnabled);

    return callContentDeliveryAPI(url);
  }

  const callContentDeliveryAPI = async (url: string) => {
    try {
      const { data, pending, error, refresh } = await useFetch(url, {
        onRequest({ request, options }) {
          // Set the request headers
          options.method = "GET";
          options.headers = options.headers || {};
          options.headers = {
            "api-key": config.public.umbraco.apiKey,
          };
        },
      });

      return data;
    } catch (e) {
      console.error(e);
    }
  };

  return {
    fetchItem,
    fetchItems,
  };
};
