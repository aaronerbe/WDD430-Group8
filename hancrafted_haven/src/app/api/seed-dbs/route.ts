import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import {
    creators,
    products,
    users,
    reviews,
    collections,
    collectionProducts,
    productImages, // Added for the product images table
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
        await client.sql`
            DROP TABLE IF EXISTS creators CASCADE;
        `;
        console.log('Existing tables dropped.');

        // Create tables
        console.log('Creating tables...');
        
        // Create creators table
        await client.sql`
            CREATE TABLE IF NOT EXISTS creators (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                bio TEXT,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            );
        `;

        // Create users table
        await client.sql`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            );
        `;

        // Create products table (without image_url)
        await client.sql`
            CREATE TABLE IF NOT EXISTS products (
                id SERIAL PRIMARY KEY,
                creator_id INT NOT NULL REFERENCES creators(id),
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
                creator_id INT NOT NULL REFERENCES creators(id),
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

        // Insert creators
        console.log('Inserting creators...');
        for (const creator of creators) {
            const hashedPassword = await bcrypt.hash(creator.password, 10);
            await client.sql`
                INSERT INTO creators (id, name, bio, email, password)
                VALUES (${creator.id}, ${creator.name}, ${creator.bio}, ${creator.email}, ${hashedPassword})
                ON CONFLICT (id) DO NOTHING;
            `;
            console.log(`Inserted creator: ${creator.name}`);
        }

        // Insert users
        console.log('Inserting users...');
        for (const user of users) {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            await client.sql`
                INSERT INTO users (id, name, email, password)
                VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
                ON CONFLICT (id) DO NOTHING;
            `;
            console.log(`Inserted user: ${user.name}`);
        }

        // Insert products (without image_url)
        console.log('Inserting products...');
        for (const product of products) {
            await client.sql`
                INSERT INTO products (id, creator_id, name, description, price, category)
                VALUES (${product.id}, ${product.creator_id}, ${product.name}, ${product.description}, ${product.price}, ${product.category})
                ON CONFLICT (id) DO NOTHING;
            `;
            console.log(`Inserted product: ${product.name}`);
        }

        // Insert product images into product_images table
        console.log('Inserting product images...');
        for (const image of productImages) {
            await client.sql`
                INSERT INTO product_images (id, product_id, image_url)
                VALUES (${image.id}, ${image.product_id}, ${image.image_url})
                ON CONFLICT (id) DO NOTHING;
            `;
            console.log(`Inserted image for product ID: ${image.product_id}`);
        }

        // Insert reviews
        console.log('Inserting reviews...');
        for (const review of reviews) {
            await client.sql`
                INSERT INTO reviews (id, product_id, user_id, rating, comment)
                VALUES (${review.id}, ${review.product_id}, ${review.user_id}, ${review.rating}, ${review.comment})
                ON CONFLICT (id) DO NOTHING;
            `;
            console.log(`Inserted review for product ID: ${review.product_id}`);
        }

        // Insert collections
        console.log('Inserting collections...');
        for (const collection of collections) {
            await client.sql`
                INSERT INTO collections (id, creator_id, title, description)
                VALUES (${collection.id}, ${collection.creator_id}, ${collection.title}, ${collection.description})
                ON CONFLICT (id) DO NOTHING;
            `;
            console.log(`Inserted collection: ${collection.title}`);
        }

        // Insert collection products
        console.log('Inserting collection products...');
        for (const collectionProduct of collectionProducts) {
            await client.sql`
                INSERT INTO collection_products (collection_id, product_id)
                VALUES (${collectionProduct.collection_id}, ${collectionProduct.product_id})
                ON CONFLICT (collection_id, product_id) DO NOTHING;
            `;
            console.log(`Inserted collection product for collection ID: ${collectionProduct.collection_id} and product ID: ${collectionProduct.product_id}`);
        }

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