import clsx from "clsx";
import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { fetchFeaturedCategories } from "@/app/lib/data";
import { merriweather } from "@/app/ui/fonts";

export default async function FeaturedCategories() {
  const featuredCategories = await fetchFeaturedCategories();

  return (
    <div>
      <h1
        className={`${merriweather.className} text-slate-200 text-2xl ml-10 mb-4 font-bold`}
      >
        Shop by Category
      </h1>
      <div className="flex flex-col w-full m-0">
        <div className="overflow-x-auto">
          <div className="flex gap-12 mx-8 pl-8">
            {featuredCategories.rows.map((category, i) => (
              <div
                key={category.category}
                className={clsx(
                  "flex flex-col items-center justify-between rounded-xl bg-white w-40",
                  {
                    "border-t": i !== 0,
                  }
                )}
              >
                <PhotoIcon className="mb-4" />
                {/* <Image
              src={}
              alt={product.name}
              className="rounded-full mb-4"
              width={100}
              height={100}
            /> */}

                <div className="min-w-40 text-center">
                  <p className="text-xs sm:text-sm md:text-base lg:text-base font-semibold text-black">
                    {category.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
