import React from 'react'
import CampaignCard from './CampaignCard'
import { BiPlus } from 'react-icons/bi'
import { IoFilterOutline } from 'react-icons/io5'
import Link from 'next/link'
import { ICampaign } from '@/app/utils/models/Model'

type CampaignDashboardProps = {
    data: ICampaign[]
}
const CampaignDashboard: React.FC<CampaignDashboardProps> = ({ data }) => {
    return (
        <div className="space-y-4 mt-6">
            <div className="bg-white text-[#5f655e] flex items-center justify-between text-sm font-semibold rounded-lg p-3">
                <span className="">Your Campaigns ({data.length})</span>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 rounded-lg md:leading-4 border-2 px-2 py-2 font-medium">
                        <IoFilterOutline />
                        <span className="max-md:hidden">Filter</span>
                    </button>
                    <Link href={'/dashboard/campaigns/create'} className="flex items-center gap-1 rounded-lg md:leading-4 border-2 border-leafGreen-20 text-white bg-leafGreen-20 px-2 py-2 font-medium">
                        <BiPlus color='white' />
                        <span className="max-md:hidden">Create Campaign</span>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    data?.map((campaign) => {
                        return (
                            <CampaignCard
                                key={campaign.id}
                                status='active'
                                link={`/dashboard/campaigns/${campaign.campaignCategoryId}`}
                                title={campaign.name}
                                dateCreated={campaign.endDate.slice(0, 10)}
                                imageSrc='/images/underbridge.png'
                            />

                        )
                    })
                }

            </div >
        </div >
    )
}

export default CampaignDashboard