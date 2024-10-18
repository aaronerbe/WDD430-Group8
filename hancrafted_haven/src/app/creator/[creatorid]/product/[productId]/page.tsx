import { fetchProductData, fetchImagesData, fetchUserData, fetchReviewData, fetchOtherProductsByUser} from '@/app/lib/data';
import ProductDetail from "@/app/components/ProductDetail"
import {redirect} from 'next/navigation'
import { Product, Image_, User, Review_ } from '@/app/types/productTypes'; 

interface Params {
    params: {
        productId: number; 
    };
}

export default async function ProductDetailsPage({ params }: Params) {
    //todo:  move data fetch to the component and just call the component for cleaner code?
    // Fetch product data using the productId
    const { productId } = params; // Extract productId from params
    const productData: Product | null = await fetchProductData(Number(productId));
        if (!productData) {
            redirect('/');
            // TODO: find a better way to handle if the product page doesn't exist
            //dashboard project had a way to do custom 404s
        }
    //get Creator Data
    const creatorData: User = await fetchUserData(Number(productData?.user_id))
    //get Image Data
    const imageData: Image_[] = await fetchImagesData(productId);
    //get Review Data
    const reviewData: Review_[] = await fetchReviewData(productId)

    const otherProductData: Product[] | null = await fetchOtherProductsByUser(creatorData.id)
    

    console.table(otherProductData)

    //render product details
    //return ProductDetail(productData, imageData, creatorData, reviewData);
    return (
        <ProductDetail 
            product={productData} 
            images={imageData} 
            user={creatorData} 
            reviews={reviewData} 
        />
    );




}

