'use client';

import Breadcrumb from '@/app/components/Breadcrumb'
import Button from '@/app/components/Button/Button';
import Input, { InputNumber, InputSelect } from '@/app/components/Input/Input'
import ProfileLoader from '@/app/components/Loader/Loader';
import { PiBankFill } from "react-icons/pi";
import updateProfileSchema, { UpdateProfileSchema } from '@/app/schemaa/updateProfileSchema';
import ProfilePictureGenerator from '@/app/utils/helper/ProfilePictureGenerator';
import useFormValidation from '@/app/utils/hooks/useFormValidation';
import { ICompleteProfile } from '@/app/utils/models/Model';
import { getProfileApiService, updateProfileApiService } from '@/app/utils/services/profile/profileApiService'
import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { getActiveBankAccountsApiService } from '@/app/utils/services/bankAccount/bankAccountApiService';
import AddBankDetailsModal from '@/app/components/Modal/AddBankDetailsModal';
import UserBank from '@/app/components/Profile/UserBank';
import { verifyBvnApiService } from '@/app/utils/services/verifyBvn/verifyBvnApiService';
import toast from 'react-hot-toast';

const Profile = () => {
  const [bvnVerificationFormData, setBvnVerificationFormData] = useState({
    bvn: '',
    dob: ''
  })
  const [showAddBankDetailsModal, setShowAddBankDetailsModal] = useState(false);

  const handleShowAddBankDetailModal = () => {
    setShowAddBankDetailsModal(!showAddBankDetailsModal);
  }

  const { data: activeBankAccounts, isLoading: activeBankAccountsIsLoading } = useQuery<{ bankName: string, accountName: string, id: string, accountNumber: string, isPrimary: boolean }[]>({
    queryKey: ['activeBankAccounts'],
    queryFn: getActiveBankAccountsApiService
  });

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
      if (data.success === false) {
        toast.error(data.message);

      } else {
        toast.success(data);
      }
    },
  })

  const bvnVerificationMutation = useMutation({
    mutationKey: ['verify-bvn'],
    mutationFn: verifyBvnApiService,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess(data) {
      if (data.success === false) {
        toast.error(data.message);

      } else {
        toast.success(data);
      }
    },
  });

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


  const bvnLength: boolean = bvnVerificationFormData.bvn.length >= 11;

  useEffect(() => {
    if (profileQuery.isSuccess) {
      setBvnVerificationFormData((prev) => ({
        ...prev,
        dob: profileQuery?.data?.dob
      }))
    }
  }, [profileQuery.isSuccess])


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
              <div className="md:w-[74%] max-md:mt-2 flex-shrink-0 grid grid-cols-1 md:grid-cols-2 items-center gap-2">
                <Input where='app' label='First Name' placeholder='' error={errors?.firstName?.message} {...register('firstName')} defaultValue={profileQuery?.data?.firstName} type='text' />
                <Input where='app' label='Last Name' placeholder='' error={errors?.lastName?.message} {...register('lastName')} defaultValue={profileQuery?.data?.lastName} type='text' />
                <InputSelect where='app' label='Gender' placeholder='Select Gender' error={errors?.gender?.message} {...register('gender')} defaultValue={profileQuery?.data?.gender} options={GenderOptions} />
              </div>
            </div>
            <div className="md:flex items-start justify-between">
              <span className="text-sm font-medium">Contact Information</span>
              <div className="md:w-[74%] max-md:mt-2 flex-shrink-0 grid grid-cols-1 md:grid-cols-2 items-center gap-2">
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

            <div className="flex justify-center md:justify-end mt-6">
              <Button cls='' type='submit' processing={profileMutation.isPending} ariaLabel='Button to update your profile information' name='Update' color='primary' />
            </div>
          </form>
      }

      <section className="mt-4 max-w-screen-md mr-auto bg-white rounded-lg p-6 border">
        <form action="" className='space-y-4' onSubmit={async (e) => {
          e.preventDefault();
          await bvnVerificationMutation.mutate(bvnVerificationFormData)
        }}>
          <div className="flex items-center">
            <h4 className="font-semibold text-base">Bank Verification Number</h4>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm">BVN Details</span>
            <InputNumber
              label='BVN'
              error=''
              name='bnv'
              type='number'
              placeholder='1234567890'
              onValueChange={(e) => setBvnVerificationFormData((prev) => ({
                ...prev,
                bvn: e as string
              }))}
              className='w-1/3'
            />
          </div>
          <div className="flex items-center justify-end">
            <Button type='submit' disabled={!bvnLength} color='primary' name='Submit' processing={bvnVerificationMutation.isPending} ariaLabel='submit button ro verify bvn' />
          </div>
        </form>
      </section>

      <section className='mt-4 max-w-screen-md mr-auto bg-white rounded-lg p-6 border'>
        <h2 className="font-semibold text-lg">Bank Details</h2>
        {
          activeBankAccountsIsLoading ? 'Loading...' :
            <>
              <div className="my-8 max-h-64 overflow-y-auto grid grid-cols-3 gap-4">
                {
                  activeBankAccounts && activeBankAccounts?.length > 0 ?
                    activeBankAccounts?.map((item, idx) => {
                      return (
                        <UserBank
                          showPrimary
                          id={item.id}
                          key={idx}
                          bankName={item?.bankName}
                          accountName={item?.accountName}
                          accountNumber={item?.accountNumber}
                          isPrimary={item?.isPrimary}
                        />
                      )
                    })
                    :
                    null
                }
              </div>
              {
                !(activeBankAccounts && activeBankAccounts.length > 0) &&
                <>
                  <PiBankFill className='border rounded-full mx-auto p-2' color='#979A93' size={110} />
                  <p className="text-center text-[#899192] leading-loose text-sm mt-6 mb-4">Link Bank Account for Withdrawal</p>
                </>
              }
            </>
        }
        <div className="flex items-center justify-end">
          <Button
            onClick={handleShowAddBankDetailModal}
            name={activeBankAccounts && activeBankAccounts.length > 0 ? 'Add New Account' : 'Link Account'}
            color='primary'
            type='button'
            ariaLabel='button to link your bank account'
          />
        </div>
      </section >

      <AddBankDetailsModal isOpen={showAddBankDetailsModal} onClose={handleShowAddBankDetailModal} />
    </>
  )
}

export default Profile