import type { SiteDetailsRootData } from '@libs/types';

import { footerNavigationItems, headerNavigationItems } from '@libs/config/site/navigation-items';
import { siteSettings } from '@libs/config/site/site-settings';
import type { HttpTypes } from '@medusajs/types';
import { type LoaderFunctionArgs, data as remixData } from '@remix-run/node';
import { config } from './config.server';
import { getSelectedRegionId, setSelectedRegionId } from './cookies.server';
import { enrichLineItems, retrieveCart } from './data/cart.server';
import { getCustomer } from './data/customer.server';
import { getSelectedRegion, listRegions } from './data/regions.server';
import { RemixLoaderResponse } from 'types/remix';

// Removed fetchHasProducts and fetchProducts import/call

export const getRootLoader = async ({ request }: LoaderFunctionArgs) => {
  // Attempt to retrieve region
  const region = await getSelectedRegion(request.headers);

  // Resolve the productService from the Medusa container if available
  const productService = (request as any)?.scope?.resolve("productService");
  if (!productService) {
    throw new Error("Unable to access productService. Ensure that 'request.scope' is accessible here.");
  }

  // Directly query the product service
  const [, productCount] = await productService.listAndCount({}, { take: 1, skip: 0 });
  const hasPublishedProducts = productCount > 0;

  // Retrieve other data in parallel
  const [cart, regions, customer] = await Promise.all([
    retrieveCart(request),
    listRegions(),
    getCustomer(request),
  ]);

  const headers = new Headers();

  const currentRegionCookieId = await getSelectedRegionId(headers);

  if (currentRegionCookieId !== region?.id) {
    await setSelectedRegionId(headers, region?.id!);
  }

  if (cart?.items?.length) {
    const enrichedItems = await enrichLineItems(cart?.items, cart?.region_id!);
    cart.items = enrichedItems as HttpTypes.StoreCartLineItem[];
  }

  const fontLinks: string[] = [];

  return remixData(
    {
      hasPublishedProducts,
      fontLinks,
      env: {
        NODE_ENV: config.NODE_ENV,
        ENVIRONMENT: config.ENVIRONMENT,
        STRIPE_PUBLIC_KEY: config.STRIPE_PUBLIC_KEY,
        PUBLIC_MEDUSA_API_URL: config.PUBLIC_MEDUSA_API_URL,
        STOREFRONT_URL: config.STOREFRONT_URL,
        SENTRY_DSN: config.SENTRY_DSN,
        SENTRY_ENVIRONMENT: config.SENTRY_ENVIRONMENT,
        EVENT_LOGGING: config.EVENT_LOGGING,
      },
      customer,
      regions,
      region,
      siteDetails: {
        store: {
          name: 'Secretgreen',
        },
        settings: siteSettings,
        headerNavigationItems,
        footerNavigationItems,
      } as SiteDetailsRootData,
      cart: cart,
    },
    { headers },
  );
};

export type RootLoader = typeof getRootLoader;
export type RootLoaderResponse = RemixLoaderResponse<typeof getRootLoader>['data'];
