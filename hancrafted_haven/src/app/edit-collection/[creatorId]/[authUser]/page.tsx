//import React, { Suspense } from "react";
import ProductCard from "../../../ui/products/EditCollectionCards";
//import Search from "../ui/search";
import { fetchSearchResults, fetchSingleImageData } from "../../../lib/data";
import { fetchCollectionDesc, fetchCollectionProducts } from "@/app/lib/data";
import { notFound } from "next/navigation";

//import FilterOptions from "../ui/products/filter-options";


interface Params {
  params: {
    creatorId: number
    authUser: true
  }
}

export default async function SearchResultsPage({params}: Params){
  const {creatorId, authUser} = params
  const query = "";
  const searchResults = await fetchSearchResults(query);

    // Fetch data in parallel using Promise.all
  const [ collectionDesc] = await Promise.all([
    fetchCollectionDesc(creatorId),
  ]);
  // Fetch collection products based on the collection description
  const collectionProducts = await fetchCollectionProducts(collectionDesc.id);
  const collectionId = collectionDesc.id
  //console.log('collectionDesc:', collectionDesc)
  //console.log('collectionId', collectionId)

  const getImage = async (productId: number) => {
    const productImage = await fetchSingleImageData(productId);
    return productImage[0];
  };

  if(!authUser){
    notFound()
  }

  return (
    <div className="container mx-auto flex flex-col items-center">
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
          const image = await getImage(product.id);

          return (
            <div key={product.id} className="relative">
              <ProductCard
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