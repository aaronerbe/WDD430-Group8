import React, { Suspense } from "react";
import ProductCard from "../ui/products/cards";
import Search from "../ui/search";
import { fetchSearchResults, fetchSingleImageData } from "../lib/data";
import FilterOptions from "../ui/products/filter-options";

export default async function SearchResultsPage({
  searchParams,
}: {
  searchParams?: { query: string };
}) {
  const query = searchParams?.query || "";
  const searchResults = await fetchSearchResults(query);
  //    const userId = 1;
  //    const userProducts = await fetchProductsByUser(userId);
  const getImage = async (productId: number) => {
    const productImage = await fetchSingleImageData(productId);
    return productImage[0];
  };

  return (
    <div className="container mx-auto flex flex-col items-center">
      <div className="m-8">
        <Suspense fallback={<div>Loading...</div>}>
          <Search placeholder="Search for a product..." />
        </Suspense>
        <FilterOptions />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {
          /* userProducts */ searchResults.map(async (product) => (
            <ProductCard
              key={product.id}
              product={product}
              image={await getImage(product.id)}
            />
          ))
        }
      </div>
    </div>
  );
}
