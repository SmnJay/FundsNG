'use client';

import Breadcrumb from '@/app/components/Breadcrumb';
import CampaginDonationUpdate from '@/app/components/Campaigns/CampaginDonationUpdate';
import CampaignCad, { campaignStatus } from '@/app/components/Campaigns/CampaignCad';
import CampaignRecentActivity from '@/app/components/Campaigns/CampaignRecentActivity';
import { CardLoader } from '@/app/components/Loader/Loader';
import AddBankDetailsModal from '@/app/components/Modal/AddBankDetailsModal';
import ShareCampaignModal from '@/app/components/Modal/ShareCampaignModal';
import WithdrawFundsModal from '@/app/components/Modal/WithdrawFundsModal';
import UserBank from '@/app/components/Profile/UserBank';
import ProgressBar from '@/app/components/ProgressBar';
import Spinner from '@/app/components/Spinner/Spinner';
import calculateDaysLeft from '@/app/utils/helper/deadlineCalculator';
import moneyFormatter from '@/app/utils/helper/moneyFormatter';
import PercentageCalculator from '@/app/utils/helper/percentageCalculator';
import useUpdateParams from '@/app/utils/hooks/useUpdateParams';
import { ICampaign, ICampaignDetails } from '@/app/utils/models/Model';
import { getSingleCampaign, getSingleCampaignDetail, stopCampaignApi } from '@/app/utils/services/campaign/campaignApiService';
import { useMutation, useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, { Fragment, useState } from 'react'
import toast from 'react-hot-toast';
import { HiMiniExclamationTriangle } from 'react-icons/hi2';
import { IoCogOutline, IoEyeOutline, IoShareSocial } from 'react-icons/io5';
import { LiaTimesSolid } from 'react-icons/lia';
import { TbEdit } from 'react-icons/tb';

const items = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Campaigns', path: '/dashboard/campaigns' },
  { label: 'Campaign Detail' },
];

