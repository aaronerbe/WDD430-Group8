import { NextRequest, NextResponse } from 'next/server';
import { editCollectionData } from '@/app/lib/data';

export async function POST(req: NextRequest) {
    const { id, userId, title, description } = await req.json();
    console.log('id:',id,' userId: ',userId, ' title: ', title, 'description: ', description)
    try {
        await editCollectionData(Number(id), Number(userId), title, description);
        return NextResponse.json({ message: 'Collection Info Updated successfully!' });
    } catch (error) {
        console.error('Failed to update collection info:', error);
        return NextResponse.json({ error: 'Failed to update Collection Info.' }, { status: 500 });
    }
}
