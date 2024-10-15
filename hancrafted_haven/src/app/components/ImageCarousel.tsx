'use client';
import Image from 'next/image'; 
import React, { useState } from 'react';
import { Image_ } from '@/app/types/productTypes';

interface ImageCarouselProps {
    images: Image_[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    //useState(0) sets initial state to 0
    //setCurrentIndex = function used to update the state (currentIndex variable) 
    //when setCurrentIndex is called, it re-renders the component w/ the updated state.
    const [currentIndex, setCurrentIndex] = useState(0);
    //useState<string[]>([]) sets an empty array as initial state
    const [useDefaultImage, setUseDefaultImage] = useState(false);

        //may need to change this?
    //setImageUrls is function used to update state of imageUrls
    //const [imageUrls, setImageUrls] = useState<string[]>([]);
    
    const imageUrls = images.map(image => image.image_url);
    const defaultImageUrl = '/product-images/default_image.jpg';

    const handleNextImage = () => {
        // Increment index and loop back to 0 if it reaches the end
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        setUseDefaultImage(false);
    };
    const handlePrevImage = () => {
        //decrement index and loop back to 0 if it reaches end
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
        setUseDefaultImage(false);
    };

    const handleImageError = () => {
        setUseDefaultImage(true); // Switch to default image if an error occurs
    };

    return (
        <div>
            {imageUrls.length > 0 ? (
                <Image
                    //src={imageUrls[currentIndex]}
                    src={useDefaultImage ? defaultImageUrl : imageUrls[currentIndex]}
                    alt={`Image ${currentIndex}`}
                    width={500}
                    height={500}
                    onError={handleImageError}
                />
            ) : (
                <p>Loading...</p>
            )}
            <div>
                <button onClick={handleNextImage}>Next Image</button>
            </div>
            <div>
                <button onClick={handlePrevImage}>Prev Image</button>
            </div>
        </div>
    );
};

export default ImageCarousel;
