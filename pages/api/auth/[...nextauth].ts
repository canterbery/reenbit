import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "Name", type: "text", placeholder: "Your name" },
      },
      async authorize(credentials, req) {
        const user = {
          id: 1,
          name: credentials?.name,
          image: "https://via.placeholder.com/50",
        };

        // If no error and we have user data, return it
        if (user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    session({ session, token, user }) {
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
});
