//import Image from "next/image";
import React from "react";
import "./creatorstyle.css";
import ProductCard from "../../ui/products/cards";
import { fetchProductsByUser, fetchSingleImageData, fetchUserData, fetchCollectionDesc, fetchCollectionProducts } from "@/app/lib/data";
//import Link from 'next/link';
import CreatorCard from '@/app/ui/creator/CreatorCard'

interface Params {
  params: {
    creatorid: number;
  };
}


export default async function CreatorPage({ params }: Params) {
  const authUser = true;  //just setting this for now for a trigger to make edit in place work.

  const {creatorid} = params;
  const userProducts = await fetchProductsByUser(Number(creatorid));
  const creatorData = await fetchUserData(creatorid)
  const collectionDesc = await fetchCollectionDesc(creatorid)
  const collectionProducts = await fetchCollectionProducts(collectionDesc.id)
  //console.log(collectionProducts)

  const getImage = async (productId: number) => {
    const productImage = await fetchSingleImageData(productId);
    return productImage[0];
  };


  return (
    <div className="container mx-auto">
      {/* Creator Bio */}
      <div className="relative">
        <CreatorCard 
          creatorData={creatorData}
          authenticatedUserId={creatorid}
          authUser={authUser}
        />
      </div>

      <br /> <br />
      {/* Products By Creator */}
      <h3 className="col-span-full text-2xl font-bold mb-4">Products By {creatorData.name}        
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
        {userProducts.map(async (product) => (
          <ProductCard
            key={product.id}
            product={product}
            image={await getImage(product.id)}
          />
        ))}
      </div>

      {/* Curated Products */}
      <h3 className="col-span-full text-2xl font-bold mb-4">
          {collectionDesc.title}
      </h3>
        <div className=" max-w-[80%] mb-4 text-center mx-auto">
          <h4 className="font-bold">
            A Curated Collection by {creatorData.name}</h4>
          <p className="">
            {collectionDesc.description}
          </p>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
        {collectionProducts.map(async (product) => (
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