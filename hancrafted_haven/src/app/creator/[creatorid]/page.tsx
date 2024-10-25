//import Image from "next/image";
import React from "react";
import "./creatorstyle.css";
import ProductCard from "../../ui/products/cards";
import { fetchProductsByUser, fetchSingleImageData, fetchUserData } from "@/app/lib/data";
//import Link from 'next/link';
import CreatorCard from '@/app/ui/creator/CreatorCard'



interface Params {
  params: {
    creatorid: number;
  };
}


export default async function CreatorPage({ params }: Params) {
  const {creatorid} = params;
  const userProducts = await fetchProductsByUser(Number(creatorid));
  const creatorData = await fetchUserData(creatorid)


  const getImage = async (productId: number) => {
    const productImage = await fetchSingleImageData(productId);
    return productImage[0];
  };

  return (
    <div className="container mx-auto">
      {/* Creator Bio */}
      <CreatorCard 
        creatorData={creatorData}
      />

      <br /> <br />
      {/* Products By Creator */}
      <h3 className="col-span-full text-2xl font-bold mb-4">Products By {creatorData.name}        
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {userProducts.map(async (product) => (
          <ProductCard
            key={product.id}
            product={product}
            image={await getImage(product.id)}
          />
        ))}
      </div>

      {/* Curated Products */}
    </div>
  );
};