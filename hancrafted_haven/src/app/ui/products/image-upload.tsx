"use client";

import { useState } from "react";

interface ImageUploadProps {
  onImageChange: (file: File | null) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageChange }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        onImageChange(file);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      onImageChange(null);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mt-2"
        required
      />
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          className="mt-2 max-w-full h-auto"
        />
      )}
    </div>
  );
};

export default ImageUpload;
