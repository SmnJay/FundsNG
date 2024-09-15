import React from 'react'

type Props = {
    name: string
    donations: string
    icon: React.ReactNode
    textColor: string
    bgColor: string
}
const Category = ({ name, donations, icon, textColor, bgColor }: Props) => {
    return (
        <div className={`rounded-lg px-10 py-5 text-center ${bgColor && bgColor}`}>
            <div className='flex items-center justify-center'>
                {icon}
            </div>
            <span className={`${textColor && textColor} mt-4 block text-xs sm:text-sm md:text-base max-sm:leading-loose`}>{name}</span>
            <span className="text-gray-600 block text-xs max-sm:leading-loose">{donations}</span>
        </div>
    )
}

export default Category