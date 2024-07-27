
import Breadcrumb from '@/app/components/Breadcrumb'
import SavingsWrapper from '@/app/components/Savings/SavingsWrapper'
import React from 'react'

const Savings = () => {
    const breadcrumbItems = [
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'Savings' }
    ]
    return (
        <div>
            <Breadcrumb items={breadcrumbItems} />
            <SavingsWrapper />
        </div>
    )
}

export default Savings