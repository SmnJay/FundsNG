import Image from 'next/image'
import React from 'react'
import { GiCash } from "react-icons/gi";
import { GoArrowUpRight } from 'react-icons/go';
import { PiPiggyBankLight } from 'react-icons/pi'


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
            <div className="grid grid-cols-6 gap-3">
                <div className="grid grid-rows-6 gap-3">
                    <div className="row-span-4 relative">
                        <Image src={'/images/left-bg.png'} alt='background' className='w-full' width={160} height={193} />
                        <div className="absolute top-0 left-0 bottom-0 right-0 p-4 flex justify-center flex-col">
                            <span className="text-[#A7E2E8] font-bold text-2xl">78%</span>
                            <p className="font-light text-[#CAE3E4] text-xs leading-6 py-2">Campaigns reach their goals faster with FundsNg</p>
                            <button className="text-[11px] flex items-center justify-between rounded-full px-2 py-1 text-white bg-[#00C2E23D] w-full">
                                Start Campaign <GoArrowUpRight className='text-black bg-[#55C1CB] rounded-full p-1' size={25} />
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#2B2B2B] text-white rounded-xl p-4 row-span-2 flex items-center justify-center gap-2"><GiCash size={20} className='flex-shrink-0' /> FundRaiser</div>
                </div>
                <div style={{ alignContent: 'end' }} className="relative">
                    <span className="absolute bottom-0 text-white text font-medium p-4 text-lg">Support <br />Linda&apos;s <br />Education</span>
                    <Image className="w-full" src='/images/left.png' alt='support education' width={128} height={150} />
                </div>
                <div className="rounded-xl text-center col-start-3 col-span-2 bg-[#E9E9E9] text-black p-4 mb-0 mt-auto h-3/5 flex flex-col items-center justify-center space-y-3">
                    <h4 className="font-semibold text-2xl">Join 8,000+ <br />People Donate</h4>
                    <Image src='/images/avatars.png' alt='group avatars' className='scale-125' width={120} height={30} />
                </div>
                <div style={{ alignContent: 'end' }} className="relative ">
                    <span className="absolute font-medium bottom-0 text-white p-4">Project: Feed 5000 people Bi-monthly</span>
                    <Image className="w-full" src={'/images/right.png'} alt='Feed people project' width={128} height={150} />
                </div>
                <div className="grid grid-rows-6 gap-3">
                    <div className="row-span-4 relative">
                        <Image src={'/images/right-bg.png'} alt='background' className='w-full' width={160} height={193} />
                        <div className="absolute top-0 left-0 bottom-0 right-0 p-4 flex justify-center text-center flex-col">
                            <Image src='/images/right-bg-image.png' width={105} height={85} alt='image' className='text-center mx-auto mb-2'/>
                            <p className="text-white text-center font-extralight text-sm">Add Families and friends to savings</p>
                        </div>
                    </div>
                    <div className="bg-[#153207] text-[#D7F1B1] font-light rounded-xl p-4 row-span-2 flex items-center justify-center gap-2">
                        <PiPiggyBankLight size={32} className='flex-shrink-0' />
                        <span className="text-sm">
                            Savings at your own pace
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FullCard