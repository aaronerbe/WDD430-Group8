// This file contains seed data for the handcrafted_haven database

// Products array

// Users array
const users = [
    // Placeholder user for dashboard
    {
        profile: '/profile-images/jane_doe.jpg',
        name: 'Jane Doe',
        bio: "A passionate potter creating one-of-a-kind ceramics using traditional techniques and natural clay. Jane finds inspiration from her travels and creates pieces with unique designs that tell a story.",
        email: 'jane.doe@email.com',
        password: 'hashedpassword123', // Placeholder for hashed passwords
        type: 'creator'
    },
    {
        profile: '/profile-images/john_smith.jpg',
        name: 'John Smith',
        bio: "Crafting sustainable wooden furniture for modern homes. John’s creations are made from reclaimed wood, and each piece is carefully handcrafted to ensure quality and environmental sustainability.",
        email: 'john.smith@email.com',
        password: 'hashedpassword456',
        type: 'creator'
    },
    {
        profile: '/profile-images/emily_davis.jpg',
        name: 'Emily Davis',
        bio: "Handmade jewelry inspired by nature. Emily uses materials like sterling silver and gemstones to create delicate designs that reflect the beauty of the natural world.",
        email: 'emily.davis@email.com',
        password: 'hashedpassword789',
        type: 'creator'
    },
    {
        profile: '/profile-images/michael_johnson.jpg',
        name: 'Michael Johnson',
        bio: "Unique leather goods crafted by hand. Michael’s work is characterized by high-quality leather and meticulous attention to detail, ensuring durability and timeless elegance.",
        email: 'michael.johnson@email.com',
        password: 'hashedpassword101',
        type: 'creator'
    },
    {
        profile: '/profile-images/alice_brown.jpg',
        name: 'Alice Brown',
        bio: "user",
        email: 'alice.brown@email.com',
        password: 'hashedpassword789',
        type: 'user'
    },
    {
        profile: '/profile-images/bob_green.jpg',
        name: 'Bob Green',
        bio: "user",
        email: 'bob.green@email.com',
        password: 'hashedpassword101',
        type: 'user'
    },
    {
        profile: '/profile-images/charlie_white.jpg',
        name: 'Charlie White',
        bio: "user",
        email: 'charlie.white@email.com',
        password: 'hashedpassword234',
        type: 'user'
    },
    {
        profile: '/profile-images/emily_adams.jpg',
        name: 'Emily Adams',
        bio: "user",
        email: 'emily.adams@email.com',
        password: 'hashedpassword567',
        type: 'user'
    },
    {
        profile: '/profile-images/diana_black.jpg',
        name: 'Diana Black',
        bio: "user",
        email: 'diana.black@email.com',
        password: 'hashedpassword345',
        type: 'user'
    },
    {
        profile: '/profile-images/frank_johnson.jpg',
        name: 'Frank Johnson',
        bio: "user",
        email: 'frank.johnson@email.com',
        password: 'hashedpassword678',
        type: 'user'
    },
    {
        profile: '/profile-images/grace_lee.jpg',
        name: 'Grace Lee',
        bio: "user",
        email: 'grace.lee@email.com',
        password: 'hashedpassword890',
        type: 'user'
    },
    {
        profile: '/profile-images/henry_smith.jpg',
        name: 'Henry Smith',
        bio: "user",
        email: 'henry.smith@email.com',
        password: 'hashedpassword012',
        type: 'user'
    },
    {
        profile: '/profile-images/isabella_martinez.jpg',
        name: 'Isabella Martinez',
        bio: "user",
        email: 'isabella.martinez@email.com',
        password: 'hashedpassword345',
        type: 'user'
    },
    {
        profile: '/profile-images/jack_davis.jpg',
        name: 'Jack Davis',
        bio: "user",
        email: 'jack.davis@email.com',
        password: 'hashedpassword456',
        type: 'user'
    },
    {
        profile: '/profile-images/user.jpg',
        name: 'User',
        bio: "placeholder user for dashboard project",
        email: 'user@nextmail.com',
        password: '123456', // This should be hashed in production
        type: 'admin'
    },
    {
        profile: '/profile-images/aaron_erbe.jpg',
        name: 'Aaron Erbe',
        bio: "admin",
        email: 'a-aron@fakemail.com',
        password: '123456!aA', // This should be hashed in production
        type: 'admin'
    },
];

