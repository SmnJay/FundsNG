'use client';

import Breadcrumb from '@/app/components/Breadcrumb';
import Button, { ButtonLink } from '@/app/components/Button/Button';
import CampaignCad, { campaignStatus } from '@/app/components/Campaigns/CampaignCad';
import Cards from '@/app/components/Cards';
import Links from '@/app/components/Links/Index';
import { CardLoader } from '@/app/components/Loader/Loader';
import AddBankDetailsModal from '@/app/components/Modal/AddBankDetailsModal';
import ShareCampaignModal from '@/app/components/Modal/ShareCampaignModal';
import UserBank from '@/app/components/Profile/UserBank';
import ProgressBar from '@/app/components/ProgressBar';
import Spinner from '@/app/components/Spinner/Spinner';
import { dateFormatter } from '@/app/utils/helper/dateFormatter';
import calculateDaysLeft from '@/app/utils/helper/deadlineCalculator';
import moneyFormatter from '@/app/utils/helper/moneyFormatter';
import useUpdateParams from '@/app/utils/hooks/useUpdateParams';
import { ICampaign, ICampaignDetails } from '@/app/utils/models/Model';
import { getSingleCampaign, getSingleCampaignDetail, stopCampaignApi } from '@/app/utils/services/campaign/campaignApiService';
import { useMutation, useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation'
import React, { Fragment, useState } from 'react'
import { BiPlus, BiSolidHourglass, BiSolidStopwatch } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';
import { GoGoal } from 'react-icons/go';
import { HiOutlineUser } from 'react-icons/hi2';
import { IoMdShareAlt } from 'react-icons/io';
import { IoCogOutline, IoEyeOutline, IoShareSocial } from 'react-icons/io5';
import { LiaTimesSolid } from 'react-icons/lia';
import { TbEdit, TbMoneybag } from 'react-icons/tb';
import { toast } from 'react-toastify';

const items = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Campaigns', path: '/dashboard/campaigns' },
  { label: 'Campaign Detail' },
];

