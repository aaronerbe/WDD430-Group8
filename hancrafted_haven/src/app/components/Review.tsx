'use client';
import React, { useState } from 'react';
import { Review_ } from '@/app/types/productTypes';
import StarRating from '@/app/components/StarRating'

interface ReviewProps {
    reviews: Review_[]; // Pass the reviews array as a prop
}

const Review: React.FC<ReviewProps> = ({ reviews }) => {
    
    const [currentPage, setCurrentPage] = useState(0);
    const reviewsPerPage = 3; // Number of reviews to display per page
    
    if (!reviews || reviews.length === 0) {
        return(
            <div className="text-center p-4">
                <h4 className="text-lg font-semibold pt-14 mb-5">No Reviews Yet</h4>
                <p>Be the first to leave a review!</p>
            </div>
        )
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

            <h3 className="reviewTitle text-2xl font-bold mb-5 pt-14">Latest Reviews</h3>


            <div className="reviewButtons flex justify-between mt-6 mb-10">
                
                <button 
                    onClick={handlePrev} 
                    disabled={currentPage === 0}
                    className={`px-4 py-2 text-white bg-blue-700 transition-transform rounded ${currentPage === 0 ? 'opacity-20' : ' hover:bg-blue-500'}`}
                >
                    Previous
                </button>
                <button 
                    onClick={handleNext} 
                    disabled={(currentPage + 1) * reviewsPerPage >= reviews.length}
                    className={`px-4 py-2 text-white bg-blue-700 transition-transform rounded ${ 
                        (currentPage + 1) * reviewsPerPage >= reviews.length ? 'opacity-20 ' : 'hover:bg-blue-500' 
                    }`}
                >
                    Next
                </button>
            </div>

            
            <div className="reviewCards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayedReviews.map((review) => (
                    <div key={review.id} className="review border p-4 rounded-md shadow-md min-h-[200px]">
                        <p className="font-semibold">{review.comment}</p>
                        <p className="text-sm">Rating: {review.rating}</p>
                        <StarRating initialRating={review.rating} />
                    </div>
                ))}
            </div>
            {/*maths logic to show number of reviews*/}
            <p className="text-sm mt-4">
                {`Showing ${Math.min((currentPage + 1) * reviewsPerPage, reviews.length)} of ${reviews.length} reviews`}
            </p>


            


        </div>
    );
};

export default Review;
