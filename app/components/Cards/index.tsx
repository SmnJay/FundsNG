import React from 'react';

type ICards = {
    bgColor?: string
    titleColor?: string
    icon?: React.ReactElement
    amount?: string
    title: string

}

const Cards: React.FC<ICards> = ({ icon, bgColor, amount, title, titleColor }) => {
    return (
        <div className={`rounded-lg md:rounded-xl p-4 md:p-6 flex items-center justify-between gap-2 ${bgColor ? bgColor : 'bg-primary'}`}>
            <div className="font-bvp space-y-4">
                <h5 className={`text-sm md:text-base font-medium ${titleColor ? titleColor : 'text-secondary'}`}>{title}</h5>
                {amount && <p className="text-xl md:text-3xl text-white">&#8358;{Number(amount).toLocaleString()}</p>}
            </div>
            <div className="">
                {icon}
            </div>
        </div>
    )
}

export default Cards