'use client';
import Image from "next/image";
import { Image_, Product } from "@/app/lib/definitions";
import React, { useState, useEffect } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({
  product,
  image,
  isInCollection,
  collectionId,
}: {
  product: Product;
  image: Image_;
  isInCollection: boolean;
  collectionId: number;
}) => {
  const [isInCollectionState, setIsInCollectionState] = useState(isInCollection);

  useEffect(() => {
    setIsInCollectionState(isInCollection);
  }, [isInCollection]);

  const handleAddToCollection = async (productId: number) => {
    try {
      const response = await fetch('/api/addToCollection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: productId,
          collection_id: collectionId,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to add to collection');
      }
      // Update state to reflect the addition
      setIsInCollectionState(true);
    } catch (error) {
      console.error('Failed to add to collection:', error);
    }
  };

  const handleRemoveFromCollection = async (productId: number) => {
    try {
      const response = await fetch('/api/removeFromCollection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: productId,
          collection_id: collectionId,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to remove from collection');
      }
      // Update state to reflect the removal
      setIsInCollectionState(false);
    } catch (error) {
      console.error('Failed to remove from collection:', error);
    }
  };

  return (
    <div>
      <div className="relative max-w-56 min-h-[270px] shadow-lg shadow-slate-500/50">
        {isInCollectionState && (
        <div className="selectedCard absolute inset-0 bg-gray-600 opacity-50 z-10 pointer-events-none rounded-t-lg"></div>
        )}
        <a
          href={`/creator/${product.user_id}/product/${product.id}`}
          className="w-56 cursor-pointer"
        >
          <div className="h-36 w-full relative">
            <Image
              className="rounded-t-lg w-full h-full object-cover border-none"
              src={image.image_url}
              alt={`Picture of ${product.name}`}
              width={500}
              height={500}
            />
          </div>
        </a>
        <div className="px-6 py-4 bg-white flex flex-col justify-between h-full">
          <div className="flex items-center justify-between mb-2 min-h-[50px]">
            <h2 className="text-md text-gray-800 font-semibold">
              {product.name}
            </h2>
            <button
              className="h-5 w-5 text-gray-500 cursor-pointer relative z-20"
              aria-label="Toggle Collection"
              onClick={() => {
                if (isInCollectionState) {
                  handleRemoveFromCollection(product.id);
                } else {
                  handleAddToCollection(product.id);
                }
              }}
            >
              {isInCollectionState ? (
                <MinusIcon className="h-5 w-5 text-red-500 cursor-pointer relative z-20" />
              ) : (
                <PlusIcon className="h-5 w-5 text-green-500 cursor-pointer" />
              )}
            </button>
          </div>
          <div className="border border-slate-200 w-full mb-2"></div>
          <div className="flex">
            <p className="text-gray-800 font-semibold mt-auto">
              ${product.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
