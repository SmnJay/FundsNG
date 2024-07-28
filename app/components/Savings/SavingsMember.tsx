import React from 'react'
import { MemberAvatar } from '../UserProfilePicture'

type SavingsMemberProps = {
    contribution?: number
}

const SavingsMember: React.FC<SavingsMemberProps> = ({ contribution }) => {
    return (
        <div className={`bg-[#F8F8F8] py-2 px-6 rounded flex border ${contribution ? 'items-start gap-4' : 'items-center gap-8'}`}>
            <MemberAvatar />
            <div className="">
                <h4 className="text-primary-10 font-medium text-[15px]">Akintola Yetunde</h4>
                <h5 className="text-gray-400 text-[12px]">akintolayetunde@gmail.com</h5>
                <h5 className="text-gray-400 text-[12px]">08123442658</h5>
                {contribution && <h5 className="text-gray-800 text-[12px]">Contribution: {contribution.toLocaleString()}</h5>}
            </div>
        </div>
    )
}

export default SavingsMember