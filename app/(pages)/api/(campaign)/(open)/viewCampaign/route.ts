import getJwt from "@/app/utils/helper/getJwt";
import getUrlLastSegment from "@/app/utils/helper/getUrlLastSegment";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const { jwt } = await getJwt(req);
    const headers = {
        // Authorization: `Bearer ${jwt}`,
        ApiKey: process.env.APIKEY
    };
    let id = getUrlLastSegment(req.url);

    try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/Open/CampaignByUrl/${id}`
        console.log(url);
        const response = await axios.get(url, { headers });

        return NextResponse.json(response.data.data, { status: 200 })
    } catch (error: any) {
        const err = error.response.data.message;

        return NextResponse.json(err, { status: error.response.status })
    }
}