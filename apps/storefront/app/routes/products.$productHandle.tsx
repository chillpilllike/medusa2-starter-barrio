// apps/storefront/app/routes/products._index.tsx

import { Breadcrumbs } from '@app/components/common/breadcrumbs';
import { Container } from '@app/components/common/container';
import { ProductListWithPagination } from '@app/components/product/ProductListWithPagination';
import HomeIcon from '@heroicons/react/24/solid/HomeIcon';
import { fetchProducts } from '@libs/util/server/products.server';
import { LoaderFunctionArgs, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

// Define maximum allowed values to prevent excessive queries
const MAX_LIMIT = 100;
const MAX_OFFSET = 10000;

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // Parse the request URL
  const url = new URL(request.url);
  
  // Extract and parse 'limit' and 'offset' from query parameters
  let limit = parseInt(url.searchParams.get('limit') || '20', 10);
  let offset = parseInt(url.searchParams.get('offset') || '0', 10);

  // Validate and constrain 'limit' and 'offset' to maximum allowed values
  if (isNaN(limit) || limit < 1) {
    limit = 20; // Default limit if invalid
  } else if (limit > MAX_LIMIT) {
    limit = MAX_LIMIT; // Cap limit to MAX_LIMIT
  }

  if (isNaN(offset) || offset < 0) {
    offset = 0; // Default offset if invalid
  } else if (offset > MAX_OFFSET) {
    offset = MAX_OFFSET; // Cap offset to MAX_OFFSET
  }

  // Optionally, you can log or handle invalid parameters here
  // For example:
  // if (limit !== parseInt(url.searchParams.get('limit') || '20', 10)) {
  //   console.warn(`Limit adjusted to ${limit} from ${url.searchParams.get('limit')}`);
  // }
  // if (offset !== parseInt(url.searchParams.get('offset') || '0', 10)) {
  //   console.warn(`Offset adjusted to ${offset} from ${url.searchParams.get('offset')}`);
  // }

  // Fetch products with validated parameters
  const { products, count } = await fetchProducts(request, { limit, offset });

  // Return the data as JSON
  return json({ products, count, limit, offset });
};

// Define the type for loader data
export type ProductsIndexRouteLoader = {
  products: any[]; // Replace 'any' with your actual Product type
  count: number;
  limit: number;
  offset: number;
};

export default function ProductsIndexRoute() {
  // Use the loader data with the defined type
  const data = useLoaderData<ProductsIndexRouteLoader>();

  if (!data) return null;

  const { products, count, limit, offset } = data;

  const breadcrumbs = [
    {
      label: (
        <span className="flex whitespace-nowrap">
          <HomeIcon className="inline h-4 w-4" />
          <span className="sr-only">Home</span>
        </span>
      ),
      url: `/`,
    },
    {
      label: 'All Products',
    },
  ];

  return (
    <Container className="pb-16">
      <div className="my-8 flex flex-wrap items-center justify-between gap-4">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <ProductListWithPagination
            products={products}
            paginationConfig={{ count, offset, limit }}
            context="products"
          />
        </div>
      </div>
    </Container>
  );
}
