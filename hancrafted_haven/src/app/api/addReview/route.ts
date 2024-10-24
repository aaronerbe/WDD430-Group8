// /app/api/addReview/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { addReview } from '@/app/lib/data';

export async function POST(req: NextRequest) {
    const { productId, userId, rating, comment } = await req.json();
    try {
        await addReview(productId, userId, rating, comment);
        return NextResponse.json({ message: 'Review added successfully!' });
    } catch (error) {
        console.error('Failed to add review:', error);
        return NextResponse.json({ error: 'Failed to add review.' }, { status: 500 });
    }
}
