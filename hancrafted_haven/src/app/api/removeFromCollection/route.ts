import { NextRequest, NextResponse } from 'next/server';
import { removeFromCollection } from '@/app/lib/data';

export async function POST(req: NextRequest) {
    const { collection_id, product_id } = await req.json();

    try {
        await removeFromCollection(Number(collection_id), Number(product_id));
        return NextResponse.json({ message: 'Product Removed from Collection Successfully!' });
    } catch (error) {
        console.error('Failed to remove from collection:', error);
        return NextResponse.json({ error: 'Failed to remove from collection.' }, { status: 500 });
    }
}
