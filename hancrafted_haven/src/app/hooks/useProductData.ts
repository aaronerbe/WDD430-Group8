'use client'
import { useState, useEffect } from 'react';
import { Product, Image_, User, Review_ } from '@/app/types/productTypes';
//import { fetchProductData, fetchImagesData, fetchUserData, fetchReviewData, fetchOtherProductsByUser } from '@/app/lib/data';
import { fetchProductData, fetchImagesData, fetchUserData, fetchReviewData} from '@/app/lib/data';

export function useProductData(productId: number) {
    //const [state (current value of state), setState (function used to update state variable)] = useState(initialState);
    const [product, setProduct] = useState<Product | null>();
    const [images, setImages] = useState<Image_[]>([]);
    const [user, setUser] = useState<User | null>();
    const [reviews, setReviews] = useState<Review_[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>();

    //Hook to perform side effects such as data fetching, updating the DOM or subsribing to events
    //useEffect(() => {Your side effect logic here}, [dependency1, dependency2, ...]);
    //will run logic every time dependency changes
    //This will run fetchData everytime productId changes
    useEffect(() => {
        const fetchData = async () => {
            try {
                //the useState function for loading state
                setLoading(true);
                //fetch and assign product, images, reviews data based on productId
                const productData = await fetchProductData(productId);
                const imagesData = await fetchImagesData(productId);
                const reviewsData = await fetchReviewData(productId);
                //check that productData isn't empty before using it to get userData for the given product
                if (productData) {
                    const userData = await fetchUserData(productData.user_id);
                    //useState function to set the user state
                    setUser(userData);
                }
                //useState functions to assign Data to the states
                setProduct(productData);
                setImages(imagesData);
                setReviews(reviewsData);
            } catch (err) {
                setError('Failed to fetch data');
                console.error(err);
            } finally {
                //set the state showing were done fetching data
                setLoading(false);
            }
        };
        
        fetchData();
        //anytime productId changes, it will rerun the useEffect and refetch all the data
    }, [productId]);

    return { product, images, user, reviews, loading, error };
}
