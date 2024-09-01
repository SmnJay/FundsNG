import Image from 'next/image'
import React from 'react'
import { ButtonLink } from '../Button/Button'

const EmptyCampaignView = () => {
    return (
        <div className='flex flex-col items-center justify-centers h-full'>
            <Image src={'/images/empty-state.gif'} alt='empty state image' width={200} height={200} unoptimized />

            <p className="text-FBlack font-medium mb-6 text-sm">Looks like you dont have any ongoing campaigns. Try creating one to get started</p>
            <ButtonLink
                href='/dashboard/campaigns/create'
                name='Create Campaign'
                ariaLabel='create a campaign'
                color='leafGreen'
            />
        </div>
    )
}

export default EmptyCampaignView