const app_url = 'https://funds-ng.vercel.app'
const SingleCampaign = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const campaignId = Array.isArray(id) ? id[0] : id

  const [showAddAccountModal, setShowAddAccountModal] = useState(false);
  const [showShareCampaignModal, setShowShareCampaignModal] = useState(false);

  const handleShowAddAccountModal = () => {
    setShowAddAccountModal(!showAddAccountModal)
  }

  const handleShowShareCampaignModal = () => {
    setShowShareCampaignModal(!showShareCampaignModal)
  }

  const { data, isError, error, isFetching, isLoading } = useQuery<ICampaign>({
    queryKey: ['campaign', id],
    queryFn: () => getSingleCampaign(campaignId),
    enabled: !!campaignId
  });

  const { data: CampaignDetail, isError: isCampaignDetailError, isLoading: isCampaignDetailLoading } = useQuery<ICampaignDetails>({
    queryKey: ['campaign-detail', id],
    queryFn: () => getSingleCampaignDetail(campaignId),
    enabled: !!campaignId
  });

  const { data: stopCampaign, isError: stopCampaignIsError, error: stopCampaignError, mutate, ...res } = useMutation({
    mutationKey: ['stop-campaign', id],
    mutationFn: stopCampaignApi,
    onSuccess: (data) => {
      if (data.success === false) {
        toast.error(data.message)
      } else {
        toast.success(data.message)
      }
    }
  })

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(data?.shareableUrl as string);
      toast.success('Link copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy link: ' + err);
    }
  };

  const { handleCreateQueryParams, getPathname } = useUpdateParams();

  const handleRecentActivityQueryParam = () => {
    handleCreateQueryParams('campaign-det', 'recent-activity');
  };

  const handleDonationUpdateQueryParam = () => {
    handleCreateQueryParams('campaign-det', 'donation-update');
  };

  const handleStopCampaign = () => {
    mutate(campaignId)
  }

  return (
    <Fragment>
      <Breadcrumb items={items} />
      <div className="bg-white text-[#5f655e] flex items-center justify-between text-sm font-semibold rounded-lg p-3 mt-4">
        <span>Manage Campaigns</span>
        <div className="flex items-center gap-2">
          <a target='_blank' href={`${CampaignDetail?.campaign?.shareableUrl}`} className='flex items-center gap-2 font-light text-sm rounded-lg border px-4 py-2 hover:brightness-75 ease-linear duration-200' aria-label='Link to view Campaign'><span className=""><IoEyeOutline /></span><span className="">View Campaign</span> </a>
          <Link href={`${id}/edit`} className='flex items-center gap-2 font-light text-sm rounded-lg border px-4 py-2 hover:brightness-75 ease-linear duration-200' aria-label='Link to edit Campaign'><span className=""><TbEdit /></span><span className="">Edit Campaign</span> </Link>
          <button className='flex items-center gap-2 font-light text-sm rounded-lg border border-leafGreen-20 hover:brightness-95 ease-linear duration-200 px-4 py-2 bg-leafGreen-20 text-white' onClick={handleShowShareCampaignModal} type="button"><span className=""><IoShareSocial /></span><span className="">Share Campaign</span></button>
        </div>
      </div>

      <div className='bg-white rounded-r-lg flex flex-col md:flex-row items-center gap-12 pr-6 relative mt-4'>
        <div className="w-[326px] h-[213px] spb-[153.05%] relative">
          <Image
            className='h-full'
            src={'/images/campaign-page-preview.png'}
            width={326}
            height={213}
            alt=''
          />
          <div className="absolute bg-[#f4ffe3eb] border border-[#FC9D51] rounded-lg py-1 px-3 font-medium right-4 bottom-4 text-[11px] flex items-center gap-1"> {data && campaignStatus(data?.status)} {data?.status}</div>
        </div>
        <div className="font-inter !w-1/2 py-6">
          <h6 className="font-semibold md:leading-loose text-base text-[#3f4343] mb-1">{isLoading ? <CardLoader /> : data?.name}</h6>
          <p className="text-[#899192] text-sm mb-3">{isLoading ? <CardLoader /> : data?.description}</p>
          <ProgressBar value={data?.donatedAmount ?? 0} />
          <div className="grid grid-cols-4 items-center gap-2 mt-4">
            <div className="">
              <p className="font-semibold text-xl">{isLoading ? <CardLoader /> : `₦${moneyFormatter(data?.targetAmount as string | number)} `}</p>
              <p className="leading-loose font-light text-[#8B8B8B]">Target</p>
            </div>
            <div className="">
              <p className="font-semibold text-xl">{isLoading ? <CardLoader /> : `₦${moneyFormatter(data?.donatedAmount as string | number) ?? 0}`}</p>
              <p className="leading-loose font-light text-[#8B8B8B]">Raised so far</p>
            </div>
            <div className="">
              <p className="font-semibold text-xl">
                {
                  isCampaignDetailLoading ? <CardLoader /> :
                    (CampaignDetail && CampaignDetail?.numberOfDonors < 1
                      ? '0' :
                      `${CampaignDetail?.numberOfDonors}`)
                }
              </p>
              <p className="leading-loose font-light text-[#8B8B8B]">Donors</p>
            </div>
            <div className="">
              <p className="font-semibold text-xl">
                {
                  isLoading ? <CardLoader /> : (data?.endDate ? `${calculateDaysLeft(data?.endDate).toLocaleString()}` : 'Now')
                }
              </p>
              <p className="leading-loose font-light text-[#8B8B8B]">Days Left</p>
            </div>
          </div>
        </div>
        <span className="absolute top-4 right-5 inline-block bg-red-400 rounded-full"></span>
      </div>

      <div className='grid grid-cols-3 gap-4 mt-6'>
        <div className="col-span-3 md:col-span-2">
          <div className='mt-4 space-y-2'>
            <div className="bg-white w-fit py-1 px-2 rounded-md flex items-center gap-2">
              <div className="py-2">
                <input
                  type="radio"
                  defaultChecked
                  className="hidden peer/active"
                  name='tabs'
                  id='active'
                  onClick={handleRecentActivityQueryParam}
                />
                <label htmlFor="active" className="ease-out duration-200 bg-transparent peer-checked/active:bg-leafGreen-50/50 rounded-md font-medium px-4 py-2 text-sm cursor-pointer peer-checked/active:text-leafGreen-5">Recent Actvity</label>
              </div>
              <div className="">
                <input
                  type="radio"
                  className="hidden peer/completed"
                  name='tabs'
                  id='donation-update'
                  onClick={handleDonationUpdateQueryParam}
                />
                <label htmlFor="donation-update" className="ease-out duration-200 bg-transparent peer-checked/completed:bg-leafGreen-50/50 rounded-md font-medium px-4 py-2 text-sm cursor-pointer peer-checked/completed:text-leafGreen-5">Donation Update</label>
              </div>
            </div>
            {
              getPathname('campaign-det') === 'recent-activity' ? (
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold">Recent Activity</h3>
                  <Image src='/images/no-notification.gif' width={300} className='mx-auto' height={300} alt='' unoptimized />
                  <p className="text-center max-w-md mx-auto text-[#535758]">Looks like you do not have any ongoing campaigns. Try creating one to get started.</p>
                </div>
              ) : getPathname('campaign-det') !== 'recent-activity' ? (
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold">Donation Update</h3>
                  <Image src='/images/no-notification.gif' width={300} className='mx-auto' height={300} unoptimized alt='' />
                  <p className="text-center max-w-md mx-auto text-[#535758]">Looks like you do not have any ongoing campaigns. Try creating one to get started.</p>
                </div>
              ) : null
            }
          </div>
        </div>

        <div className="col-span-3 md:col-span-1">
          <div className="bg-white text-[#5f6553] rounded-lg py-6 px-3 mt-3">
            <h3 className="font-semibold text-black pb-4">Funds Withdrawal Details</h3>
            {
              isLoading ?
                <CardLoader /> :
                data?.bankDetails === null ? 'Please add your bank details to this campaign' :
                  <UserBank
                    showPrimary={false}
                    id={data?.id as unknown as string}
                    bankName={data?.bankDetails?.bankName as unknown as string}
                    accountName={data?.bankDetails?.accountName as unknown as string}
                    accountNumber={data?.bankDetails?.accountNumber as unknown as string}
                  />
            }
            <div className="flex items-center gap-2 py-4 text-xs">
              <span className="font-medium  text-black">Frequency: </span>
              <span className=" text-[#F7A145]">Withdraw Funds by the end of Campaign</span>
            </div>
            <div className="flex flex-wrap space-x-1 items-center justify-between">
              <Link href={`${id}/edit`} className='flex items-center gap-2 font-light text-sm rounded-lg border px-4 py-2 hover:brightness-75 ease-linear duration-200 whitespace-nowrap' aria-label='Link to view Campaign'><span className=""><IoCogOutline /></span><span className="">Campaign Settings</span> </Link>
              <Link href={`${id}/edit`} className='flex items-center gap-2 font-light text-sm rounded-lg bg-leafGreen-20 text-white border px-4 py-2 hover:brightness-95 ease-linear duration-200 whitespace-nowrap' aria-label='Link to Withdraw Funds'><span className=""><TbEdit /></span><span className="">Withdraw Funds</span> </Link>
            </div>
          </div>

          <div className="bg-white px-3 rounded-lg mt-4 py-4 flex items-center justify-between gap-4">
            {
              isCampaignDetailLoading ? <CardLoader /> :
                <p className="space-x-1">
                  <span className="font-medium">₦{moneyFormatter(Number(CampaignDetail?.campaign?.targetAmount) - Number(CampaignDetail?.donatedAmount))}</span>
                  <span className="text-sm text-[#5F655E]">left to reach your goal</span>
                </p>
            }
            <button className="rounded-md py-2 text-sm px-4 flex items-center justify-center gap-2 text-white bg-red-700 flex-shrink-0 whitespace-nowrap" onClick={handleStopCampaign} disabled={res.isPending}> {res.isPending ? <Spinner /> : <><LiaTimesSolid /> End Campaign</>}</button>
          </div>

        </div>

      </div>


      <ShareCampaignModal
        showModal={showShareCampaignModal}
        handleModal={handleShowShareCampaignModal}
        pushToUrl=''
        shareableUrl={CampaignDetail?.campaign?.shareableUrl as unknown as string}
      />
      <AddBankDetailsModal isOpen={showAddAccountModal} onClose={handleShowAddAccountModal} />
    </Fragment>
  )
}

export default SingleCampaign