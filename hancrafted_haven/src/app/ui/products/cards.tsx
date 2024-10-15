import { Product } from "@/app/lib/definitions";

export default async function ProductCard({ product }: { product: Product }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
      <img
        className="w-full h-48 object-cover rounded-lg mb-4"
        src={product.image_url}
        alt={product.name}
      />

      <div className="px-6 py-4">
        <p className="text-gray-600 text-xs mb-2">
          Seller ID: {product.seller_id}
        </p>

        <h2 className="text-xl font-semibold text-gray-800 truncate">
          {product.name}
        </h2>

        <p className="text-gray-700 text-sm mt-2">{product.description}</p>

        <p className="text-gray-800 font-semibold mt-4">${product.price}</p>

        <p className="text-gray-500 text-xs mt-2">
          Category: {product.category}
        </p>
      </div>

      <div className="px-6 py-4 flex justify-end">
        <button className="text-white bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200">
          Buy Now
        </button>
      </div>
    </div>
  );
}