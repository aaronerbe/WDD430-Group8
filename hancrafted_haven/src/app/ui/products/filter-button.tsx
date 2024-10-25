"use client";

import { Button } from "@headlessui/react";

interface FilterButtonProps {
  text: string;
  selected?: boolean;
}

const FilterButton: React.FC<FilterButtonProps> = ({ text, selected }) => {
  return (
    <Button
      className={`px-2 border rounded-full ${
        selected ? "bg-sky-900 text-white" : "bg-white text-black"
      }`}
    >
      {text}
    </Button>
  );
};

export default FilterButton;
