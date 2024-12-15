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
    const requestUrl = computed(() => {
      // OpenAPIから取得しているEndpoint型がStringを継承していないため型チェックせざるを得ない
      if (typeof request !== 'string') {
        // FIXME 型エラー
        throw new TypeError('Request must be string.');
      }

      if ('params' in options) {
        return request.replace(/\{(.*?)\}/g, (matched, $1) => {
          const params = options.params as Record<string, any>;
          // options.paramsに値を入れたままにしてしまうとqueryに入ってしまうため、空文字列を入れる
          options.params = '';
          return params[$1] || matched;
        });
      }
      return request;
    });
    const method = computed(() => options.method);

    const { data, error, execute, refresh } = await useFetch(requestUrl.value, {
      ...options,
      method,
      $fetch: useNuxtApp().$api,
    });

    return { data, error, execute, refresh };
  };
};

export const useApiClient = defineUseApiClient<ApiPaths>();
