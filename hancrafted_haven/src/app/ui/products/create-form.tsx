import { fetchFeaturedCategories } from "@/app/lib/data";
import ImageUpload from "./image-upload";
import { Button } from "@/app/ui/button";
import Link from "next/link";

export default async function Form() {
  const featuredCategories = await fetchFeaturedCategories();

  return (
    <form>
      <div className="rounded-md p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-lg">
            Product Name
          </label>
          <input
            id="name"
            name="name"
            type="string"
            placeholder="Enter product name"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="mb-2 block text-lg">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter product description"
            className="peer block w-full rounded-md border border-gray-200 py-3 pl-3 text-sm outline-2 placeholder:text-gray-500 resize-none"
            rows={3}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="mb-2 block text-lg">
            Price (USD)
          </label>
          <input
            id="amount"
            name="amount"
            type="number"
            step="0.01"
            placeholder="Enter USD amount"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="mb-2 block text-lg">
            Category
          </label>
          <select className="">
            <option value="" disabled>
              Select a category
            </option>
            {featuredCategories.rows.map((category) => (
              <option key={category.category} value={category.category}>
                {category.category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Uplaod an image</label>
          <ImageUpload />
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/home"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Product</Button>
      </div>
    </form>
  );
}