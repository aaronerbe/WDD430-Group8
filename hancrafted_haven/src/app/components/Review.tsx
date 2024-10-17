'use client';
import React, { useState } from 'react';
import { Review_ } from '@/app/types/productTypes';
import Star from '@/app/components/Star'

interface ReviewProps {
    reviews: Review_[]; // Pass the reviews array as a prop
}

const Review: React.FC<ReviewProps> = ({ reviews }) => {
    
    const [currentPage, setCurrentPage] = useState(0);
    const reviewsPerPage = 3; // Number of reviews to display per page
    
    if (!reviews || reviews.length === 0) {
        return <div>No Reviews Yet</div>;
    }
    // Calculate the reviews to display based on the current page
    const displayedReviews = reviews.slice(currentPage * reviewsPerPage, (currentPage + 1) * reviewsPerPage);

    const handleNext = () => {
        if ((currentPage + 1) * reviewsPerPage < reviews.length) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div>
            <h3 className="text-2xl font-bold mb-4">Latest Reviews</h3>

            {displayedReviews.map((review) => (
                <div key={review.id} className="review border p-4 mb-4 rounded-md shadow-md">
                    <p className="font-semibold">{review.comment}</p>
                    <p className="text-sm text-gray-500">Rating: {review.rating}</p>
                    <Star rating={review.rating} />
                </div>
            ))}

            <div className="flex justify-between mt-4">
                <button 
                    onClick={handlePrev} 
                    disabled={currentPage === 0}
                    className={`px-4 py-2 text-white bg-blue-500 rounded ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Previous
                </button>
                <button 
                    onClick={handleNext} 
                    disabled={(currentPage + 1) * reviewsPerPage >= reviews.length}
                    className={`px-4 py-2 text-white bg-blue-500 rounded ${ (currentPage + 1) * reviewsPerPage >= reviews.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Review;
