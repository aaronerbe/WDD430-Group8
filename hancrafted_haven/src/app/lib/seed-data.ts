// This file contains seed data for the handcrafted_haven database

// Creators array
const creators = [
    {
        id: '1', // Jane Doe
        name: 'Jane Doe',
        bio: 'A passionate potter creating one-of-a-kind ceramics using traditional techniques and natural clay. Jane finds inspiration from her travels and creates pieces with unique designs that tell a story.',
        email: 'jane.doe@email.com',
        password: 'hashedpassword123', // Placeholder for hashed passwords
    },
    {
        id: '2', // John Smith
        name: 'John Smith',
        bio: 'Crafting sustainable wooden furniture for modern homes. John’s creations are made from reclaimed wood, and each piece is carefully handcrafted to ensure quality and environmental sustainability.',
        email: 'john.smith@email.com',
        password: 'hashedpassword456',
    },
    {
        id: '3', // Emily Davis
        name: 'Emily Davis',
        bio: 'Handmade jewelry inspired by nature. Emily uses materials like sterling silver and gemstones to create delicate designs that reflect the beauty of the natural world.',
        email: 'emily.davis@email.com',
        password: 'hashedpassword789',
    },
    {
        id: '4', // Michael Johnson
        name: 'Michael Johnson',
        bio: 'Unique leather goods crafted by hand. Michael’s work is characterized by high-quality leather and meticulous attention to detail, ensuring durability and timeless elegance.',
        email: 'michael.johnson@email.com',
        password: 'hashedpassword101',
    },
];

