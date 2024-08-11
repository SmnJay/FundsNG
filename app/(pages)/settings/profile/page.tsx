'use client';
import Breadcrumb from '@/app/components/Breadcrumb'
import Input, { InputSelect, InputTextArea } from '@/app/components/Input/Input'
import ProfileLoader from '@/app/components/Loader/Loader';
import ProfilePictureGenerator from '@/app/utils/helper/ProfilePictureGenerator';
import { getProfileApiService } from '@/app/utils/services/profile/profileApiService'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const Profile = () => {
  const profileQuery = useQuery({
    queryKey: ['profile'],
    queryFn: getProfileApiService,
  })

  const items = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Settings' },
    { label: 'Profile' },
  ];

  const GenderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Others', value: 'others' },
  ]

  return (
    <>
      <Breadcrumb items={items} />
      {
        profileQuery?.isFetching ?
          <ProfileLoader />
          :
          <div className="mt-4 max-w-screen-md mr-auto space-y-6 bg-white rounded-lg p-6 border">
            <div className="md:flex gap-1 items-start justify-between">
              <div className="text-sm w-full font-medium">Profile</div>
              <div className="max-md:mt-2 flex-shrink-0 md:w-[74%] grid grid-cols-2 items-center gap-2">
                <ProfilePictureGenerator firstName={profileQuery?.data?.firstName} lastName={profileQuery?.data?.lastName} email={profileQuery?.data?.email} />
              </div>
            </div>
            <div className="md:flex items-start justify-between">
              <span className="text-sm font-medium">Personal Details</span>
              <div className="md:w-[74%] max-md:mt-2 flex-shrink-0 grid grid-cols-2 items-center gap-2">
                <Input where='app' label='First Name' placeholder='' error='' name='firstName' defaultValue={profileQuery?.data?.firstName} type='text' />
                <Input where='app' label='Last Name' placeholder='' error='' name='lastName' defaultValue={profileQuery?.data?.lastName} type='text' />
                <InputSelect where='app' label='Gender' placeholder='Select Gender' error='' name='gender' defaultValue={profileQuery?.data?.gender} options={GenderOptions} />
              </div>
            </div>
            <div className="md:flex items-start justify-between">
              <span className="text-sm font-medium">Contact Information</span>
              <div className="md:w-[74%] max-md:mt-2 flex-shrink-0 grid grid-cols-2 items-center gap-2">
                <Input where='app' label='Email' placeholder='' error='' name='email' type='email' defaultValue={profileQuery?.data?.email} />
                <Input where='app' label='Phone Number' placeholder='' error='' name='phone' type='tel' defaultValue={profileQuery?.data?.mobile} />
              </div>
            </div>
            <div className="md:flex items-start justify-between">
              <span className="text-sm font-medium">Password</span>
              <div className="md:w-[74%] max-md:mt-2 flex-shrink-0 grid grid-cols-2 items-center gap-2">
                <Input where='app' label='Password' readOnly placeholder='*************' error='' name='password' type='password' />
              </div>
            </div>
            {/* <div className="flex items-start justify-between">
          <span className="text-sm font-medium">About Me</span>
          <div className="flex-shrink-0 grid grid-cols-2 items-center">
          <InputTextArea where='app' label={'Bio'} error='' placeholder='Enter your bio here' name='bio' />
          </div>
          </div> */}
            {/* <div className="md:flex items-start justify-between hidden">
          <span className="text-sm font-medium">Social LInks</span>
          <div className="md:w-[74%] max-md:mt-2 flex-shrink-0 grid grid-cols-2 items-center gap-2">
          <Input where='app' label='First Name' placeholder='Ajoji' error='' name='' type='' />
          <Input where='app' label='Last Name' placeholder='Laye' error='' name='' type='' />
          </div>
          </div> */}
          </div>
      }
    </>
  )
}

export default Profile