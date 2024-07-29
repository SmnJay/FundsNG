import React from 'react'
import { IoWalletOutline } from 'react-icons/io5'

const WalletWrapper = () => {
    return (
        <div className='mt-4'>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="bg-white flex items-start gap-3 rounded-md md:rounded-lg p-4">
                    <IoWalletOutline className='text-[40px] p-2 rounded-full bg-[#E0FAFF] text-[#4591A1]' />
                    <div className="">
                        <span className="text-[#484848] text-xs">Total Balance</span>
                        <h6 className="font-medium text-lg">&#8358;23,500</h6>
                    </div>
                </div>
                <div className="bg-white flex items-start gap-3 rounded-md md:rounded-lg p-4">
                    <IoWalletOutline className='text-[40px] p-2 rounded-full bg-[#2bcd0f21] text-[#7FB42D]' />
                    <div className="">
                        <span className="text-[#484848] text-xs">Available for withdrawal</span>
                        <h6 className="font-medium text-lg">&#8358;23,500</h6>
                    </div>
                </div>
                <div className="bg-white flex items-start gap-3 rounded-md md:rounded-lg p-4">
                    <IoWalletOutline className='text-[40px] p-2 rounded-full bg-[#ffb0b020] text-[#FF1414]' />
                    <div className="">
                        <span className="text-[#484848] text-xs">Pending Balance</span>
                        <h6 className="font-medium text-lg">&#8358;23,500</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletWrapper