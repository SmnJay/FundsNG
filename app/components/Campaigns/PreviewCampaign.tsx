'use client';

import React from 'react'
import { FaHourglassHalf, FaUserCircle } from 'react-icons/fa';
import { IoIosGift, IoMdShareAlt } from 'react-icons/io';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { RiCalendarTodoFill } from 'react-icons/ri';
import Button, { ButtonLink } from '../Button/Button';
import Image from 'next/image';
import ProgressBar from '../ProgressBar';
import { useQuery } from '@tanstack/react-query';
import { getOpenCampaignApiService } from '@/app/utils/services/campaign/campaignApiService';
import { useParams, useSearchParams } from 'next/navigation';
import { ICampaign } from '@/app/utils/models/Model';
import { dateFormatter } from '@/app/utils/helper/dateFormatter';
import calculateDaysLeft from '@/app/utils/helper/deadlineCalculator';
import { toast } from 'react-toastify';

const PreviewCampaign = () => {
  const params = useSearchParams().get('url')?.replace(/ /g, '+');;

  const { data: getPreviewOpenCampaign, isLoading: getPreviewOpenCampaignIsLoading } = useQuery<ICampaign>({
    queryKey: ['open-campaign', params],
    queryFn: () => getOpenCampaignApiService(params || '')
  });

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(getPreviewOpenCampaign?.shareableUrl as string);
      toast.success('Link copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy link: ' + err);
    }
  };

  return (
    <main className='app-width py-6'>
      <h1 className="font-semibold text-[#323232] text-lg lg:text-2xl pb-6">{getPreviewOpenCampaign?.name}</h1>
      <section className="lg:grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-lg:space-y-4 relative">
        <section className="lg:col-span-3 bg-white rounded-b-lg">
          <div className="relative w-full h-0 pb-[59.68%]">
            <Image
              alt="campaign-preview-image"
              src="/images/campaign-page-preview.png"
              objectFit="cover"
              fill
            />
          </div>
          <p className="text-[#7D847C] p-4 rounded-b-md text-sm leading-6 lg:leading-8">
            {getPreviewOpenCampaign?.description}
          </p>
        </section>
        <aside className="w-full space-y-4 md:sticky md:top-4 md:self-start lg:col-span-2">
          <div className="bg-white px-4 md:px-6 md:py-6 py-3 rounded-lg">
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center text-sm sm:justify-between mb-4">
              <div className="">&#8358;{getPreviewOpenCampaign?.donatedAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })} <span className="font-extralight text-[#888F87] pl-1">Donated</span></div>
              <div className=""> <span className="font-light text-[#888F87] pr-1">Our Goal</span>&#8358;{getPreviewOpenCampaign?.targetAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
            </div>
            <ProgressBar value={getPreviewOpenCampaign?.donatedAmount as number} />
            <div className="mt-6 flex flex-col md:flex-row md:justify-between gap-4">
              <div className="">
                <Image
                  src={'/images/groupAvatar.png'}
                  alt='group avatar'
                  width={183}
                  height={45}
                />
              </div>
              <div className="flex items-center gap-1 text-[12px] whitespace-nowrap font-light cursor-pointer group">
                Donation Activities
                <MdOutlineKeyboardDoubleArrowRight className='group-hover:translate-x-1 transition-all ' />
              </div>
            </div>
            <div className="space-y-4 my-6 text-[#5F655E] font-medium">
              <div className="flex items-center gap-2 text-sm"><FaHourglassHalf />{getPreviewOpenCampaign?.endDate ? `${calculateDaysLeft(getPreviewOpenCampaign?.endDate).toLocaleString()} Days left` : 'Now'}</div>
              <div className="flex items-center gap-2 text-sm"><RiCalendarTodoFill />
                {
                  (getPreviewOpenCampaign?.endDate?.slice(0, 10) as string)
                }
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-4 max-lg:space-y-2">
              <Button ariaLabel='share campaign' onClick={handleCopyClick} cls='md:text-sm whitespace-nowrap w-full' icon={<IoMdShareAlt size={23} />} name='Share Campaign' />
              <ButtonLink href='campaign/donate' iconPosition='left' ariaLabel='share campaign' cls='md:text-sm whitespace-nowrap w-full' icon={<IoIosGift size={23} />} color='leafGreen' name='Donate Now' />
            </div>
          </div>
          <div className='bg-white rounded-lg px-4 md:px-6 md:py-6 py-3'>
            <h6 className="text-sm">Created By:</h6>
            <div className="flex items-center gap-2 mt-2">
              <FaUserCircle className='text-slate-400' size={40} />
              <ul className="">
                <li className='font-semibold'>{getPreviewOpenCampaign?.createdBy}</li>
                <li className='text-[#7D847C] font-thin text-sm'>{getPreviewOpenCampaign?.email}</li>
              </ul>
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default PreviewCampaign