import Breadcrumb from '@/app/components/Breadcrumb'
import Input, { InputTextArea } from '@/app/components/Input/Input'
import { ProfileAvatar } from '@/app/components/UserProfilePicture'
import React from 'react'

const Profile = () => {
  const items = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Settings' },
    { label: 'Profile' },
  ]
  return (
    <>
      <Breadcrumb items={items} />
      <div className="mt-4 max-w-screen-md mr-auto space-y-6">
        <div className="md:flex gap-1 items-start justify-between">
          <div className="text-sm w-full font-medium">Profile</div>
          <div className="max-md:mt-2 flex-shrink-0 md:w-[74%] grid grid-cols-2 items-center gap-2">
            <ProfileAvatar />
          </div>
        </div>
        <div className="md:flex items-start justify-between">
          <span className="text-sm font-medium">Personal Details</span>
          <div className="md:w-[74%] max-md:mt-2 flex-shrink-0 grid grid-cols-2 items-center gap-2">
            <Input where='app' label='First Name' placeholder='Ajoji' error='' name='' type='' />
            <Input where='app' label='Last Name' placeholder='Laye' error='' name='' type='' />
            <Input where='app' label='Username' placeholder='@layiwasabi' error='' name='' type='' />
          </div>
        </div>
        <div className="md:flex items-start justify-between">
          <span className="text-sm font-medium">Contact Information</span>
          <div className="md:w-[74%] max-md:mt-2 flex-shrink-0 grid grid-cols-2 items-center gap-2">
            <Input where='app' label='Email' placeholder='irin.ajo@mail.com' error='' name='email' type='email' />
            <Input where='app' label='Phone Number' placeholder='07032699233' error='' name='phone' type='tel' />
          </div>
        </div>
        <div className="md:flex items-start justify-between">
          <span className="text-sm font-medium">Password</span>
          <div className="md:w-[74%] max-md:mt-2 flex-shrink-0 grid grid-cols-2 items-center gap-2">
            <Input where='app' label='Password' placeholder='*************' error='' name='password' type='password' />
          </div>
        </div>
        {/* <div className="flex items-start justify-between">
          <span className="text-sm font-medium">About Me</span>
          <div className="flex-shrink-0 grid grid-cols-2 items-center">
            <InputTextArea where='app' label={'Bio'} error='' placeholder='Enter your bio here' name='bio' />
          </div>
        </div> */}
        <div className="md:flex items-start justify-between">
          <span className="text-sm font-medium">Social LInks</span>
          <div className="md:w-[74%] max-md:mt-2 flex-shrink-0 grid grid-cols-2 items-center gap-2">
            <Input where='app' label='First Name' placeholder='Ajoji' error='' name='' type='' />
            <Input where='app' label='Last Name' placeholder='Laye' error='' name='' type='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile