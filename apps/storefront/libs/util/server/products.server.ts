import { HttpTypes } from '@medusajs/types';
import cachified from '@epic-web/cachified';
import { MILLIS } from './cache-builder.server';

export const fetchProducts = async (
  request: Request & { scope: any },
  { currency_code, ...query }: HttpTypes.StoreProductParams = {},
) => {
  // Resolve services from Medusa's container
  const regionService = request.scope.resolve("regionService");
  const productService = request.scope.resolve("productService");

  // Retrieve the region from the regionService directly
  // If you were previously relying on getSelectedRegion, ensure that getSelectedRegion
  // no longer calls store endpoints. Ideally, do:
  const regionId = query.region_id; 
  let region;
  if (regionId) {
    region = await regionService.retrieve(regionId);
  } else {
    // If no region_id was provided, you may want to get a default region:
    const regions = await regionService.list();
    region = regions[0]; // or implement your logic for selecting a default region
  }

  return await cachified({
    key: `products-${JSON.stringify(query)}`,
    cache: request.scope.resolve("cacheService") ?? undefined, // Ensure you have a valid cache service
    staleWhileRevalidate: MILLIS.ONE_HOUR,
    ttl: MILLIS.TEN_SECONDS,
    async getFreshValue() {
      const limit = query.limit || 10;
      const offset = query.offset || 0;

      // Apply filters and region as needed
      const [products, count] = await productService.listAndCount(
        {},
        {
          take: limit,
          skip: offset,
          relations: ["variants"],
          // region_id is not a standard property of listAndCount options directly, 
          // but you can filter by region fields if you have such filters set up.
          // If the service doesn't allow region_id filtering directly, you may need
          // additional logic (e.g., filtering products associated with that region).
        }
      );

      // Return the same shape as before: { products, count }
      return { products, count };
    },
  });
};
