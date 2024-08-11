import Breadcrumb from '@/app/components/Breadcrumb'
import SettingsWrapper from '@/app/components/Settings/SettingsWrapper';
import React, { Suspense } from 'react'

const page = () => {
    const breadcrumbItems = [
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'Settings' }
    ];
    return (
        <div>
            <Breadcrumb items={breadcrumbItems} />
            <Suspense fallback={<span>Loading...</span>}>
                <SettingsWrapper />
            </Suspense>
        </div>
    )
}

export default page