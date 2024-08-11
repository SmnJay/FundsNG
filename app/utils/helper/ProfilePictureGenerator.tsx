import React from 'react'

interface IProfilePictureGenerator {
    firstName: string
    lastName: string
    email: string
}

const ProfilePictureGenerator: React.FC<IProfilePictureGenerator> = ({ firstName, lastName, email }) => {
    if ((firstName || lastName) && !email) {
        return (
            <div className="flex items-center justify-center font-bvp h-[100px] w-[100px] text-FBlack text-5xl bg-leafGreen-50 rounded-full p-2">
                <span className="">
                    {firstName?.slice(0, 1)}
                </span>
                <span className="">
                    {lastName.slice(0, 1)}
                </span>
            </div>
        )
    }

    if (email && (!firstName || !lastName)) {
        return (
            <div className="flex items-center justify-center font-bvp h-[100px] w-[100px] text-FBlack text-5xl bg-leafGreen-50 rounded-full p-2">
                <span className="">
                    {email?.slice(0, 2)}
                </span>
            </div>
        )
    }
}



export default ProfilePictureGenerator