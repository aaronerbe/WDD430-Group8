// This file contains seed data for the handcrafted_haven database

// Products array

// Users array
const users = [
    // Placeholder user for dashboard
    {
        id: '0', // Jane Doe
        name: 'Jane Doe',
        bio: "A passionate potter creating one-of-a-kind ceramics using traditional techniques and natural clay. Jane finds inspiration from her travels and creates pieces with unique designs that tell a story.",
        email: 'jane.doe@email.com',
        password: 'hashedpassword123', // Placeholder for hashed passwords
        type: 'creator'
    },
    {
        id: '1', // John Smith
        name: 'John Smith',
        bio: "Crafting sustainable wooden furniture for modern homes. John’s creations are made from reclaimed wood, and each piece is carefully handcrafted to ensure quality and environmental sustainability.",
        email: 'john.smith@email.com',
        password: 'hashedpassword456',
        type: 'creator'
    },
    {
        id: '2', // Emily Davis
        name: 'Emily Davis',
        bio: "Handmade jewelry inspired by nature. Emily uses materials like sterling silver and gemstones to create delicate designs that reflect the beauty of the natural world.",
        email: 'emily.davis@email.com',
        password: 'hashedpassword789',
        type: 'creator'
    },
    {
        id: '3', // Michael Johnson
        name: 'Michael Johnson',
        bio: "Unique leather goods crafted by hand. Michael’s work is characterized by high-quality leather and meticulous attention to detail, ensuring durability and timeless elegance.",
        email: 'michael.johnson@email.com',
        password: 'hashedpassword101',
        type: 'creator'
    },
    {
        id: '4', // Alice Brown
        name: 'Alice Brown',
        bio: "user",
        email: 'alice.brown@email.com',
        password: 'hashedpassword789',
        type: 'user'
    },
    {
        id: '5', // Bob Green
        name: 'Bob Green',
        bio: "user",
        email: 'bob.green@email.com',
        password: 'hashedpassword101',
        type: 'user'
    },
    {
        id: '6', // Charlie White
        name: 'Charlie White',
        bio: "user",
        email: 'charlie.white@email.com',
        password: 'hashedpassword234',
        type: 'user'
    },
    {
        id: '7', // Emily Adams
        name: 'Emily Adams',
        bio: "user",
        email: 'emily.adams@email.com',
        password: 'hashedpassword567',
        type: 'user'
    },
    {
        id: '8', // Diana Black
        name: 'Diana Black',
        bio: "user",
        email: 'diana.black@email.com',
        password: 'hashedpassword345',
        type: 'user'
    },
    {
        id: '9', // Frank Johnson
        name: 'Frank Johnson',
        bio: "user",
        email: 'frank.johnson@email.com',
        password: 'hashedpassword678',
        type: 'user'
    },
    {
        id: '10', // Grace Lee
        name: 'Grace Lee',
        bio: "user",
        email: 'grace.lee@email.com',
        password: 'hashedpassword890',
        type: 'user'
    },
    {
        id: '11', // Henry Smith
        name: 'Henry Smith',
        bio: "user",
        email: 'henry.smith@email.com',
        password: 'hashedpassword012',
        type: 'user'
    },
    {
        id: '12', // Isabella Martinez
        name: 'Isabella Martinez',
        bio: "user",
        email: 'isabella.martinez@email.com',
        password: 'hashedpassword345',
        type: 'user'
    },
    {
        id: '13', // Jack Davis
        name: 'Jack Davis',
        bio: "user",
        email: 'jack.davis@email.com',
        password: 'hashedpassword456',
        type: 'user'
    },
    {
        id: '100',
        name: 'User',
        bio: "placeholder user for dashboard project",
        email: 'user@nextmail.com',
        password: '123456', // This should be hashed in production
        type: 'admin'
    },
];

