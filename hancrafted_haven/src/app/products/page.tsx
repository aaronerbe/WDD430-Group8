import React, { Suspense } from "react";
import ProductCard from "../ui/products/cards";
import Search from "../ui/search";
import { fetchSearchResults, fetchSingleImageData } from "../lib/data";
import FilterOptions from "../ui/products/filter-options";
import PriceFilter from "../ui/products/price-filter";

export default async function SearchResultsPage({
  searchParams,
}: {
  searchParams?: { query: string; minPrice?: string; maxPrice?: string };
}) {
  const query = searchParams?.query || "";
  const searchResults = await fetchSearchResults(query);

  // Variables here for the price filtering logic
  const minPrice = searchParams?.minPrice ? parseInt(searchParams.minPrice) : 0;
  const maxPrice = searchParams?.maxPrice ? parseInt(searchParams.maxPrice) : 900;
  // Creating price-filtered results 
  const filteredResults = searchResults.filter((product) => {
    return (
      product.price >= minPrice &&
      product.price <= maxPrice
    );
  });

  const getImage = async (productId: number) => {
    const productImage = await fetchSingleImageData(productId);
    return productImage[0];
  };

  return (
    <div className="container mx-auto flex flex-col items-center mb-20">
      <div className="m-8">
        <Suspense fallback={<div>Loading...</div>}>
          <Search placeholder="Search for a product..." />
        </Suspense>
        <FilterOptions />
        <PriceFilter />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {
          filteredResults.map(async (product) => (
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