// Products array
const products = [
    {
        id: '1',
        creator_id: creators[0].id,
        name: 'Handcrafted Ceramic Mug',
        description: 'This ceramic mug is handcrafted with high-quality clay and glaze. Each piece is unique, featuring hand-painted patterns inspired by nature. The sturdy handle and smooth finish make it perfect for daily use. Jane has been working with ceramics for over 10 years, and this mug reflects her attention to detail and love for organic designs. It’s oven, microwave, and dishwasher safe, made to last through many years of use.',
        price: 30.00,
        category: 'Ceramics',
    },
    {
        id: '2',
        creator_id: creators[0].id,
        name: 'Hand-Painted Ceramic Plate',
        description: 'A large ceramic plate, perfect for serving meals or as a decorative piece. This plate is hand-painted with intricate floral designs, a hallmark of Jane’s artistic style. The plate is made from durable stoneware and fired twice to ensure it withstands daily wear. Jane loves infusing a sense of nature into her work, and this plate’s floral design captures that essence perfectly.',
        price: 45.00,
        category: 'Ceramics',
    },
    {
        id: '3',
        creator_id: creators[0].id,
        name: 'Ceramic Planter Pot',
        description: 'This ceramic planter is designed with a natural matte finish, ideal for indoor plants. Each planter is hand-thrown on the wheel and then carefully shaped and smoothed for a perfect finish. Jane’s passion for creating functional art is evident in every detail of this planter. It comes with a drainage hole and saucer to ensure your plants stay healthy. A perfect addition to any home, this planter blends style and practicality.',
        price: 35.00,
        category: 'Ceramics',
    },
    {
        id: '4',
        creator_id: creators[0].id,
        name: 'Rustic Ceramic Serving Bowl',
        description: 'Made from high-fired stoneware, this rustic serving bowl is perfect for family-style dinners or as a centerpiece. The bowl has a textured exterior that gives it a rustic, handmade feel. Each bowl is shaped and glazed by hand, ensuring that no two are exactly alike. Jane uses a unique glazing process that creates subtle color variations, adding depth to each piece.',
        price: 60.00,
        category: 'Ceramics',
    },
    {
        id: '5',
        creator_id: creators[0].id,
        name: 'Handmade Ceramic Vase',
        description: 'This tall ceramic vase is a stunning statement piece for any room. Each vase is hand-sculpted from porcelain and features a delicate, smooth finish. Jane applies a unique glazing technique that creates a subtle, natural pattern on the vase’s surface. Ideal for holding flowers or as a stand-alone decorative piece, this vase embodies simplicity and elegance.',
        price: 80.00,
        category: 'Ceramics',
    },
    {
        id: '6',
        creator_id: creators[0].id,
        name: 'Textured Ceramic Coasters (Set of 4)',
        description: 'This set of four ceramic coasters is perfect for protecting your surfaces while adding a touch of handmade charm to your home. Each coaster is hand-pressed with natural textures, making each piece one-of-a-kind. Jane focuses on creating functional pieces with an artistic twist, and these coasters are no exception.',
        price: 25.00,
        category: 'Ceramics',
    },

    // Products by John Smith (Creator 2)
    {
        id: '7',
        creator_id: creators[1].id,
        name: 'Reclaimed Wood Coffee Table',
        description: 'This coffee table is crafted from 100% reclaimed wood, showcasing the natural grain and imperfections of the material. John carefully selects wood from sustainable sources, ensuring that each piece tells its own story. The table’s minimalist design fits perfectly in modern homes, and its sturdy construction guarantees it will be a centerpiece in your living room for years to come.',
        price: 250.00,
        category: 'Furniture',
    },
    {
        id: '8',
        creator_id: creators[1].id,
        name: 'Handcrafted Wooden Bookshelf',
        description: 'This wooden bookshelf is made from sustainably sourced oak and finished with non-toxic, eco-friendly oils. The shelf’s design is inspired by modern minimalism, offering ample storage space while maintaining a sleek profile. John’s commitment to sustainability and craftsmanship shines through in every detail, from the smooth hand-sanded finish to the durable joints that ensure the shelf’s longevity.',
        price: 400.00,
        category: 'Furniture',
    },
    {
        id: '9',
        creator_id: creators[1].id,
        name: 'Rustic Wooden Dining Table',
        description: 'This large dining table is crafted from reclaimed wood, offering both beauty and function for family gatherings. The table’s natural grain is preserved, creating a rustic, authentic look. Each table is hand-assembled by John, ensuring every detail is perfect. The sturdy legs and frame provide lasting durability, making this table a long-term investment for any home.',
        price: 900.00,
        category: 'Furniture',
    },
    {
        id: '10',
        creator_id: creators[1].id,
        name: 'Solid Oak Bar Stool',
        description: 'These handcrafted bar stools are made from solid oak, with a smooth, hand-sanded finish that showcases the natural beauty of the wood. John designed these stools with comfort and durability in mind, perfect for any kitchen or bar area. The stools are finished with a non-toxic sealant to ensure they are eco-friendly and safe for use in any home.',
        price: 150.00,
        category: 'Furniture',
    },
    {
        id: '11',
        creator_id: creators[1].id,
        name: 'Reclaimed Wood Side Table',
        description: 'This side table is crafted from reclaimed barn wood, each piece carefully chosen for its unique grain and texture. John’s craftsmanship transforms this simple material into a functional work of art, perfect for any home. The table’s minimalist design allows it to fit seamlessly with a variety of décor styles, and its compact size makes it ideal for small spaces.',
        price: 200.00,
        category: 'Furniture',
    },
    {
        id: '12',
        creator_id: creators[1].id,
        name: 'Wooden Wall Art',
        description: 'This unique piece of wall art is made from reclaimed wood, intricately pieced together to create a geometric design. Each piece of wood is hand-selected by John and assembled with great care, making this artwork truly one-of-a-kind. It adds a touch of rustic charm to any room, while also being eco-friendly and sustainable.',
        price: 350.00,
        category: 'Furniture',
    },

    // Products by Emily Davis (Creator 3)
    {
        id: '13',
        creator_id: creators[2].id,
        name: 'Sterling Silver Leaf Pendant Necklace',
        description: 'This delicate necklace features a leaf-shaped pendant made from high-quality sterling silver. Inspired by the natural world, Emily designed this piece to reflect the beauty and simplicity of nature. The necklace is handcrafted, with each leaf carefully sculpted and polished by hand. Perfect for everyday wear or as a gift for nature lovers.',
        price: 60.00,
        category: 'Jewelry',
    },
    {
        id: '14',
        creator_id: creators[2].id,
        name: 'Gold Plated Bracelet with Gemstones',
        description: 'This elegant bracelet is made from gold-plated wire and features semi-precious gemstones. Each gemstone is hand-selected by Emily for its unique color and clarity, then carefully incorporated into the bracelet’s design. The bracelet is lightweight, comfortable, and perfect for both casual and formal occasions.',
        price: 85.00,
        category: 'Jewelry',
    },
    {
        id: '15',
        creator_id: creators[2].id,
        name: 'Copper Wire Wrapped Earrings',
        description: 'These earrings are made from copper wire, expertly wrapped into a unique spiral design. Emily uses traditional wire-wrapping techniques to create these lightweight, comfortable earrings. The copper has been treated to prevent tarnishing, ensuring they maintain their bright, warm hue over time. Perfect for those who appreciate handmade, artisanal jewelry.',
        price: 40.00,
        category: 'Jewelry',
    },
    {
        id: '16',
        creator_id: creators[2].id,
        name: 'Handmade Silver Ring with Turquoise Stone',
        description: 'This handcrafted ring is made from sterling silver and features a beautiful turquoise stone. Emily hand-sets each stone and shapes the silver band to ensure a perfect fit. The turquoise adds a pop of color, while the simple band design keeps the focus on the stone’s natural beauty. Each ring is unique, with slight variations in the stone’s color and pattern.',
        price: 100.00,
        category: 'Jewelry',
    },
    {
        id: '17',
        creator_id: creators[2].id,
        name: 'Sterling Silver Cuff Bracelet',
        description: 'This bold cuff bracelet is made from solid sterling silver, hand-hammered for a textured finish. Emily’s design is both modern and timeless, making this cuff a statement piece that can be worn alone or layered with other bracelets. The cuff is adjustable, ensuring a comfortable fit for any wrist size.',
        price: 120.00,
        category: 'Jewelry',
    },
    {
        id: '18',
        creator_id: creators[2].id,
        name: 'Gold Vermeil Hoop Earrings',
        description: 'These gold vermeil hoop earrings are lightweight and versatile, perfect for everyday wear. Emily hand-forms each hoop from gold-plated sterling silver, ensuring durability and long-lasting shine. The simple design makes these hoops a classic addition to any jewelry collection.',
        price: 70.00,
        category: 'Jewelry',
    },
    // Products by Alex Johnson (Creator 4)
    {
        id: '19',
        creator_id: creators[3].id,
        name: 'Eco-Friendly Yoga Mat',
        description: 'This eco-friendly yoga mat is made from natural rubber, providing excellent grip and support for all types of yoga practices. Alex’s passion for sustainability is evident in the choice of materials, ensuring that the mat is free from harmful chemicals and safe for both users and the environment. The mat’s non-slip surface enhances stability during poses, while its cushioning ensures comfort during extended practices. Lightweight and portable, it’s perfect for yogis on the go.',
        price: 75.00,
        category: 'Fitness',
    },
    {
        id: '20',
        creator_id: creators[3].id,
        name: 'Handcrafted Wooden Meditation Bench',
        description: 'This meditation bench is handcrafted from sustainably sourced wood, providing a sturdy and comfortable seat for meditation practices. Alex has designed the bench with a slight tilt to promote proper posture during meditation, ensuring a more enjoyable experience. Each piece is uniquely crafted, showcasing the natural grain of the wood. Lightweight and portable, this bench can be easily moved to any location, making it ideal for home or outdoor meditation.',
        price: 120.00,
        category: 'Furniture',
    },
    {
        id: '21',
        creator_id: creators[3].id,
        name: 'Organic Cotton Gym Bag',
        description: 'This spacious gym bag is made from 100% organic cotton, featuring a stylish and practical design for athletes and fitness enthusiasts. The bag has multiple compartments for easy organization, including a padded section for your yoga mat. Alex’s commitment to sustainability shines through in every aspect of this bag, from the materials used to the durable stitching. The eco-friendly dyeing process gives the bag a beautiful finish while remaining safe for the planet.',
        price: 45.00,
        category: 'Fitness',
    },
    {
        id: '22',
        creator_id: creators[3].id,
        name: 'Natural Coconut Shell Bowls (Set of 2)',
        description: 'These unique bowls are handcrafted from real coconut shells, perfect for serving salads, fruits, or snacks. Alex’s approach to sustainable living emphasizes using natural materials, and these bowls are a testament to that philosophy. Each bowl is polished with natural oils to enhance its beauty while preserving its organic nature. Lightweight and durable, they are perfect for indoor use or outdoor gatherings.',
        price: 30.00,
        category: 'Kitchenware',
    },
    {
        id: '23',
        creator_id: creators[3].id,
        name: 'Bamboo Water Bottle',
        description: 'This stylish water bottle is made from sustainable bamboo and stainless steel, combining elegance with functionality. Alex designed this bottle to keep your drinks cold for hours, making it ideal for workouts or daily hydration. The bamboo exterior is naturally anti-bacterial and adds a unique touch to your hydration routine. Each bottle comes with a silicone sleeve to prevent slipping and protect the surface.',
        price: 40.00,
        category: 'Fitness',
    },
    {
        id: '24',
        creator_id: creators[3].id,
        name: 'Recycled Paper Journal',
        description: 'This beautifully crafted journal is made from recycled paper, featuring a hand-stitched binding and a cover made from repurposed fabric. Alex’s journal is perfect for note-taking, journaling, or sketching, offering a sustainable option for writers and artists alike. Each journal is unique, reflecting Alex’s commitment to sustainability and creativity. The durable design ensures that it withstands daily use, making it a reliable companion for your thoughts and ideas.',
        price: 25.00,
        category: 'Stationery',
    },
];