const products = [
    {
        id: '1',
        user_id: users[0].id,
        name: 'Handcrafted Ceramic Mug',
        description: 'This ceramic mug is handcrafted with high-quality clay and glaze. Each piece is unique, featuring hand-painted patterns inspired by nature. The sturdy handle and smooth finish make it perfect for daily use. Jane has been working with ceramics for over 10 years, and this mug reflects her attention to detail and love for organic designs. It’s oven, microwave, and dishwasher safe, made to last through many years of use.',
        price: 30.00,
        category: 'Ceramics',
    },
    {
        id: '2',
        user_id: users[0].id,
        name: 'Hand-Painted Ceramic Plate',
        description: 'A large ceramic plate, perfect for serving meals or as a decorative piece. This plate is hand-painted with intricate floral designs, a hallmark of Jane’s artistic style. The plate is made from durable stoneware and fired twice to ensure it withstands daily wear. Jane loves infusing a sense of nature into her work, and this plate’s floral design captures that essence perfectly.',
        price: 45.00,
        category: 'Ceramics',
    },
    {
        id: '3',
        user_id: users[0].id,
        name: 'Ceramic Planter Pot',
        description: 'This ceramic planter is designed with a natural matte finish, ideal for indoor plants. Each planter is hand-thrown on the wheel and then carefully shaped and smoothed for a perfect finish. Jane’s passion for creating functional art is evident in every detail of this planter. It comes with a drainage hole and saucer to ensure your plants stay healthy. A perfect addition to any home, this planter blends style and practicality.',
        price: 35.00,
        category: 'Ceramics',
    },
    {
        id: '4',
        user_id: users[0].id,
        name: 'Rustic Ceramic Serving Bowl',
        description: 'Made from high-fired stoneware, this rustic serving bowl is perfect for family-style dinners or as a centerpiece. The bowl has a textured exterior that gives it a rustic, handmade feel. Each bowl is shaped and glazed by hand, ensuring that no two are exactly alike. Jane uses a unique glazing process that creates subtle color variations, adding depth to each piece.',
        price: 60.00,
        category: 'Ceramics',
    },
    {
        id: '5',
        user_id: users[0].id,
        name: 'Handmade Ceramic Vase',
        description: 'This tall ceramic vase is a stunning statement piece for any room. Each vase is hand-sculpted from porcelain and features a delicate, smooth finish. Jane applies a unique glazing technique that creates a subtle, natural pattern on the vase’s surface. Ideal for holding flowers or as a stand-alone decorative piece, this vase embodies simplicity and elegance.',
        price: 80.00,
        category: 'Ceramics',
    },
    {
        id: '6',
        user_id: users[0].id,
        name: 'Textured Ceramic Coasters (Set of 4)',
        description: 'This set of four ceramic coasters is perfect for protecting your surfaces while adding a touch of handmade charm to your home. Each coaster is hand-pressed with natural textures, making each piece one-of-a-kind. Jane focuses on creating functional pieces with an artistic twist, and these coasters are no exception.',
        price: 25.00,
        category: 'Ceramics',
    },

    // Products by John Smith (user 2)
    {
        id: '7',
        user_id: users[1].id,
        name: 'Reclaimed Wood Coffee Table',
        description: 'This coffee table is crafted from 100% reclaimed wood, showcasing the natural grain and imperfections of the material. John carefully selects wood from sustainable sources, ensuring that each piece tells its own story. The table’s minimalist design fits perfectly in modern homes, and its sturdy construction guarantees it will be a centerpiece in your living room for years to come.',
        price: 250.00,
        category: 'Furniture',
    },
    {
        id: '8',
        user_id: users[1].id,
        name: 'Handcrafted Wooden Bookshelf',
        description: 'This wooden bookshelf is made from sustainably sourced oak and finished with non-toxic, eco-friendly oils. The shelf’s design is inspired by modern minimalism, offering ample storage space while maintaining a sleek profile. John’s commitment to sustainability and craftsmanship shines through in every detail, from the smooth hand-sanded finish to the durable joints that ensure the shelf’s longevity.',
        price: 400.00,
        category: 'Furniture',
    },
    {
        id: '9',
        user_id: users[1].id,
        name: 'Rustic Wooden Dining Table',
        description: 'This large dining table is crafted from reclaimed wood, offering both beauty and function for family gatherings. The table’s natural grain is preserved, creating a rustic, authentic look. Each table is hand-assembled by John, ensuring every detail is perfect. The sturdy legs and frame provide lasting durability, making this table a long-term investment for any home.',
        price: 900.00,
        category: 'Furniture',
    },
    {
        id: '10',
        user_id: users[1].id,
        name: 'Solid Oak Bar Stool',
        description: 'These handcrafted bar stools are made from solid oak, with a smooth, hand-sanded finish that showcases the natural beauty of the wood. John designed these stools with comfort and durability in mind, perfect for any kitchen or bar area. The stools are finished with a non-toxic sealant to ensure they are eco-friendly and safe for use in any home.',
        price: 150.00,
        category: 'Furniture',
    },
    {
        id: '11',
        user_id: users[1].id,
        name: 'Reclaimed Wood Side Table',
        description: 'This side table is crafted from reclaimed barn wood, each piece carefully chosen for its unique grain and texture. John’s craftsmanship transforms this simple material into a functional work of art, perfect for any home. The table’s minimalist design allows it to fit seamlessly with a variety of décor styles, and its compact size makes it ideal for small spaces.',
        price: 200.00,
        category: 'Furniture',
    },
    {
        id: '12',
        user_id: users[1].id,
        name: 'Wooden Wall Art',
        description: 'This unique piece of wall art is made from reclaimed wood, intricately pieced together to create a geometric design. Each piece of wood is hand-selected by John and assembled with great care, making this artwork truly one-of-a-kind. It adds a touch of rustic charm to any room, while also being eco-friendly and sustainable.',
        price: 350.00,
        category: 'Furniture',
    },

    // Products by Emily Davis (user 3)
    {
        id: '13',
        user_id: users[2].id,
        name: 'Sterling Silver Leaf Pendant Necklace',
        description: 'This delicate necklace features a leaf-shaped pendant made from high-quality sterling silver. Inspired by the natural world, Emily designed this piece to reflect the beauty and simplicity of nature. The necklace is handcrafted, with each leaf carefully sculpted and polished by hand. Perfect for everyday wear or as a gift for nature lovers.',
        price: 60.00,
        category: 'Jewelry',
    },
    {
        id: '14',
        user_id: users[2].id,
        name: 'Gold Plated Bracelet with Gemstones',
        description: 'This elegant bracelet is made from gold-plated wire and features semi-precious gemstones. Each gemstone is hand-selected by Emily for its unique color and clarity, then carefully incorporated into the bracelet’s design. The bracelet is lightweight, comfortable, and perfect for both casual and formal occasions.',
        price: 85.00,
        category: 'Jewelry',
    },
    {
        id: '15',
        user_id: users[2].id,
        name: 'Copper Wire Wrapped Earrings',
        description: 'These earrings are made from copper wire, expertly wrapped into a unique spiral design. Emily uses traditional wire-wrapping techniques to create these lightweight, comfortable earrings. The copper has been treated to prevent tarnishing, ensuring they maintain their bright, warm hue over time. Perfect for those who appreciate handmade, artisanal jewelry.',
        price: 40.00,
        category: 'Jewelry',
    },
    {
        id: '16',
        user_id: users[2].id,
        name: 'Handmade Silver Ring with Turquoise Stone',
        description: 'This handcrafted ring is made from sterling silver and features a beautiful turquoise stone. Emily hand-sets each stone and shapes the silver band to ensure a perfect fit. The turquoise adds a pop of color, while the simple band design keeps the focus on the stone’s natural beauty. Each ring is unique, with slight variations in the stone’s color and pattern.',
        price: 100.00,
        category: 'Jewelry',
    },
    {
        id: '17',
        user_id: users[2].id,
        name: 'Sterling Silver Cuff Bracelet',
        description: 'This bold cuff bracelet is made from solid sterling silver, hand-hammered for a textured finish. Emily’s design is both modern and timeless, making this cuff a statement piece that can be worn alone or layered with other bracelets. The cuff is adjustable, ensuring a comfortable fit for any wrist size.',
        price: 120.00,
        category: 'Jewelry',
    },
    {
        id: '18',
        user_id: users[2].id,
        name: 'Gold Vermeil Hoop Earrings',
        description: 'These gold vermeil hoop earrings are lightweight and versatile, perfect for everyday wear. Emily hand-forms each hoop from gold-plated sterling silver, ensuring durability and long-lasting shine. The simple design makes these hoops a classic addition to any jewelry collection.',
        price: 70.00,
        category: 'Jewelry',
    },
    // Products by Alex Johnson (user 4)
    {
        id: '19',
        user_id: users[3].id,
        name: 'Eco-Friendly Yoga Mat',
        description: 'This eco-friendly yoga mat is made from natural rubber, providing excellent grip and support for all types of yoga practices. Alex’s passion for sustainability is evident in the choice of materials, ensuring that the mat is free from harmful chemicals and safe for both users and the environment. The mat’s non-slip surface enhances stability during poses, while its cushioning ensures comfort during extended practices. Lightweight and portable, it’s perfect for yogis on the go.',
        price: 75.00,
        category: 'Fitness',
    },
    {
        id: '20',
        user_id: users[3].id,
        name: 'Handcrafted Wooden Meditation Bench',
        description: 'This meditation bench is handcrafted from sustainably sourced wood, providing a sturdy and comfortable seat for meditation practices. Alex has designed the bench with a slight tilt to promote proper posture during meditation, ensuring a more enjoyable experience. Each piece is uniquely crafted, showcasing the natural grain of the wood. Lightweight and portable, this bench can be easily moved to any location, making it ideal for home or outdoor meditation.',
        price: 120.00,
        category: 'Furniture',
    },
    {
        id: '21',
        user_id: users[3].id,
        name: 'Organic Cotton Gym Bag',
        description: 'This spacious gym bag is made from 100% organic cotton, featuring a stylish and practical design for athletes and fitness enthusiasts. The bag has multiple compartments for easy organization, including a padded section for your yoga mat. Alex’s commitment to sustainability shines through in every aspect of this bag, from the materials used to the durable stitching. The eco-friendly dyeing process gives the bag a beautiful finish while remaining safe for the planet.',
        price: 45.00,
        category: 'Fitness',
    },
    {
        id: '22',
        user_id: users[3].id,
        name: 'Natural Coconut Shell Bowls (Set of 2)',
        description: 'These unique bowls are handcrafted from real coconut shells, perfect for serving salads, fruits, or snacks. Alex’s approach to sustainable living emphasizes using natural materials, and these bowls are a testament to that philosophy. Each bowl is polished with natural oils to enhance its beauty while preserving its organic nature. Lightweight and durable, they are perfect for indoor use or outdoor gatherings.',
        price: 30.00,
        category: 'Kitchenware',
    },
    {
        id: '23',
        user_id: users[3].id,
        name: 'Bamboo Water Bottle',
        description: 'This stylish water bottle is made from sustainable bamboo and stainless steel, combining elegance with functionality. Alex designed this bottle to keep your drinks cold for hours, making it ideal for workouts or daily hydration. The bamboo exterior is naturally anti-bacterial and adds a unique touch to your hydration routine. Each bottle comes with a silicone sleeve to prevent slipping and protect the surface.',
        price: 40.00,
        category: 'Fitness',
    },
    {
        id: '24',
        user_id: users[3].id,
        name: 'Recycled Paper Journal',
        description: 'This beautifully crafted journal is made from recycled paper, featuring a hand-stitched binding and a cover made from repurposed fabric. Alex’s journal is perfect for note-taking, journaling, or sketching, offering a sustainable option for writers and artists alike. Each journal is unique, reflecting Alex’s commitment to sustainability and creativity. The durable design ensures that it withstands daily use, making it a reliable companion for your thoughts and ideas.',
        price: 25.00,
        category: 'Stationery',
    },
];

