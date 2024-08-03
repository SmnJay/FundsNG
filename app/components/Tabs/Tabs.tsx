import React from 'react'

type Props = {
    tabNames: string[]
}

const Tabs = () => {
    return (
        <div className=" bg-white w-fit py-1 px-2 rounded-md flex items-center gap-2">
            <div className="py-2">
                <input type="radio" defaultChecked className="hidden peer/active" name='tabs' id='active' />
                <label htmlFor="active" className="ease-out duration-200 bg-transparent peer-checked/active:bg-leafGreen-50/50 rounded-md font-medium px-4 py-2 text-sm cursor-pointer peer-checked/active:text-leafGreen-5">Active <span className="max-md:hidden">Savings</span></label>
            </div>
            <div className="">
                <input type="radio" className="hidden peer/completed" name='tabs' id='completed' />
                <label htmlFor="completed" className="ease-out duration-200 bg-transparent peer-checked/completed:bg-leafGreen-50/50 rounded-md font-medium px-4 py-2 text-sm cursor-pointer peer-checked/completed:text-leafGreen-5">Completed <span className="max-md:hidden">Savings</span></label>
            </div>
        </div>
    )
}

export default Tabs