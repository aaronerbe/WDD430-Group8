import { NextRequest, NextResponse } from 'next/server';
import { addReview, fetchReviewData} from '@/app/lib/data';

export async function POST(req: NextRequest) {
    const { productId, userId, rating, comment } = await req.json();
    try {
        await addReview(productId, userId, rating, comment);
        //return NextResponse.json({ message: 'Review added successfully!' });
        
        const newReviews = await fetchReviewData(productId)
        return NextResponse.json({ 
            message: 'Review added successfully!', 
            reviews: newReviews 
        });
    } catch (error) {
        console.error('Failed to add review:', error);
        return NextResponse.json({ error: 'Failed to add review.' }, { status: 500 });
    }
}