const productImages = [
    // Images for products by Jane Doe (user 1)
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
        id: '4', // Image for Ceramic Plate
        product_id: products[1].id, // Ceramic Plate
        image_url: '/product-images/plate_1.jpg',
    },
    {
        id: '5', // Another image for Ceramic Plate
        product_id: products[1].id, // Ceramic Plate
        image_url: '/product-images/plate_2.jpg',
    },
    {
        id: '6', // Image for Ceramic Plate (additional)
        product_id: products[1].id, // Ceramic Plate
        image_url: '/product-images/plate_3.jpg',
    },
    {
        id: '7', // Image for Planter Pot
        product_id: products[2].id, // Planter Pot
        image_url: '/product-images/planter_pot_1.jpg',
    },
    {
        id: '8', // Another image for Planter Pot
        product_id: products[2].id, // Planter Pot
        image_url: '/product-images/planter_pot_2.jpg',
    },
    {
        id: '9', // Image for Planter Pot (additional)
        product_id: products[2].id, // Planter Pot
        image_url: '/product-images/planter_pot_3.jpg',
    },
    {
        id: '10', // Image for Serving Bowl
        product_id: products[3].id, // Serving Bowl
        image_url: '/product-images/serving_bowl_1.jpg',
    },
    {
        id: '11', // Another image for Serving Bowl
        product_id: products[3].id, // Serving Bowl
        image_url: '/product-images/serving_bowl_2.jpg',
    },
    {
        id: '12', // Image for Serving Bowl (additional)
        product_id: products[3].id, // Serving Bowl
        image_url: '/product-images/serving_bowl_3.jpg',
    },
    {
        id: '13', // Image for Vase
        product_id: products[4].id, // Vase
        image_url: '/product-images/vase_1.jpg',
    },
    {
        id: '14', // Another image for Vase
        product_id: products[4].id, // Vase
        image_url: '/product-images/vase_2.jpg',
    },
    {
        id: '15', // Image for Vase (additional)
        product_id: products[4].id, // Vase
        image_url: '/product-images/vase_3.jpg',
    },
    {
        id: '16', // Image for Coasters
        product_id: products[5].id, // Coasters
        image_url: '/product-images/coasters_1.jpg',
    },
    {
        id: '17', // Another image for Coasters
        product_id: products[5].id, // Coasters
        image_url: '/product-images/coasters_2.jpg',
    },
    {
        id: '18', // Image for Coasters (additional)
        product_id: products[5].id, // Coasters
        image_url: '/product-images/coasters_3.jpg',
    },
    {
        id: '19', // Image for Coffee Table
        product_id: products[6].id, // Coffee Table
        image_url: '/product-images/table_1.jpg',
    },
    {
        id: '20', // Another image for Coffee Table
        product_id: products[6].id, // Coffee Table
        image_url: '/product-images/table_2.jpg',
    },
    {
        id: '21', // Image for Coffee Table (additional)
        product_id: products[6].id, // Coffee Table
        image_url: '/product-images/table_3.jpg',
    },
    {
        id: '22', // Image for shelf
        product_id: products[7].id, // shelf
        image_url: '/product-images/shelf_1.jpg',
    },
    {
        id: '23', // Another image for shelf
        product_id: products[7].id, // shelf
        image_url: '/product-images/shelf_2.jpg',
    },
    {
        id: '24', // Image for shelf (additional)
        product_id: products[7].id, // shelf
        image_url: '/product-images/shelf_3.jpg',
    },
    {
        id: '25', // Image for Dining Table
        product_id: products[8].id, // Dining Table
        image_url: '/product-images/dining_table_1.jpg',
    },
    {
        id: '26', // Another image for Dining Table
        product_id: products[8].id, // Dining Table
        image_url: '/product-images/dining_table_2.jpg',
    },
    {
        id: '27', // Image for Dining Table (additional)
        product_id: products[8].id, // Dining Table
        image_url: '/product-images/dining_table_3.jpg',
    },
    {
        id: '28', // Image for Barstool
        product_id: products[9].id, // barstool
        image_url: '/product-images/barstool_4.jpg',
    },
    {
        id: '29', // Another image for barstool
        product_id: products[9].id, // barstool
        image_url: '/product-images/barstool_5.jpg',
    },
    {
        id: '30', // Image for barstool (additional)
        product_id: products[9].id, // barstool
        image_url: '/product-images/barstool_6.jpg',
    },

    {
        id: '31', // Image for Side Table
        product_id: products[10].id, // Side Table
        image_url: '/product-images/side_table_1.jpg',
    },
    {
        id: '32', // Another image for Side Table
        product_id: products[10].id, // Side Table
        image_url: '/product-images/side_table_2.jpg',
    },
    {
        id: '33', // Image for Side Table (additional)
        product_id: products[10].id, // Side Table
        image_url: '/product-images/side_table_3.jpg',
    },
    {
        id: '34', // Image for Wooden Wall Art
        product_id: products[11].id, // Wooden Wall Art
        image_url: '/product-images/wooden_wall_art_1.jpg',
    },
    {
        id: '35', // Another image for Wooden Wall Art
        product_id: products[11].id, // Wooden Wall Art
        image_url: '/product-images/wooden_wall_art_2.jpg',
    },
    {
        id: '36', // Image for Wooden Wall Art (additional)
        product_id: products[11].id, // Wooden Wall Art
        image_url: '/product-images/wooden_wall_art_3.jpg',
    },
    {
        id: '37', // Image for Silver Leaf Pendant Necklace
        product_id: products[12].id, // Silver Leaf Pendant Necklace
        image_url: '/product-images/necklace_1.jpg',
    },
    {
        id: '38', // Another image for Silver Leaf Pendant Necklace
        product_id: products[12].id, // Silver Leaf Pendant Necklace
        image_url: '/product-images/necklace_2.jpg',
    },
    {
        id: '39', // Image for Silver Leaf Pendant Necklace (additional)
        product_id: products[12].id, // Silver Leaf Pendant Necklace
        image_url: '/product-images/necklace_3.jpg',
    },
    {
        id: '40', // Image for Gold Bracelet w/ Gemstone (Set of 2)
        product_id: products[13].id, // Gold Bracelet w/ Gemstone
        image_url: '/product-images/gold_bracelet_1.jpg',
    },
    {
        id: '41', // Another image for Gold Bracelet w/ Gemstone
        product_id: products[13].id, // Gold Bracelet w/ Gemstone
        image_url: '/product-images/gold_bracelet_2.jpg',
    },
    {
        id: '42', // Image for Gold Bracelet w/ Gemstone (additional)
        product_id: products[13].id, // Gold Bracelet w/ Gemstone
        image_url: '/product-images/gold_bracelet_3.jpg',
    },
    {
        id: '43', // Image for Cu Wire Earings
        product_id: products[14].id, // Cu Wire Earings
        image_url: '/product-images/cu_wire_earings_1.jpg',
    },
    {
        id: '44', // Another image for Cu Wire Earings
        product_id: products[14].id, // Cu Wire Earings
        image_url: '/product-images/cu_wire_earings_2.jpg',
    },
    {
        id: '45', // Image for Cu Wire Earings (additional)
        product_id: products[14].id, // Cu Wire Earings
        image_url: '/product-images/cu_wire_earings_3.jpg',
    },
    {
        id: '46', // Image for Silver Ring w/ Turquise Stone
        product_id: products[15].id, // Silver Ring w/ Turquise Stone
        image_url: '/product-images/silver_ring_1.jpg',
    },
    {
        id: '47', // Another image for Silver Ring w/ Turquise Stone
        product_id: products[15].id, // Silver Ring w/ Turquise Stone
        image_url: '/product-images/silver_ring_2.jpg',
    },
    {
        id: '48', // Image for Silver Ring w/ Turquise Stone (additional)
        product_id: products[15].id, // Silver Ring w/ Turquise Stone
        image_url: '/product-images/silver_ring_3.jpg',
    },
    
    {
        id: '49', // Image for Sterling Silver Cuff Bracelet
        product_id: products[16].id, // Sterling Silver Cuff Bracelet
        image_url: '/product-images/sterling_silver_cuff_bracelet_1.jpg',
    },
    {
        id: '50', // Image for Sterling Silver Cuff Bracelet (additional)
        product_id: products[16].id, // Sterling Silver Cuff Bracelet
        image_url: '/product-images/sterling_silver_cuff_bracelet_2.jpg',
    },
    {
        id: '51', // Image for Gold Vermeil Hoop Earrings
        product_id: products[17].id, // Gold Vermeil Hoop Earrings
        image_url: '/product-images/gold_vermeil_hoop_earrings_1.jpg',
    },
    {
        id: '52', // Image for Gold Vermeil Hoop Earrings (additional)
        product_id: products[17].id, // Gold Vermeil Hoop Earrings
        image_url: '/product-images/gold_vermeil_hoop_earrings_2.jpg',
    },
    {
        id: '53', // Image for Eco-Friendly Yoga Mat
        product_id: products[18].id, // Eco-Friendly Yoga Mat
        image_url: '/product-images/eco_friendly_yoga_mat_1.jpg',
    },
    {
        id: '54', // Image for Eco-Friendly Yoga Mat (additional)
        product_id: products[18].id, // Eco-Friendly Yoga Mat
        image_url: '/product-images/eco_friendly_yoga_mat_2.jpg',
    },
    {
        id: '55', // Image for Handcrafted Wooden Meditation Bench
        product_id: products[19].id, // Handcrafted Wooden Meditation Bench
        image_url: '/product-images/handcrafted_wooden_meditation_bench_1.jpg',
    },
    {
        id: '56', // Image for Handcrafted Wooden Meditation Bench (additional)
        product_id: products[19].id, // Handcrafted Wooden Meditation Bench
        image_url: '/product-images/handcrafted_wooden_meditation_bench_2.jpg',
    },
    {
        id: '57', // Image for Organic Cotton Gym Bag
        product_id: products[20].id, // Organic Cotton Gym Bag
        image_url: '/product-images/organic_cotton_gym_bag_1.jpg',
    },
    {
        id: '58', // Image for Organic Cotton Gym Bag (additional)
        product_id: products[20].id, // Organic Cotton Gym Bag
        image_url: '/product-images/organic_cotton_gym_bag_2.jpg',
    },
    {
        id: '59', // Image for Natural Coconut Shell Bowls (Set of 2)
        product_id: products[21].id, // Natural Coconut Shell Bowls (Set of 2)
        image_url: '/product-images/natural_coconut_shell_bowls_1.jpg',
    },
    {
        id: '60', // Image for Natural Coconut Shell Bowls (Set of 2) (additional)
        product_id: products[21].id, // Natural Coconut Shell Bowls (Set of 2)
        image_url: '/product-images/natural_coconut_shell_bowls_2.jpg',
    },
    {
        id: '61', // Image for Bamboo Water Bottle
        product_id: products[22].id, // Bamboo Water Bottle
        image_url: '/product-images/bamboo_water_bottle_1.jpg',
    },
    {
        id: '62', // Image for Bamboo Water Bottle (additional)
        product_id: products[22].id, // Bamboo Water Bottle
        image_url: '/product-images/bamboo_water_bottle_2.jpg',
    },
    {
        id: '63', // Image for Recycled Paper Journal
        product_id: products[23].id, // Recycled Paper Journal
        image_url: '/product-images/recycled_paper_journal_1.jpg',
    },
    {
        id: '64', // Image for Recycled Paper Journal (additional)
        product_id: products[23].id, // Recycled Paper Journal
        image_url: '/product-images/recycled_paper_journal_2.jpg',
    },
];

