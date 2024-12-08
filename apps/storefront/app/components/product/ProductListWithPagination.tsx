import React, { useState } from 'react';
import type { FC } from 'react';
import { PaginationWithContext } from '@app/components/common/Pagination/pagination-with-context';
import { type ProductListProps, ProductGrid } from '@app/components/product/ProductGrid';
import type { PaginationConfig } from '@app/components/common/Pagination';
import { StoreProduct } from '@medusajs/types';

type ProductListWithPaginationProps = {
  products: StoreProduct[];
  paginationConfig: PaginationConfig;
};

export const ProductListWithPagination: FC<ProductListWithPaginationProps> = ({
  products,
  paginationConfig,
}) => {
  const [currentProducts, setCurrentProducts] = useState(products);
  const [offset, setOffset] = useState(paginationConfig.offset);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = async () => {
    setIsLoading(true);

    const response = await fetch(
      `/products.data?limit=${paginationConfig.limit}&offset=${offset + paginationConfig.limit}`
    );
    const { products: newProducts } = await response.json();

    setCurrentProducts([...currentProducts, ...newProducts]);
    setOffset(offset + paginationConfig.limit);
    setIsLoading(false);
  };

  return (
    <div>
      <ProductGrid products={currentProducts as ProductListProps['products']} />
      {currentProducts.length < paginationConfig.count && (
        <button onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
};
