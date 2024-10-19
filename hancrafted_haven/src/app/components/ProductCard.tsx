'use client';
import React, { useState } from 'react';
import { Product, User } from '@/app/types/productTypes';
import Image from 'next/image'

interface ProductsProps {
    products: Product[]; // Pass the reviews array as a prop
}

//keeping it generic so you can pass whatever filtered products you want (e.g. by creator, by category, etc)
const Products: React.FC<ProductsProps> = ({ products }) => {
    
    if (!products || products.length === 0) {
        return(
            <div className="text-center p-4">
                <h4 className="text-lg font-semibold pt-14 mb-5">No Products</h4>
                <p>No Products to Display</p>
            </div>
        )
    }

    return (
        <div>

            <div className="ProductsCards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    //<div  className="review border p-4 rounded-md shadow-md min-h-[200px]">
                    <div key={product.id} className="">
                        <div className="border p-4 rounded-md shadow-md">
                            <Image
                                src="/product-images/default_image.jpg"
                                alt="Product Title"
                                className="w-full h-32 object-cover mb-2 rounded"
                                width="500"
                                height="500"
                            />
                            <h3 className="font-semibold">{product.name}</h3>
                            <p>${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Products;
