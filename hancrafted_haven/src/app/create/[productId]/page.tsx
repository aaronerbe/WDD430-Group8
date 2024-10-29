import { fetchProductData } from "@/app/lib/data";
import Form from "../../ui/products/image-form";
import { merriweather } from "@/app/ui/fonts";
import { Product } from "@/app/lib/definitions";
import { notFound } from "next/navigation";

interface Params {
  params: {
    productId: number;
    creatorId: number;
  };
}

export default async function Page({ params }: Params) {
  const { productId } = params;

  try {
    //FETCH DATA (server side) and pass it to the component (client side)
    const productData: Product = await fetchProductData(productId);

    // If productData doesn't exist, redirect to the custom 404 page
    if (!productData) {
      notFound();
    }
    return (
      <main className="flex justify-center m-2">
        <div className="max-w-xl w-full">
          <div className={`${merriweather.className} text-xl mt-8 ml-6`}>
            <h3>Add images for your new product: {productData.name}</h3>
          </div>
          <div className="w-full h-[1px] bg-gray-800 mt-4"></div>
          <Form productId={productData.id} />
        </div>
      </main>
    );
  } catch (error) {
    console.error("Failed to fetch product data:", error);
    return notFound();
  }
}
