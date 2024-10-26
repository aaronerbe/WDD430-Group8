'use client';
import Image from "next/image";
import { Image_, Product } from "@/app/lib/definitions";
import React, { useState } from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';

const ProductCard = ({
  product,
  image,
  authenticatedUserId,
  authUser
}: {
  product: Product;
  image: Image_;
  authenticatedUserId?: number;
  authUser?: boolean;
}) => {

  const [productName, setProductName] = useState(product.name || ""); 
  const [productPrice, setProductPrice] = useState(product.price.toString() || ""); 
  const [productDescription, setProductDescription] = useState(product.description || "");
  const [productCategory, setProductCategory] = useState(product.category || "")
  const [isEditingProductInfo, setIsEditingProductInfo] = useState(false);

  let tempProductName = productName;
  let tempProductPrice = productPrice;
  let tempProductDescription = productDescription
  let tempProductCategory = productCategory

  const handleProductInfoSave = async (productId: number) => {
    try {
      const response = await fetch('/api/updateProductInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
          userId: authenticatedUserId,
          name: productName,
          description: productDescription,
          price: productPrice,
          category: productCategory
        }),
      });
      if (!response.ok) {
        //Doing this so if it fails, we can reset the info back to what it was originally for rendering instantly (so it doesn't render the bad values that didn't set in db)
        throw new Error('Failed to update product info');
      }
      setIsEditingProductInfo(false);
      setProductName(productName);
      setProductPrice(productPrice);
      setProductDescription(productDescription);
      setProductCategory(productCategory);
      window.location.reload();
      tempProductName = productName;
      tempProductPrice = productPrice;
      tempProductDescription = productDescription
      tempProductCategory = productCategory
    } catch (error) {
      console.error('Failed to update product info:', error);
      setProductName(tempProductName)
      setProductPrice(tempProductPrice)
      setProductDescription(tempProductDescription)
      setProductCategory(tempProductCategory)
    }
  };

  return (
    <div>
      {isEditingProductInfo ? (
        <div>
          <textarea
            className="productName border border-gray-300 p-2 w-full"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <textarea
            className="productPrice border border-gray-300 p-2 w-full"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <textarea
            className="productDescription border border-gray-300 p-2 w-full"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
          <textarea
            className="productCategory border border-gray-300 p-2 w-full"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          />
          <button
            onClick={() => handleProductInfoSave(product.id)}
            className="mt-2 bg-blue-500 text-white p-2"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="relative max-w-56 min-h-[270px] shadow-lg shadow-slate-500/50">
          <a
            href={`/creator/${product.user_id}/product/${product.id}`}
            className="w-56"
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
            <div className="px-6 py-4 bg-white flex flex-col justify-between h-full relative">
              <div className="flex items-center justify-between mb-2 min-h-[50px]">
                <h2 className="text-md text-gray-800 font-semibold">
                  {product.name}
                </h2>
                {authUser && 
                  <button
                    //onClick={(e) => {
                    onClick={() => {
                      //e.stopPropagation(); // Prevent link from being followed
                      setIsEditingProductInfo(true);
                    }}
                    className="h-5 w-5 text-gray-500 cursor-pointer"
                    aria-label="Edit Product"
                  >
                  <PencilIcon />
                </button>
                }
              </div>
              <div className="border border-slate-200 w-full mb-2"></div>
              <div className="flex">
                <p className="text-gray-800 font-semibold mt-auto">
                  ${product.price}
                </p>
              </div>
            </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;