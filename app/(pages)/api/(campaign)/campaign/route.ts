import getJwt from "@/app/utils/helper/getJwt";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const { jwt } = await getJwt(req);
    const headers = {
        Authorization: `Bearer ${jwt}`,
        ApiKey: process.env.APIKEY
    };

    const page = req.nextUrl.searchParams.get("page");

    let queryString = page && page !== "null" ? `?page=${page}` : '';

    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/Campaign${queryString}`, { headers });

        return NextResponse.json(response.data, { status: 200 })
    } catch (error: any) {
        const err = error.response.data.message;

        return NextResponse.json(err, { status: error.response.status })
    }
}