// Product images array: allows for multiple images per product
const productImages = [
    // Images for products by Jane Doe (Creator 1)
    {
        id: '1', // Image for Handmade Ceramic Mug
        product_id: products[0].id, // Handmade Ceramic Mug
        image_url: '/product-images/mug_1.jpg',
    },
    {
        id: '2', // Another image for Handmade Ceramic Mug
        product_id: products[0].id, // Handmade Ceramic Mug
        image_url: '/product-images/mug_2.jpg',
    },
    {
        id: '3', // Image for Handmade Ceramic Mug (additional)
        product_id: products[0].id, // Handmade Ceramic Mug
        image_url: '/product-images/mug_3.jpg',
    },
    {
        id: '4', // Image for Wooden Coffee Table
        product_id: products[1].id, // Wooden Coffee Table
        image_url: '/product-images/table_1.jpg',
    },
    {
        id: '5', // Another image for Wooden Coffee Table
        product_id: products[1].id, // Wooden Coffee Table
        image_url: '/product-images/table_2.jpg',
    },
    {
        id: '6', // Image for Wooden Coffee Table (additional)
        product_id: products[1].id, // Wooden Coffee Table
        image_url: '/product-images/table_3.jpg',
    },
    {
        id: '7', // Image for Leaf Pendant Necklace
        product_id: products[2].id, // Leaf Pendant Necklace
        image_url: '/product-images/necklace_1.jpg',
    },
    {
        id: '8', // Another image for Leaf Pendant Necklace
        product_id: products[2].id, // Leaf Pendant Necklace
        image_url: '/product-images/necklace_2.jpg',
    },
    {
        id: '9', // Image for Leaf Pendant Necklace (additional)
        product_id: products[2].id, // Leaf Pendant Necklace
        image_url: '/product-images/necklace_3.jpg',
    },
    {
        id: '10', // Image for Leather Messenger Bag
        product_id: products[3].id, // Leather Messenger Bag
        image_url: '/product-images/bag_1.jpg',
    },
    {
        id: '11', // Another image for Leather Messenger Bag
        product_id: products[3].id, // Leather Messenger Bag
        image_url: '/product-images/bag_2.jpg',
    },
    {
        id: '12', // Image for Leather Messenger Bag (additional)
        product_id: products[3].id, // Leather Messenger Bag
        image_url: '/product-images/bag_3.jpg',
    },

    // Images for products by John Smith (Creator 2)
    {
        id: '13', // Image for Wooden Dining Chair
        product_id: products[4].id, // Wooden Dining Chair
        image_url: '/product-images/chair_1.jpg',
    },
    {
        id: '14', // Another image for Wooden Dining Chair
        product_id: products[4].id, // Wooden Dining Chair
        image_url: '/product-images/chair_2.jpg',
    },
    {
        id: '15', // Image for Wooden Dining Chair (additional)
        product_id: products[4].id, // Wooden Dining Chair
        image_url: '/product-images/chair_3.jpg',
    },
    {
        id: '16', // Image for Reclaimed Wood Bookshelf
        product_id: products[5].id, // Reclaimed Wood Bookshelf
        image_url: '/product-images/bookshelf_1.jpg',
    },
    {
        id: '17', // Another image for Reclaimed Wood Bookshelf
        product_id: products[5].id, // Reclaimed Wood Bookshelf
        image_url: '/product-images/bookshelf_2.jpg',
    },
    {
        id: '18', // Image for Reclaimed Wood Bookshelf (additional)
        product_id: products[5].id, // Reclaimed Wood Bookshelf
        image_url: '/product-images/bookshelf_3.jpg',
    },
    {
        id: '19', // Image for Dining Table
        product_id: products[6].id, // Dining Table
        image_url: '/product-images/table_1.jpg',
    },
    {
        id: '20', // Another image for Dining Table
        product_id: products[6].id, // Dining Table
        image_url: '/product-images/table_2.jpg',
    },
    {
        id: '21', // Image for Dining Table (additional)
        product_id: products[6].id, // Dining Table
        image_url: '/product-images/table_3.jpg',
    },

    // Images for products by Emily Davis (Creator 3)
    {
        id: '22', // Image for Bracelet
        product_id: products[7].id, // Bracelet
        image_url: '/product-images/bracelet_1.jpg',
    },
    {
        id: '23', // Another image for Bracelet
        product_id: products[7].id, // Bracelet
        image_url: '/product-images/bracelet_2.jpg',
    },
    {
        id: '24', // Image for Bracelet (additional)
        product_id: products[7].id, // Bracelet
        image_url: '/product-images/bracelet_3.jpg',
    },
    {
        id: '25', // Image for Silver Hoop Earrings
        product_id: products[8].id, // Silver Hoop Earrings
        image_url: '/product-images/earrings_1.jpg',
    },
    {
        id: '26', // Another image for Silver Hoop Earrings
        product_id: products[8].id, // Silver Hoop Earrings
        image_url: '/product-images/earrings_2.jpg',
    },
    {
        id: '27', // Image for Silver Hoop Earrings (additional)
        product_id: products[8].id, // Silver Hoop Earrings
        image_url: '/product-images/earrings_3.jpg',
    },
    {
        id: '28', // Image for Necklace
        product_id: products[9].id, // Necklace
        image_url: '/product-images/necklace_4.jpg',
    },
    {
        id: '29', // Another image for Necklace
        product_id: products[9].id, // Necklace
        image_url: '/product-images/necklace_5.jpg',
    },
    {
        id: '30', // Image for Necklace (additional)
        product_id: products[9].id, // Necklace
        image_url: '/product-images/necklace_6.jpg',
    },

    // Images for products by Alex Johnson (Creator 4)
    {
        id: '31', // Image for Eco-Friendly Yoga Mat
        product_id: products[10].id, // Eco-Friendly Yoga Mat
        image_url: '/product-images/yoga_mat_1.jpg',
    },
    {
        id: '32', // Another image for Eco-Friendly Yoga Mat
        product_id: products[10].id, // Eco-Friendly Yoga Mat
        image_url: '/product-images/yoga_mat_2.jpg',
    },
    {
        id: '33', // Image for Eco-Friendly Yoga Mat (additional)
        product_id: products[10].id, // Eco-Friendly Yoga Mat
        image_url: '/product-images/yoga_mat_3.jpg',
    },
    {
        id: '34', // Image for Handcrafted Wooden Meditation Bench
        product_id: products[11].id, // Handcrafted Wooden Meditation Bench
        image_url: '/product-images/meditation_bench_1.jpg',
    },
    {
        id: '35', // Another image for Handcrafted Wooden Meditation Bench
        product_id: products[11].id, // Handcrafted Wooden Meditation Bench
        image_url: '/product-images/meditation_bench_2.jpg',
    },
    {
        id: '36', // Image for Handcrafted Wooden Meditation Bench (additional)
        product_id: products[11].id, // Handcrafted Wooden Meditation Bench
        image_url: '/product-images/meditation_bench_3.jpg',
    },
    {
        id: '37', // Image for Organic Cotton Gym Bag
        product_id: products[12].id, // Organic Cotton Gym Bag
        image_url: '/product-images/gym_bag_1.jpg',
    },
    {
        id: '38', // Another image for Organic Cotton Gym Bag
        product_id: products[12].id, // Organic Cotton Gym Bag
        image_url: '/product-images/gym_bag_2.jpg',
    },
    {
        id: '39', // Image for Organic Cotton Gym Bag (additional)
        product_id: products[12].id, // Organic Cotton Gym Bag
        image_url: '/product-images/gym_bag_3.jpg',
    },
    {
        id: '40', // Image for Natural Coconut Shell Bowls (Set of 2)
        product_id: products[13].id, // Natural Coconut Shell Bowls
        image_url: '/product-images/coconut_bowls_1.jpg',
    },
    {
        id: '41', // Another image for Natural Coconut Shell Bowls
        product_id: products[13].id, // Natural Coconut Shell Bowls
        image_url: '/product-images/coconut_bowls_2.jpg',
    },
    {
        id: '42', // Image for Natural Coconut Shell Bowls (additional)
        product_id: products[13].id, // Natural Coconut Shell Bowls
        image_url: '/product-images/coconut_bowls_3.jpg',
    },
    {
        id: '43', // Image for Bamboo Water Bottle
        product_id: products[13].id, // Bamboo Water Bottle
        image_url: '/product-images/bamboo_bottle_1.jpg',
    },
    {
        id: '44', // Another image for Bamboo Water Bottle
        product_id: products[13].id, // Bamboo Water Bottle
        image_url: '/product-images/bamboo_bottle_2.jpg',
    },
    {
        id: '45', // Image for Bamboo Water Bottle (additional)
        product_id: products[13].id, // Bamboo Water Bottle
        image_url: '/product-images/bamboo_bottle_3.jpg',
    },
    {
        id: '46', // Image for Recycled Paper Journal
        product_id: products[14].id, // Recycled Paper Journal
        image_url: '/product-images/journal_1.jpg',
    },
    {
        id: '47', // Another image for Recycled Paper Journal
        product_id: products[14].id, // Recycled Paper Journal
        image_url: '/product-images/journal_2.jpg',
    },
    {
        id: '48', // Image for Recycled Paper Journal (additional)
        product_id: products[14].id, // Recycled Paper Journal
        image_url: '/product-images/journal_3.jpg',
    },
];

