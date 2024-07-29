import Breadcrumb from '@/app/components/Breadcrumb'
import WalletWrapper from '@/app/components/Wallet/WalletWrapper'
import React from 'react'

const page = () => {
    const items = [
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'Wallet' }
    ]
    return (
        <>
            <Breadcrumb items={items} />
            <WalletWrapper />
        </>
    )
}

export default page