'use client'
import { Product, Image_, User, Review_ } from '@/app/lib/definitions';
import ImageCarousel from '@/app/ui/images/ImageCarousel';
import Review from '@/app/ui/reviews/Review';
import { StarAvg } from '@/app/ui/reviews/StarRating';
import AddReviewForm from '@/app/ui/reviews/ReviewForm';
//import Products from '@/app/ui/products/ProductCard'
import { useState } from 'react';
import Link from 'next/link'

const ProductDetail = ({
    product,
    images,
    user,
    initialReviews,
    authUserId,
    reviewCheck
}: {
    product: Product; 
    images: Image_[]; 
    user: User; 
    initialReviews: Review_[];
    authUserId: number;
    reviewCheck: boolean
}) => { 
    const [reviews, setReviews]= useState(initialReviews);
    const [isFormOpen, setIsFormOpen] = useState(false);
    
    const handleAddReview = async (rating: number, comment: string) => {
        try {
            const response = await fetch('/api/addReview', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: product.id,
                    userId: authUserId,
                    rating,
                    comment,
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to add review');
            }   
            const data = await response.json(); 
            const newReviews = data.reviews;
            setReviews(newReviews);
            setIsFormOpen(false);
        } catch (error) {
            console.error('Failed to add review:', error);
        }
    };

    const handleCancel = () => {
        setIsFormOpen(false); // Close the form
    };

    return (
        <div className="relative">
            {/* Overlay to dim when review form is up*/}
            {isFormOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-10" />
            )}

            <div className="container mx-auto p-4 relative">

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
                        <p className="text-3xl font-semibold  mb-8">
                            <Link href={`/creator/${user.id}`}>
                                By {user.name}
                            </Link>
                        </p>
                        <div>
                            <p className="mb-8">{product.description}</p>
                        </div>
                        <div className="flex items-center">
                            <StarAvg reviews={reviews} />
                            {/*<span className="text-yellow-400">★★★★★</span>
                            <span className="ml-2 ">(123)</span>*/}
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="mb-20 mt-20 w-full">
                    <div className="relative mx-auto">
                        <div 
                            className="addReviewButton absolute right-0 top-0 py-0 transition-opacity duration-150 ease-in-out" 
                            style={{
                                opacity: isFormOpen ? 0 : 1, 
                                pointerEvents: isFormOpen ? 'none' : 'auto' 
                            }}>
                            {!isFormOpen && !reviewCheck && 
                                <button //will only show the button if form isn't open and reviewCheck confirms authUserId hasn't already submitted a review.
                                    onClick={() => setIsFormOpen(true)}
                                    className="flex flex-col items-center border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition duration-150 ease-in-out z-index-0"
                                >
                                <span className="-700 text-4xl">+</span>
                                <span className="-700">Add Review</span>
                            </button>}
                        </div>
                        <div className="reviewFormContainer absolute z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0" 
                            style={{
                                opacity: isFormOpen ? 1 : 0, 
                                pointerEvents: isFormOpen ? 'auto' : 'none'
                            }}>
                            {isFormOpen && (<AddReviewForm onSubmit={handleAddReview} onCancel={handleCancel} />)}
                        </div>
                        <Review reviews={reviews} />
                    </div>
                </div>
            </div>
        </div>
    );

        
}

export default ProductDetail;
