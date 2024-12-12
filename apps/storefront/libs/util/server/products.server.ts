import { sdk, sdkCache } from '@libs/util/server/client.server';
import { HttpTypes } from '@medusajs/types';
import { getSelectedRegion } from './data/regions.server';
import cachified from '@epic-web/cachified';
import { MILLIS } from './cache-builder.server';

export const fetchProducts = async (
  request: Request,
  { currency_code, limit = 5000, ...query }: HttpTypes.StoreProductParams = {}, // Add default limit
) => {
  const region = await getSelectedRegion(request.headers);

  return await cachified({
    key: `products-${region?.id || 'default'}`,
    cache: sdkCache,
    ttl: MILLIS.ONE_HOUR,
    staleWhileRevalidate: MILLIS.ONE_DAY,
    getFreshValue: () =>
      sdk.store.products.list({
        ...query,
        limit, // Include limit
        region_id: region?.id,
      }),
  });
};
