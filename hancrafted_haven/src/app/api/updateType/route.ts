import { NextRequest, NextResponse } from "next/server";
import { updateUserType } from "@/app/lib/data";

export async function POST(req: NextRequest) {
    const {userId} = await req.json();
    try {
        await updateUserType(userId);
        return NextResponse.json({message: 'User type successfully updated!'})
    } catch (error) {
        console.error('Failed to update user type:', error)
        return NextResponse.json({error: 'Failed to update user type.'})
    }
}