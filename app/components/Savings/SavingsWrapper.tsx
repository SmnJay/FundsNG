'use client';

import React, { Fragment, useState } from 'react';
import Button, { ButtonLink } from '@/app/components/Button/Button'
import Cards from '@/app/components/Cards'
import Image from 'next/image'
import Link from 'next/link'
import { IoFilterOutline } from 'react-icons/io5';
import { BiSolidCalendarEvent } from 'react-icons/bi';
import ProgressBar from '../ProgressBar';

const SavingsWrapper = () => {
    const [isEmpty, setIsEmpty] = useState(false);


    return (
        <Fragment>
            <button type="button" className='bg-primary-10 text-white px-4 py-2 mt-4 rounded text-sm' onClick={() => (setIsEmpty(!isEmpty))}>{isEmpty ? 'Show non-empty State' : 'Show Empty State'}</button>
            {
                isEmpty ?
                    <>
                        <div className="max-md:space-y-4 md:grid md:grid-rows-2 md:grid-flow-col gap-4 mt-4">
                            <div className="row-span-2 col-span-2 p-4 md:p-10 bg-no-repeat sflex items-center justify-center bg-center bg-cover bg-welcome-savings rounded-md md:rounded-lg">
                                <div className="bg-white bg-opacity-85 rounded md:rounded-md p-4 md:py-6 md:px-12 h-full flex justify-center flex-col backdrop-blur">
                                    <h2 className="text-primary-10 text-center md:text-left font-semibold text-lg md:text-xl">Welcome to target savings 😎</h2>
                                    <p className="pt-2 md:pt-4 text-center md:text-left pb-6 text-[#333333] text-xs sm:text-sm">Achieve your financial goals faster with focused savings strategies. Enjoy higher interest rates, greater financial discipline, and a clear path to your dreams.</p>
                                    <div className="">
                                        <ButtonLink color='primary' cls='w-2/3 md:ml-0 md:w-1/3 mx-auto' name='Get Started' ariaLabel='Link to start saving' href='savings/create' />
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded-md md:rounded-lg bg-cover bg-no-repeat bg-start-savings px-4 pt-4">
                                <p className="text-sm">Add friends and families to your savings plan.</p>
                                <Link href='#' className='font-medium text-leafGreen-20 group flex items-center py-2 text-sm'>
                                    <span className="">Start your first savings</span>
                                    <span className="group-hover:translate-x-2 ease-linear duration-150">👉</span>
                                </Link>
                                <div className="">
                                    <Image src='/images/savings.png' alt='' style={{ margin: '0 auto' }} width={150} height={100} />
                                </div>
                            </div>

                            <div className="relative bg-cover bg-view-savings bg-no-repeat border rounded-md md:rounded-lg pt-4 px-4 flex justify-end">
                                <p className="absolute top-0 left-0 text-sm p-4 w-2/3 font-medium">View savings progress on the go</p>
                                <div className="h-full flex items-end">
                                    <Image src='/images/savings-progress.png' alt='' width={120} height={100} />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white hidden rounded-lg md:rounded-xl p-8 space-y-4 mt-2">
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
                    </>
                    :
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-4 md:mt-8">
                            <Cards
                                bgColor='bg-primary'
                                title={'Total Savings'}
                                amount={'12500'}
                                icon={<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3.33325" y="3.33301" width="33.3333" height="33.3333" rx="4" stroke="white" strokeWidth="1.5" />
                                    <circle cx="6.66667" cy="6.66667" r="6.66667" transform="matrix(1 0 0 -1 13.3333 26.667)" stroke="white" strokeWidth="1.5" />
                                    <path d="M20 13.3333V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20 30.0003V26.667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M25.9968 15.8337L28.8835 14.167" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.1164 25.8337L14.0032 24.167" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M25.9968 24.1663L28.8835 25.833" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.1164 14.1663L14.0032 15.833" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>}
                            />
                            <Link href={'savings/create'} className='h-full'>
                                <div className={`rounded-md flex items-center gap-4 bg-white group h-full`}>
                                    <div className="">
                                        <Image src={'/images/savings.png'} alt='' width={150} height={50} />
                                    </div>
                                    <div className="font-bvps pr-2">
                                        <h5 className={`text-sm md:text-base font-medium text-primary`}>Create new target savings</h5>
                                        <span className="pt-2 block group-hover:translate-x-2 ease-linear duration-150">
                                            <svg width="50" height="16" viewBox="0 0 50 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M49.7071 8.70711C50.0976 8.31658 50.0976 7.68342 49.7071 7.29289L43.3431 0.928932C42.9526 0.538408 42.3195 0.538408 41.9289 0.928932C41.5384 1.31946 41.5384 1.95262 41.9289 2.34315L47.5858 8L41.9289 13.6569C41.5384 14.0474 41.5384 14.6805 41.9289 15.0711C42.3195 15.4616 42.9526 15.4616 43.3431 15.0711L49.7071 8.70711ZM0 9H49V7H0L0 9Z" fill="#4591A1" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className='md:mt-8 mt-4 flex items-center justify-between'>
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

                            <button className="flex items-center gap-2 bg-white rounded-lg md:leading-4 border-2 px-2 py-2 font-medium text-sm">
                                <IoFilterOutline />
                                <span className="max-md:hidden font-bvp">Filter</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                            <div className="flex flex-col sitems-center justify-center bg-white p-4 rounded-md">
                                <h3 className="text-[#323232] font-medium text-base">Savings Title</h3>
                                <h4 className="text-primary font-bvps font-semibold text-lg md:text-xl pt-4 pb-2">&#8358;12,500</h4>
                                <ProgressBar showPercentage value={90} />
                                <div className='grid grid-cols-2 gap-1 mt-2'>
                                    <div className='flex items-center text-sm gap-1 font-bvp'>
                                        <BiSolidCalendarEvent className='' />
                                        Deadline
                                    </div>
                                    <div className="text-sm text-[#626262] font-bvp">Sept 20, 2024</div>

                                </div>
                            </div>
                            <div className="flex flex-col sitems-center justify-center bg-white p-4 rounded-md">
                                <h3 className="text-[#323232] font-medium text-base">Savings Title</h3>
                                <h4 className="text-primary font-bvps font-semibold text-lg md:text-xl pt-4 pb-2">&#8358;12,500</h4>
                                <ProgressBar value={50} />
                                <div className='grid grid-cols-2 gap-1 mt-2'>
                                    <div className='flex items-center text-sm gap-1 font-bvp'>
                                        <BiSolidCalendarEvent className='' />
                                        Deadline
                                    </div>
                                    <div className="text-sm text-[#626262] font-bvp">Sept 20, 2024</div>
                                </div>
                            </div>
                            <div className="flex flex-col sitems-center justify-center bg-white p-4 rounded-md">
                                <h3 className="text-[#323232] font-medium text-base">Savings Title</h3>
                                <h4 className="text-primary font-bvps font-semibold text-lg md:text-xl pt-4 pb-3">&#8358;12,500</h4>
                                <ProgressBar value={50} />
                                <div className='grid grid-cols-2 gap-1 mt-4'>
                                    <div className='flex items-center text-sm gap-1 font-bvp'>
                                        <BiSolidCalendarEvent className='' />
                                        Deadline
                                    </div>
                                    <div className="text-sm text-[#626262] font-bvp">Sept 20, 2024</div>
                                </div>
                            </div>
                        </div>


                    </>
            }



        </Fragment>
    )
}

export default SavingsWrapper