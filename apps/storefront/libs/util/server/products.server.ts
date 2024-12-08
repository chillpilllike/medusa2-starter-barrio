import { sdk, sdkCache } from '@libs/util/server/client.server';
import { HttpTypes } from '@medusajs/types';
import { getSelectedRegion } from './data/regions.server';
import cachified from '@epic-web/cachified';
import { MILLIS } from './cache-builder.server';

export const fetchProducts = async (
  request: Request,
  { currency_code, limit = 100, offset = 0, ...query }: HttpTypes.StoreProductParams = {},
) => {
  // Enforce the limit to never exceed 100
  limit = Math.min(limit, 100);

  const region = await getSelectedRegion(request.headers);

  const result = await cachified({
    key: `products-${JSON.stringify({ limit, offset, ...query })}`,
    cache: sdkCache,
    staleWhileRevalidate: MILLIS.ONE_HOUR,
    ttl: MILLIS.TEN_SECONDS,
    async getFreshValue() {
      return await sdk.store.product.list({
        ...query,
        region_id: region.id,
        limit,
        offset,
      });
    },
  });

  // Force the count to never exceed 100, so other parts of the code think there are only 100 products total.
  result.count = Math.min(result.count, 100);

  return result;
};
