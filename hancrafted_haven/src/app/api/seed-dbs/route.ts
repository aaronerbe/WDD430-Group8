import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { creators, products, users, reviews, showcasedProducts, collections, collectionProducts } from '@/app/lib/seed-data';

export async function GET() {
    // Prevent seeding in production
    if (process.env.NODE_ENV === 'production') {
        return NextResponse.json({ error: 'Cannot seed in production environment' }, { status: 403 });
    }

    const client = await db.connect();

    try {
        //BEGIN, COMMIT and ROLLBACK enables it to rollback if something goes wrong... In theory ;)
        await client.sql`BEGIN`;


        //_____                    _______    _     _           
        //|  __ \                  |__   __|  | |   | |          
        //| |  | |_ __ ___  _ __      | | __ _| |__ | | ___  ___ 
        //| |  | | '__/ _ \| '_ \     | |/ _` | '_ \| |/ _ \/ __|
        //| |__| | | | (_) | |_) |    | | (_| | |_) | |  __/\__ \
        //|_____/|_|  \___/| .__/     |_|\__,_|_.__/|_|\___||___/
        //                 | |                                   
        //                 |_|                                   
        //DROPS EXISTING TABLES SO WE START FROM SCRATCH
        console.log('Dropping existing tables...');
        await client.sql`
            DROP TABLE IF EXISTS collection_products, collections, showcased_products, reviews, products, users, creators;
        `;
        console.log('Existing tables dropped.');


        // _____          _____                _         _______    _     _           
        //|  __ \        / ____|              | |       |__   __|  | |   | |          
        //| |__) |___ __| |     _ __ ___  __ _| |_ ___     | | __ _| |__ | | ___  ___ 
        //|  _  // _ \__| |    | '__/ _ \/ _` | __/ _ \    | |/ _` | '_ \| |/ _ \/ __|
        //| | \ \  __/  | |____| | |  __/ (_| | ||  __/    | | (_| | |_) | |  __/\__ \
        //|_|  \_\___|   \_____|_|  \___|\__,_|\__\___|    |_|\__,_|_.__/|_|\___||___/
        console.log('Creating tables...');
        // Create creators Table
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
                id UUID PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            );
        `;
        // Create products table
        await client.sql`
            CREATE TABLE IF NOT EXISTS products (
                id SERIAL PRIMARY KEY,
                seller_id INT NOT NULL REFERENCES creators(id),
                name VARCHAR(255) NOT NULL,
                description TEXT,
                price DECIMAL(10, 2) NOT NULL,
                image_url TEXT,
                category VARCHAR(255)
            );
        `;
        // Create reviews table
        await client.sql`
            CREATE TABLE IF NOT EXISTS reviews (
                id SERIAL PRIMARY KEY,
                product_id INT NOT NULL REFERENCES products(id),
                user_id UUID NOT NULL REFERENCES users(id),
                rating INT NOT NULL,
                comment TEXT
            );
        `;
        // Create showcased_products table
        await client.sql`
            CREATE TABLE IF NOT EXISTS showcased_products (
                id SERIAL PRIMARY KEY,
                seller_id INT NOT NULL REFERENCES creators(id),
                product_id INT NOT NULL REFERENCES products(id)
            );
        `;
        // Create collections table
        await client.sql`
            CREATE TABLE IF NOT EXISTS collections (
                id SERIAL PRIMARY KEY,
                seller_id INT NOT NULL REFERENCES creators(id),
                name VARCHAR(255) NOT NULL
            );
        `;
        // Create collection_products table
        await client.sql`
            CREATE TABLE IF NOT EXISTS collection_products (
                id SERIAL PRIMARY KEY,
                collection_id INT NOT NULL REFERENCES collections(id),
                product_id INT NOT NULL REFERENCES products(id)
            );
        `;
        console.log('Tables created successfully.');


    //     _____               _   _____        _        
    //    / ____|             | | |  __ \      | |       
    //   | (___   ___  ___  __| | | |  | | __ _| |_ __ _ 
    //    \___ \ / _ \/ _ \/ _` | | |  | |/ _` | __/ _` |
    //    ____) |  __/  __/ (_| | | |__| | (_| | || (_| |
    //   |_____/ \___|\___|\__,_| |_____/ \__,_|\__\__,_|

    // Insert creators
    console.log('Inserting creators...');
    for (const seller of creators) {
        const hashedPassword = await bcrypt.hash(seller.password, 10);
        await client.sql`
            INSERT INTO creators (id, name, bio, email, password)
            VALUES (${seller.id}, ${seller.name}, ${seller.bio}, ${seller.email}, ${hashedPassword})
            ON CONFLICT (id) DO NOTHING;
        `;
        console.log(`Inserted seller: ${seller.name}`);
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
    // Insert products
    console.log('Inserting products...');
    for (const product of products) {
        await client.sql`
            INSERT INTO products (id, seller_id, name, description, price, image_url, category)
            VALUES (${product.id}, ${product.seller_id}, ${product.name}, ${product.description}, ${product.price}, ${product.image_url}, ${product.category})
            ON CONFLICT (id) DO NOTHING;
        `;
        console.log(`Inserted product: ${product.name}`);
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
    // Insert showcased products
    console.log('Inserting showcased products...');
    for (const showcase of showcasedProducts) {
        await client.sql`
            INSERT INTO showcased_products (id, seller_id, product_id)
            VALUES (${showcase.id}, ${showcase.seller_id}, ${showcase.product_id})
            ON CONFLICT (id) DO NOTHING;
        `;
        console.log(`Inserted showcased product with ID: ${showcase.id}`);
    }
    // Insert collections
    console.log('Inserting collections...');
    for (const collection of collections) {
        await client.sql`
            INSERT INTO collections (id, seller_id, name)
            VALUES (${collection.id}, ${collection.seller_id}, ${collection.name})
            ON CONFLICT (id) DO NOTHING;
        `;
        console.log(`Inserted collection: ${collection.name}`);
    }
    // Insert collection products
    console.log('Inserting collection products...');
    for (const collectionProduct of collectionProducts) {
        await client.sql`
            INSERT INTO collection_products (id, collection_id, product_id)
            VALUES (${collectionProduct.id}, ${collectionProduct.collection_id}, ${collectionProduct.product_id})
            ON CONFLICT (id) DO NOTHING;
        `;
        console.log(`Inserted collection product with ID: ${collectionProduct.id}`);
    }

        //COMMI THE CHANGES
        await client.sql`COMMIT`;

        return NextResponse.json({ message: 'Database seeded successfully' }, { status: 200 });

    } catch (error) {
        await client.sql`ROLLBACK`;
        console.error('Error seeding database.  Attempting to rollback: ', error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });

    } finally {
        client.release();
        console.log('Database connection released.');
    }
}



