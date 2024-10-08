import getJwt from "@/app/utils/helper/getJwt";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, res: NextResponse) {
    const { jwt } = await getJwt(req);
    const body = await req.json();

    const { searchParams } = new URL(req.url);
    const reference = searchParams.get('reference') || ''; // Extracted from request query
    const version = searchParams.get('version') || '1'; // Default to '1' if not provided
    const amount = searchParams.get('amount') || ''; // Extracted from request query
    const TrxnRef = searchParams.get('trxnref')

    const headers = {
        Authorization: `Bearer ${jwt}`,
        ApiKey: process.env.APIKEY,
        version: version,
        amount: amount,
        reference: reference,
        TrxnRef
    };

    try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/Paystack/${reference}/Verify`;
        const response = await axios.put(url, body, { headers });
        return NextResponse.json(response.data, { status: 200 })
    } catch (error: any) {
        const err = error.response.data.message;

        return NextResponse.json(err, { status: error.response.status })
    }
}