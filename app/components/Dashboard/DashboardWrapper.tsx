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
import { getCampaignApiService } from '@/app/utils/services/campaign/campaignApiService';
import PopularCategories from './PopularCategories';
import CampaignLoader from '../Campaigns/CampaignLoader';
import CampaignDashboard from '../Campaigns/CampaignDashboard';
import moneyFormatter from '@/app/utils/helper/moneyFormatter';
import calculateDaysLeft from '@/app/utils/helper/deadlineCalculator';
import { useSearchParams } from 'next/navigation';
import { ICampaign } from '@/app/utils/models/Model';

type DashboardWrapperProps = {
    isProfileSetUp: boolean
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ isProfileSetUp }) => {
    const searchParams = useSearchParams();
    const [isEmpty, setIsEmpty] = useState(true);

    const initialPage = Number(searchParams.get("page")) || 1;

    const [currentPage, setCurrentPage] = useState(initialPage);

    const dashboardQuery = useQuery({
        queryKey: ['dashboard'],
        queryFn: dashboardApiService
    });

    const campaignQuery = useQuery<{ data: ICampaign[], metaData: { totalPages: number, totalCount: number } }>({
        queryKey: ['campaign'],
        queryFn: () => getCampaignApiService(currentPage),
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-8 mb-8">
                <div className={`${isEmpty ? 'col-span-3 lg:w-11/12 lg:mx-auto ' : 'col-span-2'} `}>
                    {
                        campaignQuery?.isLoading ?
                            <>
                                {
                                    Array.from({ length: 1 }, (_, index) => (
                                        <CampaignLoader key={index} />
                                    ))
                                }

                            </>
                            :
                            <>
                                <div className="">
                                    <div className="py-2 flex items-center justify-between">
                                        <p className="font-medium text-sm sm:text-base text-[#899192]">
                                            Your Campaigns
                                            {campaignQuery?.data?.metaData?.totalCount !== undefined &&
                                                campaignQuery?.data?.metaData?.totalCount > 0 &&
                                                `(${campaignQuery?.data?.metaData?.totalCount})`}
                                        </p>
                                        <Link href='/dashboard/campaigns' className='flex items-center text-sm group text-leafGreen-30'>View All <span className="group-hover:translate-x-[2px] duration-200 ease-out"><CgChevronRight /></span></Link>
                                    </div>
                                    {
                                        campaignQuery?.data?.metaData?.totalCount !== undefined &&
                                            campaignQuery?.data?.metaData?.totalCount < 1 ?
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
                                            <div className='bg-white rounded-r-lg flex flex-col md:flex-row items-center gap-12 pr-6'>
                                                <div className="w-[326px] h-[213px] spb-[153.05%]">
                                                    <Image
                                                        className='h-full'
                                                        src={'/images/campaign-page-preview.png'}
                                                        width={326}
                                                        height={213}

                                                        alt=''
                                                    />
                                                </div>
                                                <div className="font-inter w-full py-6">
                                                    <h6 className="font-semibold md:leading-loose text-base text-[#3f4343] mb-1">{campaignQuery?.data?.data[0]?.name}</h6>
                                                    <p className="text-[#899192] text-sm mb-3">{campaignQuery?.data?.data[0]?.description}</p>
                                                    <ProgressBar value={50} />
                                                    <div className="grid grid-cols-4 items-center gap-2 mt-4">
                                                        <div className="">
                                                            <p className="font-semibold text-xl">&#8358;{moneyFormatter(campaignQuery?.data?.data[0]?.targetAmount as string|number)}</p>
                                                            <p className="leading-loose font-light text-[#8B8B8B]">Target</p>
                                                        </div>
                                                        <div className="">
                                                            <p className="font-semibold text-xl">--</p>
                                                            <p className="leading-loose font-light text-[#8B8B8B]">Raised so far</p>
                                                        </div>
                                                        <div className="">
                                                            <p className="font-semibold text-xl">--</p>
                                                            <p className="leading-loose font-light text-[#8B8B8B]">Donors</p>
                                                        </div>
                                                        <div className="">
                                                            <p className="font-semibold text-xl">{calculateDaysLeft(campaignQuery?.data?.data[0]?.endDate as string).toLocaleString()}</p>
                                                            <p className="leading-loose font-light text-[#8B8B8B]">Days Left</p>
                                                        </div>
                                                    </div>

                                                    {/* <span className="text-[#899192]">has been donated so far</span> */}
                                                </div>
                                            </div>
                                    }
                                </div>
                            </>
                    }
                    <PopularCategories />
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