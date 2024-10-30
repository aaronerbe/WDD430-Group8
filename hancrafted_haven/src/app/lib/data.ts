"use server";
import { sql } from "@vercel/postgres";
import {
  Product,
  Image_,
  User,
  Review_,
  CollectionDesc,
  CollectionProducts,
} from "@/app/lib/definitions";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import bcrypt from 'bcryptjs';

//import {redirect} from 'next/navigation'

export async function fetchProductData(productId: number): Promise<Product> {
  try {
    // Fetching the product by id
    const result = await sql`
            SELECT 
                id, 
                user_id, 
                name, 
                description, 
                price, 
                category 
            FROM products 
            WHERE id = ${productId}`;
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
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch product data.");
  }
}

export async function editProductData(
  productId: number,
  userId: number,
  name: string,
  description: string,
  price: number,
  category: string
) {
  try {
    //Update Product Data
    //only allow updating name, description, price, category
    await sql`
            UPDATE products
            SET
                name = ${name},
                description = ${description},
                price = ${price},
                category = ${category}
            WHERE id = ${productId} AND user_id = ${userId}
        `;
    console.log("Update product:");
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to update product table ");
  }
}

export async function addProduct(
  userId: number,
  name: string,
  description: string,
  price: number,
  category: string
): Promise<number> {
  console.log("Inserting product:", {
    userId,
    name,
    description,
    price,
    category,
  });
  //given a userId + product information, create a new entry in product table.
  try {
    // Perform the insert operation
    const result = await sql`
            INSERT INTO products ( 
                user_id, 
                name, 
                description, 
                price, 
                category
            )
            VALUES (
                ${userId},
                ${name},
                ${description}, 
                ${price},
                ${category}
            )
            RETURNING id;
        `;
    return result.rows[0].id; //gives back the id of the new product
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to create product");
  }
}

export async function deleteProduct(productId: number, userId: number) {
  try {
    //DELETE From Collections first
    await removeFromCollectionByProductId(productId);
    //Then DELETE from Images
    await removeImagesByProductId(productId);
    //Then Delete Reviews
    await removeReviewsByProductId(productId);
    //THEN Delete from Products
    await sql`
          DELETE from products
          WHERE id = ${productId} AND user_id = ${userId}
      `;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error(`Failed to remove Product`);
  }
}

export async function fetchImagesData(productId: number): Promise<Image_[]> {
  try {
    // Fetching the product by id
    const result = await sql`
            SELECT 
                id, 
                product_id, 
                image_url 
            FROM product_images 
            WHERE product_id = ${productId}`;
    // Map the query result into an array of Image_ objects
    const images: Image_[] = result.rows.map((row) => ({
      id: row.id,
      product_id: row.product_id,
      image_url: row.image_url,
    }));
    return images;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch image data. at data.ts");
  }
}

export async function fetchSingleImageData(
  productId: number
): Promise<Image_[]> {
  try {
    // Fetching the product by id
    const result = await sql`
            SELECT 
                id, 
                product_id, 
                image_url 
            FROM product_images 
            WHERE product_id = ${productId}
            LIMIT 1`;
    // Map the query result into an array of Image_ objects
    const image: Image_[] = result.rows.map((row) => ({
      id: row.id,
      product_id: row.product_id,
      image_url: row.image_url,
    }));
    return image;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch image data. at data.ts");
  }
}

export async function editImagesData(
  productId: number,
  addImageUrl?: string[],
  deleteImageUrl?: string[]
) {
  //pass in what images you want to add or delete as arrays.
  try {
    //Delete Image Data
    if (deleteImageUrl && deleteImageUrl.length > 0) {
      for (const imageUrl of deleteImageUrl) {
        await sql`
                    DELETE from product_images
                    WHERE product_id = ${productId} AND image_url = ${imageUrl}
                `;
        console.log("removed ", imageUrl);
      }
    }
    //Add Image Data
    if (addImageUrl && addImageUrl.length > 0) {
      for (const imageUrl of addImageUrl) {
        await sql`
                    INSERT INTO product_images (
                        product_id, 
                        image_url
                    )
                    VALUES (
                        ${productId}, 
                        ${imageUrl}
                    )
                    RETURNING *
                `;
        console.log("Added ", imageUrl);
      }
    }
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error(`Failed to update image data`);
  }
}

export async function addImages(productId: number, addImageUrl: string[]) {
  try {
    //Add Image Data
    if (addImageUrl && addImageUrl.length > 0) {
      for (const imageUrl of addImageUrl) {
        const result = await sql`
                    INSERT INTO product_images (
                        product_id, 
                        image_url
                    )
                    VALUES (
                        ${productId}, 
                        ${imageUrl}
                    )
                    RETURNING *
                `;
        console.log("Added ", result);
      }
    }
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error(`Failed to add new image ${addImageUrl}`);
  }
}

