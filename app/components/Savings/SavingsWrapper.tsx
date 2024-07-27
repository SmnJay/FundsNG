'use client';

import React, { Fragment, useState } from 'react';
import Button, { ButtonLink } from '@/app/components/Button/Button'
import Cards from '@/app/components/Cards'
import Image from 'next/image'
import Link from 'next/link'

const SavingsWrapper = () => {
    const [isEmpty, setIsEmpty] = useState(false);


    return (
        <Fragment>
            <button type="button" className='bg-primary-10 text-white px-4 py-2 mt-4 rounded text-sm' onClick={() => (setIsEmpty(!isEmpty))}>Show Empty State</button>
            {
                isEmpty ?
                    <>
                        <div className="space-y-4 md:grid md:grid-rows-2 md:grid-flow-col gap-4 mt-4">
                            <div className="row-span-2 col-span-2 p-4 md:p-10 bg-no-repeat sflex items-center justify-center bg-center bg-cover bg-welcome-savings rounded-md md:rounded-lg">
                                <div className="bg-white bg-opacity-85 rounded md:rounded-md p-4 md:py-12 md:px-12  h-full flex justify-center flex-col backdrop-blur">
                                    <h2 className="text-primary-10 text-center md:text-left font-semibold text-lg md:text-xl">Welcome to target savings 😎</h2>
                                    <p className="pt-2 md:pt-4 text-center md:text-left pb-6 text-[#333333] text-xs sm:text-sm">Achieve your financial goals faster with focused savings strategies. Enjoy higher interest rates, greater financial discipline, and a clear path to your dreams.</p>
                                    <div className="">
                                        <ButtonLink color='primary' cls='w-2/3 md:ml-0 md:w-1/3 mx-auto' name='Get Started' ariaLabel='Link to start saving' href='' />
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded bg-cover bg-no-repeat bg-start-savings px-4 pt-4">
                                <p className="text-sm">Add friends and families to your savings plan.</p>
                                <Link href='#' className='font-medium text-leafGreen-20 group flex items-center py-2 text-sm'>
                                    <span className="">Start your first savings</span>
                                    <span className="group-hover:translate-x-2 ease-linear duration-150">👉</span>
                                </Link>
                                <div className="">
                                    <Image src='/images/savings.png' alt='' style={{ margin: '0 auto' }} width={150} height={100} />
                                </div>
                            </div>

                            <div className="relative bg-cover bg-view-savings bg-no-repeat border rounded pt-4 pl-4 flex justify-end">
                                <p className="absolute top-0 left-0 text-sm p-4">View savings progress on the go</p>
                                <div className="h-full flex items-end">
                                    <Image src='/images/savings-progress.png' alt='' width={120} height={100} />
                                </div>
                            </div>
                        </div>
                    </> :
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-8">
                            <Cards
                                bgColor='bg-primary'
                                title={'Total Savings'}
                                amount={'12500'}
                                icon={<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3.33325" y="3.33301" width="33.3333" height="33.3333" rx="4" stroke="white" strokeWidth="1.5" />
                                    <circle cx="6.66667" cy="6.66667" r="6.66667" transform="matrix(1 0 0 -1 13.3333 26.667)" stroke="white" strokeWidth="1.5" />
                                    <path d="M20 13.3333V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                    <path d="M20 30.0003V26.667" stroke="white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                    <path d="M25.9968 15.8337L28.8835 14.167" stroke="white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                    <path d="M11.1164 25.8337L14.0032 24.167" stroke="white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                    <path d="M25.9968 24.1663L28.8835 25.833" stroke="white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                    <path d="M11.1164 14.1663L14.0032 15.833" stroke="white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                </svg>}
                            />
                            <Cards
                                title='Create New Target Savings'
                                icon={<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.9999 13.333V26.6663M26.6666 19.9997H13.3333M19.9999 36.6663C29.2047 36.6663 36.6666 29.2044 36.6666 19.9997C36.6666 10.7949 29.2047 3.33301 19.9999 3.33301C10.7952 3.33301 3.33325 10.7949 3.33325 19.9997C3.33325 29.2044 10.7952 36.6663 19.9999 36.6663Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
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
                    </>
            }



        </Fragment>
    )
}

export default SavingsWrapper