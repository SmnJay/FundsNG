import React from 'react'

const ProfileLoader = () => {
    return (
        <div className="mt-4 max-w-screen-md mr-auto space-y-6 bg-white rounded-lg p-6 border">
            <div className="md:flex gap-1 items-start justify-between">
                <div className="text-sm w-full font-medium">Profile</div>
                <div className="max-md:mt-2 flex-shrink-0 md:w-[74%] grid grid-cols-2 items-center gap-2">
                    <div className="w-[8rem] h-[8rem] rounded-full animate-pulse bg-appGrey"></div>
                </div>
            </div>
            <div className="md:flex items-start justify-between">
                <span className="text-sm font-medium">Personal Details</span>
                <div className="md:w-[74%] max-md:mt-2 flex-shrink-0 grid grid-cols-2 items-center gap-2">
                    <div className="animate-pulse w-[12rem] border h-[3rem] bg-appGrey rounded-md p-2"></div>
                    <div className="animate-pulse w-[12rem] border h-[3rem] bg-appGrey rounded-md p-2"></div>
                    <div className="animate-pulse w-[12rem] border h-[3rem] bg-appGrey rounded-md p-2"></div>
                </div>
            </div>
            <div className="md:flex items-start justify-between">
                <span className="text-sm font-medium">Contact Information</span>
                <div className="md:w-[74%] max-md:mt-2 flex-shrink-0 grid grid-cols-2 items-center gap-2">
                    <div className="animate-pulse w-[12rem] border h-[3rem] bg-appGrey rounded-md p-2"></div>
                    <div className="animate-pulse w-[12rem] border h-[3rem] bg-appGrey rounded-md p-2"></div>
                </div>
            </div>
            <div className="md:flex items-start justify-between">
                <span className="text-sm font-medium">Password</span>
                <div className="md:w-[74%] max-md:mt-2 flex-shrink-0 grid grid-cols-2 items-center gap-2">
                    <div className="animate-pulse w-[12rem] border h-[3rem] bg-appGrey rounded-md p-2"></div>
                </div>
            </div>

        </div>
    )
}

export default ProfileLoader;