const products = [
    {
        user_id: 1,
        name: 'Handcrafted Ceramic Mug',
        description: 'This ceramic mug is handcrafted with high-quality clay and glaze. Each piece is unique, featuring hand-painted patterns inspired by nature. The sturdy handle and smooth finish make it perfect for daily use. Jane has been working with ceramics for over 10 years, and this mug reflects her attention to detail and love for organic designs. It’s oven, microwave, and dishwasher safe, made to last through many years of use.',
        price: 30.00,
        category: 'Ceramics',
    },
    {
        user_id: 1,
        name: 'Hand-Painted Ceramic Plate',
        description: 'A large ceramic plate, perfect for serving meals or as a decorative piece. This plate is hand-painted with intricate floral designs, a hallmark of Jane’s artistic style. The plate is made from durable stoneware and fired twice to ensure it withstands daily wear. Jane loves infusing a sense of nature into her work, and this plate’s floral design captures that essence perfectly.',
        price: 45.00,
        category: 'Ceramics',
    },
    {
        user_id: 1,
        name: 'Ceramic Planter Pot',
        description: 'This ceramic planter is designed with a natural matte finish, ideal for indoor plants. Each planter is hand-thrown on the wheel and then carefully shaped and smoothed for a perfect finish. Jane’s passion for creating functional art is evident in every detail of this planter. It comes with a drainage hole and saucer to ensure your plants stay healthy. A perfect addition to any home, this planter blends style and practicality.',
        price: 35.00,
        category: 'Ceramics',
    },
    {
        user_id: 1,
        name: 'Rustic Ceramic Serving Bowl',
        description: 'Made from high-fired stoneware, this rustic serving bowl is perfect for family-style dinners or as a centerpiece. The bowl has a textured exterior that gives it a rustic, handmade feel. Each bowl is shaped and glazed by hand, ensuring that no two are exactly alike. Jane uses a unique glazing process that creates subtle color variations, adding depth to each piece.',
        price: 60.00,
        category: 'Ceramics',
    },
    {
        user_id: 1,
        name: 'Handmade Ceramic Vase',
        description: 'This tall ceramic vase is a stunning statement piece for any room. Each vase is hand-sculpted from porcelain and features a delicate, smooth finish. Jane applies a unique glazing technique that creates a subtle, natural pattern on the vase’s surface. Ideal for holding flowers or as a stand-alone decorative piece, this vase embodies simplicity and elegance.',
        price: 80.00,
        category: 'Ceramics',
    },
    {
        user_id: 1,
        name: 'Textured Ceramic Coasters (Set of 4)',
        description: 'This set of four ceramic coasters is perfect for protecting your surfaces while adding a touch of handmade charm to your home. Each coaster is hand-pressed with natural textures, making each piece one-of-a-kind. Jane focuses on creating functional pieces with an artistic twist, and these coasters are no exception.',
        price: 25.00,
        category: 'Ceramics',
    },

    // Products by John Smith (user 2)
    {
        user_id: 2,
        name: 'Reclaimed Wood Coffee Table',
        description: 'This coffee table is crafted from 100% reclaimed wood, showcasing the natural grain and imperfections of the material. John carefully selects wood from sustainable sources, ensuring that each piece tells its own story. The table’s minimalist design fits perfectly in modern homes, and its sturdy construction guarantees it will be a centerpiece in your living room for years to come.',
        price: 250.00,
        category: 'Furniture',
    },
    {
        user_id: 2,
        name: 'Handcrafted Wooden Bookshelf',
        description: 'This wooden bookshelf is made from sustainably sourced oak and finished with non-toxic, eco-friendly oils. The shelf’s design is inspired by modern minimalism, offering ample storage space while maintaining a sleek profile. John’s commitment to sustainability and craftsmanship shines through in every detail, from the smooth hand-sanded finish to the durable joints that ensure the shelf’s longevity.',
        price: 400.00,
        category: 'Furniture',
    },
    {
        user_id: 2,
        name: 'Rustic Wooden Dining Table',
        description: 'This large dining table is crafted from reclaimed wood, offering both beauty and function for family gatherings. The table’s natural grain is preserved, creating a rustic, authentic look. Each table is hand-assembled by John, ensuring every detail is perfect. The sturdy legs and frame provide lasting durability, making this table a long-term investment for any home.',
        price: 900.00,
        category: 'Furniture',
    },
    {
        user_id: 2,
        name: 'Solid Oak Bar Stool',
        description: 'These handcrafted bar stools are made from solid oak, with a smooth, hand-sanded finish that showcases the natural beauty of the wood. John designed these stools with comfort and durability in mind, perfect for any kitchen or bar area. The stools are finished with a non-toxic sealant to ensure they are eco-friendly and safe for use in any home.',
        price: 150.00,
        category: 'Furniture',
    },
    {
        user_id: 2,
        name: 'Reclaimed Wood Side Table',
        description: 'This side table is crafted from reclaimed barn wood, each piece carefully chosen for its unique grain and texture. John’s craftsmanship transforms this simple material into a functional work of art, perfect for any home. The table’s minimalist design allows it to fit seamlessly with a variety of décor styles, and its compact size makes it ideal for small spaces.',
        price: 200.00,
        category: 'Furniture',
    },
    {
        user_id: 2,
        name: 'Wooden Wall Art',
        description: 'This unique piece of wall art is made from reclaimed wood, intricately pieced together to create a geometric design. Each piece of wood is hand-selected by John and assembled with great care, making this artwork truly one-of-a-kind. It adds a touch of rustic charm to any room, while also being eco-friendly and sustainable.',
        price: 350.00,
        category: 'Furniture',
    },

    // Products by Emily Davis (user 3)
    {
        user_id: 3,
        name: 'Sterling Silver Leaf Pendant Necklace',
        description: 'This delicate necklace features a leaf-shaped pendant made from high-quality sterling silver. Inspired by the natural world, Emily designed this piece to reflect the beauty and simplicity of nature. The necklace is handcrafted, with each leaf carefully sculpted and polished by hand. Perfect for everyday wear or as a gift for nature lovers.',
        price: 60.00,
        category: 'Jewelry',
    },
    {
        user_id: 3,
        name: 'Gold Plated Bracelet with Gemstones',
        description: 'This elegant bracelet is made from gold-plated wire and features semi-precious gemstones. Each gemstone is hand-selected by Emily for its unique color and clarity, then carefully incorporated into the bracelet’s design. The bracelet is lightweight, comfortable, and perfect for both casual and formal occasions.',
        price: 85.00,
        category: 'Jewelry',
    },
    {
        user_id: 3,
        name: 'Copper Wire Wrapped Earrings',
        description: 'These earrings are made from copper wire, expertly wrapped into a unique spiral design. Emily uses traditional wire-wrapping techniques to create these lightweight, comfortable earrings. The copper has been treated to prevent tarnishing, ensuring they maintain their bright, warm hue over time. Perfect for those who appreciate handmade, artisanal jewelry.',
        price: 40.00,
        category: 'Jewelry',
    },
    {
        user_id: 3,
        name: 'Handmade Silver Ring with Turquoise Stone',
        description: 'This handcrafted ring is made from sterling silver and features a beautiful turquoise stone. Emily hand-sets each stone and shapes the silver band to ensure a perfect fit. The turquoise adds a pop of color, while the simple band design keeps the focus on the stone’s natural beauty. Each ring is unique, with slight variations in the stone’s color and pattern.',
        price: 100.00,
        category: 'Jewelry',
    },
    {
        user_id: 3,
        name: 'Sterling Silver Cuff Bracelet',
        description: 'This bold cuff bracelet is made from solid sterling silver, hand-hammered for a textured finish. Emily’s design is both modern and timeless, making this cuff a statement piece that can be worn alone or layered with other bracelets. The cuff is adjustable, ensuring a comfortable fit for any wrist size.',
        price: 120.00,
        category: 'Jewelry',
    },
    {
        user_id: 3,
        name: 'Gold Vermeil Hoop Earrings',
        description: 'These gold vermeil hoop earrings are lightweight and versatile, perfect for everyday wear. Emily hand-forms each hoop from gold-plated sterling silver, ensuring durability and long-lasting shine. The simple design makes these hoops a classic addition to any jewelry collection.',
        price: 70.00,
        category: 'Jewelry',
    },
    // Products by Alex Johnson (user 4)
    {
        user_id: 4,
        name: 'Eco-Friendly Yoga Mat',
        description: 'This eco-friendly yoga mat is made from natural rubber, providing excellent grip and support for all types of yoga practices. Alex’s passion for sustainability is evident in the choice of materials, ensuring that the mat is free from harmful chemicals and safe for both users and the environment. The mat’s non-slip surface enhances stability during poses, while its cushioning ensures comfort during extended practices. Lightweight and portable, it’s perfect for yogis on the go.',
        price: 75.00,
        category: 'Fitness',
    },
    {
        user_id: 4,
        name: 'Handcrafted Wooden Meditation Bench',
        description: 'This meditation bench is handcrafted from sustainably sourced wood, providing a sturdy and comfortable seat for meditation practices. Alex has designed the bench with a slight tilt to promote proper posture during meditation, ensuring a more enjoyable experience. Each piece is uniquely crafted, showcasing the natural grain of the wood. Lightweight and portable, this bench can be easily moved to any location, making it ideal for home or outdoor meditation.',
        price: 120.00,
        category: 'Furniture',
    },
    {
        user_id: 4,
        name: 'Organic Cotton Gym Bag',
        description: 'This spacious gym bag is made from 100% organic cotton, featuring a stylish and practical design for athletes and fitness enthusiasts. The bag has multiple compartments for easy organization, including a padded section for your yoga mat. Alex’s commitment to sustainability shines through in every aspect of this bag, from the materials used to the durable stitching. The eco-friendly dyeing process gives the bag a beautiful finish while remaining safe for the planet.',
        price: 45.00,
        category: 'Fitness',
    },
    {
        user_id: 4,
        name: 'Natural Coconut Shell Bowls (Set of 2)',
        description: 'These unique bowls are handcrafted from real coconut shells, perfect for serving salads, fruits, or snacks. Alex’s approach to sustainable living emphasizes using natural materials, and these bowls are a testament to that philosophy. Each bowl is polished with natural oils to enhance its beauty while preserving its organic nature. Lightweight and durable, they are perfect for indoor use or outdoor gatherings.',
        price: 30.00,
        category: 'Kitchenware',
    },
    {
        user_id: 4,
        name: 'Bamboo Water Bottle',
        description: 'This stylish water bottle is made from sustainable bamboo and stainless steel, combining elegance with functionality. Alex designed this bottle to keep your drinks cold for hours, making it ideal for workouts or daily hydration. The bamboo exterior is naturally anti-bacterial and adds a unique touch to your hydration routine. Each bottle comes with a silicone sleeve to prevent slipping and protect the surface.',
        price: 40.00,
        category: 'Fitness',
    },
    {
        user_id: 4,
        name: 'Recycled Paper Journal',
        description: 'This beautifully crafted journal is made from recycled paper, featuring a hand-stitched binding and a cover made from repurposed fabric. Alex’s journal is perfect for note-taking, journaling, or sketching, offering a sustainable option for writers and artists alike. Each journal is unique, reflecting Alex’s commitment to sustainability and creativity. The durable design ensures that it withstands daily use, making it a reliable companion for your thoughts and ideas.',
        price: 25.00,
        category: 'Stationery',
    },
];

