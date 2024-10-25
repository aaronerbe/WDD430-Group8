"use client";

import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, useRouter } from "next/navigation";
import FilterButton from "./filter-button";
import { Suspense, useState } from "react";

interface Option {
  name: string;
  type: string;
}

const options: Option[] = [
  { name: "Furniture", type: "Category" },
  { name: "Stationery", type: "Category" },
  { name: "Ceramics", type: "Category" },
  { name: "Kitchenware", type: "Category" },
  { name: "Fitness", type: "Category" },
  { name: "Jewelry", type: "Category" },
  { name: "Low to high", type: "Price" },
  { name: "High to low", type: "Price" },
];

// Function to group options by type
const groupOptionsByType = (options: Option[]) => {
  return options.reduce<{ [key: string]: Option[] }>((acc, option) => {
    (acc[option.type] = acc[option.type] || []).push(option);
    return acc;
  }, {});
};

const FilterOptions: React.FC = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const groupedOptions = groupOptionsByType(options);

  // State to track selected options per category
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string | null;
  }>({
    Category: null,
    Price: null,
  });

  const handleFilter = useDebouncedCallback((term: string | null) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`/products?${params.toString()}`);
  }, 300);

  const handleOptionSelect = (option: Option) => {
    setSelectedOptions((prev) => {
      const isCurrentlySelected = prev[option.type] === option.name;

      // Clear the selection if currently selected
      const newSelected = {
        ...prev,
        [option.type]: isCurrentlySelected ? null : option.name,
      };

      // Clear search params if deselecting
      if (isCurrentlySelected) {
        handleFilter(null); // Clear the filter for this type
      } else {
        handleFilter(option.name); // Set the new filter
      }

      return newSelected;
    });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col lg:flex-row gap-4 my-2">
        {Object.entries(groupedOptions).map(([type, items]) => (
          <div key={type} className="flex">
            <p className="font-semibold mr-2">{type}:</p>
            <div className="flex flex-wrap gap-2">
              {items.map((option) => (
                <div
                  key={option.name}
                  onClick={() => handleOptionSelect(option)}
                >
                  <FilterButton
                    text={option.name}
                    selected={selectedOptions[type] === option.name}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Suspense>
  );
};

export default FilterOptions;
