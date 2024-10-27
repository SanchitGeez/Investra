import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from 'axios'; // Import axios for making requests

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: { scope: "openid profile email" }
      }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,

  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        // Send a POST request to your backend `/login` API for Google OAuth login
        try {
          const response = await axios.post(`http://localhost:3001/login`, {
            email: profile.email,
            password: profile.sub,  // Using Google sub as a "password" for identification
            OAuth: true, // Signal that this is an OAuth login
          });

          // If the request is successful, store the user ID and other info in the token
          const { userId, username, balance, jwt } = response.data;
          token.id = userId;
          token.username = username;
          token.balance = balance;
          token.jwt = jwt; // Store JWT returned by the backend if needed
        } catch (error) {
          console.error('Error during OAuth login:', error);
        }
      }

      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.username = token.username;
      session.user.balance = token.balance;
      session.jwt = token.jwt;
      return session;
    },

    async redirect({ url, baseUrl }) {
      return '/Dash'; // Redirect to /Dash after sign-in
    },
  },
});

export { handler as GET, handler as POST };