const productImages = [
    // Images for products by Jane Doe (user 1)
    {
        product_id: 1, // Handmade Ceramic Mug
        image_url: '/product-images/mug_1.jpg',
    },
    {
        product_id: 1, // Handmade Ceramic Mug
        image_url: '/product-images/mug_2.jpg',
    },
    {
        product_id: 1, // Handmade Ceramic Mug
        image_url: '/product-images/mug_3.jpg',
    },
    {
        product_id: 2, // Ceramic Plate
        image_url: '/product-images/plate_1.jpg',
    },
    {
        product_id: 2, // Ceramic Plate
        image_url: '/product-images/plate_2.jpg',
    },
    {
        product_id: 2, // Ceramic Plate
        image_url: '/product-images/plate_3.jpg',
    },
    {
        product_id: 3, // Planter Pot
        image_url: '/product-images/planter_pot_1.jpg',
    },
    {
        product_id: 3, // Planter Pot
        image_url: '/product-images/planter_pot_2.jpg',
    },
    {
        product_id: 3, // Planter Pot
        image_url: '/product-images/planter_pot_3.jpg',
    },
    {
        product_id: 4, // Serving Bowl
        image_url: '/product-images/serving_bowl_1.jpg',
    },
    {
        product_id: 4, // Serving Bowl
        image_url: '/product-images/serving_bowl_2.jpg',
    },
    {
        product_id: 4, // Serving Bowl
        image_url: '/product-images/serving_bowl_3.jpg',
    },
    {
        product_id: 5, // Vase
        image_url: '/product-images/vase_1.jpg',
    },
    {
        product_id: 5, // Vase
        image_url: '/product-images/vase_2.jpg',
    },
    {
        product_id: 5, // Vase
        image_url: '/product-images/vase_3.jpg',
    },
    {
        product_id: 6, // Coasters
        image_url: '/product-images/coasters_1.jpg',
    },
    {
        product_id: 6, // Coasters
        image_url: '/product-images/coasters_2.jpg',
    },
    {
        product_id: 6, // Coasters
        image_url: '/product-images/coasters_3.jpg',
    },
    {
        product_id: 7, // Coffee Table
        image_url: '/product-images/table_1.jpg',
    },
    {
        product_id: 7, // Coffee Table
        image_url: '/product-images/table_2.jpg',
    },
    {
        product_id: 7, // Coffee Table
        image_url: '/product-images/table_3.jpg',
    },
    {
        product_id: 8, // shelf
        image_url: '/product-images/shelf_1.jpg',
    },
    {
        product_id: 8, // shelf
        image_url: '/product-images/shelf_2.jpg',
    },
    {
        product_id: 8, // shelf
        image_url: '/product-images/shelf_3.jpg',
    },
    {
        product_id: 9, // Dining Table
        image_url: '/product-images/dining_table_1.jpg',
    },
    {
        product_id: 9, // Dining Table
        image_url: '/product-images/dining_table_2.jpg',
    },
    {
        product_id: 9, // Dining Table
        image_url: '/product-images/dining_table_3.jpg',
    },
    {
        product_id: 10, // barstool
        image_url: '/product-images/barstool_4.jpg',
    },
    {
        product_id: 10, // barstool
        image_url: '/product-images/barstool_5.jpg',
    },
    {
        product_id: 10, // barstool
        image_url: '/product-images/barstool_6.jpg',
    },

    {
        product_id: 11, // Side Table
        image_url: '/product-images/side_table_1.jpg',
    },
    {
        product_id: 11, // Side Table
        image_url: '/product-images/side_table_2.jpg',
    },
    {
        product_id: 11, // Side Table
        image_url: '/product-images/side_table_3.jpg',
    },
    {
        product_id: 12, // Wooden Wall Art
        image_url: '/product-images/wooden_wall_art_1.jpg',
    },
    {
        product_id: 12, // Wooden Wall Art
        image_url: '/product-images/wooden_wall_art_2.jpg',
    },
    {
        product_id: 12, // Wooden Wall Art
        image_url: '/product-images/wooden_wall_art_3.jpg',
    },
    {
        product_id: 13, // Silver Leaf Pendant Necklace
        image_url: '/product-images/necklace_1.jpg',
    },
    {
        product_id: 13, // Silver Leaf Pendant Necklace
        image_url: '/product-images/necklace_2.jpg',
    },
    {
        product_id: 13, // Silver Leaf Pendant Necklace
        image_url: '/product-images/necklace_3.jpg',
    },
    {
        product_id: 14, // Gold Bracelet w/ Gemstone
        image_url: '/product-images/gold_bracelet_1.jpg',
    },
    {
        product_id: 14, // Gold Bracelet w/ Gemstone
        image_url: '/product-images/gold_bracelet_2.jpg',
    },
    {
        product_id: 14, // Gold Bracelet w/ Gemstone
        image_url: '/product-images/gold_bracelet_3.jpg',
    },
    {
        product_id: 15, // Cu Wire Earings
        image_url: '/product-images/cu_wire_earings_1.jpg',
    },
    {
        product_id: 15, // Cu Wire Earings
        image_url: '/product-images/cu_wire_earings_2.jpg',
    },
    {
        product_id: 15, // Cu Wire Earings
        image_url: '/product-images/cu_wire_earings_3.jpg',
    },
    {
        product_id: 16, // Silver Ring w/ Turquise Stone
        image_url: '/product-images/silver_ring_1.jpg',
    },
    {
        product_id: 16, // Silver Ring w/ Turquise Stone
        image_url: '/product-images/silver_ring_2.jpg',
    },
    {
        product_id: 16, // Silver Ring w/ Turquise Stone
        image_url: '/product-images/silver_ring_3.jpg',
    },
    
    {
        product_id: 17, // Sterling Silver Cuff Bracelet
        image_url: '/product-images/sterling_silver_cuff_bracelet_1.jpg',
    },
    {
        product_id: 17, // Sterling Silver Cuff Bracelet
        image_url: '/product-images/sterling_silver_cuff_bracelet_2.jpg',
    },
    {
        product_id: 18, // Gold Vermeil Hoop Earrings
        image_url: '/product-images/gold_vermeil_hoop_earrings_1.jpg',
    },
    {
        product_id: 18, // Gold Vermeil Hoop Earrings
        image_url: '/product-images/gold_vermeil_hoop_earrings_2.jpg',
    },
    {
        product_id: 19, // Eco-Friendly Yoga Mat
        image_url: '/product-images/eco_friendly_yoga_mat_1.jpg',
    },
    {
        product_id: 19, // Eco-Friendly Yoga Mat
        image_url: '/product-images/eco_friendly_yoga_mat_2.jpg',
    },
    {
        product_id: 20, // Handcrafted Wooden Meditation Bench
        image_url: '/product-images/handcrafted_wooden_meditation_bench_1.jpg',
    },
    {
        product_id: 20, // Handcrafted Wooden Meditation Bench
        image_url: '/product-images/handcrafted_wooden_meditation_bench_2.jpg',
    },
    {
        product_id: 21, // Organic Cotton Gym Bag
        image_url: '/product-images/organic_cotton_gym_bag_1.jpg',
    },
    {
        product_id: 21, // Organic Cotton Gym Bag
        image_url: '/product-images/organic_cotton_gym_bag_2.jpg',
    },
    {
        product_id: 22, // Natural Coconut Shell Bowls (Set of 2)
        image_url: '/product-images/natural_coconut_shell_bowls_1.jpg',
    },
    {
        product_id: 22, // Natural Coconut Shell Bowls (Set of 2)
        image_url: '/product-images/natural_coconut_shell_bowls_2.jpg',
    },
    {
        product_id: 23, // Bamboo Water Bottle
        image_url: '/product-images/bamboo_water_bottle_1.jpg',
    },
    {
        product_id: 23, // Bamboo Water Bottle
        image_url: '/product-images/bamboo_water_bottle_2.jpg',
    },
    {
        product_id: 24, // Recycled Paper Journal
        image_url: '/product-images/recycled_paper_journal_1.jpg',
    },
    {
        product_id: 24, // Recycled Paper Journal
        image_url: '/product-images/recycled_paper_journal_2.jpg',
    },
];