// Users array
const users = [
    // Placeholder user for dashboard
    {
        id: '0',
        name: 'User',
        email: 'user@nextmail.com',
        password: '123456', // This should be hashed in production
    },
    {
        id: '1', // Alice Brown
        name: 'Alice Brown',
        email: 'alice.brown@email.com',
        password: 'hashedpassword789',
    },
    {
        id: '2', // Bob Green
        name: 'Bob Green',
        email: 'bob.green@email.com',
        password: 'hashedpassword101',
    },
    {
        id: '3', // Charlie White
        name: 'Charlie White',
        email: 'charlie.white@email.com',
        password: 'hashedpassword234',
    },
    {
        id: '5', // Diana Black
        name: 'Diana Black',
        email: 'diana.black@email.com',
        password: 'hashedpassword345',
    },
];

// Reviews array
const reviews = [
    // Reviews for products by Jane Doe (Creator 1)
    {
        id: '1',
        product_id: products[0].id, // Handmade Ceramic Mug
        user_id: users[0].id, // User 1
        rating: 5,
        comment: 'Absolutely love this mug! It’s perfect for my morning coffee.',
    },
    {
        id: '2',
        product_id: products[0].id, // Handmade Ceramic Mug
        user_id: users[1].id, // User 2
        rating: 4,
        comment: 'Great quality and design, but it could be a bit larger.',
    },
    {
        id: '3',
        product_id: products[0].id, // Handmade Ceramic Mug
        user_id: users[2].id, // User 3
        rating: 5,
        comment: 'Beautifully crafted and feels great to hold!',
    },
    {
        id: '4',
        product_id: products[0].id, // Handmade Ceramic Mug
        user_id: users[3].id, // User 4
        rating: 5,
        comment: 'The perfect gift for coffee lovers!',
    },
    {
        id: '5',
        product_id: products[1].id, // Wooden Coffee Table
        user_id: users[0].id, // User 1
        rating: 5,
        comment: 'Stunning table! Fits perfectly in my living room.',
    },
    {
        id: '6',
        product_id: products[1].id, // Wooden Coffee Table
        user_id: users[1].id, // User 2
        rating: 4,
        comment: 'Very sturdy, but the finish had a small scratch.',
    },
    {
        id: '7',
        product_id: products[1].id, // Wooden Coffee Table
        user_id: users[2].id, // User 3
        rating: 5,
        comment: 'Excellent craftsmanship and design!',
    },
    {
        id: '8',
        product_id: products[1].id, // Wooden Coffee Table
        user_id: users[3].id, // User 4
        rating: 5,
        comment: 'Love this table! It’s a centerpiece in my home.',
    },
    {
        id: '9',
        product_id: products[2].id, // Leaf Pendant Necklace
        user_id: users[0].id, // User 1
        rating: 5,
        comment: 'This necklace is gorgeous! I get compliments all the time.',
    },
    {
        id: '10',
        product_id: products[2].id, // Leaf Pendant Necklace
        user_id: users[1].id, // User 2
        rating: 5,
        comment: 'Love this necklace! It goes with everything.',
    },
    {
        id: '11',
        product_id: products[2].id, // Leaf Pendant Necklace
        user_id: users[2].id, // User 3
        rating: 4,
        comment: 'Very beautiful, but it’s a bit fragile.',
    },
    {
        id: '12',
        product_id: products[2].id, // Leaf Pendant Necklace
        user_id: users[3].id, // User 4
        rating: 5,
        comment: 'Perfect for special occasions!',
    },
    {
        id: '13',
        product_id: products[3].id, // Leather Messenger Bag
        user_id: users[0].id, // User 1
        rating: 4,
        comment: 'Great bag, but I wish it had more compartments.',
    },
    {
        id: '14',
        product_id: products[3].id, // Leather Messenger Bag
        user_id: users[1].id, // User 2
        rating: 5,
        comment: 'The quality is outstanding! Very happy with my purchase.',
    },
    {
        id: '15',
        product_id: products[3].id, // Leather Messenger Bag
        user_id: users[2].id, // User 3
        rating: 5,
        comment: 'This bag is perfect for my daily commute.',
    },
    {
        id: '16',
        product_id: products[3].id, // Leather Messenger Bag
        user_id: users[3].id, // User 4
        rating: 5,
        comment: 'Fantastic bag! Holds all my essentials.',
    },

    // Reviews for products by John Smith (Creator 2)
    {
        id: '17',
        product_id: products[4].id, // Wooden Dining Chair
        user_id: users[0].id, // User 1
        rating: 5,
        comment: 'Extremely comfortable and stylish chairs!',
    },
    {
        id: '18',
        product_id: products[4].id, // Wooden Dining Chair
        user_id: users[1].id, // User 2
        rating: 5,
        comment: 'Perfect height for my dining table.',
    },
    {
        id: '19',
        product_id: products[4].id, // Wooden Dining Chair
        user_id: users[2].id, // User 3
        rating: 4,
        comment: 'Good quality, but the color was not as expected.',
    },
    {
        id: '20',
        product_id: products[4].id, // Wooden Dining Chair
        user_id: users[3].id, // User 4
        rating: 5,
        comment: 'These chairs are just what I needed for my dining room!',
    },
    {
        id: '21',
        product_id: products[5].id, // Reclaimed Wood Bookshelf
        user_id: users[0].id, // User 1
        rating: 4,
        comment: 'Beautiful bookshelf, but the assembly was challenging.',
    },
    {
        id: '22',
        product_id: products[5].id, // Reclaimed Wood Bookshelf
        user_id: users[1].id, // User 2
        rating: 5,
        comment: 'Love the rustic look! Perfect for my collection.',
    },
    {
        id: '23',
        product_id: products[6].id, // Dining Table
        user_id: users[2].id, // User 3
        rating: 4,
        comment: 'Nice table, but it was a bit wobbly at first.',
    },
    {
        id: '24',
        product_id: products[6].id, // Dining Table
        user_id: users[3].id, // User 4
        rating: 5,
        comment: 'Looks great and fits well in my dining area.',
    },

    // Reviews for products by Emily Davis (Creator 3)
    {
        id: '25',
        product_id: products[7].id, // Bracelet
        user_id: users[0].id, // User 1
        rating: 5,
        comment: 'Such a beautiful bracelet! It feels so elegant.',
    },
    {
        id: '26',
        product_id: products[7].id, // Bracelet
        user_id: users[1].id, // User 2
        rating: 5,
        comment: 'This bracelet goes with everything! Highly recommend.',
    },
    {
        id: '27',
        product_id: products[7].id, // Bracelet
        user_id: users[2].id, // User 3
        rating: 4,
        comment: 'Pretty bracelet, but a bit smaller than I expected.',
    },
    {
        id: '28',
        product_id: products[7].id, // Bracelet
        user_id: users[3].id, // User 4
        rating: 5,
        comment: 'Perfect for stacking with other bracelets!',
    },
    {
        id: '29',
        product_id: products[8].id, // Silver Hoop Earrings
        user_id: users[0].id, // User 1
        rating: 5,
        comment: 'These are my new favorite earrings!',
    },
    {
        id: '30',
        product_id: products[8].id, // Silver Hoop Earrings
        user_id: users[1].id, // User 2
        rating: 4,
        comment: 'Nice earrings, but I wish they were a bit thicker.',
    },
    {
        id: '31',
        product_id: products[8].id, // Silver Hoop Earrings
        user_id: users[2].id, // User 3
        rating: 5,
        comment: 'So versatile! I wear them every day.',
    },
    {
        id: '32',
        product_id: products[8].id, // Silver Hoop Earrings
        user_id: users[3].id, // User 4
        rating: 5,
        comment: 'Excellent quality and design!',
    },
];


