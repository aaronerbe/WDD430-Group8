"use client"

import { Button } from "@/app/ui/button";
import { useRouter } from "next/navigation";

const Btn = ({ authenticatedUserId }: { authenticatedUserId?: number }) => {
    const router = useRouter();

    const handleClick = async () => {
        try {
            const response = await fetch('api/updateType', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: authenticatedUserId
                })
            });

            if (!response.ok) {
                throw new Error("Failed to update user type.")
            }

        router.push(`/creator/${authenticatedUserId}`)

            
        } catch (error) {
            console.error("Failed to update user type: ", error)
        }
    }

    return (
        <Button type="button" onClick={handleClick}>
            Become a creator
        </Button>
    )
}

export default Btn;