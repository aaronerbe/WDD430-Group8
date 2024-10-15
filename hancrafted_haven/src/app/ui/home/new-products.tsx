// import clsx from "clsx";
// import Image from "next/image";
// import { fetchProductData } from "@/app/lib/data";
// import { Product } from "@/app/lib/definitions";

// export default async function NewProducts() {
//   // Fetch the product data
//   const productPreviews: Product[] = await fetchProductData();

//   return (
//     <div className="flex flex-col w-full md:col-span-4">
//       <h2 className="mb-4 text-xl md:text-2xl">New Products</h2>
//       <div className="flex flex-wrap gap-8 bg-gray-50 p-4">
//         {productPreviews.map((product, i) => (
//           <div
//             key={product.id}
//             className={clsx(
//               "flex flex-col items-center justify-between rounded-xl bg-white p-4 w-full md:w-1/2 lg:w-1/3",
//               {
//                 "border-t": i !== 0,
//               }
//             )}
//           >
//             {/* <Image
//               src={product.image_url}
//               alt={product.name}
//               className="rounded-full mb-4"
//               width={100}
//               height={100}
//             /> */}

//             <div className="min-w-0 text-center">
//               <p className="truncate text-sm font-semibold md:text-base">
//                 {product.name}
//               </p>
//               <p className="hidden text-sm text-gray-500 sm:block">
//                 {product.description}
//               </p>
//             </div>

//             <p className="truncate text-sm font-medium text-gray-700">
//               {product.price}
//             </p>
//           </div>
//         ))}
//       </div>
//       {/* Optional View More button */}
//       {/* <div className="flex items-center pb-2 pt-6">
//         <h3 className="ml-2 text-sm text-gray-500">View more</h3>
//       </div> */}
//     </div>
//   );
// }
