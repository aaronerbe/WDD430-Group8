'use client';
import { useState } from 'react';
import {NewRating} from '@/app/ui/reviews/StarRating'

interface AddReviewFormProps {
    onSubmit: (rating: number, comment: string) => void;
    onCancel: () => void; // Callback to handle cancel
}


export default function AddReviewForm({ onSubmit, onCancel }: AddReviewFormProps) {
    //const [state (current value of state), setState (function used to update state variable)] = useState(initialState);
    //set state of rating as number 0-5.  initial setting is 0
    const [rating, setRating] = useState<number>(0);
    //set state of comments as string.  initial setting is empty
    const [comment, setComment] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(rating, comment);
        setRating(0);
        setComment('');
    };

    return (
        <div className="modal bg-white text-black rounded-lg shadow-lg p-6 w-full max-w-md mx-auto z-10">
            <h2 className="text-2xl font-semibold mb-4">Add Review</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <label className="flex flex-col">
                    <span className="text-gray-700">Rating:</span>
                    {/*<input
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        min="1"
                        max="5"
                        required
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />*/}
                    <NewRating
                        initialRating={rating}
                        onRate={(newRating) => setRating(newRating)}
                    />
                </label>
                <label className="flex flex-col">
                    <span className="text-gray-700">Comment:</span>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                        className="border border-gray-300 rounded-md p-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                    />
                </label>
                <div className="flex justify-between mt-4">
                    <button 
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-150 ease-in-out"
                    >
                        Submit Review
                    </button>
                    <button 
                        type="button" 
                        onClick={onCancel}
                        className="border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-100 transition duration-150 ease-in-out"
                    >
                        Cancel
                    </button> 
                </div>
            </form>
        </div>
    );
}
