import {
  fetchProductData,
  fetchImagesData,
  fetchUserData,
  fetchReviewData,
  fetchProductsByUser,
  checkExistingReview,
  fetchSingleImageData
} from "@/app/lib/data";
import ProductDetail from "@/app/ui/products/ProductDetail";
import { Product, Image_, User } from "@/app/lib/definitions";
import { notFound } from "next/navigation";
//import {redirect} from 'next/navigation'
import OtherProducts from '@/app/ui/products/OtherProducts'
import "@/app/creator/[creatorid]/creatorstyle.css";
import Link from 'next/link';

interface Params {
  params: {
    productId: number;
    creatorId: number;
  };
}

export default async function ProductDetailsPage({ params }: Params) {
  const { productId } = params;
  //! hardcoding authenticated user until we have that and can extract it
  const authUser: number = 15;

  try {
    //FETCH DATA (server side) and pass it to the component (client side)
    const productData: Product = await fetchProductData(productId);
    
    // If productData doesn't exist, redirect to the custom 404 page
    if (!productData) {
      notFound();
    }

    //Fetching creator Data next as fetchProductByUser relyes on this
    const creatorData: User = await fetchUserData(productData.user_id);

    //use Promise.all to group these all together.  
    const [imageData, reviewData, reviewCheck, otherProductData] = await Promise.all([
      fetchImagesData(productId),
      fetchReviewData(productId),
      checkExistingReview(productId, authUser),
      fetchProductsByUser(creatorData.id)
    ]);

    const otherProductsImages: Image_[] = [];
    for (const product of otherProductData) {
      const images = await fetchSingleImageData(product.id);
      otherProductsImages.push(...images);
    }

    //const otherProductsImages: Image_[] = await Promise.all(
    //  otherProductData.map(async (product) => {
    //    return await fetchImagesData(product.id);
    //  })
    //).then(images => images.flat());
    
    //render product details
    return (
      <div className="container mx-auto">
        <ProductDetail
          product={productData}
          images={imageData}
          user={creatorData}
          reviews={reviewData}
          authUser={authUser}
          reviewCheck={reviewCheck}
        />
        {/* if no 'other products', skips the title.  The component handles returning null if it's empty as well */}
        {!otherProductData || 
        <h3 className="col-span-full text-2xl font-bold mb-4">Other Products By 
        {/*{creatorData.name}*/}
        
          <Link href={`/creator/${creatorData.id}`}> {creatorData.name}</Link>
        </h3>
        }
        
        <OtherProducts
        products={otherProductData}
        images={otherProductsImages}
        />
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch product data:", error);
    return notFound();
  }
}
