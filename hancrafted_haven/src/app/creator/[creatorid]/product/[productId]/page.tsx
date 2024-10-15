import { fetchProductData, fetchImagesData } from '@/app/lib/data';
import ProductDetail from "@/app/components/ProductDetail"
import {redirect} from 'next/navigation'
import { Product, Image_ } from '@/app/types/productTypes'; 

interface Params {
    params: {
        productId: number; 
    };
}

export default async function ProductDetailsPage({ params }: Params) {
    const { productId } = params; // Extract productId from params

    // Fetch product data using the productId
    const productData: Product | null = await fetchProductData(Number(productId));
    if (!productData) {
        redirect('/401');
        // TODO: find a better way to handle if the product page doesn't exist
        return null; // Ensure to return null to prevent rendering
    }
    const imageData: Image_[] = await fetchImagesData(productId);


    //return <ProductDetail product={productData} images={imageData} />;

    return ProductDetail(productData, imageData);




}

