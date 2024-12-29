import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { client } from "./sanity/lib/client"
import { AUTHOR_BY_GOOGLE_EMAIL_QUERY } from "./sanity/lib/queries"
import { writeClient } from "./sanity/lib/write-client"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {

      const existingUser = await client.fetch(AUTHOR_BY_GOOGLE_EMAIL_QUERY, { 
        email: user?.email, 
      });

      if(!existingUser) {
        await writeClient.create({
          _type: 'author',
          name: user?.name,
          email: user?.email,
          image: user?.image,
        });
      }

      return true;
    },
    async jwt({ token, account, profile }) {
      if(account && profile) {

        const user = await client.fetch(AUTHOR_BY_GOOGLE_EMAIL_QUERY, { 
          email: profile?.email, 
        });
        
        token.id = user?._id;
      }

      return token;
    },
    async session({session, token}) {
      Object.assign(session, { id: token.id });
      return session;
    }
  }
})