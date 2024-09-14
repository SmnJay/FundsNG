'use client';

import Link from 'next/link';
import React, { useState } from 'react'
import Cards from '../Cards';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { ButtonLink } from '../Button/Button';
import Image from 'next/image';
import ProgressBar from '../ProgressBar';
import RecentActivity from '../Activity';
import { CgChevronRight } from 'react-icons/cg';
import { IoWalletOutline } from 'react-icons/io5';
import { TfiShine } from 'react-icons/tfi';
import { useQuery } from '@tanstack/react-query';
import { dashboardApiService } from '@/app/utils/services/dashboard/dashboardApiService';
import BottomCards from './BottomCards';
import FullCard from './FullCard';
import DashboardCarousels from './DashboardCarousels';

type DashboardWrapperProps = {
    isProfileSetUp: boolean
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ isProfileSetUp }) => {
    const [isEmpty, setIsEmpty] = useState(true);

    const dashboardQuery = useQuery({
        queryKey: ['dashboard'],
        queryFn: dashboardApiService
    });

    return (
        <div>
            <DashboardCarousels />
            {
                !isProfileSetUp ? <div className="flex max-sm:flex-col sm:items-center gap-2 sm:justify-between items-start rounded-md px-4 md:px-8 py-2 bg-[#FFEDD2] lg:w-11/12 lg:mx-auto  border border-[#D16A0C] text-[#D16A0C]">
                    <p className="max-md:text-sm font-light">Before you continue, please complete your profile</p>
                    <Link href='/settings/profile' className='text-sm group flex items-center font-medium'>
                        Complete Profile <span className="group-hover:translate-x-[2px] duration-200 ease-out"><CgChevronRight /></span>
                    </Link>
                </div>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 md:mt-8 lg:w-11/12 lg:mx-auto">
                        <Cards
                            title='Total Donations made'
                            amount={dashboardQuery?.data?.donatedAmount ?? '--'}
                            icon={<FaHandHoldingHeart className='text-[#4591a1] text-2xl ' />}
                            bgColor='bg-[#E0FAFF]'
                            titleColor='text-white'
                            loading={dashboardQuery.isLoading}
                        />
                        <Cards
                            bgColor='bg-[#2acd0f10]'
                            title={'Total Savings'}
                            amount={dashboardQuery?.data?.savedAmount ?? '--'}
                            icon={<span className='border block rounded-md border-[#7fb42d]'><TfiShine className='text-2xl p-1 text-[#7fb42d]' /></span>}
                            loading={dashboardQuery.isLoading}
                        />
                        <Cards
                            titleColor='text-black'
                            bgColor='bg-[#FFB0B030]'
                            title={'Wallet Balance'}
                            amount={dashboardQuery?.data?.walletBalance ?? '--'}
                            amountColor={'text-black'}
                            icon={<IoWalletOutline className='text-2xl text-[#FF1414]' />}
                            loading={dashboardQuery.isLoading}
                        />
                    </div>
            }

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className={`${isEmpty ? 'col-span-3 lg:w-11/12 lg:mx-auto ' : 'col-span-2'} `}>
                    <div className="bg-white rounded-md">
                        <div className="border-b px-4 sm:px-8 py-2 sm:py-4 flex items-center justify-between">
                            <p className="font-medium text-sm sm:text-base text-[#899192]">Your Fundraiser</p>
                            <Link href='/dashboard/campaigns' className='flex items-center text-sm group'>View All <span className="group-hover:translate-x-[2px] duration-200 ease-out"><CgChevronRight /></span></Link>
                        </div>
                        <div className="flex items-center justify-center p-4 sm:p-8">
                            {
                                isEmpty ?
                                    <div className="grid place-items-center space-y-6">
                                        <p className="text-center max-w-[400px] mx-auto text-sm text-gray-600">You currently do not have any ongoing campaign. <br />Create one to see them here</p>
                                        <ButtonLink
                                            href='/dashboard/campaigns/create'
                                            name='Start a Campaign'
                                            ariaLabel='Start a campaign button'
                                            color='leafGreen'
                                        />
                                    </div>
                                    :
                                    <div className='flex flex-col md:flex-row items-center gap-6'>
                                        <div className="">
                                            <Image src={'/images/underbridge.png'} width={300} style={{ borderRadius: '0.5rem' }} height={350} alt='' />
                                        </div>
                                        <div className="font-inter">
                                            <h6 className="font-semibold md:leading-loose text-base text-[#3f4343] mb-1">Save the homeless people at Ikeja underbridge</h6>
                                            <p className="text-[#899192] text-sm mb-3">Please help the people living here find a new home or realive some of their suffering</p>
                                            <ProgressBar value={50} />
                                            <p className="font-medium space-x-1 leading-loose">
                                                <span className="font-semibold text-[#3f4343]">&#8358;132,000</span>
                                                <span className="text-[#899192]">has been donated so far</span>
                                            </p>
                                        </div>
                                    </div>
                            }


                        </div>
                    </div>

                    <div className="bg-white rounded-md mt-4">
                        <div className="border-b px-4 py-2 sm:py-4 flex items-center justify-between">
                            <p className="font-medium text-sm sm:text-base text-[#899192]">Popular Categories</p>
                            <Link href='' className='text-sm group flexs items-center hidden'>View All <span className="group-hover:translate-x-[2px] duration-200 ease-out"><CgChevronRight /></span></Link>
                        </div>
                        <div className="grid grid-cols-3 md:grid-cols-6 items-center gap-2 p-4">
                            <div className="rounded-lg px-10 py-5 bg-[#DEF5F5] text-center">
                                <div className='flex items-center justify-center'>
                                    <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_4713_8430)">
                                            <path d="M41.0446 11.7232H34.5725V9.56582C34.5725 7.84932 33.8906 6.20312 32.6769 4.98938C31.4631 3.77563 29.8169 3.09375 28.1004 3.09375H23.7857C22.0692 3.09375 20.423 3.77563 19.2093 4.98938C17.9955 6.20312 17.3137 7.84932 17.3137 9.56582V11.7232H10.8416C7.98181 11.7266 5.24014 12.8642 3.21797 14.8863C1.1958 16.9085 0.0582351 19.6502 0.0548096 22.51L0.0548096 39.7688C0.0582351 42.6286 1.1958 45.3703 3.21797 47.3924C5.24014 49.4146 7.98181 50.5522 10.8416 50.5556H41.0446C43.9044 50.5522 46.646 49.4146 48.6682 47.3924C50.6904 45.3703 51.8279 42.6286 51.8314 39.7688V22.51C51.8279 19.6502 50.6904 16.9085 48.6682 14.8863C46.646 12.8642 43.9044 11.7266 41.0446 11.7232ZM21.6284 9.56582C21.6284 8.99365 21.8557 8.44492 22.2602 8.04034C22.6648 7.63576 23.2136 7.40846 23.7857 7.40846H28.1004C28.6726 7.40846 29.2213 7.63576 29.6259 8.04034C30.0305 8.44492 30.2578 8.99365 30.2578 9.56582V11.7232H21.6284V9.56582ZM32.4151 33.2967H28.1004V37.6115C28.1004 38.1836 27.8731 38.7324 27.4686 39.1369C27.064 39.5415 26.5152 39.7688 25.9431 39.7688C25.3709 39.7688 24.8222 39.5415 24.4176 39.1369C24.013 38.7324 23.7857 38.1836 23.7857 37.6115V33.2967H19.471C18.8988 33.2967 18.3501 33.0694 17.9455 32.6649C17.541 32.2603 17.3137 31.7116 17.3137 31.1394C17.3137 30.5672 17.541 30.0185 17.9455 29.6139C18.3501 29.2093 18.8988 28.982 19.471 28.982H23.7857V24.6673C23.7857 24.0951 24.013 23.5464 24.4176 23.1418C24.8222 22.7373 25.3709 22.51 25.9431 22.51C26.5152 22.51 27.064 22.7373 27.4686 23.1418C27.8731 23.5464 28.1004 24.0951 28.1004 24.6673V28.982H32.4151C32.9873 28.982 33.536 29.2093 33.9406 29.6139C34.3452 30.0185 34.5725 30.5672 34.5725 31.1394C34.5725 31.7116 34.3452 32.2603 33.9406 32.6649C33.536 33.0694 32.9873 33.2967 32.4151 33.2967Z" fill="#5D94D6" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4713_8430">
                                                <rect width="51.7765" height="51.7765" fill="white" transform="translate(0.0548096 0.941406)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="text-[#5D94D6] mt-4 block text-xs sm:text-sm md:text-base max-sm:leading-loose">Medical</span>
                                <span className="text-gray-600 block text-xs max-sm:leading-loose">2K Donations</span>
                            </div>

                            <div className="rounded-lg px-10 py-5 bg-[#F9E7F3] text-center">
                                <div className='flex items-center justify-center'>
                                    <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_4713_8372)">
                                            <path d="M25.5001 29.75C23.8094 29.75 22.1879 30.4216 20.9923 31.6172C19.7968 32.8127 19.1251 34.4342 19.1251 36.125V51.0553H31.8751V36.125C31.8751 34.4342 31.2035 32.8127 30.0079 31.6172C28.8124 30.4216 27.1909 29.75 25.5001 29.75Z" fill="#AA2C43" fill-opacity="0.87" />
                                            <path d="M28.3433 1.77082C27.5628 1.06837 26.55 0.679687 25.5 0.679688C24.45 0.679688 23.4372 1.06837 22.6567 1.77082L0 22.1623V44.2623C0 46.0658 0.716426 47.7954 1.99167 49.0707C3.26692 50.3459 4.99653 51.0623 6.8 51.0623H14.875V36.1257C14.875 33.3078 15.9944 30.6053 17.987 28.6127C19.9796 26.6201 22.6821 25.5007 25.5 25.5007C28.3179 25.5007 31.0204 26.6201 33.013 28.6127C35.0056 30.6053 36.125 33.3078 36.125 36.1257V51.056H44.2C46.0035 51.056 47.7331 50.3395 49.0083 49.0643C50.2836 47.789 51 46.0594 51 44.256V22.1559L28.3433 1.77082Z" fill="#AA2C43" fill-opacity="0.87" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4713_8372">
                                                <rect width="51" height="51" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <span className="text-[#B1475B] mt-4 block text-xs sm:text-sm md:text-base max-sm:leading-loose">Housing</span>
                                <span className="text-gray-600 block text-xs max-sm:leading-loose">2K Donations</span>
                            </div>

                            <div className="rounded-lg px-10 py-5 bg-[#F4EEFB] text-center">
                                <div className='flex items-center justify-center'>
                                    <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_4713_8384)">
                                            <path d="M48.7548 23.3778H34.3877V8.50277H36.6189C38.2629 8.50424 39.8713 8.98158 41.2499 9.87715C42.6285 10.7727 43.7184 12.0482 44.3879 13.5496L48.7548 23.3778ZM51.3877 32.0095V40.3778H0.387695V14.8778C0.387695 13.187 1.05935 11.5655 2.25489 10.37C3.45043 9.17442 5.07194 8.50277 6.7627 8.50277H21.6377L23.2463 2.06402C23.3932 1.47459 23.733 0.951221 24.2116 0.5772C24.6903 0.203178 25.2802 0 25.8877 0C26.4951 0 27.0851 0.203178 27.5638 0.5772C28.0424 0.951221 28.3822 1.47459 28.5291 2.06402L30.1377 8.50277V27.6278H50.5951C51.1163 29.03 51.3847 30.5136 51.3877 32.0095ZM21.6377 23.3778H17.3877V19.1278H13.1377V23.3778H8.8877V27.6278H13.1377V31.8778H17.3877V27.6278H21.6377V23.3778ZM6.88595 44.6278C6.8081 44.9767 6.7668 45.3328 6.7627 45.6903C6.7627 47.0992 7.3224 48.4505 8.31869 49.4468C9.31498 50.4431 10.6662 51.0028 12.0752 51.0028C13.4842 51.0028 14.8354 50.4431 15.8317 49.4468C16.828 48.4505 17.3877 47.0992 17.3877 45.6903C17.3836 45.3328 17.3423 44.9767 17.2644 44.6278H6.88595ZM36.6359 44.6278C36.5581 44.9767 36.5168 45.3328 36.5127 45.6903C36.5127 47.0992 37.0724 48.4505 38.0687 49.4468C39.065 50.4431 40.4162 51.0028 41.8252 51.0028C43.2342 51.0028 44.5854 50.4431 45.5817 49.4468C46.578 48.4505 47.1377 47.0992 47.1377 45.6903C47.1336 45.3328 47.0923 44.9767 47.0144 44.6278H36.6359Z" fill="#9E55D7" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4713_8384">
                                                <rect width="51" height="51" fill="white" transform="translate(0.387695)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <span className="text-[#9E55D7] mt-4 block text-xs sm:text-sm md:text-base max-sm:leading-loose">Emergency</span>
                                <span className="text-gray-600 block text-xs max-sm:leading-loose">2K Donations</span>
                            </div>

                            <div className="rounded-lg px-10 py-5 bg-[#EDFAF6] text-center">
                                <div className='flex items-center justify-center'>
                                    <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_4713_8395)">
                                            <path d="M40.5996 8.5H38.2621C37.7689 6.10175 36.464 3.94686 34.5673 2.39853C32.6706 0.850191 30.298 0.00309086 27.8496 0L23.5996 0C21.1512 0.00309086 18.7787 0.850191 16.882 2.39853C14.9852 3.94686 13.6803 6.10175 13.1871 8.5H10.8496C8.03272 8.50337 5.33217 9.62387 3.34033 11.6157C1.34848 13.6076 0.227984 16.3081 0.224609 19.125L0.224609 25.5H51.2246V19.125C51.2212 16.3081 50.1007 13.6076 48.1089 11.6157C46.1171 9.62387 43.4165 8.50337 40.5996 8.5ZM17.6156 8.5C18.0535 7.26132 18.8635 6.18819 19.9346 5.42744C21.0058 4.66668 22.2858 4.25545 23.5996 4.25H27.8496C29.1634 4.25545 30.4434 4.66668 31.5146 5.42744C32.5857 6.18819 33.3957 7.26132 33.8336 8.5H17.6156Z" fill="#198F8F" />
                                            <path d="M27.8497 31.875C27.8497 32.4386 27.6258 32.9791 27.2273 33.3776C26.8288 33.7761 26.2883 34 25.7247 34C25.1611 34 24.6206 33.7761 24.2221 33.3776C23.8236 32.9791 23.5997 32.4386 23.5997 31.875V29.75H0.224697V40.375C0.228071 43.1919 1.34857 45.8924 3.34041 47.8843C5.33226 49.8761 8.03281 50.9966 10.8497 51H40.5997C43.4166 50.9966 46.1171 49.8761 48.109 47.8843C50.1008 45.8924 51.2213 43.1919 51.2247 40.375V29.75H27.8497V31.875Z" fill="#198F8F" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4713_8395">
                                                <rect width="51" height="51" fill="white" transform="translate(0.224609)" />
                                            </clipPath>
                                        </defs>
                                    </svg>


                                </div>
                                <span className="text-[#198F8F] mt-4 block text-xs sm:text-sm md:text-base max-sm:leading-loose">Business</span>
                                <span className="text-gray-600 block text-xs max-sm:leading-loose">2K Donations</span>
                            </div>

                            <div className="rounded-lg px-10 py-5 bg-[#FDF6E2] text-center">
                                <div className='flex items-center justify-center'>
                                    <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_4713_8407)">
                                            <path d="M23.9873 19.4799C23.9873 19.4799 13.3623 11.9637 13.3623 5.84375C13.2953 4.36522 13.8166 2.92032 14.8122 1.82517C15.8078 0.730024 17.1966 0.0737767 18.6748 0C20.153 0.0737767 21.5418 0.730024 22.5374 1.82517C23.533 2.92032 24.0543 4.36522 23.9873 5.84375C23.9203 4.36522 24.4416 2.92032 25.4372 1.82517C26.4328 0.730024 27.8216 0.0737767 29.2998 0C30.778 0.0737767 32.1668 0.730024 33.1624 1.82517C34.158 2.92032 34.6793 4.36522 34.6123 5.84375C34.6123 11.9637 23.9873 19.4799 23.9873 19.4799ZM49.8018 18.4471C48.7211 17.4611 47.2942 16.9427 45.8326 17.0052C44.371 17.0677 42.9935 17.706 42.0009 18.7808L34.4742 26.7219C34.5557 27.1695 34.6019 27.6228 34.6123 28.0776C34.6033 30.2302 33.8228 32.3081 32.4125 33.9343C31.0023 35.5606 29.0557 36.6273 26.9262 36.941L17.9141 38.2287L17.3106 34.0213L26.3248 32.725C27.4915 32.545 28.5479 31.9328 29.2841 31.01C30.0203 30.0872 30.3824 28.9212 30.2987 27.7437C30.2149 26.5661 29.6913 25.4632 28.8319 24.6538C27.9725 23.8445 26.8401 23.388 25.6597 23.375H6.9873C5.29655 23.375 3.67504 24.0466 2.4795 25.2422C1.28395 26.4377 0.612305 28.0592 0.612305 29.75L0.612305 44.625C0.612305 46.3158 1.28395 47.9373 2.4795 49.1328C3.67504 50.3284 5.29655 51 6.9873 51H27.5233L50.2056 26.2331C51.1731 25.1418 51.673 23.714 51.5974 22.2575C51.5219 20.801 50.877 19.4325 49.8018 18.4471Z" fill="#F7A145" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4713_8407">
                                                <rect width="51" height="51" fill="white" transform="translate(0.612305)" />
                                            </clipPath>
                                        </defs>
                                    </svg>


                                </div>
                                <span className="text-[#F7A145] mt-4 block text-xs sm:text-sm md:text-base max-sm:leading-loose">Charity</span>
                                <span className="text-gray-600 block text-xs max-sm:leading-loose">2K Donations</span>
                            </div>

                            <div className="rounded-lg px-10 py-5 bg-[#f2faea] text-center">
                                <div className='flex items-center justify-center'>
                                    <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_4713_8418)">
                                            <path d="M14.0162 38.2495C11.566 38.2495 9.12016 37.4994 7.05041 36.0268L2.64104 32.8903C1.68904 32.2145 1.04729 31.1648 0.881539 30.0152C0.724289 28.9335 0.996289 27.8817 1.64866 27.0487C2.74941 25.6419 4.60029 25.1043 6.25779 25.7099L13.1577 28.2429L44.2995 13.2383C46.96 12.0079 50.1157 13.1745 51.3439 15.8308C52.5722 18.4828 51.4247 21.6639 48.7875 22.924L19.1459 37.0914C17.5203 37.867 15.7693 38.2495 14.0162 38.2495ZM51.8369 48.8745C51.8369 47.6994 50.8849 46.7495 49.7119 46.7495H2.96191C1.78891 46.7495 0.836914 47.6994 0.836914 48.8745C0.836914 50.0497 1.78891 50.9995 2.96191 50.9995H49.7119C50.8849 50.9995 51.8369 50.0497 51.8369 48.8745ZM19.1417 20.6439L30.657 15.0955L18.2279 7.42003C16.6682 6.2619 14.6005 6.0494 12.8262 6.86753L11.1665 7.6474C10.1933 8.10428 9.52179 9.01378 9.36879 10.0784C9.21579 11.1452 9.60466 12.2055 10.41 12.9195L19.1395 20.646L19.1417 20.6439Z" fill="#618F19" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4713_8418">
                                                <rect width="51" height="51" fill="white" transform="translate(0.836914)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <span className="text-[#618f19] mt-4 block text-xs sm:text-sm md:text-base max-sm:leading-loose">Travel</span>
                                <span className="text-gray-600 block text-xs max-sm:leading-loose">2K Donations</span>
                            </div>

                        </div>
                    </div>
                    <FullCard />
                    <BottomCards />
                </div>
                <div className={`col-span-1 bg-white h-full rounded-md p-4 ${isEmpty && 'hidden'}`}>
                    <h6 className='font-medium mb-4 leading-loose'>Recent Activity</h6>
                    <div className="space-y-4">
                        <RecentActivity />
                        <RecentActivity type='savings' />
                        <RecentActivity />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardWrapper