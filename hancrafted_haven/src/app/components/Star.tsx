import {Review_} from '@/app/types/productTypes'

interface StarProps{
    rating: number;
}
interface StarAvgProps{
    reviews: Review_[]
}

const Star: React.FC<StarProps> = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => {
        return index < rating ? '★' : '☆'; 
        // Filled star for the rating, empty star otherwise
    });

    return (
        <div>
            {stars.map((star, index) => (
                <span key={index} className={star === '★' ? 'text-orange-400' : 'text-yellow-800'}>
                    {star}
                </span>
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

    // Create the star display
    const stars = Array.from({ length: 5 }, (_, index) => {
        if (averageRating >= index + 1) {
            return '★'; // Filled star
        } else {
            return '☆'; // Empty star
        }
    });

    return (
        <div>
            <p>Average Rating: </p>
            {stars.map((star, index) => (
                <span key={index} className={star === '★' ? 'text-orange-400' : 'text-yellow-800'}>
                    {star}
                </span>
            ))}
            <span className="ml-2 text-gray-300">({reviews.length})</span>
        </div>
    );
};

export default Star;
