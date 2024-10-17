//import ImageCarousel from './ImageCarousel';
//import Rating from './Rating';
//import ReviewSection from './ReviewSection';
//import OtherProductsByCreator from './OtherProductsByCreator';
import { Product, Image_, Creator, Review_} from '@/app/types/productTypes';
import ImageCarousel from "@/app/components/ImageCarousel"
import Review from "@/app/components/Review"
import Image from 'next/image'; 

//interface ProductDetailProps {
//    product: Product; // Specify that product should conform to the Product interface
//}



const ProductDetail = (product: Product, images: Image_[], creator: Creator, reviews: Review_[]) => { 

    return (
        <div className="container max-w-[80%] md:max-w-[100%] mx-auto p-4">
            {/* Product Title Section */}
            <div className="flex flex-col md:items-center md:flex-row gap-8 md:gap-4 mb-12">
                <div>
                    <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                </div>
            </div>


            {/* Image and Details Section */}
            <div className="flex flex-col md:flex-row gap-16 mb-12">
                {/* Image Carousel */}
                <div className="flex-1">
                    <div className="relative w-full aspect-[16/9]"> {/* Set aspect ratio */}
                        <ImageCarousel images={images} />
                    </div>
                </div>
                {/* Name/Description/Stars Section */}
                <div className="flex-1">
                    <p className="text-3xl font-semibold text-white mb-8">{creator.name}</p>
                    <div>
                        <p className="text-gray-300 mb-8">{product.description}</p>
                    </div>
                    <div className="flex items-center">
                        <span className="text-yellow-400">★★★★★</span>
                        <span className="ml-2 text-white">(123)</span>
                    </div>
                </div>
            </div>


            {/* Reviews Section */}
            <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">Latest Reviews</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border p-4 rounded-md shadow-md">
                        <h4 className="font-semibold mb-2">Review title</h4>
                        <p className="text-sm text-white-600">Review body</p>
                        <div className="flex items-center mt-4">
                            <Review reviews={reviews} />
                            {/*<Image
                                src="/product-images/default_image.jpg"
                                alt="Reviewer name"
                                className="w-8 h-8 rounded-full"
                                width="500"
                                height="500"
                            />
                            <div className="ml-2">
                                <p className="text-sm font-medium">Reviewer name</p>
                                <p className="text-xs text-white-500">Date</p>
                            </div>*/}
                        </div>
                    </div>
                    {/* Repeat for additional reviews */}
                </div>
            </div>

            {/* Other Products Section */}
            <div>
                <h3 className="text-2xl font-bold mb-4">Other Products By Creator</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="border p-4 rounded-md shadow-md">
                        <Image
                            src="/product-images/default_image.jpg"
                            alt="Product Title"
                            className="w-full h-32 object-cover mb-2 rounded"
                            width="500"
                            height="500"
                        />
                        <p className="font-semibold">Title</p>
                    </div>
                    {/* Repeat for additional products */}
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
