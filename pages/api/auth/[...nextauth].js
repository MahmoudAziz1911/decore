import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"
import ConnectToDB from "@/utils/connectDB";
import User from "@/models/User";
import { verifyPassword } from "@/utils/hash";
import clientPromise from "../../../lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export default NextAuth({
  //adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials, req) {
        ConnectToDB();
        try {
          const { email, password } = credentials;
        const user = await User.findOne({ email });
        if (!user)  throw new Error("this user does not exist")
        
        if (!email && !password) throw new Error("Please add all fields...")
        const isMatch = await verifyPassword(password, user.password);
        if (!isMatch)  throw new Error("Incorrect Password !")
        return user;

        } catch (error) {
           throw new Error(error.message)
        }
      }
    }),
  ],
  jwt: {
    encryption: true
  },
  secret: process.env.NEXTAUTH_SECRET,
})

const signInUser = async ({ password, user }) => {
  if (!password) {
      throw new Error("Please Enter Password")
  } else {
      const isMatch = await verifyPassword(password, user.password);
      if (!isMatch) {
          throw new Error("Password Not Correct")
      }
  }
  return user;
} 