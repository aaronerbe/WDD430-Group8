import { NextRequest, NextResponse } from "next/server";
import { addProduct } from "@/app/lib/data";

export async function POST(req: NextRequest) {
  const { userId, name, description, price, category } = await req.json();

  console.log("Received data:", { userId, name, description, price, category });

  try {
    const productId = await addProduct(
      userId,
      name,
      description,
      price,
      category
    );
    console.log(`Created: ${productId}`);
    return NextResponse.json({
      message: "Product successfully created.",
      productId,
    });
  } catch (error) {
    console.error("Failed to create product:", error);
    return NextResponse.json(
      { error: "Failed to create product." },
      { status: 500 }
    );
  }
}
