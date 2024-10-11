// This file contains seed data for the handcrafted_haven database

const creators = [
    {
        id: '1', // Jane Doe
        name: 'Jane Doe',
        bio: 'A passionate potter creating one-of-a-kind ceramics.',
        email: 'jane.doe@email.com',
        password: 'hashedpassword123',
    },
    {
        id: '2', // John Smith
        name: 'John Smith',
        bio: 'Crafting sustainable wooden furniture for modern homes.',
        email: 'john.smith@email.com',
        password: 'hashedpassword456',
    },
    {
        id: '3', // Emily Davis
        name: 'Emily Davis',
        bio: 'Handmade jewelry inspired by nature.',
        email: 'emily.davis@email.com',
        password: 'hashedpassword789',
    },
    {
        id: '4', // Michael Johnson
        name: 'Michael Johnson',
        bio: 'Unique leather goods crafted by hand.',
        email: 'michael.johnson@email.com',
        password: 'hashedpassword101',
    },
];

const products = [
    {
        id: '1', // Handmade Ceramic Mug
        seller_id: creators[0].id,
        name: 'Handmade Ceramic Mug',
        description: 'A beautifully handcrafted ceramic mug perfect for your morning coffee.',
        price: 25.00,
        image_url: 'https://example.com/mug.jpg',
        category: 'Ceramics',
    },
    {
        id: '2', // Wooden Coffee Table
        seller_id: creators[1].id,
        name: 'Wooden Coffee Table',
        description: 'A sturdy coffee table made from reclaimed wood.',
        price: 150.00,
        image_url: 'https://example.com/table.jpg',
        category: 'Furniture',
    },
    {
        id: '3', // Leaf Pendant Necklace
        seller_id: creators[2].id,
        name: 'Leaf Pendant Necklace',
        description: 'A delicate leaf-shaped pendant made from sterling silver.',
        price: 60.00,
        image_url: 'https://example.com/necklace.jpg',
        category: 'Jewelry',
    },
    {
        id: '4', // Leather Messenger Bag
        seller_id: creators[3].id,
        name: 'Leather Messenger Bag',
        description: 'A stylish and durable leather messenger bag.',
        price: 200.00,
        image_url: 'https://example.com/bag.jpg',
        category: 'Leather Goods',
    },
];

const users = [
    //1st user is needed for dashboard tutorial
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'User',
        email: 'user@nextmail.com',
        password: '123456',
        },
    {
        id: 'c4b98d0c-0dc5-4e90-b7c5-6333ff3a00b2', // Alice Brown
        name: 'Alice Brown',
        email: 'alice.brown@email.com',
        password: 'hashedpassword789',
    },
    {
        id: 'b8145ff1-dc05-4d85-96cb-d38d4c0e33ec', // Bob Green
        name: 'Bob Green',
        email: 'bob.green@email.com',
        password: 'hashedpassword101',
    },
    {
        id: '894f1cc2-6931-4e7d-a6b2-4825c9b6237d', // Charlie White
        name: 'Charlie White',
        email: 'charlie.white@email.com',
        password: 'hashedpassword234',
    },
    {
        id: 'c814ea95-f86a-4c62-8f69-6d4788f3f5f6', // Diana Black
        name: 'Diana Black',
        email: 'diana.black@email.com',
        password: 'hashedpassword345',
    },
];

const reviews = [
    {
        id: '1', // Review for Mug
        product_id: products[0].id,
        user_id: users[0].id,
        rating: 5,
        comment: 'Absolutely love this mug! The craftsmanship is top-notch.',
    },
    {
        id: '2', // Review for Coffee Table
        product_id: products[1].id,
        user_id: users[1].id,
        rating: 4,
        comment: 'The coffee table looks great, but the assembly was a bit tricky.',
    },
    {
        id: '3', // Review for Necklace
        product_id: products[2].id,
        user_id: users[2].id,
        rating: 5,
        comment: 'The leaf necklace is stunning. Such a beautiful design!',
    },
    {
        id: '4', // Review for Messenger Bag
        product_id: products[3].id,
        user_id: users[3].id,
        rating: 3,
        comment: 'The leather bag is nice but could use more internal compartments.',
    },
];

const showcasedProducts = [
    {
        id: '1', // Showcased Product 1
        seller_id: creators[0].id,
        product_id: products[0].id,
    },
    {
        id: '2', // Showcased Product 2
        seller_id: creators[1].id,
        product_id: products[1].id,
    },
    {
        id: '3', // Showcased Product 3
        seller_id: creators[2].id,
        product_id: products[2].id,
    },
    {
        id: '4', // Showcased Product 4
        seller_id: creators[3].id,
        product_id: products[3].id,
    },
];

const collections = [
    {
        id: '1', // Morning Coffee Essentials
        seller_id: creators[0].id,
        name: 'Morning Coffee Essentials',
    },
    {
        id: '2', // Sustainable Furniture
        seller_id: creators[1].id,
        name: 'Sustainable Furniture',
    },
    {
        id: '3', // Nature-Inspired Jewelry
        seller_id: creators[2].id,
        name: 'Nature-Inspired Jewelry',
    },
    {
        id: '4', // Luxury Leather Goods
        seller_id: creators[3].id,
        name: 'Luxury Leather Goods',
    },
];

const collectionProducts = [
    {
        id: '1', // Collection Product 1
        collection_id: collections[0].id,
        product_id: products[0].id,
    },
    {
        id: '2', // Collection Product 2
        collection_id: collections[1].id,
        product_id: products[1].id,
    },
    {
        id: '3', // Collection Product 3
        collection_id: collections[2].id,
        product_id: products[2].id,
    },
    {
        id: '4', // Collection Product 4
        collection_id: collections[3].id,
        product_id: products[3].id,
    },
];

export { creators, products, users, reviews, showcasedProducts, collections, collectionProducts };