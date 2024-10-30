"use client";

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function PriceFilter() {
  // Vars for setting the min / max search price params
  const initialMin = 0;
  const initialMax = 900;
  const [minPrice, setMinPrice] = useState(initialMin);
  const [maxPrice, setMaxPrice] = useState(initialMax);

  // Vars for adding the price prices to the URL, which is how we're handling the filtering 
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Function to update the URL with the price params
  const updateQueryParams = (newMinPrice: number, newMaxPrice: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newMinPrice !== initialMin) {
      params.set("minPrice", newMinPrice.toString());
    } else {
      params.delete("minPrice");
    }
  
    if (newMaxPrice !== initialMax) {
      params.set("maxPrice", newMaxPrice.toString());
    } else {
      params.delete("maxPrice");
    }
  
    router.replace(`${pathname}?${params.toString()}`);
  };

  // Function to change the price params when the user inputs a new value
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>, type: "min" | "max") => {
    const value = e.currentTarget.value === "" ? (type === "min" ? initialMin : initialMax) : parseInt(e.currentTarget.value, 10);
    if (type === "min" && value >= initialMin && value < maxPrice) {
      setMinPrice(value);
      updateQueryParams(value, maxPrice);
    } else if (type === "max" && value <= initialMax && value > minPrice) {
      setMaxPrice(value);
      updateQueryParams(minPrice, value);
    }
  };

  return (
    <div>
      <div className="flex">
        <p className="font-semibold mr-2">Price:</p>
        <div className="mr-2">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => handleInputChange(e, "min")}
            className="w-14 border border-gray-300 rounded-lg text-left pl-1"
            min={initialMin}
            max={maxPrice}
          />
        </div>
        <div>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => handleInputChange(e, "max")}
            className="w-14 border border-gray-300 rounded-lg text-left pl-1"
            min={minPrice}
            max={initialMax}
          />
        </div>
      </div>
    </div>
  );
}