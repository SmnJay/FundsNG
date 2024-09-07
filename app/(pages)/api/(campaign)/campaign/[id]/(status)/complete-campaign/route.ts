import getJwt from "@/app/utils/helper/getJwt";
import { getSemiUrlLastSegment } from "@/app/utils/helper/getUrlLastSegment";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, res: NextResponse) {
    const { jwt } = await getJwt(req);
    const headers = {
        Authorization: `Bearer ${jwt}`,
        ApiKey: process.env.APIKEY
    };

    let id = getSemiUrlLastSegment(req.url, 'stop-campaign');

    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/Campaign/${id}/Complete`, {}, { headers });
        return NextResponse.json(response.data, { status: 200 })
    } catch (error: any) {
        const err = error.response.data.message;

        return NextResponse.json(err, { status: error.response.status })
    }
}