import {
  fetchProductData,
  fetchImagesData,
  fetchUserData,
  fetchReviewData,
  fetchProductsByUser,
  checkExistingReview,
} from "@/app/lib/data";
import ProductDetail from "@/app/ui/products/ProductDetail";
import { Product, Image_, User, Review_ } from "@/app/lib/definitions";
import { notFound } from "next/navigation";
//import {redirect} from 'next/navigation'

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
    //if (!productData) {return notFound()};
    const imageData: Image_[] = await fetchImagesData(productId);
    const reviewData: Review_[] = await fetchReviewData(productId);
    const reviewCheck: boolean = await checkExistingReview(productId, authUser);

    // If productData doesn't exist, redirect to the custom 404 page
    if (!productData) {
      notFound();
    }
    const creatorData: User = await fetchUserData(productData.user_id);
    const otherProductData: Product[] = await fetchProductsByUser(
      creatorData.id
    );

    //render product details
    return (
      <ProductDetail
        product={productData}
        images={imageData}
        user={creatorData}
        reviews={reviewData}
        products={otherProductData}
        authUser={authUser}
        reviewCheck={reviewCheck}
      />
    );
  } catch (error) {
    console.error("Failed to fetch product data:", error);
    //return <div>Product not found.</div>;
    return notFound();
  }
}
