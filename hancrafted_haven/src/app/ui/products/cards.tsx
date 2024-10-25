import Image from "next/image";
import { Image_, Product } from "@/app/lib/definitions";

export default async function ProductCard({
  product,
  image,
}: {
  product: Product;
  image: Image_;
}) {
  return (
    <a
      href={`/creator/${product.user_id}/product/${product.id}`}
      className="max-w-56 shadow-lg shadow-slate-500/50"
    >
      <div className="w-56">
        <div className="h-36 w-full">
          <Image
            className="rounded-t-lg w-full h-full object-cover border-none"
            src={image.image_url}
            alt={`Picture of ${product.name}`}
            width={500}
            height={500}
          />
        </div>
        <div className="px-6 py-4 bg-white flex flex-col justify-between h-full">
          <h2 className="text-md text-gray-800 font-semibold">
            {product.name}
          </h2>
          <div className="border border-slate-200 w-full"></div>
          <div className="flex">
            <p className="text-gray-800 font-semibold mt-auto">
              ${product.price}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
