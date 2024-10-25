// /app/api/addReview/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { updateUserBio } from '@/app/lib/data';

export async function POST(req: NextRequest) {
    const { userId, bio } = await req.json();
    try {
        await updateUserBio(userId, bio);
        return NextResponse.json({ message: 'User Bio Updated successfully!' });
    } catch (error) {
        console.error('Failed to update user bio:', error);
        return NextResponse.json({ error: 'Failed to update user bio.' }, { status: 500 });
    }
}
