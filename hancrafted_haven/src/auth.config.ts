import type { NextAuthConfig } from "next-auth";
import {AuthUser} from '@/app/lib/definitions'

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = {
        id: Number(token.sub as string),
        name: token.name as string,
        email: token.email as string,
        profile: (token.profile as string) || "",
        bio: (token.bio as string) || "",
        password: "",
        type: token.type as string || "creator",
      } as unknown as AuthUser; // Assert as User type
    
      return session;
    },

    ////THIS IS PREVENTING ANYONE FROM ACCESS ANY PAGES
    //authorized({ auth, request: { nextUrl } }) {
    //  const isLoggedIn = !!auth?.user;

    //  // Check if the user is on the root page
    //  if (nextUrl.pathname === "/edit-collection/") {
        
    //    return true; // Allow access to the root page for everyone
    //  }

    //  // Redirect to login if trying to access root without being logged in
    //  if (!isLoggedIn) {
    //    return false; // Redirect unauthenticated users to login page
    //  }

    //  // Redirect authenticated users to home page from other paths
    //  return Response.redirect(new URL("/", nextUrl));
    //},
  },
} satisfies NextAuthConfig;
