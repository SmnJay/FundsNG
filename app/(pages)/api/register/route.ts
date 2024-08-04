import axios from 'axios'
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json()
    try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/Auth/Register`

        const { data } = await axios.post(url, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return NextResponse.json(data, { status: 200 });
    } catch (error: any) {
        const status = error.response?.status || 500;
        const message = error.response?.data?.message || error.message || 'Internal server error';
        return NextResponse.json(error, { status: status })
    }

}