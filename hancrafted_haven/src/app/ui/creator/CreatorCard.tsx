'use client'
import { User } from "@/app/lib/definitions";
import Image from 'next/image';
import React, { useState } from 'react';
import { PencilIcon} from '@heroicons/react/24/outline';
//import { PencilIcon, PlusIcon } from '@heroicons/react/24/outline';



const CreatorCard = ({
    creatorData,
    authUser
}:{
    creatorData: User
    authUser: boolean
}) =>{
    const creatorImg = creatorData.profile || '/default-profile-image.jpg';
    const creatorBio = creatorData.bio;
    const creatorName = creatorData.name;

    const [isEditingProfilePic, setIsEditingProfilePic] = useState(false);
    const [profilePic, setProfilePic] = useState(creatorData.profile)

    const [isEditingUserName, setIsEditingUserName] = useState(false);
    const [userName, setUserName] = useState(creatorData.name)

    const [isEditingBio, setIsEditingBio] = useState(false);
    const [bioText, setBioText] = useState(creatorData.bio);

    const handleProfilePicSave = () => {
        setIsEditingProfilePic(false);
        console.log(profilePic)
        // Call an API
    };
    const handleUserNameSave = () => {
        setIsEditingUserName(false);
        console.log(userName)
        // Call an API
    };
    const handleBioSave = () => {
        setIsEditingBio(false);
        console.log(bioText)
        // Call an API
    };

    return (
        <div className="flex flex-col md:flex-row items-center gap-16 mb-12">
            <div className="flex-shrink-0">
                <div className="flex items-center space-x-2 mb-2 relative">
                    <Image
                        className="rounded-full object-cover"
                        src={creatorImg}
                        alt={`Image of ${creatorName}`}
                        width={400}
                        height={400}
                    />
                    {/* //! TODO Need to change this to be an upload feature to upload a pic and update the profile URL */}
                    {authUser && (
                            <PencilIcon className="absolute right-4 h-5 w-5 text-white cursor-pointer" 
                                onClick={() => setIsEditingProfilePic(true)}
                            />
                    )}
                    
                    {isEditingProfilePic ?(
                    <div>
                        <textarea
                            value={profilePic}
                            onChange={(e) => setProfilePic(e.target.value)}
                            className="border border-gray-300 p-2 w-full"
                        />
                        <button onClick={handleProfilePicSave} className="mt-2 bg-blue-500 text-white p-2">
                            Save
                        </button>
                    </div>
                ) : (
                    <p className="text-gray-700 max-w-md">
                    </p>
                )}
                    
                </div>
            </div>
            <div className="text-center md:text-left">

                {/* Creator Name */}
                {isEditingUserName ?(
                    <div>
                        <textarea
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="border border-gray-300 p-2 w-full"
                        />
                        <button onClick={handleUserNameSave} className="mt-2 bg-blue-500 text-white p-2">
                            Save
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center space-x-2 mb-2">
                        <h1 className="text-3xl font-bold mb-4">{creatorName}</h1>
                        {authUser && (
                            <PencilIcon className="h-5 w-5 text-gray-500 cursor-pointer" 
                                onClick={() => setIsEditingUserName(true)}
                            />
                        )}
                    </div>

                )}

                {/* About Me Bio */}
                <div className="flex items-center space-x-2 mb-2">
                    <h2 className="text-xl font-semibold">About Me</h2>
                    {authUser && (
                        <PencilIcon className="h-5 w-5 text-gray-500 cursor-pointer" 
                            onClick={() => setIsEditingBio(true)}
                        />
                    )}
                </div>
                {isEditingBio ?(
                    <div>
                        <textarea
                            value={bioText}
                            onChange={(e) => setBioText(e.target.value)}
                            className="border border-gray-300 p-2 w-full"
                        />
                        <button onClick={handleBioSave} className="mt-2 bg-blue-500 text-white p-2">
                            Save
                        </button>
                    </div>
                ) : (
                    <p className="text-gray-700 max-w-md">
                        {creatorBio || "This creator has not added a bio yet."}
                    </p>
                )}

            </div>

        </div>
    );
}

export default CreatorCard;
