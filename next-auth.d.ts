import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
    interface Session {
        accessToken: string;
        user: {
            username: string;
            fullname: string;
            userId: string;
            photoUrl: string | null;
            emailConfirmed: boolean
        } & DefaultSession["user"];
    }

    interface User extends DefaultUser {
        accessToken: string;
        username: string;
        fullname: string;
        userId: string;
        photoUrl: string | null;
        emailConfirmed: boolean
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken: string;
        user: {
            username: string;
            fullname: string;
            userId: string;
            photoUrl: string | null;
            emailConfirmed: boolean
        };
    }
}
