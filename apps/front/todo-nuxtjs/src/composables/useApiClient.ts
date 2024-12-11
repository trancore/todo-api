import type { UseFetchOptions } from 'nuxt/app';
import type { OpenApiFetchOptions, OpenApiResponse } from '~/types/fetch';
import type { paths as ApiPaths } from '~/types/openapi';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const defineUseApiClient = <Endpoints extends Record<string, any>>() => {
  return async <
    Endpoint extends keyof Endpoints,
    Method extends keyof Endpoints[Endpoint],
  >(
    request: Endpoint,
    options: OpenApiFetchOptions<
      Endpoints,
      Endpoint,
      Method,
      UseFetchOptions<OpenApiResponse<Endpoints, Endpoint, Method>>
    >,
  ) => {
    const runtimeConfig = useRuntimeConfig();
    const baseOptions = {
      baseURL: runtimeConfig.public.apiBaseUrl,
      headers: {
        'Access-Control-Allow-Origin': runtimeConfig.public.applicationUrl,
      },
    } as UseFetchOptions<
      OpenApiResponse<
        Endpoints,
        keyof Endpoints,
        keyof Endpoints[keyof Endpoints]
      >
    >;
    const optionsResult = { ...baseOptions, ...options };

    const requestUrl = computed(() => {
      // OpenAPIから取得しているEndpoint型がStringを継承していないため型チェックせざるを得ない
      if (typeof request !== 'string') {
        // FIXME 型エラー
        throw new TypeError('Request must be string.');
      }

      if ('params' in optionsResult) {
        return request.replace(/\{(.*?)\}/g, (matched, $1) => {
          return optionsResult.params?.value[$1] || matched;
        });
      }
      return request;
    });
    const method = computed(() => optionsResult.method);

    const { data, error } = await useFetch(requestUrl.value, {
      ...optionsResult,
      method,
    });

    return { data, error };
  };
};

export const useApiClient = defineUseApiClient<ApiPaths>();
