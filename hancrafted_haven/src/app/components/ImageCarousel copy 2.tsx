'use client';
import Image from 'next/image'; 
import { fetchImagesData } from '@/app/lib/data'; 
import React, { useState, useEffect } from 'react';
//import { Product, Image_ } from '@/app/types/productTypes';

interface ImageCarouselProps{
    productId: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({productId}) => {
    //useState(0) sets initial state to 0
    //setCurrentIndex = function used to update the state (currentIndex variable) 
    //when setCurrentIndex is called, it re-renders the component w/ the updated state.
    const [currentIndex, setCurrentIndex] = useState(0);
    //useState<string[]>([]) sets an empty array as initial state
        //may need to change this?
    //setImageUrls is function used to update state of imageUrls
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    
    const fetchImages = async () => {
        try {
            //fetch img data based on productId
            const imageData = await fetchImagesData(productId);
            //map data to array of img urls
            const urls = imageData.map((img) => img.image_url);
            //update state w/ fetched URLs
            setImageUrls(urls);
        }catch(error) {
            console.error('Failed to fetch images:', error)
        }
    };
    
    //useEffect = hook to run side effects in components.  takes 2 arguments, a function and an optional dependency array
    //
    useEffect(() => {
        // Fetch images when the component mounts
        fetchImages();
    }, []);//empty dependnency means it runs only once at render(variables would mean it runs every time that variaable changed)

    const handleNextImage = () => {
        // Increment index and loop back to 0 if it reaches the end
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };

    return (
        <div>
            {imageUrls.length > 0 ? (
                <Image
                    src={imageUrls[currentIndex]}
                    alt={`Image ${currentIndex}`}
                    width={500}
                    height={500}
                />
            ) : (
                <p>Loading...</p>
            )}
            <div>
                <button onClick={handleNextImage}>Next Image</button>
            </div>
        </div>
    );
};

export default ImageCarousel;
