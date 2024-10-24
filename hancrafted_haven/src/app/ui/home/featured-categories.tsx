import clsx from "clsx";
import { fetchFeaturedCategories } from "@/app/lib/data";
import { merriweather } from "@/app/ui/fonts";

export default async function FeaturedCategories() {
  const featuredCategories = await fetchFeaturedCategories();

  const colorCombos = [
    ["#E3F2FD", "#1E3A8A"], // Soft Blue & Dark Blue
    ["#FFDAB9", "#333333"], // Peach & Charcoal
    ["#A7F3D0", "#2D3748"], // Mint Green & Dark Gray
    ["#FFF9C4", "#4A5568"], // Soft Yellow & Slate Gray
    ["#E9D8FD", "#4C1D95"], // Lavender & Deep Purple
    ["#FF6B6B", "#2C3E50"], // Light Coral & Dark Teal
    ["#87CEEB", "#2C3E50"], // Sky Blue & Navy Blue
    ["#F5F5F5", "#2F855A"], // Light Gray & Deep Green
    ["#FFF7E6", "#800000"], // Cream & Burgundy
    ["#F8D7DA", "#C53030"], // Pale Pink & Dark Rose
    ["#E6FFFA", "#2D3748"], // Light Teal & Dark Charcoal
    ["#F3E5AB", "#1A202C"], // Light Gold & Black
    ["#F8F8F0", "#2F4B37"], // Ivory & Forest Green
    ["#B2F5EA", "#008B8B"], // Light Mint & Dark Cyan
    ["#F5F0E1", "#6B4C3B"], // Warm Beige & Soft Brown
    ["#D1C4E9", "#4A4A4A"], // Pale Lavender & Charcoal Gray
    ["#FADADD", "#6C757D"], // Soft Rose & Ash Gray
    ["#B3E5FC", "#2B2D42"], // Light Blue & Dark Slate
    ["#D8CAB8", "#5D3E6D"], // Warm Taupe & Deep Plum
    ["#FFDDEE", "#2C3E50"], // Blush Pink & Midnight Blue
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-8">
        <div className="w-1/4 h-[1px] bg-black"></div>
        <h1
          className={`${merriweather.className} text-zinc-950 text-2xl font-bold px-8`}
        >
          Shop by Category
        </h1>
        <div className="w-1/4 h-[1px] bg-black"></div>
      </div>
      <div className="flex flex-col w-full m-0">
        <div className="overflow-x-auto">
          <div className="flex justify-center gap-8 mx-8">
            {featuredCategories.rows.map((category, i) => {
              const [bgColor, textColor] = colorCombos[i % colorCombos.length];

              return (
                <div
                  key={category.category}
                  className={clsx(
                    "flex items-center justify-center rounded-full min-w-32",
                    {
                      [bgColor]: true,
                    }
                  )}
                  style={{ backgroundColor: bgColor }}
                >
                  <p
                    className="text-lg font-semibold"
                    style={{ color: textColor }}
                  >
                    {category.category}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
