import { fetchProductData, fetchImagesData } from '@/app/lib/data';
import ProductDetail from "@/app/components/ProductDetail"
import {redirect} from 'next/navigation'

interface Params {
    params: {
        productId: number; 
    };
}

export default async function ProductDetailsPage({ params }: Params) {
    const { productId } = params; // Extract productId from params

    // Fetch product data using the productId
    const productData = await fetchProductData(Number(productId));
    if (!productData){
        redirect('/401')
        //todo find better way to handle if product page doesn't exist
    }
    const imageData = await fetchImagesData(productId)


    return ProductDetail(productData, imageData);




}

