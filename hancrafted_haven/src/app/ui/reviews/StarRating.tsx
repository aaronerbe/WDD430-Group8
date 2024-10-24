import {Review_} from '@/app/lib/definitions';
import React, {useState} from 'react'
import Star from '@/app/ui/reviews/Star'

interface StarAvgProps{
    reviews: Review_[]
}

interface StarRatingProps {
    initialRating: number;
    onRate?: (rating: number) => void;
    maxStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({initialRating}) => {
    const rating = initialRating;
    const maxStars = 5

    return (
        <div className="flex">
            {Array.from({ length: maxStars }, (_, index) => (
                <Star
                    key={index}
                    filled={index < (rating)}
                    size={20}
                />
            ))}
        </div>
    );
};

export const NewRating: React.FC<StarRatingProps> = ({ initialRating, onRate, maxStars = 5 }) => {
    const [rating, setRating] = useState(initialRating);
    const [hoveredRating, setHoveredRating] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => setHoveredRating(index);
    const handleMouseLeave = () => setHoveredRating(null);
    const handleClick = (index: number) => {
        setRating(index);
        if (onRate) onRate(index);
    };

    return (
        <div className="flex">
            {Array.from({ length: maxStars }, (_, index) => (
                <Star
                    key={index}
                    filled={index < (hoveredRating ?? rating)}
                    onClick={() => handleClick(index + 1)}
                    onMouseEnter={() => handleMouseEnter(index + 1)}
                    onMouseLeave={handleMouseLeave}
                    size={30}
                />
            ))}
        </div>
    );
};

export const StarAvg: React.FC<StarAvgProps> = ({ reviews }) => {
    if (!reviews || reviews.length === 0) {
        return <div>No Reviews Yet</div>;
    }

    // Calculate the average rating
    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

    return (
        <div className="mt-4"> 
        <p className="mr-2">Average Rating:</p> 
            <div className="flex items-center mt-2">
                <StarRating initialRating={averageRating} />
                <span className="ml-2">({reviews.length})</span> 
            </div>
        </div>
    );
};

export default StarRating;
