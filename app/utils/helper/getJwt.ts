import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

const getJwt = async (req: NextRequest) => {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req, secret });

    return {
        jwt: token?.accessToken,
        id: token?.user.userId
    }
}

export default getJwt;