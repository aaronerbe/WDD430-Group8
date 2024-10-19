import { sql } from '@vercel/postgres';
import {Product, Image_, User, Review_} from '@/app/types/productTypes'
//import {redirect} from 'next/navigation'

export async function fetchProductData(productId: number): Promise<Product> {
    try {
        // Fetching the product by id
        const result = await sql`SELECT id, user_id, name, description, price, category FROM products WHERE id = ${productId}`;
        // have to break out the query result into structured format
        const product: Product = {
            id: result.rows[0].id,
            user_id: result.rows[0].user_id,
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

export async function fetchUserData(userId: number): Promise<User>{

    try {
        // Fetching the product by id
        const result = await sql`SELECT id, name, bio, email, password FROM users WHERE id = ${userId}`;

        // have to break out the query result into structured format
        const user: User = {
            id: result.rows[0].id,
            name: result.rows[0].name,
            profile: result.rows[0].profile,
            bio: result.rows[0].bio,
            email: result.rows[0].email,
            password: result.rows[0].password,
            type: result.rows[0].type
        };

        return user; 
    } catch (error) {
        console.error('Database Error: ', error);
        throw new Error('Failed to fetch user data.');
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

export async function fetchProductsByUser(userId: number): Promise<Product[]>{
    try {
        // Fetching the product by id
        const result = await sql`
            SELECT id, 
            user_id, 
            name, 
            description, 
            price, 
            category 
            FROM products WHERE user_id = ${userId}`;

        // have to break out the query result into structured format
        const products: Product[] = result.rows.map(row => ({
            id: row.id,
            user_id: row.user_id,
            name: row.name,
            description: row.description,
            price: row.price,
            category: row.category
        }));

        return products; 
    } catch (error) {
        console.error('Database Error: ', error);
        throw new Error('Failed to fetch product data.');
    }
}

export async function addReview(productId: number, userId: number, productRating: number, userComment: string) {
    console.log('Inserting review:', { productId, userId, productRating, userComment });

    try {
        // Perform the insert operation
        const result = await sql`
            INSERT INTO reviews (
                product_id, 
                user_id, 
                rating, 
                comment
            )
            VALUES (
                ${productId}, 
                ${userId}, 
                ${productRating}, 
                ${userComment}
            )
            RETURNING *;
        `;
        console.log('Insert result:', result); 
    } catch (error) {
        console.error('Database Error: ', error);
        throw new Error('Failed to create review '); 
    }
}