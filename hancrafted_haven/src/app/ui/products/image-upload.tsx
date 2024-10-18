// import React, { useState, useRef } from "react";
// import Image from "next/image";

const ImageUpload: React.FC = () => {
  //   const [image, setImage] = useState<File | null>(null);
  //   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  //   const fileInputRef = useRef<HTMLInputElement>(null);

  //   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const file = event.target.files?.[0];

  //     if (file) {
  //       setImage(file);
  //       const reader = new FileReader();
  //       reader.onload = () => {
  //         setPreviewUrl(reader.result as string);
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   };

  //   const handleUpload = async () => {
  //     if (image) {
  //       const formData = new FormData();
  //       formData.append('image', image);

  //       try {
  //         const response = await fetch('/api/upload', {
  //           method: 'POST',
  //           body: formData
  //         });

  //         if (!response.ok) {
  //           throw new Error('Image upload failed');
  //         }

  //         // Handle successful upload
  //         console.log('Image uploaded successfully');
  //         setImage(null);
  //         setPreviewUrl(null);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   };

  return (
    <div>
      {/* <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      <button onClick={() => fileInputRef.current?.click()}>Choose Image</button>
      {previewUrl && (
        <Image src={previewUrl} alt="Preview" width={200} height={200} />
      )}
      <button onClick={handleUpload} disabled={!image}>
        Upload
      </button> */}
    </div>
  );
};

export default ImageUpload;
