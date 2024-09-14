'use client';

import Image from 'next/image'
import React from 'react'
import { ButtonLink } from '../Button/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const DashboardCarousels = () => {
    return (
        <Swiper
            slidesPerView={1}
            effect='fade'
            spaceBetween={50}
            modules={[Pagination, EffectFade, Autoplay]}
            autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className="md:mt-8 lg:w-11/12 lg:mx-auto bg-white flex items-center gap-4 relative overflow-hidden">
                    <Image src='/images/dashboard-banner.png' alt='dashboard banner' width={365} height={332} />
                    <div className="">
                        <h2 className="font-bold text-2xl">Helping People in need around the World</h2>
                        <div className="mt-3">
                            <div className="grid grid-cols-2 mb-3">
                                <div className="">
                                    <div className="flex items-center gap-2">
                                        <span className="inline-block bg-[#E0FAFF] rounded-full h-6 w-6"></span>
                                        <span className="text-[#5C6269] font-medium">Donate</span>
                                    </div>
                                    <p className="text-xs py-2">Providing assistance in the form of money
                                        and clothing to help others</p>
                                </div>
                                <div className="">
                                    <div className="flex items-center gap-2">
                                        <span className="inline-block bg-[#F2F5A5] rounded-full h-6 w-6"></span>
                                        <span className="text-[#5C6269] font-medium">Assist</span>
                                    </div>
                                    <p className="text-xs py-2">Providing assistance in the form of money
                                        and clothing to help others</p>
                                </div>
                            </div>
                            <ButtonLink ariaLabel='create a campaign link' cls='w-1/3' href='/dashboard/campaigns/create' name='Create a Campaign' color='leafGreen' />
                        </div>
                    </div>
                    <Image src='/images/right-dashboard-ellipse.png' alt='dashboard banner' width={365} height={332} className='absolute right-0 translate-x-10' />
                    <div className="w-[150px]"></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="md:mt-8 lg:w-11/12 lg:mx-auto bg-white flex items-center gap-4 relative overflow-hidden">
                    <Image src='/images/dashboard-banner.png' alt='dashboard banner' width={365} height={332} />
                    <div className="">
                        <h2 className="font-bold text-2xl">Goal Oriented Savings</h2>
                        <div className="mt-3">
                            <div className="grid grid-cols-2 mb-3">
                                <div className="">
                                    <div className="flex items-center gap-2">
                                        <span className="inline-block bg-[#E0FAFF] rounded-full h-6 w-6"></span>
                                        <span className="text-[#5C6269] font-medium">Personal Savings</span>
                                    </div>
                                    <p className="text-xs py-2">Achieve Your Financial Goals Faster with Focused Savings Strategies. </p>
                                </div>
                                <div className="">
                                    <div className="flex items-center gap-2">
                                        <span className="inline-block bg-[#F2F5A5] rounded-full h-6 w-6"></span>
                                        <span className="text-[#5C6269] font-medium">Group Savings</span>
                                    </div>
                                    <p className="text-xs py-2">Add friends and families to your savings plan.</p>
                                </div>
                            </div>
                            <ButtonLink ariaLabel='start savings link' cls='w-1/3' href='/dashboard/savings/create' name='Start Savings' color='leafGreen' />
                        </div>
                    </div>
                    <div className="w-[150px]"></div>
                    <Image src='/images/right-dashboard-ellipse.png' alt='dashboard banner' width={365} height={332} className='absolute right-0 translate-x-10' />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default DashboardCarousels