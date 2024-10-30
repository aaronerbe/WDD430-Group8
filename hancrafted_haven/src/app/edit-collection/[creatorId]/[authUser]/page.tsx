//import React, { Suspense } from "react";
import EditCollectionCard from "../../../ui/products/EditCollectionCards";
//import Search from "../ui/search";
import { fetchSearchResults, fetchSingleImageData } from "../../../lib/data";
import { fetchCollectionDesc, fetchCollectionProducts, getUserByEmail } from "@/app/lib/data";
import { notFound } from "next/navigation";
import {auth} from "@/auth";
import { User } from "@/app/lib/definitions";


interface Params {
  params: {
    creatorId: number
    authUser: true
  }
}

export default async function SearchResultsPage({params}: Params){
  const {creatorId} = params
  const query = "";
  const searchResults = await fetchSearchResults(query);
  const collectionDesc = await fetchCollectionDesc(creatorId);
  const collectionProducts = await fetchCollectionProducts(collectionDesc.id);
  const collectionId = collectionDesc.id
  const defaultImageUrl = "/product-images/default_image.jpg";


  const session = await auth();
  let authUserId = -1;

  if (session?.user?.email) {
    const userData: User | null = await getUserByEmail(session.user.email);
    if (userData) {
      authUserId = userData.id;
    }
  }
  
  if (Number(authUserId) === -1 || Number(authUserId) !== Number(creatorId)) {
    return notFound(); // Redirect to 404 if unauthorized
  }

  const getImage = async (productId: number) => {
    const productImage = await fetchSingleImageData(productId);
    return productImage[0];
  };


  return (
    <div className="container mx-auto flex flex-col items-center mb-20">
      <button
        className="mt-8 mb-0 bg-blue-500 text-white p-2 rounded"
        aria-label="Edit Collection"        
      >
        <a
          href={`/creator/${creatorId}`}
          className="w-56 cursor-pointer">
        Done
        </a>
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-20">
        {searchResults.map(async (product) => {
          // Check if the current product is part of the collection.  pass on to component.  if so, minus, if not add icon
          const isInCollection = collectionProducts.some(
            (collectionProduct) => collectionProduct.id === product.id
          );
          const image = await getImage(product.id) || defaultImageUrl;

          return (
            <div key={product.id} className="relative">
              <EditCollectionCard
                product={product}
                image={image}
                isInCollection={isInCollection}
                collectionId={collectionId}
                //authenticatedUserId={creatorId}
                //authUser={authUser}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}