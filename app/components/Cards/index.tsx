import React from 'react';

type ICards = {
    bgColor?: string
    titleColor?: string
    icon?: React.ReactElement
    amount?: string | React.ReactNode
    amountColor?: string
    title: string
}

const Cards: React.FC<ICards> = ({ icon, bgColor, amountColor, amount, title, titleColor }) => {
    return (
        <div className="bg-white rounded-md p-4 md:p-6 flex items-center gap-4">
            <div className={`${bgColor} rounded-full p-3`}>
                {icon}
            </div>
            <div className="">
                <h3 className='text-sm text-[#484848]'>{title}</h3>
                <span className="font-semibold text-lg md:text-xl">{amount}</span>
            </div>
        </div>
    )
}

export default Cards