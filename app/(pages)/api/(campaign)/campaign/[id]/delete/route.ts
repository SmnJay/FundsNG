import getJwt from "@/app/utils/helper/getJwt";
import getUrlLastSegment, { getSemiUrlLastSegment } from "@/app/utils/helper/getUrlLastSegment";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, res: NextResponse) {
    const { jwt } = await getJwt(req);
    const headers = {
        Authorization: `Bearer ${jwt}`,
        ApiKey: process.env.APIKEY
    };

    let id = getSemiUrlLastSegment(req.url, 'delete');

    try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/Campaign/${id}`;
        const response = await axios.delete(url, { headers });

        return NextResponse.json(response.data.data, { status: 200 })
    } catch (error: any) {
        const err = error.response.data.message;

        return NextResponse.json(err, { status: error.response.status })
    }
}