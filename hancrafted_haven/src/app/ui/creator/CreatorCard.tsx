import { User } from "@/app/lib/definitions";
import Image from 'next/image';

const CreatorCard = ({
    creatorData
}:{
    creatorData: User
}) =>{
    const creatorImg = creatorData.profile || '/default-profile-image.jpg';
    const creatorBio = creatorData.bio;
    const creatorName = creatorData.name;

    return (
        <div className="flex flex-col md:flex-row items-center gap-16 mb-12">
            <div className="flex-shrink-0">
                <Image
                    className="rounded-full object-cover"
                    src={creatorImg}
                    alt={`Image of ${creatorName}`}
                    width={400}
                    height={400}
                />
            </div>
            <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold mb-4">{creatorName}</h1>
                <h2 className="text-xl font-semibold mb-2">About Me</h2>
                <p className="text-gray-700 max-w-md">
                    {creatorBio || "This creator has not added a bio yet."}
                </p>
            </div>
        </div>
    );
}

export default CreatorCard;
