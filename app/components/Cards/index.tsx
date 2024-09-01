import React from 'react';
import { CardLoader } from '../Loader/Loader';

type ICards = {
    bgColor?: string
    titleColor?: string
    icon?: React.ReactElement
    amount?: string | React.ReactNode
    amountColor?: string
    title: string
    loading?: boolean
}

const Cards: React.FC<ICards> = ({ icon, bgColor, amountColor, amount, title, loading, titleColor }) => {
    return (
        <div className="bg-white rounded-md p-4 md:p-6 flex items-center gap-4">
            <div className={`${bgColor} rounded-full p-3`}>
                {icon}
            </div>
            <div className="">
                <h3 className='text-sm text-[#484848]'>{title}</h3>
                {
                    loading ?
                        <CardLoader /> :
                        <span className="font-semibold text-lg md:text-xl">{amount}</span>
                }
            </div>
        </div>
    )
}

export default Cards