// Reviews array
const reviews = [
    {
        product_id: 1,
        user_id: 1, // User 1
        rating: 5,
        comment: "This mug is simply beautiful! The craftsmanship is exceptional, and I love the nature-inspired patterns. It's my favorite for morning coffee.",
    },
    {
        product_id: 1,
        user_id: 2, // User 2
        rating: 4,
        comment: "The quality is outstanding, and the design is unique. I just wish it was slightly larger for those days when I need an extra cup.",
    },
    {
        product_id: 1,
        user_id: 3, // User 3
        rating: 3,
        comment: "The mug is lovely, but the handle feels a bit too small for my hand. Still, it's a beautiful addition to my collection.",
    },
    {
        product_id: 1,
        user_id: 4, // User 4
        rating: 5,
        comment: "Absolutely love it! The handcrafted details make it feel like a piece of art. It's perfect for a cozy tea session.",
    },
    {
        product_id: 1,
        user_id: 5, // User 5
        rating: 2,
        comment: "The design is nice, but I noticed a small chip on the rim after a few uses. A bit disappointing for the price.",
    },
    {
        product_id: 1,
        user_id: 6, // User 6
        rating: 4,
        comment: "Lovely mug with a beautiful glaze. It feels sturdy and well-made, though it could be a tad bigger.",
    },
    {
        product_id: 1,
        user_id: 7, // User 7
        rating: 5,
        comment: "I’m in love with this mug! The organic design is stunning, and it’s perfect for both hot and cold drinks. Highly recommend.",
    },
    {
        product_id: 1,
        user_id: 8, // User 8
        rating: 3,
        comment: "It's a nice mug, but the colors are slightly different than in the pictures. Still, the craftsmanship is impressive.",
    },
    {
        product_id: 1,
        user_id: 9, // User 9
        rating: 4,
        comment: "Great quality and the perfect size for my morning coffee. The hand-painted patterns make it stand out.",
    },
    {
        product_id: 1,
        user_id: 10, // User 10
        rating: 1,
        comment: "The mug cracked after just a week of use. Very disappointed, considering the price I paid.",
    },
    {
        product_id: 2,
        user_id: 1, // User 1
        rating: 5,
        comment: "The floral design is absolutely stunning. It’s a beautiful addition to my dining table and doubles as a decorative piece when not in use.",
    },
    {
        product_id: 2,
        user_id: 2, // User 2
        rating: 4,
        comment: "I love the artistic details and the quality of the plate. It’s a bit heavy, but that just adds to the durability. Perfect for special occasions.",
    },
    {
        product_id: 2,
        user_id: 3, // User 3
        rating: 3,
        comment: "The design is gorgeous, but the plate arrived with a small scratch. It’s not too noticeable, so I still use it as a serving dish.",
    },
    {
        product_id: 2,
        user_id: 4, // User 4
        rating: 5,
        comment: "I purchased two of these, and they are my favorite serving plates. The hand-painted floral pattern is even more beautiful in person.",
    },
    {
        product_id: 2,
        user_id: 5, // User 5
        rating: 2,
        comment: "It’s a nice plate, but I expected the colors to be a bit more vibrant based on the pictures. Still decent quality.",
    },
    {
        product_id: 2,
        user_id: 6, // User 6
        rating: 4,
        comment: "The plate is well-made and has a lovely design. I just wish it was a little larger for serving bigger dishes.",
    },
    {
        product_id: 2,
        user_id: 7, // User 7
        rating: 5,
        comment: "Absolutely love this plate! It brings a touch of elegance to my meals. The craftsmanship is top-notch, and it feels very sturdy.",
    },
    {
        product_id: 2,
        user_id: 8, // User 8
        rating: 3,
        comment: "It’s a nice plate, but it chipped a bit after a couple of uses. The floral design is lovely, though.",
    },
    {
        product_id: 2,
        user_id: 9, // User 9
        rating: 4,
        comment: "Great for both serving and as a decorative piece. The floral design adds a nice touch, and it’s durable enough for everyday use.",
    },
    {
        product_id: 2,
        user_id: 10, // User 10
        rating: 1,
        comment: "The plate arrived broken, and I had to go through the hassle of returning it. Disappointed with the packaging.",
    },    
    {
        product_id: 3, // Ceramic Planter Pot
        user_id: 3, // User 3
        rating: 5,
        comment: 'Absolutely love this planter! The matte finish is beautiful, and the drainage system keeps my plants healthy. It’s exactly what I needed for my indoor garden.',
    },
    {
        product_id: 3, // Ceramic Planter Pot
        user_id: 4, // User 4
        rating: 4,
        comment: 'Great quality and craftsmanship. The only downside is that it’s slightly smaller than I expected, but it still works well for my succulents.',
    },
    {
        product_id: 3, // Ceramic Planter Pot
        user_id: 5, // User 5
        rating: 5,
        comment: 'This planter has quickly become my favorite! It looks amazing on my windowsill and is the perfect home for my new fern. Highly recommend!',
    },
    {
        product_id: 4, // Rustic Ceramic Serving Bowl
        user_id: 1, // User 1
        rating: 4,
        comment: 'Beautiful bowl with a rustic charm. It’s a bit heavy, but the textured glaze gives it such character. Ideal for serving large salads or pasta dishes.',
    },
    {
        product_id: 4, // Rustic Ceramic Serving Bowl
        user_id: 2, // User 2
        rating: 5,
        comment: 'The perfect centerpiece for our dining table. It has a lovely, handmade feel, and the unique glazing makes each meal feel special.',
    },
    {
        product_id: 4, // Rustic Ceramic Serving Bowl
        user_id: 4, // User 4
        rating: 3,
        comment: 'The bowl is beautiful, but I wish it was a bit deeper. It works well for serving, but not as great for storing leftovers in the fridge.',
    },
    {
        product_id: 5, // Handmade Ceramic Vase
        user_id: 5, // User 5
        rating: 5,
        comment: 'This vase is a showstopper! The subtle pattern created by the glazing adds such a nice touch. It looks great with or without flowers.',
    },
    {
        product_id: 5, // Handmade Ceramic Vase
        user_id: 3, // User 3
        rating: 4,
        comment: 'Lovely vase, though it’s a bit narrower than I expected. It’s great for displaying tall flowers, but I wouldn’t recommend it for larger bouquets.',
    },
    {
        product_id: 5, // Handmade Ceramic Vase
        user_id: 2, // User 2
        rating: 5,
        comment: 'Perfect for our living room decor. The vase has a smooth, elegant finish and really stands out on the shelf. Worth every penny.',
    },
    {
        product_id: 6, // Textured Ceramic Coasters (Set of 4)
        user_id: 1, // User 1
        rating: 5,
        comment: 'These coasters are fantastic! The textured design adds a unique touch, and they do a great job of protecting my furniture from water rings.',
    },
    {
        product_id: 6, // Textured Ceramic Coasters (Set of 4)
        user_id: 4, // User 4
        rating: 4,
        comment: 'I love the handmade look of these coasters. They’re a bit rough around the edges, but that adds to their charm.',
    },
    {
        product_id: 6, // Textured Ceramic Coasters (Set of 4)
        user_id: 5, // User 5
        rating: 3,
        comment: 'The coasters are nice, but they’re a bit smaller than I expected. They work well for small glasses but are too small for larger mugs.',
    },
    {
        product_id: 6, // Textured Ceramic Coasters (Set of 4)
        user_id: 3, // User 3
        rating: 5,
        comment: 'Perfect set of coasters! The handmade textures make them stand out, and they blend nicely with my rustic-themed living room.',
    },
    {
        product_id: 7, // Reclaimed Wood Coffee Table
        user_id: 3, // User 3
        rating: 5,
        comment: 'This coffee table is stunning! The reclaimed wood adds so much character, and it feels solid and well-made. It’s a perfect fit for our living room.',
    },
    {
        product_id: 7, // Reclaimed Wood Coffee Table
        user_id: 1, // User 1
        rating: 4,
        comment: 'Beautiful table with a lot of character. I just wish it was slightly larger for our space. Nonetheless, it’s a great piece that draws a lot of compliments.',
    },
    {
        product_id: 7, // Reclaimed Wood Coffee Table
        user_id: 5, // User 5
        rating: 5,
        comment: 'Absolutely love the rustic look of this table! It’s exactly what I was looking for to complete our living room decor.',
    },
    {
        product_id: 8, // Handcrafted Wooden Bookshelf
        user_id: 2, // User 2
        rating: 5,
        comment: 'The craftsmanship on this bookshelf is top-notch. It has a beautiful finish and is the perfect size for our study. Great quality, worth every penny!',
    },
    {
        product_id: 8, // Handcrafted Wooden Bookshelf
        user_id: 4, // User 4
        rating: 4,
        comment: 'Beautiful and functional bookshelf. The only issue was that it was a bit heavier than I expected, but it’s very sturdy and looks amazing in our living room.',
    },
    {
        product_id: 8, // Handcrafted Wooden Bookshelf
        user_id: 1, // User 1
        rating: 5,
        comment: 'Love this bookshelf! The wood has a beautiful grain, and the minimalist design fits perfectly with our modern decor. The eco-friendly finish is a bonus.',
    },
    {
        product_id: 9, // Rustic Wooden Dining Table
        user_id: 3, // User 3
        rating: 5,
        comment: 'This dining table is gorgeous! It’s perfect for family dinners and has a sturdy feel. The rustic look gives it a timeless appeal.',
    },
    {
        product_id: 9, // Rustic Wooden Dining Table
        user_id: 5, // User 5
        rating: 4,
        comment: 'The table is beautiful, but it arrived with a small scratch on the surface. Otherwise, it’s a stunning piece and adds a lot of warmth to our dining area.',
    },
    {
        product_id: 9, // Rustic Wooden Dining Table
        user_id: 2, // User 2
        rating: 5,
        comment: 'We’ve been using this dining table for a few weeks now, and we absolutely love it. It’s sturdy, spacious, and the natural grain gives it a unique character.',
    },
    {
        product_id: 10, // Solid Oak Bar Stool
        user_id: 4, // User 4
        rating: 4,
        comment: 'Comfortable bar stool with a nice finish. It’s well-made, but the seat could be a bit more cushioned for longer sitting.',
    },
    {
        product_id: 10, // Solid Oak Bar Stool
        user_id: 1, // User 1
        rating: 5,
        comment: 'These bar stools are perfect for our kitchen island. They’re solid and the wood has a nice, smooth finish. Definitely recommend them!',
    },
    {
        product_id: 10, // Solid Oak Bar Stool
        user_id: 3, // User 3
        rating: 5,
        comment: 'Beautifully crafted and sturdy. The bar stools fit our rustic-themed kitchen perfectly. Very happy with the purchase.',
    },
    {
        product_id: 11, // Reclaimed Wood Side Table
        user_id: 5, // User 5
        rating: 5,
        comment: 'This side table is lovely! The reclaimed wood gives it a rustic charm, and the size is perfect for our small living room.',
    },
    {
        product_id: 11, // Reclaimed Wood Side Table
        user_id: 2, // User 2
        rating: 4,
        comment: 'Great little side table, but it could use a bit more surface area. Otherwise, it looks great next to our couch.',
    },
    {
        product_id: 11, // Reclaimed Wood Side Table
        user_id: 4, // User 4
        rating: 5,
        comment: 'Perfect size for our small space. The wood grain is stunning, and the table feels sturdy. Love it!',
    },
    {
        product_id: 12, // Wooden Wall Art
        user_id: 1, // User 1
        rating: 5,
        comment: 'This piece of wall art is beautiful! The geometric design adds a lot of character to our living room. Truly a unique piece.',
    },
    {
        product_id: 12, // Wooden Wall Art
        user_id: 3, // User 3
        rating: 4,
        comment: 'The craftsmanship is impressive, but I thought it would be a bit larger. Still, it adds a nice touch of rustic charm to our hallway.',
    },
    {
        product_id: 12, // Wooden Wall Art
        user_id: 5, // User 5
        rating: 5,
        comment: 'Absolutely love this piece! The intricate design and the natural wood give it such a warm and inviting feel. It’s a great addition to our home.',
    },
    {
        product_id: 13, // Sterling Silver Leaf Pendant Necklace
        user_id: 2, // User 2
        rating: 5,
        comment: 'This necklace is absolutely beautiful. The leaf pendant is delicate and the silver shines so nicely. It’s become my go-to necklace for everyday wear.',
    },
    {
        product_id: 13, // Sterling Silver Leaf Pendant Necklace
        user_id: 4, // User 4
        rating: 4,
        comment: 'Lovely piece, but the chain is a little shorter than I expected. The leaf pendant is exquisite, though. It makes a great gift for nature lovers.',
    },
    {
        product_id: 13, // Sterling Silver Leaf Pendant Necklace
        user_id: 1, // User 1
        rating: 5,
        comment: 'I bought this necklace as a gift and my friend loved it. The quality of the silver is excellent, and the leaf design is so charming.',
    },
    {
        product_id: 14, // Gold Plated Bracelet with Gemstones
        user_id: 3, // User 3
        rating: 5,
        comment: 'This bracelet is gorgeous. The gemstones are vibrant, and the gold plating looks high-quality. It adds a touch of elegance to any outfit.',
    },
    {
        product_id: 14, // Gold Plated Bracelet with Gemstones
        user_id: 5, // User 5
        rating: 4,
        comment: 'Beautiful bracelet, but the clasp could be a little more secure. Otherwise, it’s stunning and goes well with my other jewelry.',
    },
    {
        product_id: 14, // Gold Plated Bracelet with Gemstones
        user_id: 1, // User 1
        rating: 5,
        comment: 'I love this bracelet! The gemstones add just the right amount of color, and it’s very comfortable to wear. I’ve gotten many compliments on it.',
    },
    {
        product_id: 15, // Copper Wire Wrapped Earrings
        user_id: 4, // User 4
        rating: 5,
        comment: 'These earrings are so unique and beautiful. The copper wire adds a rustic touch, and the spiral design is eye-catching. Perfect for casual outfits.',
    },
    {
        product_id: 15, // Copper Wire Wrapped Earrings
        user_id: 2, // User 2
        rating: 4,
        comment: 'The earrings look great, but I wish they were a little bit larger. The craftsmanship is excellent, though, and they don’t irritate my ears at all.',
    },
    {
        product_id: 15, // Copper Wire Wrapped Earrings
        user_id: 5, // User 5
        rating: 5,
        comment: 'Love these earrings! They are lightweight and comfortable, and the copper has a beautiful warm glow. They’re perfect for everyday wear.',
    },
    {
        product_id: 16, // Handmade Silver Ring with Turquoise Stone
        user_id: 3, // User 3
        rating: 5,
        comment: 'This ring is stunning. The turquoise stone adds a pop of color, and the silver band is polished to perfection. I love wearing it as a statement piece.',
    },
    {
        product_id: 16, // Handmade Silver Ring with Turquoise Stone
        user_id: 1, // User 1
        rating: 4,
        comment: 'The ring is beautiful, but I had to get it resized because it was a bit too big for my finger. The turquoise stone is vibrant and catches the light nicely.',
    },
    {
        product_id: 16, // Handmade Silver Ring with Turquoise Stone
        user_id: 4, // User 4
        rating: 5,
        comment: 'I’m in love with this ring! The turquoise stone is gorgeous, and the silver band feels sturdy yet comfortable. It’s a great addition to my jewelry collection.',
    },
    {
        product_id: 17, // Sterling Silver Cuff Bracelet
        user_id: 5, // User 5
        rating: 5,
        comment: 'The cuff bracelet is bold and stylish. The textured finish gives it a unique look, and I love how it fits perfectly on my wrist.',
    },
    {
        product_id: 17, // Sterling Silver Cuff Bracelet
        user_id: 3, // User 3
        rating: 4,
        comment: 'The bracelet is lovely, but it’s a bit heavy for my taste. However, the adjustable size is great for getting the perfect fit.',
    },
    {
        product_id: 17, // Sterling Silver Cuff Bracelet
        user_id: 2, // User 2
        rating: 5,
        comment: 'This cuff bracelet is amazing! It’s bold without being too flashy, and it pairs well with both casual and formal outfits. Love it!',
    },
    {
        product_id: 18, // Gold Vermeil Hoop Earrings
        user_id: 1, // User 1
        rating: 5,
        comment: 'These hoop earrings are perfect! They’re lightweight and have a beautiful gold finish. I wear them almost every day, and they still look brand new.',
    },
    {
        product_id: 18, // Gold Vermeil Hoop Earrings
        user_id: 4, // User 4
        rating: 4,
        comment: 'Nice earrings, but they could be a bit thicker for my preference. The gold vermeil is high-quality, and they haven’t tarnished at all.',
    },
    {
        product_id: 18, // Gold Vermeil Hoop Earrings
        user_id: 3, // User 3
        rating: 5,
        comment: 'These are my new favorite earrings! They’re the perfect size, and the gold finish is gorgeous. They add a touch of elegance to any outfit.',
    },
    {
        product_id: 19, // Eco-Friendly Yoga Mat
        user_id: 5, // User 5
        rating: 4,
        comment: 'The mat is comfortable and provides excellent grip. The eco-friendly aspect is a huge plus, but it could use a bit more cushioning for longer sessions.',
    },
    {
        product_id: 19, // Eco-Friendly Yoga Mat
        user_id: 3, // User 3
        rating: 5,
        comment: 'Love this yoga mat! The natural rubber provides great support, and I feel good knowing it’s made from sustainable materials. Perfect for my daily practice.',
    },
    {
        product_id: 19, // Eco-Friendly Yoga Mat
        user_id: 1, // User 1
        rating: 3,
        comment: 'The mat is decent, but it has a slight rubber smell that took a while to go away. The grip is great, but it’s a bit thinner than I expected.',
    },
    {
        product_id: 20, // Handcrafted Wooden Meditation Bench
        user_id: 2, // User 2
        rating: 5,
        comment: 'This bench is beautifully crafted and very comfortable for meditation. The slight tilt really helps with maintaining posture, making it perfect for longer sessions.',
    },
    {
        product_id: 20, // Handcrafted Wooden Meditation Bench
        user_id: 4, // User 4
        rating: 4,
        comment: 'The bench is sturdy and well-made, but it could be a bit wider for more comfort. Overall, a great addition to my meditation space.',
    },
    {
        product_id: 20, // Handcrafted Wooden Meditation Bench
        user_id: 1, // User 1
        rating: 5,
        comment: 'I love this bench! It’s lightweight and easy to move around. The craftsmanship is top-notch, and it’s perfect for meditation, both indoors and outdoors.',
    },
    {
        product_id: 21, // Organic Cotton Gym Bag
        user_id: 3, // User 3
        rating: 3,
        comment: 'The bag is stylish and made from good materials, but it doesn’t have enough pockets for my liking. It’s great for light use, but not for serious gym-goers.',
    },
    {
        product_id: 21, // Organic Cotton Gym Bag
        user_id: 5, // User 5
        rating: 5,
        comment: 'This gym bag is fantastic! The organic cotton is high-quality, and the compartments are very useful for organizing my gear. The eco-friendly materials make it even better.',
    },
    {
        product_id: 21, // Organic Cotton Gym Bag
        user_id: 2, // User 2
        rating: 4,
        comment: 'Good quality gym bag, though it could use a bit more padding in the shoulder strap. Otherwise, the design is great, and the material feels durable.',
    },
    {
        product_id: 22, // Natural Coconut Shell Bowls (Set of 2)
        user_id: 4, // User 4
        rating: 5,
        comment: 'These bowls are amazing! They add a touch of nature to my table setting, and they’re perfect for serving snacks. I love the natural look and feel.',
    },
    {
        product_id: 22, // Natural Coconut Shell Bowls (Set of 2)
        user_id: 1, // User 1
        rating: 2,
        comment: 'The bowls look nice, but they’re smaller than I expected. Not very practical for serving anything other than small snacks.',
    },
    {
        product_id: 22, // Natural Coconut Shell Bowls (Set of 2)
        user_id: 3, // User 3
        rating: 4,
        comment: 'Beautiful bowls, but they need a bit more polishing to get a smoother finish. Still, they make a great eco-friendly addition to my kitchen.',
    },
    {
        product_id: 23, // Bamboo Water Bottle
        user_id: 2, // User 2
        rating: 5,
        comment: 'This water bottle is fantastic! The bamboo exterior looks great, and it keeps my drinks cold for hours. I love the silicone sleeve for added grip.',
    },
    {
        product_id: 23, // Bamboo Water Bottle
        user_id: 4, // User 4
        rating: 3,
        comment: 'It’s a nice-looking bottle, but it’s a bit heavy to carry around all day. The bamboo finish is lovely, though.',
    },
    {
        product_id: 23, // Bamboo Water Bottle
        user_id: 5, // User 5
        rating: 4,
        comment: 'Great bottle for everyday use. The bamboo is unique, and it does keep drinks cold. The only downside is that it’s a bit on the bulky side.',
    },
    //{

    //    product_id: 24, // Recycled Paper Journal
    //    user_id: 1, // User 1
    //    rating: 5,
    //    comment: 'This journal is beautiful and well-made. I love that it’s made from recycled materials, and the hand-stitched binding gives it a special touch. Perfect for daily use.',
    //},
    //{

    //    product_id: 24, // Recycled Paper Journal
    //    user_id: 3, // User 3
    //    rating: 3,
    //    comment: 'The journal is good, but the pages are a bit thin. If you use ink, it tends to bleed through. Still, it’s a great eco-friendly option.',
    //},
    //{

    //    product_id: 24, // Recycled Paper Journal
    //    user_id: 2, // User 2
    //    rating: 5,
    //    comment: 'I love everything about this journal – the recycled paper, the unique cover, and the sturdy design. It’s perfect for jotting down notes or sketching ideas.',
    //}
]

