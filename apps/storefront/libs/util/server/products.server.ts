import { knex } from '@app/utils/db'; // Import your database connection utility
import { StoreProduct } from '@medusajs/types'; // Correct product type

export async function fetchProducts({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): Promise<{ products: StoreProduct[]; count: number }> {
  // Fetch products with pagination
  const products = await knex<StoreProduct>('products')
    .select('*')
    .limit(limit)
    .offset(offset);

  // Fetch total product count
  const countResult = await knex('products').count('* as total');
  const count = parseInt(countResult[0].total, 10);

  return { products, count };
}
