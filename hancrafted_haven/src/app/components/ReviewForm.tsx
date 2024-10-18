'use client';
import { useState } from 'react';

interface AddReviewFormProps {
    onSubmit: (rating: number, comment: string) => void;
    onCancel: () => void; // Callback to handle cancel
}

export default function AddReviewForm({ onSubmit, onCancel }: AddReviewFormProps) {
    const [rating, setRating] = useState<number>(0);
    const [comment, setComment] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(rating, comment);
        setRating(0);
        setComment('');
    };

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <label>
                    Rating:
                    <input
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        min="1"
                        max="5"
                        required
                    />
                </label>
                <label>
                    Comment:
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit Review</button>
                <button type="button" onClick={onCancel}>Cancel</button> {/* Cancel button */}
            </form>
        </div>
    );
}
