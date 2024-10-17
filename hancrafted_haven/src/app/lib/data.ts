import { sql } from '@vercel/postgres';
import {Product, Image_, Creator, Review_} from '@/app/types/productTypes'

export async function fetchProductData(productId: number): Promise<Product | null> {

    try {
        // Fetching the product by id
        const result = await sql`SELECT id, creator_id, name, description, price, category FROM products WHERE id = ${productId}`;

        // Check if the product exists
        if (result.rows.length === 0) {
            //throw new Error('Product not found');
            //returns null if product doesn't exist.  then in page.tsx it'll use a redirect to /401 
            return null;
        }

        // have to break out the query result into structured format
        const product: Product = {
            id: result.rows[0].id,
            creator_id: result.rows[0].creator_id,
            name: result.rows[0].name,
            description: result.rows[0].description,
            price: result.rows[0].price,
            //image_url: result.rows[0].image_url,
            category: result.rows[0].category,
        };

        return product; 
    } catch (error) {
        console.error('Database Error: ', error);
        throw new Error('Failed to fetch product data.');
    }
}

export async function fetchImagesData(productId: number): Promise<Image_[]> {
    try {
        // Fetching the product by id
        const result = await sql`SELECT id, product_id, image_url FROM product_images WHERE product_id = ${productId}`;

        // Check if the product exists
        if (result.rows.length === 0) {
            //throw new Error('Image not found');
            //do nothing and it should end up using default image (bunny)
        }

        // Map the query result into an array of Image_ objects
        const images: Image_[] = result.rows.map(row => ({
            id: row.id,
            product_id: row.product_id,
            image_url: row.image_url,
        }));

        return images; 

    } catch (error) {
        console.error('Database Error: ', error);
        throw new Error('Failed to fetch image data. at data.ts');
    }
}


export async function fetchCreatorData(creatorId: number): Promise<Creator>{

    try {
        // Fetching the product by id
        const result = await sql`SELECT id, name, bio, email, password FROM creators WHERE id = ${creatorId}`;

        // have to break out the query result into structured format
        const creator: Creator = {
            id: result.rows[0].id,
            name: result.rows[0].name,
            bio: result.rows[0].bio,
            email: result.rows[0].email,
            password: result.rows[0].password,
        };

        return creator; 
    } catch (error) {
        console.error('Database Error: ', error);
        throw new Error('Failed to fetch creator data.');
    }
}

export async function fetchReviewData(productId: number): Promise<Review_[]>{

    try {
        // Fetching the product by id
        const result = await sql`SELECT id, product_id, user_id, rating, comment FROM reviews WHERE product_id = ${productId}`;

        const reviews: Review_[] = result.rows.map(row => ({
            id: row.id,
            product_id: row.product_id,
            user_id: row.user_id,
            rating: row.rating,
            comment: row.comment,
        }));

        return reviews; 
    } catch (error) {
        console.error('Database Error: ', error);
        throw new Error('Failed to fetch review data.');
    }
}


export async function fetchFeaturedCategories() {
  try {
    const featuredCategories = await sql`
    SELECT DISTINCT category
    FROM products`;

    return featuredCategories;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the featured categories.");
  }
}
