import Image from 'next/image'; 
import { fetchImagesData } from '@/app/lib/data'; 
//import { Product, Image_ } from '@/app/types/productTypes';
//import React, { useState, useEffect } from 'react';


interface ImageCarouselProps {
    productId: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = async ({ productId }) => {
    const imageData = await fetchImagesData(productId);
    const imageSrc = imageData?.[0]?.image_url || '/product-images/default_image.jpg';
    

    return (
        <div>
            <Image
                src={imageSrc}
                alt="Image Name"
                width={500}
                height={500}
            />
        </div>
    );
};

export default ImageCarousel;
