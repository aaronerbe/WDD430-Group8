import { NextRequest, NextResponse } from "next/server";
import { fetchProductData } from "@/app/lib/data";

export async function GET(req: NextRequest) {
    const {productId} = await req.json()
    try {
        await fetchProductData(Number(productId))
        return new NextResponse(productId)
    } catch (error) {
        console.error('Failed to get product info:', error);
        return NextResponse.json({ error: 'Failed to get Product Info.' }, { status: 500 });
    }
}