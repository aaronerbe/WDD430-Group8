import { NextRequest, NextResponse } from 'next/server';
import { addToCollection } from '@/app/lib/data';

export async function POST(req: NextRequest) {
    const { collection_id, product_id} = await req.json();
    try {
        await addToCollection(Number(collection_id), Number(product_id));
        return NextResponse.json({ message: 'Product Added to Collection Successfully!' });
    } catch (error) {
        console.error('Failed to add to collection:', error);
        return NextResponse.json({ error: 'Failed to add to collection.' }, { status: 500 });
    }
}
