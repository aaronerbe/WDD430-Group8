//'use client';
//import Image from 'next/image'; 
//import React, { useState } from 'react';
//import { Image_ } from '@/app/types/productTypes';

//interface ImageCarouselProps {
//    product_id: Image_[];
//}

//const Reviews: React.FC<ImageCarouselProps> = ({ images }) => {
//    //useState(0) sets initial state to 0
//    //setCurrentIndex = function used to update the state (currentIndex variable) 
//    //when setCurrentIndex is called, it re-renders the component w/ the updated state.
//    const [currentIndex, setCurrentIndex] = useState(0);
//    //useState<string[]>([]) sets an empty array as initial state
//    const [useDefaultImage, setUseDefaultImage] = useState(false);

//        //may need to change this?
//    //setImageUrls is function used to update state of imageUrls
//    //const [imageUrls, setImageUrls] = useState<string[]>([]);
    
//    const imageUrls = images.map(image => image.image_url);
//    const defaultImageUrl = '/product-images/default_image.jpg';

//    const handleNextImage = () => {
//        // Increment index and loop back to 0 if it reaches the end
//        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
//        setUseDefaultImage(false);
//    };
//    const handlePrevImage = () => {
//        //decrement index and loop back to 0 if it reaches end
//        setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
//        setUseDefaultImage(false);
//    };

//    const handleImageError = () => {
//        setUseDefaultImage(true); // Switch to default image if an error occurs
//    };

//    return (
//    <div className="flex flex-col items-start">
//            {imageUrls.length > 0 ? (
//                <div className="min-h-[500px] relative aspect-w-1 aspect-h-1 w-full max-w-full md:h-auto">
//                    <Image
//                        src={useDefaultImage ? defaultImageUrl : imageUrls[currentIndex]}
//                        alt={`Image ${currentIndex}`}
//                        layout="fill"
//                        objectFit="contain"
//                        onError={handleImageError}
//                        className=""
//                    />
//                    {/* Left arrow button */}
//                    <button 
//                        onClick={handlePrevImage}
//                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-r focus:outline-none"
//                    >
//                        &#9664; {/* Left arrow symbol */}
//                    </button>
//                    {/* Right arrow button */}
//                    <button 
//                        onClick={handleNextImage}
//                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-l focus:outline-none"
//                    >
//                        &#9654; {/* Right arrow symbol */}
//                    </button>
//                </div>
//            ) : (
//                <p>Loading...</p>
//            )}
//        </div>
//    );
//};

//export default ImageCarousel;
