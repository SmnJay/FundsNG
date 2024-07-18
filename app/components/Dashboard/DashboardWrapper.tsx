'use client';

import Link from 'next/link';
import React, { useState } from 'react'
import Cards from '../Cards';
import { FaBriefcaseMedical, FaHandHoldingHeart, FaHome, FaPlaneDeparture, FaWallet } from 'react-icons/fa';
import Button, { ButtonLink } from '../Button/Button';
import Image from 'next/image';
import { GrEmergency } from 'react-icons/gr';
import { MdBusinessCenter } from 'react-icons/md';

const DashboardWrapper = () => {
    const [isEmpty, setIsEmpty] = useState(true);
    const handleIsEmpty = () => setIsEmpty(!isEmpty)
    return (
        <div>
            <button onClick={handleIsEmpty} className="p-2 bg-leafGreen-30 mb-4 text-white font-bvp text-sm">{isEmpty ? 'Check Not-Empty State' : 'Check empty State'}</button>

            {
                isEmpty ? <div className="flex max-sm:flex-col items-end sm:items-center justify-between rounded-md px-4 py-2 bg-[#EBF7DF]">
                    <p className="font-medium text-leafGreen-20">Before you continue, complete your profile</p>
                    <Link href='/settings/profile' className='text-sm text-leafGreen-30 font-medium bg-white rounded-lg py-2 leading-loose px-4'>
                        Complete Profile
                    </Link>
                </div>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-4 md:mt-8">

                        <Cards
                            title='Total Donations made'
                            amount={'1500387'}
                            icon={<FaHandHoldingHeart className='text-white h-10 w-10 sm:h-30 sm:w-30' />}
                            bgColor='bg-leafGreen-5'
                            titleColor='text-white'
                        />
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
                            titleColor='text-black'
                            bgColor='bg-white'
                            title={'Total Wallet Balance'}
                            amount={'28955'}
                            amountColor={'text-black'}
                            icon={<FaWallet className='text-black h-10 w-10 sm:h-30 sm:w-30' />}
                        />
                    </div>
            }
            {
                isEmpty ? <div className="mt-4 flex items-center justify-center sm:justify-between rounded-md bg-signUp-pattern bg-leafGreen-20 text-white p-4 sm:p-8">
                    <div className='space-y-3'>
                        <h1 className="font-semibold text-xl">Welcome to FundsNg</h1>
                        <p className="font-thin">
                            Create your own unique fundraiser ad make a difference tooday. <br className="" />Whether it&apos;s for a personal cause, charity, oro community project.
                        </p>
                        <Button name='Start a Campaign' color='white' ariaLabel='A button to start a campaign' />
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


            <div className="bg-white rounded-md mt-4">
                <div className="border-b px-4 sm:px-8 py-2 sm:py-4 flex items-center justify-between">
                    <p className="font-medium text-[#899192]">Your Fundraiser</p>
                    <Link href='/dashboard/campaigns' className='text-sm '>View All</Link>
                </div>
                <div className="flex items-center justify-center p-4 sm:p-8">
                    {/* <div className="grid place-items-center space-y-6">
            <p className="text-center max-w-[400px] mx-auto text-gray-600">You currently do not have any ongoing campaign. <br />Create one to see them here</p>
            <ButtonLink
              href='/dashboard/campaigns'
              name='Start a Campaign'
              ariaLabel='Start a campaign button'
              color='leafGreen'
            />
          </div> */}
                    <div className="">
                        <Image src={'/images/underbridge.png'} width={400} height={450} alt='' />
                    </div>
                    <div className="font-bvp">
                        <h6 className="">Save the homeless people at Ikeja underbridge</h6>
                        <p className="">Please help the people living here find a new home or realive some of their suffering</p>
                        <p className="font-medium">
                            <span className="font-bvp">&#8358;132,000</span>
                            <span className="text-gray-600">has been donated so far</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-md mt-4">
                <div className="border-b px-4 sm:px-8 py-2 sm:py-4 flex items-center justify-between">
                    <p className="font-medium text-[#899192]">Trending Fundraiser Categories</p>
                    <Link href='' className='text-sm '>View All</Link>
                </div>
                <div className="flex items-center justify-evenly gap-4 flex-wrap p-4 sm:p-8">
                    <div className="sm:space-y-2 text-center">
                        <span className="bg-leafGreen-50 mx-auto grid place-items-center h-14 sm:h-20 w-14 sm:w-20 rounded-full">
                            <FaBriefcaseMedical className='text-[#618F19] h-6 w-6 sm:h-10 sm:w-10' />
                        </span>
                        <span className="text-gray-600 block">Medical</span>
                    </div>
                    <div className="sm:space-y-2 text-center">
                        <span className="bg-leafGreen-50 mx-auto grid place-items-center h-14 sm:h-20 w-14 sm:w-20 rounded-full">
                            <GrEmergency className='text-[#618F19] h-6 w-6 sm:h-10 sm:w-10' />
                        </span>
                        <span className="text-gray-600 block">Emergency</span>
                    </div>
                    <div className="sm:space-y-2 text-center">
                        <span className="bg-leafGreen-50 mx-auto grid place-items-center h-14 sm:h-20 w-14 sm:w-20 rounded-full">
                            <FaHome className='text-[#618F19] h-6 w-6 sm:h-10 sm:w-10' />
                        </span>
                        <span className="text-gray-600 block">Housing</span>
                    </div>
                    <div className="sm:space-y-2 text-center">
                        <span className="bg-leafGreen-50 mx-auto grid place-items-center h-14 sm:h-20 w-14 sm:w-20 rounded-full">
                            <FaHandHoldingHeart className='text-[#618F19] h-6 w-6 sm:h-10 sm:w-10' />
                        </span>
                        <span className="text-gray-600 block">Charity</span>
                    </div>
                    <div className="sm:space-y-2 text-center">
                        <span className="bg-leafGreen-50 mx-auto grid place-items-center h-14 sm:h-20 w-14 sm:w-20 rounded-full">
                            <MdBusinessCenter className='text-[#618F19] h-6 w-6 sm:h-10 sm:w-10' />
                        </span>
                        <span className="text-gray-600 block">Business</span>
                    </div>
                    <div className="sm:space-y-2 text-center">
                        <span className="bg-leafGreen-50 mx-auto grid place-items-center h-14 sm:h-20 w-14 sm:w-20 rounded-full">
                            <FaPlaneDeparture className='text-[#618F19] h-6 w-6 sm:h-10 sm:w-10' />
                        </span>
                        <span className="text-gray-600 block">Travel</span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-md mt-4">
                <div className="border-b px-4 sm:px-8 py-2 sm:py-4 flex items-center justify-between">
                    <p className="font-medium text-[#899192]">Your Savings</p>
                    <Link href='/dashboard/savings' className='text-sm '>View All</Link>
                </div>
                <div className="flex items-center justify-center p-4 sm:p-8">
                    <div className="grid place-items-center space-y-6">
                        <p className="text-center max-w-[400px] mx-auto text-gray-600">You currently do not have any ongoing savings. <br />Create one to see them here</p>
                        <ButtonLink
                            href='/dashboard/savings'
                            name='Start Saving'
                            ariaLabel='Start Saving'
                            color='primary'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardWrapper