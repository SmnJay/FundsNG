import PreviewCampaign from '@/app/components/Campaigns/PreviewCampaign'
import React, { Suspense } from 'react'

const page = () => {
    return (
        <Suspense>
            <PreviewCampaign />
        </Suspense>
    )
}

export default page