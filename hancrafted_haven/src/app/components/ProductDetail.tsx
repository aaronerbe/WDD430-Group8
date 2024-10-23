'use client'
import { Product, Image_, User, Review_ } from '@/app/types/productTypes';
import ImageCarousel from '@/app/components/ImageCarousel';
import Review from '@/app/components/Review';
import { StarAvg } from '@/app/components/StarRating';
import AddReviewForm from '@/app/components/ReviewForm';
import Products from '@/app/components/ProductCard'
//import Image from 'next/image';
import { useState } from 'react';

const ProductDetail = ({
    product,
    images,
    user,
    reviews,
    products
}: {
    product: Product; 
    images: Image_[]; 
    user: User; 
    reviews: Review_[];
    products: Product[];  //null incase there are no other products
}) => { 
    const [isFormOpen, setIsFormOpen] = useState(false);
    //useState to track if 'products' exist or not
    //const [isProducts, setIsProducts] = useState(false);
    ////if Product updates, recheck if products has content
    //useEffect(() =>{
    //    if (products){
    //        setIsProducts(true);
    //    }
    //},[product])

    const authenticatedUserId: number = 15 //todo hardcoded right now.  Need this to pass in auth user for addReview
    //todo  will also use this to hide or show the Add Review button.

    //Had to do this since this is a client side and cannot access the env variables to be able to write to the db.  Calls an api instead which handles it for us.
    //TODO need to work out a way to prevent a user from submitting multiple reviews for a product.  if it has one, hide the 'add review' button.  could instead to 'edit review'??
    const handleAddReview = async (rating: number, comment: string) => {
        try {
            const response = await fetch('/api/addReview', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: product.id,
                    userId: authenticatedUserId,
                    rating,
                    comment,
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to add review');
            }    
            setIsFormOpen(false);
        } catch (error) {
            console.error('Failed to add review:', error);
        }
    };

    const handleCancel = () => {
        setIsFormOpen(false); // Close the form
    };

    //alert(user.id)

    return (
        <div className="relative">
            {/* Overlay to dim when review form is up*/}
            {isFormOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-10" />
            )}

            <div className="container lg:max-w-[80%] md:max-w-[80%] sm:max-w-[80%] mx-auto p-4 relative">

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
                        <p className="text-3xl font-semibold  mb-8">{user.name}</p>
                        <div>
                            <p className="mb-8">{product.description}</p>
                        </div>
                        <div className="flex items-center">
                            <StarAvg reviews={reviews} />
                            {/*<span className="text-yellow-400">★★★★★</span>
                            <span className="ml-2 ">(123)</span>*/}
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="mb-20 mt-20">
                    <div className="relative">
                        <div 
                            className="addReviewButton absolute right-0 top-0 py-0 transition-opacity duration-150 ease-in-out" 
                            style={{
                                opacity: isFormOpen ? 0 : 1, 
                                pointerEvents: isFormOpen ? 'none' : 'auto' 
                            }}>
                            <button
                                onClick={() => setIsFormOpen(true)}
                                className="flex flex-col items-center border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition duration-150 ease-in-out z-index-0"
                            >
                                <span className="-700 text-4xl">+</span>
                                <span className="-700">Add Review</span>
                            </button>
                        </div>
                        <div className="reviewFormContainer absolute z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0" 
                            style={{
                                opacity: isFormOpen ? 1 : 0, 
                                pointerEvents: isFormOpen ? 'auto' : 'none'
                            }}>
                            {isFormOpen && (<AddReviewForm onSubmit={handleAddReview} onCancel={handleCancel} />)}
                        </div>

                        <Review reviews={reviews} />

                    </div>



                </div>


                {/* useState to decide if I call the OtherProducts component or not */}
                {/* Other Products Section */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">Other Products By Creator</h3>
                    <Products products={products} />
                    {/*<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                    </div>*/}
                </div>
            </div>
        </div>
    );

        
}

export default ProductDetail;
