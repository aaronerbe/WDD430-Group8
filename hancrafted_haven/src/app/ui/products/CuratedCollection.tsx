'use client'
import {Product, Image_} from "@/app/lib/definitions";
import React, { useState } from 'react';
import { PencilIcon} from '@heroicons/react/24/outline';
import ProductCard from "../../ui/products/cards";
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const CollectionCard = ({
    collectionId,
    title,
    description,
    products,
    images,
    authenticatedUserId,
    authUser
}:{
    collectionId: number
    title: string
    description: string
    products: Product[]
    images: Image_[]
    authenticatedUserId?: number
    authUser?: boolean
}) =>{
    const [isEditingCollectionInfo, setIsEditingCollectionInfo] = useState(false);
    //const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [collectionTitle, setCollectionTitle] = useState(title)
    //const [isEditingDescription, setIsEditingDescription] = useState(false);
    const [collectionDescription, setCollectionDescription] = useState(description);    
    const [collectionProducts, setCollectionProducts] = useState(products);
    const [collectionImages, setCollectionImages] = useState(images);
    const [disableSubmit, setDisableSubmit] = useState(false)

    //! temporary till we start messing w/ changing products (maybe)
    setCollectionProducts(products)
    setCollectionImages(images)

    const validateInputs = () => {
        let errorMessage = "";
    
        if (!collectionTitle.trim()) {
            errorMessage += "Collection Title is required.\n";
        }
    
        if (!collectionDescription.trim()) {
            errorMessage += "Collection Description is required.\n";
        }
    
        if (errorMessage) {
            setDisableSubmit(true)
            toast.error(`Please fix the following errors:\n\n${errorMessage}`, {
                position: "top-right",
                autoClose: 5000, // Auto close after 5 seconds
                closeOnClick: true,
                draggable: true,
                onClose: () => setDisableSubmit(false),
            });
            return false;
        }
    
        return true;
    };

    const handleSaveCollectionInfo = async () => {
        if (!validateInputs()){
            //setDisableSubmit(true);
            return;
        }
        try {
            const response = await fetch('/api/updateCollectionInfo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: collectionId,
                    userId: authenticatedUserId,
                    title: collectionTitle,
                    description: collectionDescription,
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to update collection Info');
            }    
            setIsEditingCollectionInfo(false);
            setCollectionTitle(collectionTitle);
            setCollectionDescription(collectionDescription);
            title=collectionTitle;
            description=collectionDescription;
        } catch (error) {
            console.error('Failed to add update user name:', error);
        }
    };


    return (
        <div className="container mx-auto">
            {isEditingCollectionInfo ?(
                <div>
                    <textarea
                        className="collectionTitle border border-gray-300 p2 w-full"
                        value={collectionTitle}
                        onChange={(e) => setCollectionTitle(e.target.value)}
                    />
                    <textarea
                        className="collectionDescription border border-gray-300 p2 w-full"
                        value={collectionDescription}
                        onChange={(e) => setCollectionDescription(e.target.value)}
                    />
                    <button
                        onClick={() => handleSaveCollectionInfo()}
                        className="mt-2 bg-blue-500 text-white p-2"
                        disabled={disableSubmit}
                    >
                        Save
                    </button>
                </div>
            ) : (
                <div>
                    <div className="max-w-[80%] mb-4 text-center mx-auto">
                        <div className="flex items-center justify-center mb-2">
                            <h4 className="ml-4 text-2xl font-bold items-center relative">{collectionTitle}</h4>
                            {authUser && (
                                <PencilIcon className="ml-4 h-5 w-5 text-gray-500 cursor-pointer" 
                                    onClick={() => setIsEditingCollectionInfo(true)}
                                />
                            )}
                        </div>
                        <p className="">{collectionDescription}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
                        {collectionProducts.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            image={collectionImages[index]} // Pass the corresponding image
                            authenticatedUserId={authenticatedUserId} // Pass the authenticated user ID
                            authUser={false} // Hardcode to not allow editing these product cards
                        />
                        ))}
                    </div>   
                </div>             
            )}
        </div>
    );
}

export default CollectionCard;
