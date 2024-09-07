'use client';

import React from 'react'
import { PiBankFill } from 'react-icons/pi';

type Props = {
    bankName: string
    accountNumber: string
    accountName: string
    isPrimary: boolean
}
const UserBank = ({ bankName, accountNumber, accountName, isPrimary }: Props) => {
    return (
        <div className='flex items-center gap-4 p-2'>
            <PiBankFill className='border rounded-full p-2' color='#4591A1' size={50} />
            <div className="">
                <h4 className="font-semibold leading-loose text-base">{bankName}</h4>
                <h4 className="text-sm text-[#899192]">{accountNumber} | {accountName}</h4>
            </div>
        </div>
    )
}

export default UserBank