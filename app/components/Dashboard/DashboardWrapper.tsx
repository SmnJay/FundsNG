'use client';

import Link from 'next/link';
import React, { useState } from 'react'
import Cards from '../Cards';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { ButtonLink } from '../Button/Button';
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
import { useSearchParams } from 'next/navigation';
import { ICampaign } from '@/app/utils/models/Model';
import PercentageCalculator from '@/app/utils/helper/percentageCalculator';
import CampaignCad from '../Campaigns/CampaignCad';

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
                                            <CampaignCad
                                                key={campaignQuery?.data?.data[0]?.id}
                                                category={campaignQuery?.data?.data[0]?.category ?? '--'}
                                                numberOfDonors={campaignQuery?.data?.data[0]?.numberOfDonors ?? 0}
                                                daysLeft={campaignQuery?.data?.data[0]?.daysLeft ?? 0}
                                                progress={PercentageCalculator(campaignQuery?.data?.data[0]?.donatedAmount ?? 0, campaignQuery?.data?.data[0]?.targetAmount ?? 0)}
                                                amountRaised={campaignQuery?.data?.data[0]?.donatedAmount ?? 0}
                                                amount={campaignQuery?.data?.data[0]?.targetAmount ?? 0}
                                                description={campaignQuery?.data?.data[0]?.description ?? '--'}
                                                status={campaignQuery?.data?.data[0]?.status ?? ''}
                                                link={`/dashboard/campaigns/${campaignQuery?.data?.data[0]?.id}`}
                                                title={campaignQuery?.data?.data[0]?.name ?? '--'}
                                                dateCreated={campaignQuery?.data?.data[0]?.endDate.slice(0, 10) ?? ''}
                                                imageSrc="/images/underbridge.png"
                                            />
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