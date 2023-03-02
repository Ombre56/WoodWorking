import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from 'bcryptjs';
import { MongoClient } from 'mongodb';

export default NextAuth({
    providers: [
    CredentialsProvider({
          id: "username-login",
          name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
          const client = await MongoClient.connect(process.env.MONGODB_URI,
            { useNewUrlParser: true, useUnifiedTopology: true }
          );
          const users = await client.db().collection('users');
          const result = await users.findOne({
            email: credentials.email,
          });
          if (!result) {
            client.close();
            throw new Error('Nie znaleziono użytkownika z tym adresem email');
          }
          const checkPassword = await compare(credentials.password, result.password);
          if (!checkPassword) {
            client.close();
            throw new Error('Hasło się nie zgadza!');
          }
          client.close();
          if (checkPassword) {
            console.log("WORKING");
            return {
              name: result.name,
              email: result.email,
            };
          }
          console.log("Not WORKING");
          return null;
        }
      }),
  ],
  secret: 'test',
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  callbacks: {
    async session({ session, token, user }) {
      session.accessToken = token.accessToken
      session.user.id = token.id
      
      return session
    },
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        return false
      }
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/sklep")) return `${baseUrl}${url}`
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token
        token.id = user.id
      }
      return token
    }
  },
  pages: {
    signIn: '/sklep/login'
  }
});