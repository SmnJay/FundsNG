import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Phone and password",
            credentials: {
                email: { label: "Email", type: "phone" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                try {
                    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/Auth/Login`, credentials);
                    const user = response.data.data;
                    return response;
                } catch (error: any) {
                    throw new Error(
                        JSON.stringify({ error: error.response.data, status: 400 })
                    );
                    return error;
                }
            },
        }),
    ],

    pages: {
        signIn: "/signin",
    },

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.accessToken;
                token.user = {
                    username: user.username,
                    fullname: user.fullname,
                    userId: user.userId,
                    photoUrl: user.photoUrl,
                };
            }

            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken as string;
            session.user = token.user;

            return session;
        },
    },
};
