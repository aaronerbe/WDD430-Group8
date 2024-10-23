import React from "react";
import ProductCard from '../ui/products/cards';
import { fetchSearchResults, fetchSingleImageData, fetchProductsByUser } from '../lib/data';

export default async function SearchResultsPage({ searchParams }: { searchParams?: { query: string } }) {
    const query = searchParams?.query || '';
    const searchResults = await fetchSearchResults(query);
//    const userId = 1;
//    const userProducts = await fetchProductsByUser(userId);
    const getImage = async (productId: number) => {
        const productImage = await fetchSingleImageData(productId);
        return productImage[0];
    };

    return (
    <div className="container mx-auto py-8">
        <h1 className="text-2xl font-semibold mb-6">Search Results</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* userProducts */searchResults.map(async (product) => (
            <ProductCard
            key={product.id}
            product={product}
            image={await getImage(product.id)}
            />
        ))}
        </div>
    </div>
    );
}