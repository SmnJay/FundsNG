import React from 'react'

interface IProfilePictureGenerator {
    firstName: string
    lastName: string
    email: string
}

const ProfilePictureGenerator: React.FC<IProfilePictureGenerator> = ({ firstName, lastName, email }) => {
    if ((firstName || lastName)) {
        return (
            <div className="flex items-center justify-center font-bvp h-[100px] w-[100px] text-FBlack text-5xl bg-leafGreen-50 rounded-full p-2 shadow">
                <span className="">
                    {firstName?.slice(0, 1).toUpperCase()}
                </span>
                <span className="">
                    {lastName.slice(0, 1).toUpperCase()}
                </span>
            </div>
        )
    }

    if (email && (!firstName || !lastName)) {
        return (
            <div className="flex items-center justify-center font-bvp h-[100px] w-[100px] text-FBlack text-5xl bg-leafGreen-50 rounded-full p-2 shadow">
                <span className="">
                    {email?.slice(0, 2).toUpperCase()}
                </span>
            </div>
        )
    }
}



export default ProfilePictureGenerator