const app_url = 'https://funds-ng.vercel.app'
const SingleCampaign = () => {
  const params = useParams();
  const { id } = params;

  const campaignId = Array.isArray(id) ? id[0] : id

  const [showAddAccountModal, setShowAddAccountModal] = useState(false);
  const [showShareCampaignModal, setShowShareCampaignModal] = useState(false);
  const [showWithdrawCampaignModal, setShowWithdrawCampaignModal] = useState(false);

  const handleShowAddAccountModal = () => {
    setShowAddAccountModal(!showAddAccountModal)
  }

  const handleShowWithdrawCampaignModal = () => {
    setShowWithdrawCampaignModal(!showWithdrawCampaignModal)
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

      <div className="mt-4"></div>
      <CampaignCad
        isLoading={isLoading}
        isLoading2={isCampaignDetailLoading}
        key={data?.id}
        category={data?.category ?? ''}
        numberOfDonors={CampaignDetail?.numberOfDonors ?? 0}
        numberOfDonations={CampaignDetail?.numberOfDonations ?? 0}
        daysLeft={data?.daysLeft ?? 0}
        progress={PercentageCalculator(data?.donatedAmount ?? 0, data?.targetAmount ?? 1)}
        amountRaised={data?.donatedAmount ?? 0}
        amount={data?.targetAmount ?? 1}
        description={data?.description ?? ''}
        status={data?.status ?? ''}
        link={`/dashboard/campaigns/${data?.id}`}
        title={data?.name ?? ''}
        dateCreated={data?.endDate.slice(0, 10) ?? ''}
        imageSrc="/images/underbridge.png"
      />

      <div className='grid grid-cols-3 gap-4 mt-6'>
        {/* tabs */}
        <div className="col-span-3 md:col-span-2">

          <div className='mt-4 space-y-2'>
            {/* tabs header */}
            <div className="bg-white w-fit py-1 px-2 rounded-md flex items-center gap-2">
              <div className="">
                <input
                  type="radio"
                  defaultChecked
                  className="hidden peer/completed"
                  name='tabs'
                  id='donation-update'
                  onClick={handleRecentActivityQueryParam}
                />
                <label htmlFor="donation-update" className="ease-out duration-200 bg-transparent peer-checked/completed:bg-leafGreen-50/50 rounded-md font-medium px-4 py-2 text-sm cursor-pointer peer-checked/completed:text-leafGreen-5">Donation Update</label>
              </div>
              <div className="py-2">
                <input
                  type="radio"
                  className="hidden peer/active"
                  name='tabs'
                  id='active'
                  onClick={handleDonationUpdateQueryParam}
                />
                <label htmlFor="active" className="ease-out duration-200 bg-transparent peer-checked/active:bg-leafGreen-50/50 rounded-md font-medium px-4 py-2 text-sm cursor-pointer peer-checked/active:text-leafGreen-5">Recent Actvity</label>
              </div>
            </div>
            {/* tabs body */}
            {
              getPathname('campaign-det') !== 'recent-activity' ? (
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold">Recent Activity {Array.isArray(CampaignDetail?.activities) && `(${CampaignDetail?.activities?.length})`}</h3>
                  {
                    isCampaignDetailLoading ? <CardLoader /> :
                      (!CampaignDetail?.activities || (Array.isArray(CampaignDetail?.activities) && CampaignDetail?.activities?.length < 1)) ?
                        <>
                          <Image src='/images/no-notification.gif' width={300} className='mx-auto' height={300} unoptimized alt='' />
                          <p className="text-center max-w-md mx-auto text-[#535758]">Looks like you do not have any ongoing campaigns. Try creating one to get started.</p>
                        </>
                        :
                        <div className='mt-4 space-y-4 max-h-[700px] overflow-y-auto'>
                          {
                            Array.isArray(CampaignDetail?.activities) && CampaignDetail.activities?.map((activity, idx) => {
                              return <CampaignRecentActivity key={idx} description={activity.description} />
                            })
                          }
                        </div>
                  }
                </div>
              ) : getPathname('campaign-det') === 'recent-activity' ? (
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold">Donation Update</h3>
                  {
                    isCampaignDetailLoading ? <CardLoader /> :
                      (!CampaignDetail?.donations || (Array.isArray(CampaignDetail?.donations) && CampaignDetail?.donations?.length < 1)) ?
                        <>
                          <Image src='/images/no-notification.gif' width={300} className='mx-auto' height={300} unoptimized alt='' />
                          <p className="text-center max-w-md mx-auto text-[#535758]">Looks like you do not have any ongoing campaigns. Try creating one to get started.</p>
                        </>
                        :
                        <div className='mt-4 space-y-4 max-h-[700px] overflow-y-auto'>
                          {
                            Array.isArray(CampaignDetail?.donations) && CampaignDetail.donations?.map((donation, idx) => {
                              return <CampaginDonationUpdate key={idx} name={donation.name} amount={donation.amount} picture={donation.profileImage} />
                            })
                          }
                        </div>
                  }
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
                data?.bankDetails === null ? <p className='flex items-center gap-3 rounded-md p-4 bg-slate-100 w-fit text-sm'><HiMiniExclamationTriangle className='text-amber-600 flex-shrink-0' /> This Campaign has no associated bank account information. Kindly add your bank details to this campaign</p> :
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
            <div className="flex flex-wrap xl:grid xl:grid-cols-2 space-x-2 items-center xl:justify-center">
              <div className="">
                <Link href={`${id}/setting`} className='flex items-center justify-center gap-2 font-light text-sm rounded-lg border px-4 py-2 hover:brightness-75 ease-linear duration-200 whitespace-nowrap' aria-label='Link to view Campaign'><span className=""><IoCogOutline /></span><span className="">Campaign Settings</span> </Link>
              </div>
              <div className="">
                <button className='flex items-center justify-center gap-2 font-light text-sm rounded-lg bg-leafGreen-20 text-white border px-4 py-2 hover:brightness-95 ease-linear duration-200 whitespace-nowrap w-full' aria-label='button to toggle the Withdraw Funds modal' type='button' onClick={handleShowWithdrawCampaignModal}><span className=""><TbEdit /></span><span className="">Withdraw Funds</span> </button>
              </div>
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

      <WithdrawFundsModal
        amountToWithdraw={data?.donatedAmount as number}
        accountName={data?.bankDetails?.accountName as string || '--'}
        bankName={data?.bankDetails?.bankName as string || '--'}
        accoutNumber={data?.bankDetails?.accountNumber as string || '--'}
        showModal={showWithdrawCampaignModal}
        handleModal={handleShowWithdrawCampaignModal}
      />
    </Fragment >
  )
}

export default SingleCampaign