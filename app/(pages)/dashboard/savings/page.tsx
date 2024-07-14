
import Cards from '@/app/components/Cards'
import Image from 'next/image'
import React from 'react'

const Savings = () => {
    return (
        <div>
            <h4 className="font-semibold text-primary text-sm md:text-base">Savings</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-8">
                <Cards
                    bgColor='bg-primary'
                    title={'Total Savings'}
                    amount={'12500'}
                    icon={<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3.33325" y="3.33301" width="33.3333" height="33.3333" rx="4" stroke="white" stroke-width="1.5" />
                        <circle cx="6.66667" cy="6.66667" r="6.66667" transform="matrix(1 0 0 -1 13.3333 26.667)" stroke="white" stroke-width="1.5" />
                        <path d="M20 13.3333V10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20 30.0003V26.667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M25.9968 15.8337L28.8835 14.167" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.1164 25.8337L14.0032 24.167" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M25.9968 24.1663L28.8835 25.833" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.1164 14.1663L14.0032 15.833" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>}
                />
                <Cards
                    title='Create New Target Savings'
                    icon={<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9999 13.333V26.6663M26.6666 19.9997H13.3333M19.9999 36.6663C29.2047 36.6663 36.6666 29.2044 36.6666 19.9997C36.6666 10.7949 29.2047 3.33301 19.9999 3.33301C10.7952 3.33301 3.33325 10.7949 3.33325 19.9997C3.33325 29.2044 10.7952 36.6663 19.9999 36.6663Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>}
                    bgColor='bg-leafGreen-5'
                    titleColor='text-white'
                />
            </div>

            <div className="mt-4 md:mt-8">
                <button className="text-sm md:text-base font-semibold bg-primary text-white leading-loose py-2 px-4 md:py-3 md:px-6 rounded-l-lg">Ongoing Targets</button>
                <button className="text-sm md:text-base font-semibold bg-white leading-loose py-2 px-4 md:py-3 md:px-6 rounded-r-lg">Completed Targets</button>
            </div>

            <div className="bg-white rounded-lg md:rounded-xl p-8 space-y-4 mt-4 md:mt-8">
                <div className="flex items-center justify-center">
                    <Image 
                        src={'/icons/empty-savings.png'}
                        alt='More like a bell picture'
                        width={300}
                        height={185}
                    />
                </div>
                <p className="text-center text-sm md:text-base font-bvp text-[#535758]">Looks like you do not have any ongoing target savings. <br />Try creating one to get started</p>
            </div>
        </div>
    )
}

export default Savings