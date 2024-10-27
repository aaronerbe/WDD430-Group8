//import { fetchUserCreatorData} from '@/app/lib/data';
//import CreatorDetail from "@/app/components/CreatorDetail"
//import { User } from '@/app/types/productTypes'; 
//import {notFound} from 'next/navigation'
////import {redirect} from 'next/navigation'
///*
//interface Params {
//    params: {
//        productId: number; 
//        creatorId: number;
//    };
//}


//*/
//export default async function CreatorDetailsPage() {
//   // const { productId } = params;

//    try{
//        //FETCH DATA (server side) and pass it to the component (client side)
//      //  const productData: Product = await fetchProductData(productId);
//        //if (!productData) {return notFound()};
//       // const imageData: Image_[] = await fetchImagesData(productId);
//       // const reviewData: Review_[] = await fetchReviewData(productId)
        
//        // If productData doesn't exist, redirect to the custom 404 page
//      //  if (!productData) {
//         //   notFound();
//      //  }      
//        const creatorData: User = await fetchUserCreatorData()
//        if (!creatorData) {
//            notFound();
//        }  
//       // const otherProductData: Product[] = await fetchProductsByUser(creatorData.id)
        
//        //render product details
//        return (
//            <CreatorDetail
//           // product={productData} 
//           // images={imageData} 
//            user={creatorData} 
//           // reviews={reviewData} 
//           //products={otherProductData}
//            />
//        );
//    }catch (error) {
//        console.error("Failed to fetch creator data:", error);
//        //return <div>Product not found.</div>;
//        return notFound();
//    }




//}

import Image from 'next/image';

const ProductNotFound = () => {
    const defaultImageUrl = '/product-images/default_image.jpg';
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-2xl font-bold mb-4">Not a valid page</h1>
            <p className="mb-4">Sorry, you should not have been able to get here.</p>
            <div className="flex justify-center mb-4">
                <Image
                    src={defaultImageUrl}
                    alt={`A sad, lost bunny`}
                    width={500}
                    height={500}
                    priority
                />
            </div>
            <button 
                className={`mt-8 px-4 py-2 text-white bg-blue-700 transition-transform rounded hover:bg-blue-500`}>
                <a href="/">Return to Home</a>

            </button>

        </div>
    );
};

export default ProductNotFound;
