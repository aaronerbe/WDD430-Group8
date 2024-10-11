//import ImageCarousel from './ImageCarousel';
//import Rating from './Rating';
//import ReviewSection from './ReviewSection';
//import OtherProductsByCreator from './OtherProductsByCreator';
import { Product, Image_ } from '@/app/types/productTypes';
import Image from 'next/image';

//interface ProductDetailProps {
//    product: Product; // Specify that product should conform to the Product interface
//}



const ProductDetail = (product: Product, image: Image_[]) => { 
    //TODO  Hardcoded image[0] to grab the first from teh array.  Need to develop a way to progress through the images by incrementing this number...  A button click for right/left arrows.  
    const imageSrc = image?.[0]?.image_url || '/product-images/default_image.jpg'; 

    return (
        <div>
            <h1>{product.name}</h1> 
            {/* <ImageCarousel images={product.images} /> */}
            <h2>Product ID: {product.creator_id}</h2>
            <p>Description:  {product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Image url:  {imageSrc}</p>
            <Image 
                src={imageSrc}
                alt={product.name}
                width={500}
                height={500}
            />
            <p>Category: {product.category}</p>
    
            {/*<Rating rating={product.rating} />*/}

            <h3>Latest Reviews</h3>
            {/* <ReviewSection reviews={product.reviews}/> */}

            <h3>Other Products By Creator</h3>
            {/* <OtherProductsByCreator products={product.creator.otherProducts}/> */}
        </div>
    );
}

export default ProductDetail;
