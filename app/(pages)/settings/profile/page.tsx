'use client';

import Breadcrumb from '@/app/components/Breadcrumb'
import Button from '@/app/components/Button/Button';
import Input, { InputSelect, InputTextArea } from '@/app/components/Input/Input'
import ProfileLoader from '@/app/components/Loader/Loader';
import completeRegistrationSchema, { CompleteRegistrationSchema } from '@/app/schemaa/completeRegistrationSchema';
import updateProfileSchema, { UpdateProfileSchema } from '@/app/schemaa/updateProfileSchema';
import ProfilePictureGenerator from '@/app/utils/helper/ProfilePictureGenerator';
import useFormValidation from '@/app/utils/hooks/useFormValidation';
import { ICompleteProfile, ICompleteRegistration } from '@/app/utils/models/Model';
import { getProfileApiService, updateProfileApiService } from '@/app/utils/services/profile/profileApiService'
import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'react-toastify';

const Profile = () => {
  const profileQuery = useQuery({
    queryKey: ['profile'],
    queryFn: getProfileApiService,
  })

  const profileMutation = useMutation({
    mutationKey: ['update-profile'],
    mutationFn: updateProfileApiService,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess(data) {
      console.log(data)
      if (data.success === false) {
        toast.error(data.message);

      } else {
        toast.success(data);
      }
    },
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

  const { handleSubmit, errors, register } = useFormValidation<UpdateProfileSchema>(updateProfileSchema, 'onBlur');

  const submit = async (data: ICompleteProfile) => {
    const formData = {
      ...data, 
      profilePictureUrl: "string",
      dob: "2000-08-11T19:04:52.205Z"
    }
    profileMutation.mutate(formData)



  }

  return (
    <>
      <Breadcrumb items={items} />
      {
        profileQuery?.isFetching ?
          <ProfileLoader />
          :
          <form onSubmit={handleSubmit(submit)} className="mt-4 max-w-screen-md mr-auto space-y-6 bg-white rounded-lg p-6 border">
            <div className="md:flex gap-1 items-start justify-between">
              <div className="text-sm w-full font-medium">Profile</div>
              <div className="max-md:mt-2 flex-shrink-0 md:w-[74%] grid grid-cols-2 items-center gap-2">
                <ProfilePictureGenerator firstName={profileQuery?.data?.firstName} lastName={profileQuery?.data?.lastName} email={profileQuery?.data?.email} />
              </div>
            </div>
            <div className="md:flex items-start justify-between">
              <span className="text-sm font-medium">Personal Details</span>
              <div className="md:w-[74%] max-md:mt-2 flex-shrink-0 grid grid-cols-2 items-center gap-2">
                <Input where='app' label='First Name' placeholder='' error={errors?.firstName?.message} {...register('firstName')} defaultValue={profileQuery?.data?.firstName} type='text' />
                <Input where='app' label='Last Name' placeholder='' error={errors?.lastName?.message} {...register('lastName')} defaultValue={profileQuery?.data?.lastName} type='text' />
                <InputSelect where='app' label='Gender' placeholder='Select Gender' error={errors?.gender?.message} {...register('gender')} defaultValue={profileQuery?.data?.gender} options={GenderOptions} />
              </div>
            </div>
            <div className="md:flex items-start justify-between">
              <span className="text-sm font-medium">Contact Information</span>
              <div className="md:w-[74%] max-md:mt-2 flex-shrink-0 grid grid-cols-2 items-center gap-2">
                <Input where='app' label='Email' placeholder='' error='' name='email' readOnly type='email' defaultValue={profileQuery?.data?.email} />
                <Input where='app' label='Phone Number' placeholder='' error={errors?.mobile?.message} {...register('mobile')} type='tel' defaultValue={profileQuery?.data?.mobile} />
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
            <div className="flex justify-end mt-6">
              <Button cls='' type='submit' processing={profileMutation.isPending} ariaLabel='Button to update your profile information' name='Update' color='primary' />
            </div>
          </form>
      }
    </>
  )
}

export default Profile