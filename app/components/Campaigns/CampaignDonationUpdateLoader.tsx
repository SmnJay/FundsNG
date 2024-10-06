import React from 'react'

const CampaignDonationUpdateLoader = () => {
    return (
        <div className='flex items-start justify-between gap-2'>
            <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-zinc-200 rounded-full animate-pulse"></div>
                <div className="">
                    <ul className="space-y-3">
                        <li className="font-medium text-base h-2 w-[250px] bg-zinc-200 rounded-full animate-pulse"></li>
                        <li className="font-light text-sm leading-loose h-2 w-[150px] bg-zinc-200 rounded-full animate-pulse"></li>
                    </ul>
                </div>
            </div>
            <div className="h-2 w-[50px] bg-zinc-200 rounded-md md:rounded-lg animate-pulse"></div>
        </div>
    )
}

export default CampaignDonationUpdateLoader;