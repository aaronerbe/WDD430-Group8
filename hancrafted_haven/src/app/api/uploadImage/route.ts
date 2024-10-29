import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { addImage } from "@/app/lib/data";

export async function POST(req: Request) {
  if (!req.body) {
    return NextResponse.json(
      { error: "No form data provided" },
      { status: 400 }
    );
  }

  const formData = await req.formData();

  const productId = formData.get("productId") as string;
  const imageFile = formData.get("image") as File;

  if (!productId || !imageFile) {
    return NextResponse.json(
      { error: "Product ID and image are required" },
      { status: 400 }
    );
  }

  const productIdNumber = Number(productId);
  if (isNaN(productIdNumber)) {
    return NextResponse.json(
      { error: "Product ID must be a valid number" },
      { status: 400 }
    );
  }

  const imageName = imageFile.name;
  const newPath = path.join(process.cwd(), "public/product-images", imageName);

  // Create a writable stream and save the file
  const fileStream = fs.createWriteStream(newPath);
  const buffer = await imageFile.arrayBuffer();
  const data = Buffer.from(buffer);

  // Write the file to the filesystem
  fileStream.write(data, (err) => {
    if (err) {
      console.error(err);
      return NextResponse.json(
        { error: "Failed to save image" },
        { status: 500 }
      );
    }
    fileStream.end();
  });

  // Create the image URI
  const imageUri = `/product-images/${imageName}`;

  // Call your addImage function to store the URI in the database
  addImage(productIdNumber, imageUri);

  return NextResponse.json({
    message: "Image uploaded successfully!",
    imageUri,
  });
}
