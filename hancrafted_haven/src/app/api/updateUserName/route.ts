// /app/api/addReview/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { updateUserName } from '@/app/lib/data';

export async function POST(req: NextRequest) {
    const { userId, name } = await req.json();
    try {
        await updateUserName(userId, name);
        return NextResponse.json({ message: 'User Name Updated successfully!' });
    } catch (error) {
        console.error('Failed to update user name:', error);
        return NextResponse.json({ error: 'Failed to update user name.' }, { status: 500 });
    }
}
