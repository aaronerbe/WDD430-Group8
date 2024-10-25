"use client";

import { useState } from "react";
import { Button } from "@headlessui/react";

interface FilterButtonProps {
  text: string;
  selected?: boolean;
}

const FilterButton: React.FC<FilterButtonProps> = ({ text, selected }) => {
  return (
    <Button
      className={`px-2 border rounded-full ${
        selected ? "bg-blue-500 text-white" : "bg-white text-black"
      }`}
    >
      {text}
    </Button>
  );
};

export default FilterButton;