// Collections Table
//const collections = [
//    {
//        user_id: 1, // Jane Doe
//        title: 'Handmade Treasures',
//        description: 'A curated collection of unique handmade items, perfect for gift-giving.',
//    },
//    {
//        user_id: 2, // John Smith
//        title: 'Wooden Wonders',
//        description: 'A selection of beautifully crafted wooden furniture and decor.',
//    },
//    {
//        user_id: 3, // Emily Davis
//        title: 'Jewelry Collection',
//        description: 'An exquisite collection of handmade jewelry pieces.',
//    },
//    {
//        user_id: 4, // Alex Johnson
//        title: 'Eco-Friendly Living',
//        description: 'Products that promote sustainability and a greener lifestyle.',
//    },
//];
const collections = [
    {
        user_id: 1, // Jane Doe
        title: 'Artisanal Creations',
        description: 'Explore a vibrant collection of artisanal products crafted by talented makers. From unique pottery to handwoven textiles, this collection showcases the beauty and creativity of handmade goods. Each piece tells a story and adds a touch of individuality to your home or wardrobe.',
    },
    {
        user_id: 2, // John Smith
        title: 'Crafted Comforts',
        description: 'Dive into a world of comfort with our Crafted Comforts collection. Featuring a diverse array of handmade items that enhance your living space, this collection includes everything from cozy blankets to beautifully designed furniture. Each product is made with care, ensuring quality and style for your home.',
    },
    {
        user_id: 3, // Emily Davis
        title: 'Timeless Treasures',
        description: 'Timeless Treasures is a curated selection of products that celebrate craftsmanship and artistry. This collection features an eclectic mix of handmade goods, ranging from exquisite jewelry to stunning home decor. Each piece is carefully crafted, making it a perfect gift for loved ones or a cherished addition to your collection.',
    },
    {
        user_id: 4, // Alex Johnson
        title: 'Sustainable Selections',
        description: 'Our Sustainable Selections collection is dedicated to eco-friendly products that promote a greener lifestyle. This collection features a variety of items made from sustainable materials, designed to reduce environmental impact without sacrificing style. Perfect for those looking to make mindful choices in their daily lives.',
    },
];



