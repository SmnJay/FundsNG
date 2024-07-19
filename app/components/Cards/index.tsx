import React from 'react';

type ICards = {
    bgColor?: string
    titleColor?: string
    icon?: React.ReactElement
    amount?: string
    amountColor?: string
    title: string

}

const Cards: React.FC<ICards> = ({ icon, bgColor, amountColor, amount, title, titleColor }) => {
    return (
        <div className={`rounded-md p-4 md:p-6 flex items-center justify-between gap-2 ${bgColor ? bgColor : 'bg-primary'}`}>
            <div className="font-bvp space-y-4">
                <h5 className={`text-sm font-medium ${titleColor ? titleColor : 'text-secondary'}`}>{title}</h5>
                {amount && <p className={`font-medium text-xl md:text-2xl ${amountColor ? amountColor : 'text-white'}`}>&#8358;{Number(amount).toLocaleString()}</p>}
            </div>
            <div className="">
                {icon}
            </div>
        </div>
    )
}

export default Cards