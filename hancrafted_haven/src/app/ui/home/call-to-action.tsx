"use client";

import { merriweather } from "@/app/ui/fonts";
import React from "react";

const CallToAction = () => {
  return (
    <div className="flex justify-center py-8">
      <a
        href="search-results"
        className="bg-yellow-200 rounded-lg p-6 mx-4 max-w-3xl flex items-center hover:shadow-lg transition-shadow duration-300"
      >
        <p
          className={`${merriweather.className} text-gray-800 text-3xl font-bold mx-4`}
        >
          Discover
        </p>
        <p className="text-gray-800 text-xl italic ms-22">
          unique and personalized creations
        </p>
      </a>
    </div>
  );
};

export default CallToAction;
