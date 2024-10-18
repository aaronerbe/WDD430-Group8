
'use client'
import { Product, Image_, User, Review_ } from '@/app/types/productTypes';
import ImageCarousel from '@/app/components/ImageCarousel';
import Review from '@/app/components/Review';
import { StarAvg } from '@/app/components/Star';
import AddReviewForm from '@/app/components/ReviewForm';
import { addReview } from '@/app/lib/data';
import Image from 'next/image';
import { useState } from 'react';


const ProductDetail = ({
    product,
    images,
    user,
    reviews
}: {
    product: Product; 
    images: Image_[]; 
    user: User; 
    reviews: Review_[];
}) => { 
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleAddReview = async (rating: number, comment: string) => {
        try {
            await addReview(product.id, user.id, rating, comment);
            alert('Review added successfully!');
            setIsFormOpen(false);
        } catch (error) {
            console.error('Failed to add review:', error);
            alert('Error adding review. Please try again.');
        }
    };

    const handleCancel = () => {
        setIsFormOpen(false); // Close the form
    };

    return (
        <div className="container lg:max-w-[80%] md:max-w-[80%] sm:max-w-[80%] mx-auto p-4">
            {/* Product Title Section */}
            <div className="flex flex-col md:items-center md:flex-row gap-8 md:gap-4 mb-12">
                <div>
                    <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                </div>
            </div>


            {/* Image and Details Section */}
            <div className="flex flex-col md:flex-row gap-16 mb-12">
                {/* Image Carousel */}
                <div className="flex-1">
                    <div className="relative w-full aspect-[16/9]"> {/* Set aspect ratio */}
                        <ImageCarousel images={images} />
                    </div>
                </div>
                {/* Name/Description/Stars Section */}
                <div className="flex-1">
                    <p className="text-3xl font-semibold text-white mb-8">{user.name}</p>
                    <div>
                        <p className="text-gray-300 mb-8">{product.description}</p>
                    </div>
                    <div className="flex items-center">
                        <StarAvg reviews={reviews} />
                        {/*<span className="text-yellow-400">★★★★★</span>
                        <span className="ml-2 text-white">(123)</span>*/}
                    </div>
                </div>
            </div>


            {/* Reviews Section */}
            <div className="mb-20 mt-20">
                {/*<div className="grid grid-row-1 md:grid-cols-3 gap-6">
                    <div className="border p-4 rounded-md shadow-md">
                        <div className="flex items-center mt-4">
                        </div>
                    </div>
                </div>*/}
                <div className="relative">
                    <div className="addRevewButton absolute right-0 top-0 py-0">
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="flex flex-col items-center border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition duration-150 ease-in-out"
                        >
                            <span className="text-white-700 text-4xl">+</span>
                            <span className="text-white-700">Add Review</span>
                        </button>
                        {isFormOpen && (<AddReviewForm onSubmit={handleAddReview} onCancel={handleCancel} />)}
                    </div>
                    <Review reviews={reviews} />

                </div>



            </div>

            {/* Other Products Section */}
            <div>
                <h3 className="text-2xl font-bold mb-4">Other Products By Creator</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="border p-4 rounded-md shadow-md">
                        <Image
                            src="/product-images/default_image.jpg"
                            alt="Product Title"
                            className="w-full h-32 object-cover mb-2 rounded"
                            width="500"
                            height="500"
                        />
                        <p className="font-semibold">Title</p>
                    </div>
                    {/* Repeat for additional products */}
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
