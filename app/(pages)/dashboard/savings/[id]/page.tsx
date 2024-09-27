'use client';

import { PaymentActivities } from '@/app/components/Activity';
import Breadcrumb from '@/app/components/Breadcrumb';
import ProgressBar from '@/app/components/ProgressBar';
import SavingsMember from '@/app/components/Savings/SavingsMember';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { GoPlus } from 'react-icons/go';
import { MdCancel } from 'react-icons/md';

const SingleSavingsDetails = () => {
    const items = [
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'Savings', path: '/dashboard/savings' },
        { label: 'Single' },
    ];
    const params = useParams();

    const data = [
        { id: 1, savings: 12500 },
        { id: 2, savings: 0 },
        { id: 3, savings: 35 },
    ];

    const calculateProgress = (val: number | undefined): number => {
        const total = 15000;
        if (!val) {
            return 0
        };
        return Number(((val / total) * 100).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }))
    }

    let pageData = data.find((elem) => elem.id === +params.id);

    return (
        <>
            <Breadcrumb items={items} />

            <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0 md:gap-4  mt-4">
                <div className="col-span-2 bg-single-savings bg-center bg-cover bg-no-repeat px-6 md:px-12 py-4 rounded-lg">
                    <div className="flex flex-col sitems-center justify-center bg-white p-4 rounded-md">
                        <Link href='/dashboard/create' className="flex items-center justify-between">
                            <h3 className="text-[#323232] font-medium text-base">Savings Title</h3>
                            <AiFillEdit className='rounded-md bg-appGrey p-2 h-9 w-9 text-primary-30' />
                        </Link>
                        <span className="font-bvp text-[#888F87] text-xs pt-4 ">Balance</span>
                        <h4 className="text-primary font-bvps font-semibold font-bvp text-lg md:text-xl pb-3">&#8358;{pageData?.savings.toLocaleString()}</h4>
                        <ProgressBar value={calculateProgress(pageData?.savings)} showPercentage />
                        <div className='mt-4 flex justify-between gap-1'>
                            <div className=''>
                                <span className='flex leading-1 items-center text-xs md:text-sm font-bvp text-[#B9BFBF]'>
                                    Start:
                                </span>
                                <span className="text-xs md:text-sm text-[#626262] font-bvp">Sept 20, 2024</span>
                            </div>
                            <div className=''>
                                <span className='flex leading-1 items-center text-xs md:text-sm font-bvp text-[#B9BFBF]'>
                                    Ends:
                                </span>
                                <span className="text-xs md:text-sm text-red-600 font-bvp">Sept 20, 2024</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <button type="button" className='p-2 border bg-gray-100 hover:bg-white ease-out duration-200 rounded-md text-center font-medium text-sm text-gray-500'>Withdraw</button>
                        <button type="button" className='p-2 border border-teal-800 bg-teal-800/15 hover:bg-teal-800/50 ease-out duration-200 rounded-md text-center font-medium text-sm text-teal-800'>End Savings</button>
                    </div>
                    <div className="bg-white rounded-md py-6 px-4 space-y-4">
                        <div className="flex items-center gap-2">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3.33325" y="3.33301" width="33.3333" height="33.3333" rx="4" stroke="#2d7381" strokeWidth="1.5" />
                                <circle cx="6.66667" cy="6.66667" r="6.66667" transform="matrix(1 0 0 -1 13.3333 26.667)" stroke="#2d7381" strokeWidth="1.5" />
                                <path d="M20 13.3333V10" stroke="#2d7381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 30.0003V26.667" stroke="#2d7381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M25.9968 15.8337L28.8835 14.167" stroke="#2d7381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.1164 25.8337L14.0032 24.167" stroke="#2d7381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M25.9968 24.1663L28.8835 25.833" stroke="#2d7381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.1164 14.1663L14.0032 15.833" stroke="#2d7381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <div className=''>
                                <span className="block text-sm text-[#979FA0]">Target Amount</span>
                                <span className="block text-sm font-medium text-[#6B7172]">500,000</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3.33325" y="3.33301" width="33.3333" height="33.3333" rx="4" stroke="#2d7381" strokeWidth="1.5" />
                                <circle cx="6.66667" cy="6.66667" r="6.66667" transform="matrix(1 0 0 -1 13.3333 26.667)" stroke="#2d7381" strokeWidth="1.5" />
                                <path d="M20 13.3333V10" stroke="#2d7381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 30.0003V26.667" stroke="#2d7381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M25.9968 15.8337L28.8835 14.167" stroke="#2d7381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.1164 25.8337L14.0032 24.167" stroke="#2d7381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M25.9968 24.1663L28.8835 25.833" stroke="#2d7381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.1164 14.1663L14.0032 15.833" stroke="#2d7381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="">
                                <span className="block text-sm text-[#979FA0]">Frequency</span>
                                <span className="block text-sm font-medium text-[#6B7172]">10,000 / week</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 bg-white rounded-md">
                    <div className="px-4 py-3">
                        <h3 className="font-semibold">Payment Activities</h3>
                    </div>
                    <hr />
                    <div className="px-4 py-3 space-y-2 md:space-y-4">
                        <PaymentActivities />
                        <PaymentActivities />
                        <PaymentActivities />
                        <PaymentActivities />
                        <PaymentActivities />
                    </div>
                </div>
                <div className="col-span-1 bg-white rounded-md p-4">
                    <h3 className='text-[#626262] font-medium'>Members (3)</h3>
                    <div className="flex items-center mt-3">
                        <input type="text" name='email_or_phone' id='email_or_phone' placeholder='Enter email or phone number' className="text-sm bg-[#f8f8f8] py-2 px-3 rounded-l w-full focus:border-none focus:outline-none focus:ring-none" />
                        <label htmlFor="email_or_phone" className="hidden"></label>
                        <button type='button' className="bg-primary-10 text-white p-2 rounded-r">
                            <GoPlus size={20} />
                        </button>
                    </div>

                    <p className="text-sm text-[#ACB2B3] leading-loose mt-4">Pending</p>
                    <div className="space-y-2">
                        <div className="rounded-md bg-appGrey px-3 py-1 text-primary-10 text-sm font-medium flex items-center justify-between">Akintola Yetunde <button type="button"><MdCancel color={'#FF0000'} /></button></div>
                        <div className="rounded-md bg-appGrey px-3 py-1 text-primary-10 text-sm font-medium flex items-center justify-between">Akintola Yetunde <button type="button"><MdCancel color={'#FF0000'} /></button></div>
                    </div>

                    <p className="text-sm text-[#ACB2B3] leading-loose mt-4">Members</p>
                    <div className="space-y-2">
                        <SavingsMember contribution={10000} />
                        <SavingsMember contribution={80000} />
                        <SavingsMember contribution={500} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleSavingsDetails