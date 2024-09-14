import Image from 'next/image'
import React from 'react'

const FullCard = () => {
    return (
        <section className="bg-white rounded-lg p-8 mt-8">
            <h2 className="text-2xl font-semibold text-center text-[#323232]">
                <span className="">Fast track your</span>
                <span className="text-leafGreen-40 pl-1">fundraising</span>
                <br className="" />
                <span className="">Campaign with</span>
                <span className="text-leafGreen-40 pl-1">FundsNg</span>
            </h2>
            <p className="text-center font-normal mt-2 text-xs text-[#323232] w-1/2 mx-auto pt-2 pb-4">Harness the collective strength of our community to drive positive change where it matters most.</p>
            <div className="flex items-center justify-center gap-4 my-3">
                <button className="rounded-full px-8 hover:brightness-105 duration-150 ease-in-out py-2 text-sm bg-[#494949] text-white">Crowdfunding</button>
                <button className="rounded-full px-8 hover:brightness-105 duration-150 ease-in-out py-2 text-sm bg-[#d9d9d9] text-[#404040]">Target Savings</button>
            </div>
            <div className="grid grid-cols-6 gap-6">
                <div className="">adsfadsf</div>
                <div className="relative">
                    <Image className="" src='/images/left.png' alt='support education' width={128} height={150} />
                    <p className="absolute bottom-0 text-white p-4 text font-medium">Support <br />Linda&apos;s <br />Education</p>
                </div>
                <div className="rounded-lg text-center col-start-3 col-span-2 bg-[#E9E9E9] text-black p-4 mb-0 mt-auto h-2/3 flex flex-col items-center justify-center">
                    <h4 className="font-semibold">Join 8,000+ <br />People Donate</h4>
                </div>
                <div className="relative">
                    <Image className="" src={'/images/right.png'} alt='Feed people project' width={128} height={150} />
                    <p className="absolute font-medium bottom-0 text-white p-4">Project: Feed 5000 people Bi-monthly</p>
                </div>
                <div className="">adsfadsf</div>
            </div>
        </section>
    )
}

export default FullCard