export async function removeImagesByProductId(product_id: number) {
  //REMOVES ALL MATCHING IMAGES BY PRODUCTID
  try {
    await sql`
          DELETE from product_images
          WHERE product_id = ${product_id}
      `;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error(`Failed to remove images`);
  }
}

export async function fetchUserData(userId: number): Promise<User> {
  try {
    // Fetching the product by id
    const result = await sql`
            SELECT 
                id,
                profile, 
                name, 
                bio, 
                email, 
                password,
                type
            FROM users 
            WHERE id = ${userId}`;

    // have to break out the query result into structured format
    const user: User = {
      id: result.rows[0].id,
      name: result.rows[0].name,
      profile: result.rows[0].profile,
      bio: result.rows[0].bio,
      email: result.rows[0].email,
      password: result.rows[0].password,
      type: result.rows[0].type,
    };

    return user;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch user data.");
  }
}

export async function fetchUserByEmail(
  email: string
): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export async function fetchReviewData(productId: number): Promise<Review_[]> {
  try {
    // Fetching the product by id
    const result = await sql`
            SELECT 
                id, 
                product_id, 
                user_id, 
                rating, 
                comment 
            FROM reviews 
            WHERE product_id = ${productId}`;
    const reviews: Review_[] = result.rows.map((row) => ({
      id: row.id,
      product_id: row.product_id,
      user_id: row.user_id,
      rating: row.rating,
      comment: row.comment,
    }));
    return reviews;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch review data.");
  }
}

