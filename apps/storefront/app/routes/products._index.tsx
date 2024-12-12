import { Breadcrumbs } from '@app/components/common/breadcrumbs';
import { Container } from '@app/components/common/container';
import { ProductListWithPagination } from '@app/components/product/ProductListWithPagination';
import HomeIcon from '@heroicons/react/24/solid/HomeIcon';
import { fetchProducts } from '@libs/util/server/products.server';
import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const limit = 5000; // Define the limit
  const products = await fetchProducts(request, { limit });

  // Add a flag if more products exist
  const totalCount = products?.meta?.count || 0; // Adjust if total count comes from meta
  const showNotice = totalCount > limit;

  return { products, showNotice, totalCount };
};

export default function Products() {
  const { products, showNotice, totalCount } = useLoaderData();

  return (
    <div>
      {showNotice && (
        <p className="text-sm text-gray-500">
          Displaying 5,000 of {totalCount} products available in the store.
        </p>
      )}
      <ProductListWithPagination products={products} />
    </div>
  );
}
