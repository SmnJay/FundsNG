import getJwt from "@/app/utils/helper/getJwt";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const { jwt } = await getJwt(req);

    // Extract query parameters from the request URL
    const { searchParams } = new URL(req.url);
    const accountNumber = searchParams.get('accountNumber');
    const bankCode = searchParams.get('bankCode');

    const headers = {
        Authorization: `Bearer ${jwt}`,
        ApiKey: process.env.APIKEY
    };

    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/BankAccount/ResolveAccount`, {
            headers,
            params: { accountNumber, bankCode }
        });

        return NextResponse.json(response.data, { status: 200 })
    } catch (error: any) {
        const err = error.response.data.message;

        return NextResponse.json(err, { status: error.response.status })
    }
}