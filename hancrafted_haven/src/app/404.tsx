import Image from "next/image";

export default function NotFound() {
  const defaultImageUrl = "/product-images/default_image.jpg";
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
      <p className="mb-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <div className="flex justify-center mb-4">
        <Image
          src={defaultImageUrl}
          alt={`A sad, lost bunny`}
          width={500}
          height={500}
          priority
        />
      </div>
      <button
        className={`mt-8 px-4 py-2 text-white bg-blue-700 transition-transform rounded hover:bg-blue-500`}
      >
        <a href="/">Return to Home</a>
      </button>
    </div>
  );
}