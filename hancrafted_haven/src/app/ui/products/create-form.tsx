"use client";

import React, { useState } from "react";
import { Button } from "@/app/ui/button";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Form = ({ authenticatedUserId }: { authenticatedUserId?: number }) => {
  const router = useRouter();

  // const [userId, setUserId] = useState<number>(0); // Assuming you have a userId to pass
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [disableSubmit, setDisableSubmit] = useState(false);

  interface Category {
    name: string;
  }

  const categories: Category[] = [
    { name: "Furniture" },
    { name: "Stationery" },
    { name: "Ceramics" },
    { name: "Kitchenware" },
    { name: "Fitness" },
    { name: "Jewelry" },
  ];

  const validateInputs = () => {
    let errorMessage = "";

    if (!name.trim()) errorMessage += "Product name is required.\n";
    if (!description.trim())
      errorMessage += "Product Description is required.\n";
    if (!category.trim()) errorMessage += "Product Category is required.\n";
    if (price <= 0) errorMessage += "Price must be a valid positive number.\n";

    if (errorMessage) {
      toast.error(`Please fix the following errors:\n\n${errorMessage}`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
        onClose: () => setDisableSubmit(false),
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateInputs()) {
      setDisableSubmit(true);
      return;
    }

    try {
      const response = await fetch("api/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: authenticatedUserId,
          name,
          description,
          price,
          category,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      const data = await response.json(); // Get the response data
      const { productId } = data; // Adjust according to your API response

      toast.success("Product successfully created!");

      router.push(`/create/${productId}`);

      setName("");
      setDescription("");
      setPrice(0);
      setCategory("");
    } catch (error) {
      console.error("Failed to create product:", error);
      toast.error("Failed to create product. Please try again.");
    } finally {
      setDisableSubmit(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded-md p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-lg">
            Product Name
          </label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
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
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/home"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit" disabled={disableSubmit}>
          Create Product
        </Button>
      </div>
    </form>
  );
};

export default Form;
