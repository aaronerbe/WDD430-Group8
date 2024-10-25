import { merriweather } from "@/app/ui/fonts";

export default function FeaturedCategories() {
  const categories = [
    "Furniture",
    "Stationery",
    "Ceramics",
    "Kitchenware",
    "Fitness",
    "Jewelry",
  ];

  return (
    <div>
      <div className="flex items-center justify-center mt-8">
        <h1
          className={`${merriweather.className} text-zinc-950 text-2xl font-bold mx-8`}
        >
          Shop by Category
        </h1>
      </div>
      <div className="flex flex-col w-full m-0">
        <div className="overflow-x-auto">
          <div className="flex justify-center gap-4 m-4">
            {categories.map((category, i) => {
              return (
                <a
                  key={category}
                  href={`products?query=${category}`}
                  className="flex items-center justify-center rounded-full min-w-32 p-2 bg-gray-800 text-slate-50 border border-transparent transition-transform duration-700 ease-in-out transform hover:bg-slate-50 hover:text-gray-800 hover:border-black hover:-translate-y-1"
                >
                  <p className="text-lg font-semibold">{category}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
