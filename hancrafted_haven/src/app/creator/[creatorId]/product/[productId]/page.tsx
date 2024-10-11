import { fetchProductData, fetchImagesData } from '@/app/lib/data';
import ProductDetail from "@/app/components/ProductDetail"

interface Params {
    params: {
        productId: number; 
    };
}

export default async function ProductDetailsPage({ params }: Params) {
    const { productId } = params; // Extract productId from params

    // Fetch product data using the productId
    const productData = await fetchProductData(Number(productId));

    //const imageId = 1;
    const imageData = await fetchImagesData(productId)
    return ProductDetail(productData, imageData);


}

