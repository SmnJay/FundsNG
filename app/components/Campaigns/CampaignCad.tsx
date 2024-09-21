import Image from 'next/image'
import React from 'react'
import ProgressBar from '../ProgressBar'
import moneyFormatter from '@/app/utils/helper/moneyFormatter'
import calculateDaysLeft from '@/app/utils/helper/deadlineCalculator'
import Link from 'next/link'

type Props = {
    link: string
    imageSrc: string
    dateCreated: string
    title: string
    status: string
    description: string
    amount: number | string
}



export const campaignStatus = (status: string) => {
    switch (status.toLowerCase()) {
        case 'started':
            return <span className="inline-block h-[8px] w-[8px] bg-leafGreen-20"></span>
        case 'draft':
            return <span className="inline-block h-[8px] w-[8px] bg-primary"></span>
        case 'stopped':
            return <span className="inline-block h-[8px] w-[8px] bg-gray-500"></span>
        default:
            return status;
    }
}
const CampaignCad = (props: Props) => {

    return (
        <Link href={props.link} className='bg-white rounded-r-lg flex flex-col md:flex-row items-center gap-12 pr-6 relative'>
            <div className="w-[326px] h-[213px] spb-[153.05%] relative">
                <Image
                    className='h-full'
                    src={'/images/campaign-page-preview.png'}
                    width={326}
                    height={213}
                    alt=''
                />
                <div className="absolute bg-[#f4ffe3eb] border border-[#FC9D51] rounded-lg py-1 px-3 font-medium right-4 bottom-4 text-[11px] flex items-center gap-1">{campaignStatus(props.status)} {props.status}</div>
            </div>
            <div className="font-inter w-[60%] py-6">
                <h6 className="font-semibold md:leading-loose text-base text-[#3f4343] mb-1">{props.title}</h6>
                <p className="text-[#899192] text-sm mb-3">{props.description}</p>
                <ProgressBar value={50} />
                <div className="grid grid-cols-4 items-center gap-2 mt-4">
                    <div className="">
                        <p className="font-semibold text-xl">&#8358;{moneyFormatter(props.amount as string | number)}</p>
                        <p className="leading-loose font-light text-[#8B8B8B]">Target</p>
                    </div>
                    <div className="">
                        <p className="font-semibold text-xl">--</p>
                        <p className="leading-loose font-light text-[#8B8B8B]">Raised so far</p>
                    </div>
                    <div className="">
                        <p className="font-semibold text-xl">--</p>
                        <p className="leading-loose font-light text-[#8B8B8B]">Donors</p>
                    </div>
                    <div className="">
                        <p className="font-semibold text-xl">4</p>
                        {/* <p className="font-semibold text-xl">{calculateDaysLeft(campaignQuery?.data?.data[0]?.endDate as string).toLocaleString()}</p> */}
                        <p className="leading-loose font-light text-[#8B8B8B]">Days Left</p>
                    </div>
                </div>

                {/* <span className="text-[#899192]">has been donated so far</span> */}
            </div>
            <span className="absolute top-4 right-5 inline-block bg-red-400 rounded-full"></span>
        </Link>
    )
}

export default CampaignCad