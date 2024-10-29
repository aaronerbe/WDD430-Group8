// import type { NextAuthConfig } from 'next-auth';

// export const authConfig: NextAuthConfig = {
// pages: {
//     signIn: '/login', // Optional: Redirect to your login page
//     //signOut: '/logout', // Optional: Define a logout route
// },
// session: {
//     strategy: 'jwt', // Store session data in a JWT (for stateless authentication)
//     maxAge: 30 * 24 * 60 * 60, // 30 days
// },
// callbacks: {
//     async session({ session, token }) {
//         if (token?.sub) {
//             session.user.id = token.sub; // Now TypeScript is happy
//         }
//         return session;
//     },
//     async jwt({ token, user }) {
//         if (user) {
//             token.sub = user.id;
//         }
//         return token;
//     },
//     //authorized({ auth, request: { nextUrl } }) {
//     //    const isLoggedIn = !!auth?.user;
//     //    const creatorId = auth?.user?.id
//     //    if (isLoggedIn) {
//     //        return Response.redirect(new URL(`/creator/${creatorId}`, nextUrl));
//     //    }else{
//     //        return Response.redirect(new URL('/'))
//     //    }
//     //},
// },
// providers: [],
// };

import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      // Check if the user is on the root page
      if (nextUrl.pathname === "/") {
        return true; // Allow access to the root page for everyone
      }

      // Redirect to login if trying to access root without being logged in
      if (!isLoggedIn) {
        return false; // Redirect unauthenticated users to login page
      }

      // Redirect authenticated users to home page from other paths
      return Response.redirect(new URL("/", nextUrl));
    },
  },
} satisfies NextAuthConfig;
