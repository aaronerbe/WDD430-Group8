import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ZodError } from "zod";
import { signInSchema } from "@/app/lib/zod";
import { getUserFromDb } from "@/app/lib/data";
import type { User } from "@/app/lib/definitions"; // Import your User type
import bcrypt from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth({
providers: [
    Credentials({
    credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
    },
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment*/
    // @ts-ignore
    authorize: async (credentials) => {
        try {
        const { email, password } = await signInSchema.parseAsync(credentials);

        // Fetch user data from the database
        const userData = await getUserFromDb(email, password);

        // Check if the user exists
        if (!userData) {
            console.log("User not found.");
            return null;
        }

        // Verify password using bcrypt
        const passwordsMatch = await bcrypt.compare(password, userData.password);

        if (!passwordsMatch) {
            console.log("Invalid password.");
            return null;
        }

        // Ensure the user object matches the `User` type
        const user: User = {
            id: userData.id,
            name: userData.name,
            profile: userData.profile,
            bio: userData.bio,
            email: userData.email,
            password: userData.password,
            type: userData.type,
        };

        console.log("User authenticated:", user);
        return user; // Return the validated user object
        } catch (error) {
        if (error instanceof ZodError) {
            console.log("Invalid credentials format.");
            return null;
        }
        console.error("Error during authorization:", error);
        return null;
        }
    },
    }),
],
});
