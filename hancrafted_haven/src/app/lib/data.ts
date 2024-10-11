import { sql } from '@vercel/postgres';
import {Product} from '@/app/types/productTypes'

export async function fetchProductData(productId: number): Promise<Product> {
    try {
        // Fetching the product by id
        const result = await sql`SELECT id, seller_id, name, description, price, image_url, category FROM products WHERE id = ${productId}`;

        // Check if the product exists
        if (result.rows.length === 0) {
            throw new Error('Product not found');
        }

        // have to break out the query result into structured format
        const product: Product = {
            id: result.rows[0].id,
            seller_id: result.rows[0].seller_id,
            name: result.rows[0].name,
            description: result.rows[0].description,
            price: result.rows[0].price,
            image_url: result.rows[0].image_url,
            category: result.rows[0].category,
        };

        return product; 
    } catch (error) {
        console.error('Database Error: ', error);
        throw new Error('Failed to fetch product data.');
    }
}