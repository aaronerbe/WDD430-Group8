import { fetchProductData } from '@/app/lib/data';
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

    return ProductDetail(productData);


}

