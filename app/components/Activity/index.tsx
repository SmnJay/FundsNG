import clsx from 'clsx'
import React, { FC } from 'react'

type RecentActivityProps = {
    type?: 'campaign' | 'savings'

}

const RecentActivity: FC<RecentActivityProps> = ({ type = 'campaign' }) => {

    return (
        <div className="flex items-start gap-2">
            <div className="">
                <span className="rounded-full flex items-center justify-center font-bold h-10 w-10 bg-zinc-300 p-2">OM</span>
            </div>
            <div className="space-y-2">
                <p className="text-[#899192] font-medium">
                    <span className={`${type === 'campaign' ? 'text-primary' : 'text-leafGreen-20'}`}>Akintola</span> donated <span className={`${type === 'campaign' ? 'text-primary' : 'text-leafGreen-20'}`}>12,500</span> to the campaign
                </p>
                <p className={`${type === 'campaign' ? 'text-primary' : 'text-leafGreen-20'} font-medium`}>Reply with special message</p>
                <p className="text-[#899192]">10:34 | 2 April, 2024</p>
            </div>
        </div>
    )
}

export const PaymentActivities = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className="flex items-center gap-2">
                <div className="">
                    <span className="rounded-full flex items-center justify-center font-semibold h-10 w-10 bg-zinc-300 p-2">AZ</span>
                </div>
                <div className="">
                    <p className="text-[#899192] max-md:text-sm">Akintola just made a contribution 🎉</p>
                    <p className="text-[#899192] text-xs md:text-sm font-light">10:34 | 2 April, 2024</p>
                </div>
            </div>
            <p className="text-primary-10 font-semibold text-sm md:text-base">&#8358;12,500</p>
        </div>
    )
}

export default RecentActivity