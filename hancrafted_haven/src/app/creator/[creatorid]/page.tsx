import { 
  fetchProductsByUser, 
  fetchSingleImageData, 
  fetchUserData, 
  fetchCollectionDesc, 
  fetchCollectionProducts,
  getUserByEmail
} from "@/app/lib/data";
import React from "react";
import "./creatorstyle.css";
import ProductCard from "../../ui/products/cards";
import CollectionCard from "@/app/ui/products/CuratedCollection"
import CreatorCard from '@/app/ui/creator/CreatorCard';
import { ToastContainer} from 'react-toastify'
import { notFound } from "next/navigation";
import {auth} from "@/auth";
import { User } from "@/app/lib/definitions";


interface Params {
  params: {
    creatorid: number;
  };
}

export default async function CreatorPage({ params }: Params) {

  const { creatorid } = params;
  const creatorData = await fetchUserData(creatorid)
  // Fetch data in parallel using Promise.all
  const userType = creatorData?.type;
  if (!userType || !['creator', 'admin'].includes(userType.toLowerCase())) {
    return (notFound())
  }

    //new session logic
    let authUser: boolean = false;
    let authenticatedUserId = -1
    const session = await auth();
  
    if (session?.user?.email) {  
      const userData: User | null = await getUserByEmail(session.user.email);
      if (userData && userData.id === Number(creatorid)) {
        console.log('User is authenticated for this creator');
        authenticatedUserId = creatorid;
        authUser = true;
      }
    }
  const [userProducts, collectionDesc] = await Promise.all([
    fetchProductsByUser(Number(creatorid)),
    fetchCollectionDesc(creatorid),
  ]);
  const collectionProducts = await fetchCollectionProducts(collectionDesc.id);

  if (collectionDesc.id){
    <h3 className="col-span-full text-3xl font-bold mb-4 mx-auto">My Work</h3>
        {authUser && 
                <button
                className="mt-2 bg-blue-500 text-white p-2 rounded mb-4"
                aria-label="Edit Collection"
                >
                  <a
                    href={`/creator/${creatorid}/create`}
                    className="w-56 cursor-pointer"
                  >
                  Add New Product
                  </a>
                </button>
              }
  }
  const userImages = await Promise.all(userProducts.map(product => fetchSingleImageData(product.id).then(images => images[0])));
  const collectionImages = await Promise.all(collectionProducts.map(product => fetchSingleImageData(product.id).then(images => images[0])));



  return (
    <div className="container mx-auto">
      <ToastContainer/>

      {/* Creator Bio */}
      <div className="relative">
        <CreatorCard 
          creatorData={creatorData}
          authenticatedUserId={authenticatedUserId}
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
                    href={`/creator/${creatorid}/create`}
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
              authenticatedUserId={authenticatedUserId}
              authUser={authUser}
            />
          ))}
        </div>

        {/* Curated Products */}
        <h3 className="col-span-full text-3xl font-bold mb-4 mx-auto text-center">A Curated Collection</h3>
        {authUser && !collectionDesc.id &&
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
          authenticatedUserId={authenticatedUserId}
          authUser={authUser}
        />
        
      </div>
    </div>
  );
};
