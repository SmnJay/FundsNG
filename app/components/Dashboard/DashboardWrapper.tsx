'use client';

import Link from 'next/link';
import React, { useState } from 'react'
import Cards from '../Cards';
import { FaBriefcaseMedical, FaHandHoldingHeart, FaHome, FaPlaneDeparture, FaWallet } from 'react-icons/fa';
import Button, { ButtonLink } from '../Button/Button';
import Image from 'next/image';
import { GrEmergency } from 'react-icons/gr';
import { MdBusinessCenter } from 'react-icons/md';
import ProgressBar from '../ProgressBar';
import RecentActivity from '../Activity';
import { CgChevronRight } from 'react-icons/cg';
import { IoWalletOutline } from 'react-icons/io5';
import { TfiShine } from 'react-icons/tfi';
import { useQuery } from '@tanstack/react-query';
import { dashboardApiService } from '@/app/utils/services/dashboard/dashboardApiService';
import BottomCards from './BottomCards';
import FullCard from './FullCard';

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

            {
                isEmpty ? <div className="lg:w-11/12 lg:mx-auto mt-4 flex items-center justify-center sm:justify-between rounded-md bg-signUp-pattern bg-leafGreen-20 text-white p-4 sm:p-8">
                    <div className='space-y-3'>
                        <h1 className="font-semibold text-xl">Welcome to FundsNg</h1>
                        <p className="font-thin max-md:text-sm">
                            Create your own unique fundraiser ad make a difference today. <br className="" />Whether it&apos;s for a personal cause, charity, or a community project.
                        </p>
                        <div className="md:grid lg:grid-cols-2 xl:grid-cols-3">
                            <ButtonLink href='/dashboard/campaigns/create' name='Start a Campaign' color='white' ariaLabel='A button to start a campaign' />
                        </div>
                    </div>

                    <div className="hidden sm:block">
                        <svg width="111" height="87" viewBox="0 0 111 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M67.6315 51.6507L63.901 47.7311C50.058 34.8175 41.01 26.1115 41.01 15.4331C41.01 6.74455 47.4056 0 55.6452 0C60.1843 0 64.7064 2.24943 67.6315 5.89525C70.5565 2.24943 75.0786 0 79.6178 0C87.8571 0 94.253 6.74455 94.253 15.4331C94.253 26.1112 85.2052 34.8175 71.3619 47.7311L67.6315 51.6507Z" fill="white" />
                            <path d="M110.015 51.0166C109.027 52.1499 107.85 53.1292 106.772 54.1604C105.474 55.4054 104.141 56.6094 102.794 57.7944C100.292 59.9978 97.7382 62.1333 95.2249 64.3228C94.73 62.9942 93.6635 61.859 92.5537 61.0823C90.8682 59.9019 88.8332 59.2956 86.7852 58.9805C88.0466 57.2508 90.1691 56.5355 91.9978 55.6819C94.1299 54.6885 95.8332 53.1243 97.6587 51.6304C99.4574 50.158 101.411 48.8264 103.742 48.6475C105.919 48.4805 108.596 49.1402 110.015 51.0166Z" fill="white" />
                            <path d="M107.308 46.3553C107.136 46.9199 106.747 47.4364 106.428 47.9146C105.816 47.7852 105.195 47.7091 104.583 47.673C102.008 47.517 99.7071 48.8167 97.7013 50.3832C95.6891 51.9537 93.8903 53.7461 91.5765 54.8256C89.4276 55.8268 87.1243 56.6653 85.7678 58.8258C85.7635 58.832 85.7602 58.8382 85.7572 58.8443C85.0839 58.7706 84.4164 58.7232 83.7658 58.6921C83.5435 58.6817 83.3214 58.6736 83.0991 58.6678C84.6187 56.9252 86.5247 55.6258 88.4282 54.3797C90.529 53.0021 92.5364 51.5773 94.4647 49.9409C96.3964 48.301 98.3712 46.5801 100.724 45.662C102.806 44.8505 105.623 44.5828 107.308 46.3553Z" fill="white" />
                            <path d="M99.6097 45.0786C97.8069 45.9239 96.1875 47.2557 94.6705 48.5312C93.6656 49.3752 92.6778 50.2392 91.6379 51.036C90.548 51.8724 89.3902 52.6111 88.2439 53.3589C85.9471 54.8557 83.6112 56.4174 81.8966 58.6561C80.2091 58.669 78.5231 58.7882 76.8386 58.9208C78.3346 57.342 80.0904 56.0629 81.8031 54.7566C83.7698 53.2584 85.5195 51.5828 87.2876 49.8379C89.0101 48.1396 90.8407 46.4975 93.064 45.5879C95.0963 44.7566 97.4565 44.5811 99.6097 45.0786Z" fill="white" />
                            <path d="M71.3807 69.7039C71.2705 69.6865 71.1671 69.6822 71.1117 69.6551C70.5098 69.597 69.9051 69.5485 69.3007 69.511L67.7885 69.4346C67.7646 69.4191 67.5703 69.4539 67.5507 69.4357C66.7336 69.4164 65.9155 69.4209 65.0997 69.4552L64.2344 69.5048C63.4806 69.5581 62.7278 69.6369 61.9798 69.7483C58.5878 70.2547 55.3632 71.3489 52.2938 72.9438C51.7641 73.22 51.2976 72.3838 51.8299 72.1076C55.2425 70.3335 58.8484 69.134 62.6381 68.6919C65.5258 68.3549 68.4354 68.4179 71.3231 68.704C71.3769 68.7064 71.4308 68.7112 71.4862 68.7195C71.9122 68.7635 72.3365 68.8117 72.7616 68.8639C75.5964 69.2141 78.4059 69.7765 81.2509 70.0417C84.1158 70.3096 87.1389 70.3788 89.8935 69.3717C92.0388 68.5877 95.1894 67.5064 94.4953 64.6116C93.8256 61.8124 90.893 61.2304 88.4971 60.5143C85.3002 59.5594 81.9519 59.5061 78.6531 59.5994C75.3769 59.6939 72.0929 59.0619 68.8157 58.9735C65.729 58.8899 62.5898 57.6047 59.8789 55.9554C59.8459 55.9423 59.8114 55.9241 59.7781 55.8997C59.7633 55.889 59.7484 55.8777 59.7334 55.867C59.7288 55.8646 59.7242 55.8622 59.7209 55.8587C59.7092 55.8528 59.7014 55.844 59.6909 55.8367C55.2268 52.5931 50.4132 48.3908 44.7389 48.204C41.7501 48.106 38.8624 48.959 35.96 49.583C34.5362 49.8895 33.0654 50.1987 31.6083 50.23C30.1594 50.2614 28.7115 50.2359 27.2625 50.2276C23.884 50.207 20.5301 50.3986 17.3423 51.6926C14.3019 52.9274 11.3924 54.5269 8.72416 56.502C6.05012 58.4819 3.76912 60.8666 1.41368 63.2355C1.26327 63.3869 1.11261 63.5383 0.960938 63.6889L13.309 83.1397C14.0445 82.5725 14.8098 82.0503 15.6096 81.5887C18.5019 79.9201 21.6192 79.141 24.915 79.1906C28.26 79.2401 31.6142 79.8689 34.8672 80.6518C38.5065 81.5289 42.102 82.5869 45.7102 83.59C49.2986 84.5861 52.9117 85.5496 56.5725 86.199C60.1175 86.8265 63.9094 87.1975 67.4531 86.3563C67.4877 86.348 67.5212 86.3442 67.5545 86.3431C70.9143 84.2226 73.7042 81.305 76.4691 78.4136C77.848 76.9717 79.2258 75.5246 80.6841 74.1725C81.8055 73.1329 82.9659 72.0433 84.2474 71.1964C80.7126 71.1905 77.1437 70.4356 73.6424 69.9496L71.3807 69.7039Z" fill="white" />
                            <path d="M77.0972 56.9951C77.1229 56.994 77.1486 56.9932 77.1743 56.9924V56.9222C77.1488 56.9469 77.1224 56.9705 77.0972 56.9951Z" fill="white" />
                        </svg>
                    </div>
                </div> : null
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