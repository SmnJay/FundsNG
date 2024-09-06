'use client';

import Breadcrumb from '@/app/components/Breadcrumb';
import { ButtonLink } from '@/app/components/Button/Button';
import Cards from '@/app/components/Cards';
import { CardLoader } from '@/app/components/Loader/Loader';
import AddBankDetailsModal from '@/app/components/Modal/AddBankDetailsModal';
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
import { useParams, useRouter } from 'next/navigation'
import React, { Fragment, useState } from 'react'
import { BiPlus, BiSolidHourglass, BiSolidStopwatch } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';
import { GoGoal } from 'react-icons/go';
import { HiOutlineUser } from 'react-icons/hi2';
import { IoMdShareAlt } from 'react-icons/io';
import { LiaTimesSolid } from 'react-icons/lia';
import { TbMoneybag } from 'react-icons/tb';
import { toast } from 'react-toastify';

const items = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Campaigns', path: '/dashboard/campaigns' },
  { label: 'Campaign Detail' },
];
const SingleCampaign = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const campaignId = Array.isArray(id) ? id[0] : id

  const [showAddAccountModal, setShowAddAccountModal] = useState(false);

  const handleShowAddAccountModal = () => {
    setShowAddAccountModal(!showAddAccountModal)
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
      <div className='grid grid-cols-3 gap-4 mt-6'>
        <div className="col-span-3 md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Cards
              title='Total donations made'
              titleColor='text-white'
              amount={<>&#8358; {moneyFormatter(CampaignDetail?.donatedAmount as unknown as string)}</>}
              bgColor='bg-leafGreen-5'
              icon={<TbMoneybag className='text-white h-6 w-6 md:h-10 md:w-10' />}
              loading={isCampaignDetailLoading}
            />
            <Cards
              title='Number of people who donate'
              bgColor='bg-primary'
              amount={CampaignDetail?.numberOfDonations as unknown as string}
              icon={<HiOutlineUser className='text-white h-6 w-6 md:h-10 md:w-10' />}
              loading={isCampaignDetailLoading}
            />
          </div>
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
          <div className="bg-white rounded-lg p-3">
            <div className="">
              <Image src={'/images/underbridge.png'} className='rounded-lg' width={300} height={120} style={{ width: '100%' }} alt='' />
            </div>
            <h3 className="text-leafGreen-20 mt-1 mb-2 text-base md:text-lg font-semibold">{isLoading ? <CardLoader /> : data?.name}</h3>
            <p className="text-sm text-[#5F655E]">{isLoading ? <CardLoader /> : data?.description}</p>
          </div>

          <div className="bg-white text-[#5f6553] rounded-lg py-6 px-3 mt-3">
            <div className="grid text-sm grid-cols-3 gap-1 mb-8">
              <div className="space-y-2">
                <div className="text-sm flex items-center gap-1"><GoGoal /> Our Goal</div>
                <div className="text-base font-medium">
                  {
                    isLoading ? <CardLoader /> : (data?.targetAmount ? `₦${moneyFormatter(data?.targetAmount)}` : 0.00)
                  }
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm flex items-center gap-1"><BiSolidHourglass /> Duration</div>
                <div className="text-base font-medium">
                  {
                    isLoading ? <CardLoader /> : (data?.endDate ? `${calculateDaysLeft(data?.endDate)} Days left` : 'Now')
                  }
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm flex items-center gap-1"><BiSolidStopwatch /> Ending Date</div>
                <div className="text-base font-medium">
                  {
                    isLoading ? <CardLoader /> : dateFormatter(data?.endDate.slice(0, 10) as unknown as string)
                  }
                </div>
              </div>
            </div>
            <ProgressBar value={1} />
            <span className="text-sm text-center block mt-2">
              {
                isCampaignDetailLoading ? <CardLoader /> :
                  (CampaignDetail && CampaignDetail?.numberOfDonors < 1
                    ? 'No one has donated so far' :
                    `${CampaignDetail?.numberOfDonors} people have donated thus far`)
              }
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <ButtonLink
              href={`${id}/edit`}
              ariaLabel='link to edit campaign'
              color='leafGreen'
              cls='text-sm'
              iconPosition='left'
              // className="rounded-md py-2 font-medium text-sm px-4 flex items-center justify-center gap-2 bg-leafGreen-20 text-white"
              name='Edit Campaign'
              icon={<FiEdit />}

            />
            <button className="rounded-md py-2 font-medium text-sm px-4 flex items-center justify-center gap-2 text-white bg-red-700" onClick={handleStopCampaign} disabled={res.isPending}> {res.isPending ? <Spinner /> : <><LiaTimesSolid /> End Campaign</>}</button>
            <button type='button' onClick={handleShowAddAccountModal} className="rounded-md py-2 font-medium text-sm px-4 flex items-center justify-center gap-2 text-white bg-primary"><BiPlus />Add Account</button>
            <button className="rounded-md py-2 font-medium text-sm px-4 flex items-center justify-center gap-2 text-leafGreen-5 bg-leafGreen-50"><IoMdShareAlt /> Share Campaign</button>
          </div>
        </div>

      </div>

      <AddBankDetailsModal isOpen={showAddAccountModal} onClose={handleShowAddAccountModal} />
    </Fragment>
  )
}

export default SingleCampaign