import getJwt from "@/app/utils/helper/getJwt";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const { jwt } = await getJwt(req);
    const body = await req.json();

    console.log({ body, req })

    const headers = {
        Authorization: `Bearer ${jwt}`,
        ApiKey: process.env.APIKEY
    };

    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/Campaign`, body, { headers }
        );

        return NextResponse.json(response.data.message, { status: 200 });
    } catch (error: any) {
        const err = error.response.data.message;
        console.log(error, err)
        return NextResponse.json(err, { status: error.response.status });
    }
}