// Reviews array
const reviews = [
    {
        id: '1',
        product_id: '1',
        user_id: users[4].id, // User 1
        rating: 5,
        comment: "This mug is simply beautiful! The craftsmanship is exceptional, and I love the nature-inspired patterns. It's my favorite for morning coffee.",
    },
    {
        id: '2',
        product_id: '1',
        user_id: users[5].id, // User 2
        rating: 4,
        comment: "The quality is outstanding, and the design is unique. I just wish it was slightly larger for those days when I need an extra cup.",
    },
    {
        id: '3',
        product_id: '1',
        user_id: users[6].id, // User 3
        rating: 3,
        comment: "The mug is lovely, but the handle feels a bit too small for my hand. Still, it's a beautiful addition to my collection.",
    },
    {
        id: '4',
        product_id: '1',
        user_id: users[7].id, // User 4
        rating: 5,
        comment: "Absolutely love it! The handcrafted details make it feel like a piece of art. It's perfect for a cozy tea session.",
    },
    {
        id: '5',
        product_id: '1',
        user_id: users[8].id, // User 5
        rating: 2,
        comment: "The design is nice, but I noticed a small chip on the rim after a few uses. A bit disappointing for the price.",
    },
    {
        id: '6',
        product_id: '1',
        user_id: users[9].id, // User 6
        rating: 4,
        comment: "Lovely mug with a beautiful glaze. It feels sturdy and well-made, though it could be a tad bigger.",
    },
    {
        id: '7',
        product_id: '1',
        user_id: users[10].id, // User 7
        rating: 5,
        comment: "I’m in love with this mug! The organic design is stunning, and it’s perfect for both hot and cold drinks. Highly recommend.",
    },
    {
        id: '8',
        product_id: '1',
        user_id: users[11].id, // User 8
        rating: 3,
        comment: "It's a nice mug, but the colors are slightly different than in the pictures. Still, the craftsmanship is impressive.",
    },
    {
        id: '9',
        product_id: '1',
        user_id: users[12].id, // User 9
        rating: 4,
        comment: "Great quality and the perfect size for my morning coffee. The hand-painted patterns make it stand out.",
    },
    {
        id: '10',
        product_id: '1',
        user_id: users[13].id, // User 10
        rating: 1,
        comment: "The mug cracked after just a week of use. Very disappointed, considering the price I paid.",
    },
    {
        id: '11',
        product_id: '2',
        user_id: users[4].id, // User 1
        rating: 5,
        comment: "The floral design is absolutely stunning. It’s a beautiful addition to my dining table and doubles as a decorative piece when not in use.",
    },
    {
        id: '12',
        product_id: '2',
        user_id: users[5].id, // User 2
        rating: 4,
        comment: "I love the artistic details and the quality of the plate. It’s a bit heavy, but that just adds to the durability. Perfect for special occasions.",
    },
    {
        id: '13',
        product_id: '2',
        user_id: users[6].id, // User 3
        rating: 3,
        comment: "The design is gorgeous, but the plate arrived with a small scratch. It’s not too noticeable, so I still use it as a serving dish.",
    },
    {
        id: '14',
        product_id: '2',
        user_id: users[7].id, // User 4
        rating: 5,
        comment: "I purchased two of these, and they are my favorite serving plates. The hand-painted floral pattern is even more beautiful in person.",
    },
    {
        id: '15',
        product_id: '2',
        user_id: users[8].id, // User 5
        rating: 2,
        comment: "It’s a nice plate, but I expected the colors to be a bit more vibrant based on the pictures. Still decent quality.",
    },
    {
        id: '16',
        product_id: '2',
        user_id: users[9].id, // User 6
        rating: 4,
        comment: "The plate is well-made and has a lovely design. I just wish it was a little larger for serving bigger dishes.",
    },
    {
        id: '17',
        product_id: '2',
        user_id: users[10].id, // User 7
        rating: 5,
        comment: "Absolutely love this plate! It brings a touch of elegance to my meals. The craftsmanship is top-notch, and it feels very sturdy.",
    },
    {
        id: '18',
        product_id: '2',
        user_id: users[11].id, // User 8
        rating: 3,
        comment: "It’s a nice plate, but it chipped a bit after a couple of uses. The floral design is lovely, though.",
    },
    {
        id: '19',
        product_id: '2',
        user_id: users[12].id, // User 9
        rating: 4,
        comment: "Great for both serving and as a decorative piece. The floral design adds a nice touch, and it’s durable enough for everyday use.",
    },
    {
        id: '20',
        product_id: '2',
        user_id: users[13].id, // User 10
        rating: 1,
        comment: "The plate arrived broken, and I had to go through the hassle of returning it. Disappointed with the packaging.",
    },    
    {
        id: '21',
        product_id: products[2].id, // Ceramic Planter Pot
        user_id: users[6].id, // User 3
        rating: 5,
        comment: 'Absolutely love this planter! The matte finish is beautiful, and the drainage system keeps my plants healthy. It’s exactly what I needed for my indoor garden.',
    },
    {
        id: '22',
        product_id: products[2].id, // Ceramic Planter Pot
        user_id: users[7].id, // User 4
        rating: 4,
        comment: 'Great quality and craftsmanship. The only downside is that it’s slightly smaller than I expected, but it still works well for my succulents.',
    },
    {
        id: '23',
        product_id: products[2].id, // Ceramic Planter Pot
        user_id: users[8].id, // User 5
        rating: 5,
        comment: 'This planter has quickly become my favorite! It looks amazing on my windowsill and is the perfect home for my new fern. Highly recommend!',
    },
    {
        id: '24',
        product_id: products[3].id, // Rustic Ceramic Serving Bowl
        user_id: users[4].id, // User 1
        rating: 4,
        comment: 'Beautiful bowl with a rustic charm. It’s a bit heavy, but the textured glaze gives it such character. Ideal for serving large salads or pasta dishes.',
    },
    {
        id: '25',
        product_id: products[3].id, // Rustic Ceramic Serving Bowl
        user_id: users[5].id, // User 2
        rating: 5,
        comment: 'The perfect centerpiece for our dining table. It has a lovely, handmade feel, and the unique glazing makes each meal feel special.',
    },
    {
        id: '26',
        product_id: products[3].id, // Rustic Ceramic Serving Bowl
        user_id: users[7].id, // User 4
        rating: 3,
        comment: 'The bowl is beautiful, but I wish it was a bit deeper. It works well for serving, but not as great for storing leftovers in the fridge.',
    },
    {
        id: '27',
        product_id: products[4].id, // Handmade Ceramic Vase
        user_id: users[8].id, // User 5
        rating: 5,
        comment: 'This vase is a showstopper! The subtle pattern created by the glazing adds such a nice touch. It looks great with or without flowers.',
    },
    {
        id: '28',
        product_id: products[4].id, // Handmade Ceramic Vase
        user_id: users[6].id, // User 3
        rating: 4,
        comment: 'Lovely vase, though it’s a bit narrower than I expected. It’s great for displaying tall flowers, but I wouldn’t recommend it for larger bouquets.',
    },
    {
        id: '29',
        product_id: products[4].id, // Handmade Ceramic Vase
        user_id: users[5].id, // User 2
        rating: 5,
        comment: 'Perfect for our living room decor. The vase has a smooth, elegant finish and really stands out on the shelf. Worth every penny.',
    },
    {
        id: '30',
        product_id: products[5].id, // Textured Ceramic Coasters (Set of 4)
        user_id: users[4].id, // User 1
        rating: 5,
        comment: 'These coasters are fantastic! The textured design adds a unique touch, and they do a great job of protecting my furniture from water rings.',
    },
    {
        id: '31',
        product_id: products[5].id, // Textured Ceramic Coasters (Set of 4)
        user_id: users[7].id, // User 4
        rating: 4,
        comment: 'I love the handmade look of these coasters. They’re a bit rough around the edges, but that adds to their charm.',
    },
    {
        id: '32',
        product_id: products[5].id, // Textured Ceramic Coasters (Set of 4)
        user_id: users[8].id, // User 5
        rating: 3,
        comment: 'The coasters are nice, but they’re a bit smaller than I expected. They work well for small glasses but are too small for larger mugs.',
    },
    {
        id: '33',
        product_id: products[5].id, // Textured Ceramic Coasters (Set of 4)
        user_id: users[6].id, // User 3
        rating: 5,
        comment: 'Perfect set of coasters! The handmade textures make them stand out, and they blend nicely with my rustic-themed living room.',
    },
    {
        id: '34',
        product_id: products[6].id, // Reclaimed Wood Coffee Table
        user_id: users[6].id, // User 3
        rating: 5,
        comment: 'This coffee table is stunning! The reclaimed wood adds so much character, and it feels solid and well-made. It’s a perfect fit for our living room.',
    },
    {
        id: '35',
        product_id: products[6].id, // Reclaimed Wood Coffee Table
        user_id: users[4].id, // User 1
        rating: 4,
        comment: 'Beautiful table with a lot of character. I just wish it was slightly larger for our space. Nonetheless, it’s a great piece that draws a lot of compliments.',
    },
    {
        id: '36',
        product_id: products[6].id, // Reclaimed Wood Coffee Table
        user_id: users[8].id, // User 5
        rating: 5,
        comment: 'Absolutely love the rustic look of this table! It’s exactly what I was looking for to complete our living room decor.',
    },
    {
        id: '37',
        product_id: products[7].id, // Handcrafted Wooden Bookshelf
        user_id: users[5].id, // User 2
        rating: 5,
        comment: 'The craftsmanship on this bookshelf is top-notch. It has a beautiful finish and is the perfect size for our study. Great quality, worth every penny!',
    },
    {
        id: '38',
        product_id: products[7].id, // Handcrafted Wooden Bookshelf
        user_id: users[7].id, // User 4
        rating: 4,
        comment: 'Beautiful and functional bookshelf. The only issue was that it was a bit heavier than I expected, but it’s very sturdy and looks amazing in our living room.',
    },
    {
        id: '39',
        product_id: products[7].id, // Handcrafted Wooden Bookshelf
        user_id: users[4].id, // User 1
        rating: 5,
        comment: 'Love this bookshelf! The wood has a beautiful grain, and the minimalist design fits perfectly with our modern decor. The eco-friendly finish is a bonus.',
    },
    {
        id: '40',
        product_id: products[8].id, // Rustic Wooden Dining Table
        user_id: users[6].id, // User 3
        rating: 5,
        comment: 'This dining table is gorgeous! It’s perfect for family dinners and has a sturdy feel. The rustic look gives it a timeless appeal.',
    },
    {
        id: '41',
        product_id: products[8].id, // Rustic Wooden Dining Table
        user_id: users[8].id, // User 5
        rating: 4,
        comment: 'The table is beautiful, but it arrived with a small scratch on the surface. Otherwise, it’s a stunning piece and adds a lot of warmth to our dining area.',
    },
    {
        id: '42',
        product_id: products[8].id, // Rustic Wooden Dining Table
        user_id: users[5].id, // User 2
        rating: 5,
        comment: 'We’ve been using this dining table for a few weeks now, and we absolutely love it. It’s sturdy, spacious, and the natural grain gives it a unique character.',
    },
    {
        id: '43',
        product_id: products[9].id, // Solid Oak Bar Stool
        user_id: users[7].id, // User 4
        rating: 4,
        comment: 'Comfortable bar stool with a nice finish. It’s well-made, but the seat could be a bit more cushioned for longer sitting.',
    },
    {
        id: '44',
        product_id: products[9].id, // Solid Oak Bar Stool
        user_id: users[4].id, // User 1
        rating: 5,
        comment: 'These bar stools are perfect for our kitchen island. They’re solid and the wood has a nice, smooth finish. Definitely recommend them!',
    },
    {
        id: '45',
        product_id: products[9].id, // Solid Oak Bar Stool
        user_id: users[6].id, // User 3
        rating: 5,
        comment: 'Beautifully crafted and sturdy. The bar stools fit our rustic-themed kitchen perfectly. Very happy with the purchase.',
    },
    {
        id: '46',
        product_id: products[10].id, // Reclaimed Wood Side Table
        user_id: users[8].id, // User 5
        rating: 5,
        comment: 'This side table is lovely! The reclaimed wood gives it a rustic charm, and the size is perfect for our small living room.',
    },
    {
        id: '47',
        product_id: products[10].id, // Reclaimed Wood Side Table
        user_id: users[5].id, // User 2
        rating: 4,
        comment: 'Great little side table, but it could use a bit more surface area. Otherwise, it looks great next to our couch.',
    },
    {
        id: '48',
        product_id: products[10].id, // Reclaimed Wood Side Table
        user_id: users[7].id, // User 4
        rating: 5,
        comment: 'Perfect size for our small space. The wood grain is stunning, and the table feels sturdy. Love it!',
    },
    {
        id: '49',
        product_id: products[11].id, // Wooden Wall Art
        user_id: users[4].id, // User 1
        rating: 5,
        comment: 'This piece of wall art is beautiful! The geometric design adds a lot of character to our living room. Truly a unique piece.',
    },
    {
        id: '50',
        product_id: products[11].id, // Wooden Wall Art
        user_id: users[6].id, // User 3
        rating: 4,
        comment: 'The craftsmanship is impressive, but I thought it would be a bit larger. Still, it adds a nice touch of rustic charm to our hallway.',
    },
    {
        id: '51',
        product_id: products[11].id, // Wooden Wall Art
        user_id: users[8].id, // User 5
        rating: 5,
        comment: 'Absolutely love this piece! The intricate design and the natural wood give it such a warm and inviting feel. It’s a great addition to our home.',
    },
    {
        id: '52',
        product_id: products[12].id, // Sterling Silver Leaf Pendant Necklace
        user_id: users[5].id, // User 2
        rating: 5,
        comment: 'This necklace is absolutely beautiful. The leaf pendant is delicate and the silver shines so nicely. It’s become my go-to necklace for everyday wear.',
    },
    {
        id: '53',
        product_id: products[12].id, // Sterling Silver Leaf Pendant Necklace
        user_id: users[7].id, // User 4
        rating: 4,
        comment: 'Lovely piece, but the chain is a little shorter than I expected. The leaf pendant is exquisite, though. It makes a great gift for nature lovers.',
    },
    {
        id: '54',
        product_id: products[12].id, // Sterling Silver Leaf Pendant Necklace
        user_id: users[4].id, // User 1
        rating: 5,
        comment: 'I bought this necklace as a gift and my friend loved it. The quality of the silver is excellent, and the leaf design is so charming.',
    },
    {
        id: '55',
        product_id: products[13].id, // Gold Plated Bracelet with Gemstones
        user_id: users[6].id, // User 3
        rating: 5,
        comment: 'This bracelet is gorgeous. The gemstones are vibrant, and the gold plating looks high-quality. It adds a touch of elegance to any outfit.',
    },
    {
        id: '56',
        product_id: products[13].id, // Gold Plated Bracelet with Gemstones
        user_id: users[8].id, // User 5
        rating: 4,
        comment: 'Beautiful bracelet, but the clasp could be a little more secure. Otherwise, it’s stunning and goes well with my other jewelry.',
    },
    {
        id: '57',
        product_id: products[13].id, // Gold Plated Bracelet with Gemstones
        user_id: users[4].id, // User 1
        rating: 5,
        comment: 'I love this bracelet! The gemstones add just the right amount of color, and it’s very comfortable to wear. I’ve gotten many compliments on it.',
    },
    {
        id: '58',
        product_id: products[14].id, // Copper Wire Wrapped Earrings
        user_id: users[7].id, // User 4
        rating: 5,
        comment: 'These earrings are so unique and beautiful. The copper wire adds a rustic touch, and the spiral design is eye-catching. Perfect for casual outfits.',
    },
    {
        id: '59',
        product_id: products[14].id, // Copper Wire Wrapped Earrings
        user_id: users[5].id, // User 2
        rating: 4,
        comment: 'The earrings look great, but I wish they were a little bit larger. The craftsmanship is excellent, though, and they don’t irritate my ears at all.',
    },
    {
        id: '60',
        product_id: products[14].id, // Copper Wire Wrapped Earrings
        user_id: users[8].id, // User 5
        rating: 5,
        comment: 'Love these earrings! They are lightweight and comfortable, and the copper has a beautiful warm glow. They’re perfect for everyday wear.',
    },
    {
        id: '61',
        product_id: products[15].id, // Handmade Silver Ring with Turquoise Stone
        user_id: users[6].id, // User 3
        rating: 5,
        comment: 'This ring is stunning. The turquoise stone adds a pop of color, and the silver band is polished to perfection. I love wearing it as a statement piece.',
    },
    {
        id: '62',
        product_id: products[15].id, // Handmade Silver Ring with Turquoise Stone
        user_id: users[4].id, // User 1
        rating: 4,
        comment: 'The ring is beautiful, but I had to get it resized because it was a bit too big for my finger. The turquoise stone is vibrant and catches the light nicely.',
    },
    {
        id: '63',
        product_id: products[15].id, // Handmade Silver Ring with Turquoise Stone
        user_id: users[7].id, // User 4
        rating: 5,
        comment: 'I’m in love with this ring! The turquoise stone is gorgeous, and the silver band feels sturdy yet comfortable. It’s a great addition to my jewelry collection.',
    },
    {
        id: '64',
        product_id: products[16].id, // Sterling Silver Cuff Bracelet
        user_id: users[8].id, // User 5
        rating: 5,
        comment: 'The cuff bracelet is bold and stylish. The textured finish gives it a unique look, and I love how it fits perfectly on my wrist.',
    },
    {
        id: '65',
        product_id: products[16].id, // Sterling Silver Cuff Bracelet
        user_id: users[6].id, // User 3
        rating: 4,
        comment: 'The bracelet is lovely, but it’s a bit heavy for my taste. However, the adjustable size is great for getting the perfect fit.',
    },
    {
        id: '66',
        product_id: products[16].id, // Sterling Silver Cuff Bracelet
        user_id: users[5].id, // User 2
        rating: 5,
        comment: 'This cuff bracelet is amazing! It’s bold without being too flashy, and it pairs well with both casual and formal outfits. Love it!',
    },
    {
        id: '67',
        product_id: products[17].id, // Gold Vermeil Hoop Earrings
        user_id: users[4].id, // User 1
        rating: 5,
        comment: 'These hoop earrings are perfect! They’re lightweight and have a beautiful gold finish. I wear them almost every day, and they still look brand new.',
    },
    {
        id: '68',
        product_id: products[17].id, // Gold Vermeil Hoop Earrings
        user_id: users[7].id, // User 4
        rating: 4,
        comment: 'Nice earrings, but they could be a bit thicker for my preference. The gold vermeil is high-quality, and they haven’t tarnished at all.',
    },
    {
        id: '69',
        product_id: products[17].id, // Gold Vermeil Hoop Earrings
        user_id: users[6].id, // User 3
        rating: 5,
        comment: 'These are my new favorite earrings! They’re the perfect size, and the gold finish is gorgeous. They add a touch of elegance to any outfit.',
    },
    {
        id: '70',
        product_id: products[18].id, // Eco-Friendly Yoga Mat
        user_id: users[8].id, // User 5
        rating: 4,
        comment: 'The mat is comfortable and provides excellent grip. The eco-friendly aspect is a huge plus, but it could use a bit more cushioning for longer sessions.',
    },
    {
        id: '71',
        product_id: products[18].id, // Eco-Friendly Yoga Mat
        user_id: users[6].id, // User 3
        rating: 5,
        comment: 'Love this yoga mat! The natural rubber provides great support, and I feel good knowing it’s made from sustainable materials. Perfect for my daily practice.',
    },
    {
        id: '72',
        product_id: products[18].id, // Eco-Friendly Yoga Mat
        user_id: users[4].id, // User 1
        rating: 3,
        comment: 'The mat is decent, but it has a slight rubber smell that took a while to go away. The grip is great, but it’s a bit thinner than I expected.',
    },
    {
        id: '73',
        product_id: products[19].id, // Handcrafted Wooden Meditation Bench
        user_id: users[5].id, // User 2
        rating: 5,
        comment: 'This bench is beautifully crafted and very comfortable for meditation. The slight tilt really helps with maintaining posture, making it perfect for longer sessions.',
    },
    {
        id: '74',
        product_id: products[19].id, // Handcrafted Wooden Meditation Bench
        user_id: users[7].id, // User 4
        rating: 4,
        comment: 'The bench is sturdy and well-made, but it could be a bit wider for more comfort. Overall, a great addition to my meditation space.',
    },
    {
        id: '75',
        product_id: products[19].id, // Handcrafted Wooden Meditation Bench
        user_id: users[4].id, // User 1
        rating: 5,
        comment: 'I love this bench! It’s lightweight and easy to move around. The craftsmanship is top-notch, and it’s perfect for meditation, both indoors and outdoors.',
    },
    {
        id: '76',
        product_id: products[20].id, // Organic Cotton Gym Bag
        user_id: users[6].id, // User 3
        rating: 3,
        comment: 'The bag is stylish and made from good materials, but it doesn’t have enough pockets for my liking. It’s great for light use, but not for serious gym-goers.',
    },
    {
        id: '77',
        product_id: products[20].id, // Organic Cotton Gym Bag
        user_id: users[8].id, // User 5
        rating: 5,
        comment: 'This gym bag is fantastic! The organic cotton is high-quality, and the compartments are very useful for organizing my gear. The eco-friendly materials make it even better.',
    },
    {
        id: '78',
        product_id: products[20].id, // Organic Cotton Gym Bag
        user_id: users[5].id, // User 2
        rating: 4,
        comment: 'Good quality gym bag, though it could use a bit more padding in the shoulder strap. Otherwise, the design is great, and the material feels durable.',
    },
    {
        id: '79',
        product_id: products[21].id, // Natural Coconut Shell Bowls (Set of 2)
        user_id: users[7].id, // User 4
        rating: 5,
        comment: 'These bowls are amazing! They add a touch of nature to my table setting, and they’re perfect for serving snacks. I love the natural look and feel.',
    },
    {
        id: '80',
        product_id: products[21].id, // Natural Coconut Shell Bowls (Set of 2)
        user_id: users[4].id, // User 1
        rating: 2,
        comment: 'The bowls look nice, but they’re smaller than I expected. Not very practical for serving anything other than small snacks.',
    },
    {
        id: '81',
        product_id: products[21].id, // Natural Coconut Shell Bowls (Set of 2)
        user_id: users[6].id, // User 3
        rating: 4,
        comment: 'Beautiful bowls, but they need a bit more polishing to get a smoother finish. Still, they make a great eco-friendly addition to my kitchen.',
    },
    {
        id: '82',
        product_id: products[22].id, // Bamboo Water Bottle
        user_id: users[5].id, // User 2
        rating: 5,
        comment: 'This water bottle is fantastic! The bamboo exterior looks great, and it keeps my drinks cold for hours. I love the silicone sleeve for added grip.',
    },
    {
        id: '83',
        product_id: products[22].id, // Bamboo Water Bottle
        user_id: users[7].id, // User 4
        rating: 3,
        comment: 'It’s a nice-looking bottle, but it’s a bit heavy to carry around all day. The bamboo finish is lovely, though.',
    },
    {
        id: '84',
        product_id: products[22].id, // Bamboo Water Bottle
        user_id: users[8].id, // User 5
        rating: 4,
        comment: 'Great bottle for everyday use. The bamboo is unique, and it does keep drinks cold. The only downside is that it’s a bit on the bulky side.',
    },
    //{
    //    id: '85',
    //    product_id: products[23].id, // Recycled Paper Journal
    //    user_id: users[4].id, // User 1
    //    rating: 5,
    //    comment: 'This journal is beautiful and well-made. I love that it’s made from recycled materials, and the hand-stitched binding gives it a special touch. Perfect for daily use.',
    //},
    //{
    //    id: '86',
    //    product_id: products[23].id, // Recycled Paper Journal
    //    user_id: users[6].id, // User 3
    //    rating: 3,
    //    comment: 'The journal is good, but the pages are a bit thin. If you use ink, it tends to bleed through. Still, it’s a great eco-friendly option.',
    //},
    //{
    //    id: '87',
    //    product_id: products[23].id, // Recycled Paper Journal
    //    user_id: users[5].id, // User 2
    //    rating: 5,
    //    comment: 'I love everything about this journal – the recycled paper, the unique cover, and the sturdy design. It’s perfect for jotting down notes or sketching ideas.',
    //}
]

// Collections Table
const collections = [
    {
        id: '1',
        user_id: users[0].id, // Jane Doe
        title: 'Handmade Treasures',
        description: 'A curated collection of unique handmade items, perfect for gift-giving.',
    },
    {
        id: '2',
        user_id: users[1].id, // John Smith
        title: 'Wooden Wonders',
        description: 'A selection of beautifully crafted wooden furniture and decor.',
    },
    {
        id: '3',
        user_id: users[2].id, // Emily Davis
        title: 'Jewelry Collection',
        description: 'An exquisite collection of handmade jewelry pieces.',
    },
    {
        id: '4',
        user_id: users[3].id, // Alex Johnson
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

export { users, products, productImages, reviews, collections, collectionProducts};
