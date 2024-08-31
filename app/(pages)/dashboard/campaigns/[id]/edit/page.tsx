import { authOptions } from '@/app/(pages)/api/auth/[...nextauth]/options';
import Breadcrumb from '@/app/components/Breadcrumb';
import EditCampaign from '@/app/components/Campaigns/EditCampaign';
import React from 'react'

const page = () => {
    const breadcrumbItems = [
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'Campaigns', path: '/dashboard/campaigns' },
        { label: 'Edit Campaign' }
    ];

    return (
        <div>
            <Breadcrumb items={breadcrumbItems} />
            <EditCampaign />
        </div>
    )
}

export default page