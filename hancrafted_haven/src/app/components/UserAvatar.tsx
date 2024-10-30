import { auth } from "@/auth";
import { User } from "@/app/lib/definitions"; 
import { getUserByEmail } from "@/app/lib/data"; 
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Image from 'next/image'

export default async function UserAvatar() {
const session = await auth();

// Check if the session or user is null
if (!session || !session.user || !session.user.email) {
    console.log("No valid user session found.");
    return (
    <div className="w-10 h-10">
        <UserCircleIcon className="w-full h-full text-gray-500" />
    </div>
    );
}

try {
    // Fetch the full user data from the database
    const userData: User | null = await getUserByEmail(session.user.email);

    if (!userData) {
    console.error("User data not found.");
    return (
        <div className="w-10 h-10">
        <UserCircleIcon className="w-full h-full text-gray-500" />
        </div>
    );
    }

    return (
    <div className="w-10 h-10 text-gray-500">
        {userData.profile ? (
        <Image
            src={userData.profile}
            alt={`${userData.name}'s Avatar`}
            width={100}
            height={100}
            className="rounded-full"
        />
        ) : (
        <UserCircleIcon />
        //<UserCircleIcon className="w-10 h-10 text-gray-500" />
        )}
    </div>
    );
} catch (error) {
    console.error("Error fetching user data:", error);
    return (
    <div className="w-10 h-10">
        <UserCircleIcon className="w-full h-full text-gray-500" />
    </div>
    );
}
}
