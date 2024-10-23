import Image from "next/image";
import React from "react";
import "./creatorstyle.css";
import ProductCard from "../../ui/products/cards";
import { fetchProductsByUser, fetchSingleImageData } from "@/app/lib/data";

const CreatorPage = async () => {
  // change this to target the id of the seller
  const userId = 1;
  const userProducts = await fetchProductsByUser(userId);

  const getImage = async (productId: number) => {
    const productImage = await fetchSingleImageData(productId);
    return productImage[0];
  };

  const images = await Promise.all(
    userProducts.map((product) => getImage(product.id))
  );

  return (
    <div className="container">
      <div>
        {/* Left-Right Layout Section */}
        <div className="content-row">
          <div className="image-section">
            {/* Image on the Left */}
            <Image
              src="/handcraft2.JPG"
              alt="Content Handcraft Image for creator page"
              width={400}
              height={400}
            />
          </div>
          <div className="writeup-section">
            {/* Writeup on the Right */}
            <h2>Creator Name</h2>
            <h4>About Me</h4>
            <p>
              Handcrafting is the art of creating items by hand using
              traditional methods, tools, and techniques. It encompasses a wide
              range of practices, from woodworking, knitting, weaving, pottery,
              and embroidery to jewelry making, leatherwork, and more.
              Handcrafts are often celebrated for their uniqueness, artistry,
              and the skill that goes into creating them, contrasting with
              mass-produced, machine-made goods.
            </p>
            <br /> <br />
            <p>
              The Essence of Handcrafting: At its core, handcrafting emphasizes
              the human touch, with each piece carrying the personal imprint of
              its creator. This personal involvement brings a sense of
              authenticity and individuality to the final product, which is why
              handcrafted items are often considered to be of higher sentimental
              and sometimes even economic value. Every handcrafted item is
              unique, even when made by the same artisan, which adds to their
              charm and appeal.
            </p>
          </div>
        </div>
        <br /> <br />
        {/* <div className="flex w-full">
          <div className="card-section">
            <h3>Creator Work </h3>
            <div className="card-container">
              // Individual Cards
              {userProducts.map(async (product) => (
                <div className="card">
                  <ProductCard
                    key={product.id}
                    product={product}
                    image={await getImage(product.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {userProducts.map(async (product) => (
          <ProductCard
            key={product.id}
            product={product}
            image={await getImage(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CreatorPage;
