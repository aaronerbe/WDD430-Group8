"use client";

import React, { useState } from "react";
import { Button } from "@/app/ui/button";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ productId }: { productId?: number }) => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const newFile = event.target.files[0];
      setImage(newFile);
      setImagePreview(URL.createObjectURL(newFile));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!image) return;

    // Ensure productId is defined
    if (typeof productId === "undefined") {
      toast.error("Product ID is required.");
      return;
    }

    const formData = new FormData();
    formData.append("productId", productId.toString());
    formData.append("image", image);

    try {
      const response = await fetch(`/api/uploadImage`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image.");
      }

      const result = await response.json();
      toast.success("Image uploaded successfully!");
      handleRemoveImage();
      setShowConfirmation(true);
      setImage(null);
      setImagePreview(null);
    } catch (error) {
      toast.error("Error uploading image: " + error);
    }
  };

  const handleUploadAnother = () => {
    setShowConfirmation(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h1 className="text-2xl font-bold mb-4 text-center">
        Upload Image for Product ID: {productId}
      </h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full mb-4 text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 focus:outline-none"
      />
      {imagePreview && (
        <div className="relative mb-4">
          {" "}
          {/* Changed to relative */}
          <img
            src={imagePreview}
            alt="Preview"
            className="rounded-lg shadow-lg object-cover h-32 w-full"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
            aria-label="Remove image"
          >
            &times;
          </button>
        </div>
      )}

      {/* Show the upload button only if not confirming another image */}
      {!showConfirmation && (
        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Upload Image
          </Button>
        </div>
      )}

      {/* Confirmation message with buttons displayed side by side */}
      {showConfirmation && (
        <div className="mt-4 text-center">
          <p className="mb-2">Would you like to upload another image?</p>
          <div className="flex justify-center">
            <Button
              onClick={handleUploadAnother}
              className="bg-blue-500 hover:bg-blue-600 text-white mr-2" // Add margin to separate buttons
            >
              Yes
            </Button>
            <Link
              href={`/products/${productId}`}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
            >
              No
            </Link>
          </div>
        </div>
      )}
    </form>
  );
};

export default Form;
