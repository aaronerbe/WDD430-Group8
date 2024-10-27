import React from "react";
import "./creatorstyle.css";
import ProductCard from "../../ui/products/cards";
import CollectionCard from "@/app/ui/products/CuratedCollection"
import { fetchProductsByUser, fetchSingleImageData, fetchUserData, fetchCollectionDesc, fetchCollectionProducts } from "@/app/lib/data";
import CreatorCard from '@/app/ui/creator/CreatorCard';
import { ToastContainer} from 'react-toastify'
import { notFound } from "next/navigation";



interface Params {
  params: {
    creatorid: number;
  };
}

export default async function CreatorPage({ params }: Params) {

  //! todo check if the creatorid is a creator, if not, 404 it.

  const authUser = true;  // Just setting this for now for a trigger to make edit in place work.
  const { creatorid } = params;
  const creatorData = await fetchUserData(creatorid)
  // Fetch data in parallel using Promise.all
  console.log(creatorData)
  const userType = creatorData?.type;
  console.log('user type: ', userType)
  if (!userType || !['creator', 'admin'].includes(userType.toLowerCase())) {
    return (notFound())
  }

  const [userProducts, collectionDesc] = await Promise.all([
    fetchProductsByUser(Number(creatorid)),
    fetchCollectionDesc(creatorid),
  ]);
  const collectionProducts = await fetchCollectionProducts(collectionDesc.id);
  const userImages = await Promise.all(userProducts.map(product => fetchSingleImageData(product.id).then(images => images[0])));
  const collectionImages = await Promise.all(collectionProducts.map(product => fetchSingleImageData(product.id).then(images => images[0])));



  return (
    <div className="container mx-auto">
      <ToastContainer/>

      {/* Creator Bio */}
      <div className="relative">
        <CreatorCard 
          creatorData={creatorData}
          authenticatedUserId={creatorid}
          authUser={authUser}
        />
      </div>

      <br /> <br />
      <div className="productsContainer grid grid-cols-1 max-w-[80%] justify-items-center">
        {/* Products By Creator */}
        <h3 className="col-span-full text-3xl font-bold mb-4 mx-auto">My Work</h3>
        {authUser && 
                <button
                className="mt-2 bg-blue-500 text-white p-2 rounded mb-4"
                aria-label="Edit Collection"
                >
                  <a
                    href={`/create`}
                    className="w-56 cursor-pointer"
                  >
                  Add New Product
                  </a>
                </button>
              }
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-28 mx-auto justify-items-center">
          {userProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              image={userImages[index]} // Pass the corresponding image
              authenticatedUserId={creatorid}
              authUser={authUser}
            />
          ))}
        </div>

        {/* Curated Products */}
        <h3 className="col-span-full text-3xl font-bold mb-4 mx-auto">A Curated Collection</h3>
        {authUser && 
                <button
                className="mt-2 bg-blue-500 text-white p-2 rounded"
                aria-label="Edit Collection"
                >
                  <a
                    href={`/edit-collection/${creatorid}/${authUser}`}
                    className="w-56 cursor-pointer"
                  >
                  Edit Collection
                  </a>
                </button>
              }

        <CollectionCard
          collectionId={collectionDesc.id}
          title={collectionDesc.title}
          description={collectionDesc.description}
          products={collectionProducts}
          images={collectionImages}
          authenticatedUserId={creatorid}
          authUser={authUser}
        />
        
      </div>

      {/*<h3 className="col-span-full text-3xl font-bold mb-4">A Curated Collection</h3>
      <div className="max-w-[80%] mb-4 text-center mx-auto">
        <h4 className="text-2xl font-bold">{collectionDesc.title}</h4>
        <p className="">{collectionDesc.description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
        {collectionProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            image={collectionImages[index]} // Pass the corresponding image
            authenticatedUserId={creatorid} // Pass the authenticated user ID
            authUser={false} // Hardcode to not allow editing these product cards
          />
        ))}
      </div>*/}
    </div>
  );
};
