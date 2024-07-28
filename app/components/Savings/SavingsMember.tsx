import React from 'react'
import { MemberAvatar } from '../UserProfilePicture'

const SavingsMember = () => {
    return (
        <div className="bg-[#F8F8F8] py-3 px-6 rounded flex items-center gap-8">
            <MemberAvatar />
            <div className="">
                <h4 className="text-primary-10 font-medium text-[15px]">Akintola Yetunde</h4>
                <h5 className="text-gray-400 text-[12px]">akintolayetunde@gmail.com</h5>
                <h5 className="text-gray-400 text-[12px]">08123442658</h5>
            </div>
        </div>
    )
}

export default SavingsMember