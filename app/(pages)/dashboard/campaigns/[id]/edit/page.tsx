import Breadcrumb from '@/app/components/Breadcrumb';
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
        </div>
    )
}

export default page