// Collection Products Linking Table
// Collection Products Table
const collectionProducts = [
    {
        collection_id: 1, // Artisanal Creations
        product_id: 1, // Handcrafted Ceramic Mug
    },
    {
        collection_id: 1, // Artisanal Creations
        product_id: 2, // Hand-Painted Ceramic Plate
    },
    {
        collection_id: 1, // Artisanal Creations
        product_id: 5, // Handwoven Throw Blanket
    },
    {
        collection_id: 1, // Artisanal Creations
        product_id: 13, // Sterling Silver Leaf Pendant Necklace
    },
    {
        collection_id: 1, // Artisanal Creations
        product_id: 15, // Copper Wire Wrapped Earrings
    },
    {
        collection_id: 1, // Artisanal Creations
        product_id: 18, // Handcrafted Wall Hanging
    },

    {
        collection_id: 2, // Crafted Comforts
        product_id: 4, // Rustic Ceramic Serving Bowl
    },
    {
        collection_id: 2, // Crafted Comforts
        product_id: 6, // Textured Ceramic Coasters (Set of 4)
    },
    {
        collection_id: 2, // Crafted Comforts
        product_id: 7, // Reclaimed Wood Coffee Table
    },
    {
        collection_id: 2, // Crafted Comforts
        product_id: 8, // Handcrafted Wooden Bookshelf
    },
    {
        collection_id: 2, // Crafted Comforts
        product_id: 10, // Solid Oak Bar Stool
    },
    {
        collection_id: 2, // Crafted Comforts
        product_id: 9, // Rustic Wooden Dining Table
    },

    {
        collection_id: 3, // Timeless Treasures
        product_id: 3, // Unique Leather Journal
    },
    {
        collection_id: 3, // Timeless Treasures
        product_id: 12, // Wooden Wall Art
    },
    {
        collection_id: 3, // Timeless Treasures
        product_id: 13, // Sterling Silver Leaf Pendant Necklace
    },
    {
        collection_id: 3, // Timeless Treasures
        product_id: 14, // Gold Plated Bracelet with Gemstones
    },
    {
        collection_id: 3, // Timeless Treasures
        product_id: 19, // Eco-Friendly Yoga Mat
    },
    {
        collection_id: 3, // Timeless Treasures
        product_id: 11, // Reclaimed Wood Side Table
    },

    {
        collection_id: 4, // Sustainable Selections
        product_id: 19, // Eco-Friendly Yoga Mat
    },
    {
        collection_id: 4, // Sustainable Selections
        product_id: 8, // Handcrafted Wooden Bookshelf
    },
    {
        collection_id: 4, // Sustainable Selections
        product_id: 10, // Solid Oak Bar Stool
    },
    {
        collection_id: 4, // Sustainable Selections
        product_id: 5, // Handwoven Throw Blanket
    },
    {
        collection_id: 4, // Sustainable Selections
        product_id: 15, // Copper Wire Wrapped Earrings
    },
    {
        collection_id: 4, // Sustainable Selections
        product_id: 2, // Hand-Painted Ceramic Plate
    },
];

export { users, products, productImages, reviews, collections, collectionProducts};
