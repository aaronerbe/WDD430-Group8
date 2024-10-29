import { NextRequest, NextResponse } from 'next/server';
import { deleteProduct } from '@/app/lib/data';

export async function POST(req: NextRequest) {
    const { productId, userId } = await req.json();

    try {
        await deleteProduct(Number(productId), Number(userId));
        return NextResponse.json({ message: 'Product Removed Successfully!' });
    } catch (error) {
        console.error('Failed to remove Product:', error);
        return NextResponse.json({ error: 'Failed to remove Product.' }, { status: 500 });
    }
}
