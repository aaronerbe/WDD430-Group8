import { fetchSearchResults, fetchSingleImageData } from "@/app/lib/data";
import { merriweather } from "@/app/ui/fonts";
import ProductCard from '@/app/ui/products/cards';

export default async function FullCatalog() {
    const catalog = await fetchSearchResults('');
    const getImage = async (productId: number) => {
        const productImage = await fetchSingleImageData(productId);
        return productImage[0];
    };

    return (
        <>
        <div className="flex items-center justify-center py-8">
            <div className="w-1/4 h-[1px] bg-black"></div>
            <h1
            className={`${merriweather.className} text-zinc-950 text-2xl font-bold px-8`}
            >
            Browse the Catalog
            </h1>
            <div className="w-1/4 h-[1px] bg-black"></div>
        </div>
        <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {catalog.map(async (product) => (
            <ProductCard
            key={product.id}
            product={product}
            image={await getImage(product.id)}
            />
        ))}
        </div>
        </div>
    </>
    );
}