import { Product, Image_ } from "@/app/lib/definitions";
//import Image from "next/image";
import ProductCard from "@/app/ui/products/cards";

//interface ProductsProps {
//  products: Product[]; // Pass the reviews array as a prop
//}

//keeping it generic so you can pass whatever filtered products you want (e.g. by creator, by category, etc)

const OtherProducts = ({
  products,
  images,
}: {
  products: Product[];
  images: Image_[];
}) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    //<div>

    //</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => {
        const matchingImage = images.find(
          (image) => image.product_id === product.id
        );

        if (!matchingImage) return null;
        return (
          <ProductCard
            key={product.id}
            product={product}
            image={matchingImage}
          />
        );
      })}
    </div>
  );
};

export default OtherProducts;