export async function checkExistingReview(
  productId: number,
  userId: number
): Promise<boolean> {
  //if userId = -1 (meaning not logged in) then return True so the addReview option isn't avaialble to them until they login
  if (userId === -1){
    return true
  }
  try {
    //check if any reviews for the product from the user
    const result = await sql`
            SELECT 1
            FROM reviews
            WHERE product_id = ${productId} AND user_id = ${userId}
            LIMIT 1
        `;
    return result.rows.length > 0;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch review data.");
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

export async function fetchProductsByUser(userId: number): Promise<Product[]> {
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
    const products: Product[] = result.rows.map((row) => ({
      id: row.id,
      user_id: row.user_id,
      name: row.name,
      description: row.description,
      price: row.price,
      category: row.category,
    }));

    return products;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch product data.");
  }
}

export async function addReview(
  productId: number,
  userId: number,
  productRating: number,
  userComment: string
) {
  //console.log('Inserting review:', { productId, userId, productRating, userComment });

  try {
    // Perform the insert operation
    await sql`
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
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to create review ");
  }
}

export async function removeReviewsByProductId(product_id: number) {
  //REMOVES ALL MATCHING IMAGES BY PRODUCTID
  try {
    await sql`
          DELETE from reviews
          WHERE product_id = ${product_id}
      `;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error(`Failed to remove reviews`);
  }
}

export async function fetchSearchResults(query: string): Promise<Product[]> {
  try {
    const result = await sql`
        SELECT 
            id, 
            user_id, 
            name, 
            description, 
            price, 
            category 
        FROM products
        WHERE
        name ILIKE ${`%${query}%`} OR
        price::text ILIKE ${`%${query}%`} OR
        category ILIKE ${`%${query}%`}`;
    /*         product.id::text ILIKE ${`%${query}%`} OR
        product.user_id::text ILIKE ${`%${query}%`} OR */

    const products: Product[] = result.rows.map((row) => ({
      id: row.id,
      user_id: row.user_id,
      name: row.name,
      description: row.description,
      price: row.price,
      category: row.category,
    }));

    return products;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch product data.");
  }
}

export async function createUser(
  name: string,
  email: string,
  password: string
): Promise<number> {
  console.log("Creating user: ", {
    name,
    email,
  });
  try {
    const result = await sql`
    INSERT INTO users (
    name,
    email,
    password,
    type
    )
    VALUES (
    ${name},
    ${email},
    ${password},
    ${"user"}
    )
    RETURNING id;
    `;
    return result.rows[0].id;
  } catch (error) {
    console.error("Databse Error: ", error);
    throw new Error("Failed to create user");
  }
}

export async function fetchUserCreatorData() {
  try {
    // Fetching the product by id
    const result = await sql`
          SELECT 
              id, 
              name, 
              bio, 
              email, 
              password 
          FROM users 
          WHERE type = 'creator'`;

    // have to break out the query result into structured format
    const user: User = {
      id: result.rows[0].id,
      name: result.rows[0].name,
      profile: result.rows[0].profile,
      bio: result.rows[0].bio,
      email: result.rows[0].email,
      password: result.rows[0].password,
      type: result.rows[0].type,
    };

    return user;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch user data.");
  }
}

export async function fetchCollectionDesc(
  userId: number
): Promise<CollectionDesc> {
  try {
    const result = await sql`
            SELECT 
                id, 
                user_id, 
                title, 
                description 
            FROM collections 
            WHERE user_id = ${userId}`;
    const collectionDesc: CollectionDesc = {
      id: result.rows[0].id,
      user_id: result.rows[0].user_id,
      title: result.rows[0].title,
      description: result.rows[0].description,
    };

    return collectionDesc;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch collection description data.");
  }
}

export async function fetchCollectionProducts(
  collectionId: number
): Promise<Product[]> {
  try {
    // Fetching the products by collection id
    const result = await sql`
      SELECT 
        collection_id, 
        product_id
      FROM collection_products 
      WHERE collection_id = ${collectionId}
    `;

    if (!result || !result.rows) {
      throw new Error("No rows returned from the database");
    }

    const collectionTable: CollectionProducts[] = result.rows.map((row) => ({
      collection_id: row.collection_id,
      product_id: row.product_id,
    }));

    const products = await Promise.all(
      collectionTable.map(async (collection) => {
        const productData = await fetchProductData(collection.product_id);
        return {
          ...productData,
        };
      })
    );

    return products; // Return the new array of objects with product data included
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch collection product data.");
  }
}

export async function updateUserName(userId: number, name: string) {
  try {
    await sql`
            UPDATE users
            SET
                name = ${name}
            WHERE id = ${userId}
        `;
    console.log("Update User Name");
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to update User Name ");
  }
}

export async function updateUserBio(userId: number, bio: string) {
  try {
    await sql`
            UPDATE users
            SET
                bio = ${bio}
            WHERE id = ${userId}
        `;
    console.log("Update User Bio");
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to update User Bio ");
  }
}

export async function editCollectionData(
  id: number,
  userId: number,
  title: string,
  description: string
) {
  try {
    await sql`
            UPDATE collections
            SET
                id = ${id},
                user_id = ${userId},
                title = ${title},
                description = ${description}
            WHERE id = ${id} AND user_id = ${userId}
        `;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to update collections table ");
  }
}

export async function addToCollection(
  collection_id: number,
  product_id: number
) {
  console.log(
    "Attempting to add to collection with collection_id:",
    collection_id,
    "and product_id:",
    product_id
  );

  try {
    await sql`
      INSERT INTO collection_products (
        collection_id,
        product_id
      )
      VALUES (
        ${collection_id},
        ${product_id}
      )
      RETURNING *
    `;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to add new collection entry");
  }
}

export async function removeFromCollection(
  collection_id: number,
  product_id: number
) {
  try {
    await sql`
          DELETE from collection_products
          WHERE collection_id = ${collection_id} AND product_id = ${product_id}
      `;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error(`Failed to remove from collection`);
  }
}
export async function removeFromCollectionByProductId(product_id: number) {
  //REMOVES ALL MATCHING PRODUCTS FROM ALL COLLECTIONS
  try {
    await sql`
          DELETE from collection_products
          WHERE product_id = ${product_id}
      `;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error(`Failed to remove from collection`);
  }
}

//export async function authenticate(
//  prevState: string | undefined,
//  formData: FormData
//): Promise<{ userId: number } | string | undefined> {
//  try {
//    const response = await signIn('credentials', {
//      redirect: false,
//      email: formData.get('email') as string,
//      password: formData.get('password') as string,
//    });

//    if (response?.ok && response.user) {
//      return { userId: response.user.id };
//    } else {
//      return 'Invalid credentials.';
//    }
//  } catch (error) {
//    console.error('Login error:', error);
//    return 'Something went wrong.';
//  }
//}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}


export async function getUserFromDb(email: string, password: string): Promise<User | null> {
  try {
    // Fetch user from the database by email
    const result = await sql<User>`SELECT * FROM users WHERE email = ${email}`;
    const user = result.rows[0];

    if (!user) {
      console.log('User not found');
      return null;
    }

    // Verify the password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log('Invalid password');
      return null;
    }

    // Return the user object if everything checks out
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return null;
  }
}


export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    // Fetch user from the database by email
    const result = await sql<User>`SELECT * FROM users WHERE email = ${email}`;
    const user = result.rows[0];

    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return null;
  }
}