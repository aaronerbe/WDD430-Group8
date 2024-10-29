import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import {users, 
    products, 
    productImages, 
    reviews, 
    collections, 
    collectionProducts
} from '@/app/lib/seed-data';

export async function GET() {
    // Prevent seeding in production
    if (process.env.NODE_ENV === 'production') {
        return NextResponse.json({ error: 'Cannot seed in production environment' }, { status: 403 });
    }

    const client = await db.connect();

    try {
        // BEGIN transaction
        await client.sql`BEGIN`;

        // Drop existing tables to start fresh
        console.log('Dropping existing tables...');
        await client.sql`
            DROP TABLE IF EXISTS collection_products CASCADE;
        `;
        await client.sql`
            DROP TABLE IF EXISTS reviews CASCADE;
        `;
        await client.sql`
            DROP TABLE IF EXISTS products CASCADE;
        `;
        await client.sql`
            DROP TABLE IF EXISTS collections CASCADE;
        `;
        await client.sql`
            DROP TABLE IF EXISTS product_images CASCADE;
        `;
        await client.sql`
            DROP TABLE IF EXISTS users CASCADE;
        `;
        await client.sql`DROP TYPE IF EXISTS user_type CASCADE;
        `;
        console.log('Existing tables dropped.');

        // Create tables
        console.log('Creating tables...');
        
        // Create users table
        await client.sql`
            CREATE TYPE user_type AS ENUM ('admin', 'creator', 'user');
        `;
        await client.sql`        
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                profile TEXT,
                name VARCHAR(255) NOT NULL,
                bio TEXT,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL,
                type user_type NOT NULL
            );
        `;

        // Create products table (without image_url)
        await client.sql`
            CREATE TABLE IF NOT EXISTS products (
                id SERIAL PRIMARY KEY,
                user_id INT NOT NULL REFERENCES users(id),
                name VARCHAR(255) NOT NULL,
                description TEXT,
                price DECIMAL(10, 2) NOT NULL,
                category VARCHAR(255)
            );
        `;

        // Create product_images table (new table for storing product images)
        await client.sql`
            CREATE TABLE IF NOT EXISTS product_images (
                id SERIAL PRIMARY KEY,
                product_id INT NOT NULL REFERENCES products(id),
                image_url TEXT NOT NULL
            );
        `;

        // Create reviews table
        await client.sql`
        CREATE TABLE IF NOT EXISTS reviews (
            id SERIAL PRIMARY KEY,
            product_id INT NOT NULL REFERENCES products(id),
            user_id INT NOT NULL REFERENCES users(id),
            rating INT NOT NULL,
            comment TEXT
        );
    `;

        // Create collections table
        await client.sql`
            CREATE TABLE IF NOT EXISTS collections (
                id SERIAL PRIMARY KEY,
                user_id INT NOT NULL REFERENCES users(id),
                title VARCHAR(255) NOT NULL,
                description TEXT
            );
        `;

        // Create collection_products table
        await client.sql`
            CREATE TABLE IF NOT EXISTS collection_products (
                id SERIAL PRIMARY KEY,
                collection_id INT NOT NULL REFERENCES collections(id) ON DELETE CASCADE,
                product_id INT NOT NULL REFERENCES products(id),
                UNIQUE (collection_id, product_id)
            );
        `;
        console.log('Tables created successfully.');

        // Insert data into tables
        console.log('Inserting data...');

        // Insert users
        console.log('Inserting users...');
        for (const user of users) {
            //console.log(user.profile)
            const hashedPassword = await bcrypt.hash(user.password, 10);
            await client.sql`
                INSERT INTO users (profile, name, bio, email, password, type) 
                VALUES (
                    ${user.profile},
                    ${user.name}, 
                    ${user.bio},  
                    ${user.email}, 
                    ${hashedPassword}, 
                    ${user.type}) 
                ON CONFLICT (id) DO NOTHING;
            `;
            console.log(`Inserted user: ${user.name}`);
        }

        // Insert products (without image_url)
        console.log('Inserting products...');
        for (const product of products) {
            await client.sql`
                INSERT INTO products (user_id, name, description, price, category)
                VALUES (
                    ${product.user_id}, 
                    ${product.name}, 
                    ${product.description}, 
                    ${product.price}, 
                    ${product.category})
                ON CONFLICT (id) DO NOTHING;
            `;
            console.log(`Inserted product: ${product.name}`);
        }

        // Insert product images into product_images table
        console.log('Inserting product images...');
        for (const image of productImages) {
            await client.sql`
                INSERT INTO product_images (product_id, image_url)
                VALUES (
                    ${image.product_id}, 
                    ${image.image_url})
                ON CONFLICT (id) DO NOTHING;
            `;
            console.log(`Inserted image for product ID: ${image.product_id}`);
        }

        // Insert reviews
        console.log('Inserting reviews...');
        for (const review of reviews) {
            await client.sql`
                INSERT INTO reviews (product_id, user_id, rating, comment)
                VALUES (
                    ${review.product_id}, 
                    ${review.user_id}, 
                    ${review.rating}, 
                    ${review.comment})
                ON CONFLICT (id) DO NOTHING;
            `;
            console.log(`Inserted review for product ID: ${review.product_id}`);
        }

        // Insert collections
        console.log('Inserting collections...');
        for (const collection of collections) {
            await client.sql`
                INSERT INTO collections (user_id, title, description)
                VALUES (
                    ${collection.user_id}, 
                    ${collection.title}, 
                    ${collection.description})
                ON CONFLICT (id) DO NOTHING;
            `;
            console.log(`Inserted collection: ${collection.title}`);
        }

        // Insert collection products
        console.log('Inserting collection products...');
        for (const collectionProduct of collectionProducts) {
            await client.sql`
                INSERT INTO collection_products (collection_id, product_id)
                VALUES (
                    ${collectionProduct.collection_id}, 
                    ${collectionProduct.product_id})
                ON CONFLICT (collection_id, product_id) DO NOTHING;
            `;
            console.log(`Inserted collection product for collection ID: ${collectionProduct.collection_id} and product ID: ${collectionProduct.product_id}`);
        }

        // Reset the sequence for the tables.  needed so autoincrement id doesn't try to start over w/ 1 and conflict
        await client.sql`
        SELECT setval('users_id_seq', (SELECT COALESCE(MAX(id) + 1, 1) FROM users), false);
        `;
        await client.sql`
            SELECT setval('products_id_seq', (SELECT COALESCE(MAX(id) + 1, 1) FROM products), false);
        `;
        await client.sql`
            SELECT setval('product_images_id_seq', (SELECT COALESCE(MAX(id) + 1, 1) FROM product_images), false);
        `;
        await client.sql`
            SELECT setval('reviews_id_seq', (SELECT COALESCE(MAX(id) + 1, 1) FROM reviews), false);
        `;
        await client.sql`
            SELECT setval('collections_id_seq', (SELECT COALESCE(MAX(id) + 1, 1) FROM collections), false);
        `;
        

        // Commit transaction
        await client.sql`COMMIT`;

        return NextResponse.json({ message: 'Database seeded successfully' }, { status: 200 });

    } catch (error) {
        await client.sql`ROLLBACK`;
        console.error('Error seeding database. Attempting to rollback: ', error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });

    } finally {
        client.release();
        console.log('Database connection released.');
    }
}