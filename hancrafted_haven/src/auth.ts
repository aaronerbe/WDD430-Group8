import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User as CustomUser } from '@/app/lib/definitions'; // Custom User type
import bcrypt from 'bcryptjs';

// Transform User to match NextAuth's expectations
type NextAuthUser = Omit<CustomUser, 'id'> & { id: string };

async function getUser(email: string): Promise<CustomUser | undefined> {
    try {
        const user = await sql<CustomUser>`SELECT * FROM users WHERE email=${email}`;
        return user.rows[0];
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user) return null;

                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if (passwordsMatch) {
                        // Transform the user object to match NextAuth's expectations
                        const nextAuthUser: NextAuthUser = {
                            ...user,
                            id: String(user.id), // Ensure id is a string
                        };
                        return nextAuthUser;
                    }
                }

                console.log('Invalid credentials');
                return null;
            },
        }),
    ],
});