// Collections Table
const collections = [
    {
        id: '1',
        creator_id: creators[0].id, // Jane Doe
        title: 'Handmade Treasures',
        description: 'A curated collection of unique handmade items, perfect for gift-giving.',
    },
    {
        id: '2',
        creator_id: creators[1].id, // John Smith
        title: 'Wooden Wonders',
        description: 'A selection of beautifully crafted wooden furniture and decor.',
    },
    {
        id: '3',
        creator_id: creators[2].id, // Emily Davis
        title: 'Jewelry Collection',
        description: 'An exquisite collection of handmade jewelry pieces.',
    },
    {
        id: '4',
        creator_id: creators[3].id, // Alex Johnson
        title: 'Eco-Friendly Living',
        description: 'Products that promote sustainability and a greener lifestyle.',
    },
];

// Collection Products Linking Table
const collectionProducts = [
    // Products in Handmade Treasures
    { collection_id: '1', product_id: products[1].id }, // Wooden Coffee Table (John Smith)
    { collection_id: '1', product_id: products[2].id }, // Leaf Pendant Necklace (Emily Davis)
    { collection_id: '1', product_id: products[3].id }, // Leather Messenger Bag (Emily Davis)
    { collection_id: '1', product_id: products[5].id }, // Wooden Dining Chair (John Smith)
    { collection_id: '1', product_id: products[6].id }, // Reclaimed Wood Bookshelf (John Smith)
    { collection_id: '1', product_id: products[8].id }, // Bracelet (Emily Davis)
    { collection_id: '1', product_id: products[9].id }, // Earrings (Emily Davis)
    { collection_id: '1', product_id: products[10].id }, // Necklace (Emily Davis)
    { collection_id: '1', product_id: products[4].id }, // Another Necklace (Alex Johnson)
    { collection_id: '1', product_id: products[7].id }, // Eco-Friendly Yoga Mat (Alex Johnson)

    // Products in Wooden Wonders
    { collection_id: '2', product_id: products[0].id }, // Handmade Ceramic Mug (Jane Doe)
    { collection_id: '2', product_id: products[4].id }, // Leather Messenger Bag (Emily Davis)
    { collection_id: '2', product_id: products[9].id }, // Natural Coconut Shell Bowls (Alex Johnson)
    { collection_id: '2', product_id: products[8].id }, // Organic Cotton Gym Bag (Alex Johnson)
    { collection_id: '2', product_id: products[10].id }, // Another Product (Emily Davis)
    { collection_id: '2', product_id: products[11].id }, // Another Product (Emily Davis)
    { collection_id: '2', product_id: products[12].id }, // Another Product (Alex Johnson)
    { collection_id: '2', product_id: products[13].id }, // Another Product (Alex Johnson)
    { collection_id: '2', product_id: products[14].id }, // Another Product (Alex Johnson)
    { collection_id: '2', product_id: products[15].id }, // Another Product (Alex Johnson)

    // Products in Jewelry Collection
    { collection_id: '3', product_id: products[8].id }, // Bracelet (Emily Davis)
    { collection_id: '3', product_id: products[9].id }, // Earrings (Emily Davis)
    { collection_id: '3', product_id: products[2].id }, // Leaf Pendant Necklace (Emily Davis)
    { collection_id: '3', product_id: products[10].id }, // Necklace (Emily Davis)
    { collection_id: '3', product_id: products[11].id }, // Another Necklace (Alex Johnson)
    { collection_id: '3', product_id: products[12].id }, // Another Product (Alex Johnson)
    { collection_id: '3', product_id: products[13].id }, // Another Product (Alex Johnson)
    { collection_id: '3', product_id: products[14].id }, // Another Product (Alex Johnson)
    { collection_id: '3', product_id: products[15].id }, // Another Product (Alex Johnson)
    { collection_id: '3', product_id: products[16].id }, // Another Product (Alex Johnson)

    // Products in Eco-Friendly Living
    { collection_id: '4', product_id: products[19].id }, // Eco-Friendly Yoga Mat (Alex Johnson)
    { collection_id: '4', product_id: products[20].id }, // Handcrafted Wooden Meditation Bench (Alex Johnson)
    { collection_id: '4', product_id: products[21].id }, // Organic Cotton Gym Bag (Alex Johnson)
    { collection_id: '4', product_id: products[22].id }, // Natural Coconut Shell Bowls (Alex Johnson)
    { collection_id: '4', product_id: products[23].id }, // Bamboo Water Bottle (Alex Johnson)
    { collection_id: '4', product_id: products[1].id }, // Wooden Coffee Table (John Smith)
    { collection_id: '4', product_id: products[2].id }, // Leaf Pendant Necklace (Emily Davis)
    { collection_id: '4', product_id: products[4].id }, // Handmade Ceramic Mug (Jane Doe)
    { collection_id: '4', product_id: products[5].id }, // Wooden Dining Chair (John Smith)
    { collection_id: '4', product_id: products[6].id }, // Reclaimed Wood Bookshelf (John Smith)
];

export { creators, products, users, reviews, collections, collectionProducts, productImages };
