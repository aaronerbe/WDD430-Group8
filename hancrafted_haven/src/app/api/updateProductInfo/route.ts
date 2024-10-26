// /app/api/addReview/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { editProductData } from '@/app/lib/data';

export async function POST(req: NextRequest) {
    const { productId, userId, name, description, price, category } = await req.json();
    try {
        await editProductData(Number(productId), Number(userId), name, description, Number(price), category);
        return NextResponse.json({ message: 'Product Info Updated successfully!' });
    } catch (error) {
        console.error('Failed to update user name:', error);
        return NextResponse.json({ error: 'Failed to update Product Info.' }, { status: 500 });
    }
}
