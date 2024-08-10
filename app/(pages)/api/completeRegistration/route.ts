import getJwt from '@/app/utils/helper/getJwt';
import axios from 'axios'
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    let { jwt } = await getJwt(req)

    try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/Auth/CompleteRegistration`

        const { data } = await axios.post(url, body, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        });

        return NextResponse.json(data, { status: 200 });
    } catch (error: any) {
        const status = error.response?.status || 500;
        const message = error.response?.data?.message || error.message || 'Internal server error';
        return NextResponse.json(error, { status: status })
    }

}