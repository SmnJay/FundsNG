'use client';

import Breadcrumb from '@/app/components/Breadcrumb';
import Cards from '@/app/components/Cards';
import ProgressBar from '@/app/components/ProgressBar';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React, { Fragment } from 'react'
import { BiSolidHourglass, BiSolidStopwatch } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';
import { GoGoal } from 'react-icons/go';
import { HiOutlineUser } from 'react-icons/hi2';
import { IoMdShareAlt } from 'react-icons/io';
import { LiaTimesSolid } from 'react-icons/lia';
import { TbMoneybag } from 'react-icons/tb';

const SingleCampaign = () => {
  const router = useRouter();

  const items = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Campaigns', path: '/dashboard/campaigns' },
    { label: 'Campaign Detail' },
  ]

  return (
    <Fragment>
      <Breadcrumb items={items} />
      <div className='grid grid-cols-3 gap-4 mt-6'>
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-4">
            <Cards
              title='Total donations made'
              titleColor='text-white'
              amount='12500'
              bgColor='bg-leafGreen-5'
              icon={<TbMoneybag className='text-white h-6 w-6 md:h-10 md:w-10' />}
            />
            <Cards
              title='Number of people who donate'
              amount='12500'
              icon={<HiOutlineUser className='text-white h-6 w-6 md:h-10 md:w-10' />}
            />
          </div>
          <div className='mt-4 space-y-2'>
            <div className="bg-white rounded-lg p-2">Tabs</div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold">Recent Activity</h3>
              <Image src='/icons/empty-savings.png' width={300} className='mx-auto' height={300} alt='' />
              <p className="text-center max-w-md mx-auto text-[#535758]">Looks like you do not have any ongoing campaigns. Try creating one to get started.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="bg-white rounded-lg p-3">
            <div className="">
              <Image src={'/images/underbridge.png'} className='rounded-lg' width={300} height={120} style={{ width: '100%' }} alt='' />
            </div>
            <h3 className="text-leafGreen-20 mt-1 mb-2 text-base md:text-lg font-semibold">Get Mrs Olawora a new home</h3>
            <p className="text-sm text-[#5F655E]">Mrs Olowora was part of the people who was wrongly removed from her home by the lagos state government. This campaign is help her find a new refurbished home so that she can start life again on a clean slate.</p>
          </div>

          <div className="bg-white text-[#5f6553] rounded-lg py-6 px-3 mt-3">
            <div className="grid text-sm grid-cols-3 gap-1 mb-8">
              <div className="space-y-2">
                <div className="text-sm flex items-center gap-1"><GoGoal /> Our Goal</div>
                <div className="text-base font-medium">&#8358; 600,000</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm flex items-center gap-1"><BiSolidHourglass /> Duration</div>
                <div className="text-base font-medium">184 Days left</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm flex items-center gap-1"><BiSolidStopwatch /> Ending Date</div>
                <div className="text-base font-medium">2 June, 2024</div>
              </div>
            </div>
            <ProgressBar value={1} />
            <span className="text-sm text-center block mt-2">No one has donated so far</span>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <button className="rounded-md py-2 font-medium text-sm px-4 flex items-center justify-center gap-2 bg-leafGreen-20 text-white"><FiEdit /> Edit Campaign</button>
            <button className="rounded-md py-2 font-medium text-sm px-4 flex items-center justify-center gap-2 text-white bg-red-700"><LiaTimesSolid /> End Campaign</button>
            <button className="rounded-md py-2 font-medium text-sm px-4 flex items-center justify-center gap-2 col-span-2 text-leafGreen-5 bg-leafGreen-50"><IoMdShareAlt /> Share Campaign</button>
          </div>
        </div>

      </div>
    </Fragment>
  )
}

export default SingleCampaign