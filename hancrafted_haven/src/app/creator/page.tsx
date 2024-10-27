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

