'use client';

import Button from '@/app/components/Button/Button'
import Input from '@/app/components/Input/Input'
import { WhiteLogo } from '@/app/components/Logo/Logo'
import completeRegistrationSchema, { CompleteRegistrationSchema } from '@/app/schemaa/completeRegistrationSchema';
import { completeRegistrationApiService } from '@/app/utils/services/completeRegistration/completeReistrationApiService';
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import style from '../Input/InputField.module.css';
import { useSession } from 'next-auth/react';

const CompleteProfile = () => {
    const { data } = useSession();
    const [userId, setUserId] = useState('');
    const router = useRouter()
    const { handleSubmit, register, formState: { errors } } = useForm<CompleteRegistrationSchema>({
        resolver: zodResolver(completeRegistrationSchema),
        mode: 'onTouched'
    });

    const mutation = useMutation({
        mutationKey: ['complete-registration'],
        mutationFn: completeRegistrationApiService,
        onError: (error) => {
            console.log(error);
            toast.error(error.message)
        },
        onSuccess: (data) => {
            console.log(data);

            if (data.success === false) {
                toast.error(data.message)
            } else {
                toast.success(data.message);
                router.push('/verify')
            }
        },
    });

    const pushToSignInPage = () => {
        router.push('/signin')
    }

    const submit = (formData: CompleteRegistrationSchema) => {
        const fullData = { ...formData, userId }
        mutation.mutate(fullData)
    }

    useEffect(() => {
        console.log("Session data:", data);  // Check what the session data contains
        if (data && data.user && data.user.userId) {
            console.log("Setting userId:", data.user.userId);
            setUserId(data.user.userId);
        } else {
            console.log("No userId found in session data");
        }
    }, [data]);

    return (
        <form onSubmit={handleSubmit(submit)} className="relative mx-auto max-w-[500px] px-4 py-8 md:p-8" autoComplete="off">
            <div className="pb-4 md:py-6">
                <WhiteLogo />
            </div>
            <h6 className="text-white font-semibold text-left text-xl md:text-3xl leading-loose font-bvp">Complete your profile</h6>
            <p className="text-sm md:text-base text-left text-white ">It&apos;s a good day to create ideas that will change the world</p>
            <div className="pt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className='col-span-2'>
                    <Input
                        label='First Name'
                        type='text'
                        placeholder='eg John'
                        autoComplete='off'
                        error={errors.firstName && errors.firstName.message}
                        {...register('firstName')}
                    />
                </div>
                <div className='col-span-2'>
                    <Input
                        label='Last Name'
                        type='text'
                        placeholder='eg Doe'
                        autoComplete='off'
                        error={errors.lastName && errors.lastName.message}
                        {...register('lastName')}
                    />
                </div>
                <div className="col-span-2">
                    <Input
                        label='Phone Number'
                        type='tel'
                        placeholder='080123456753'
                        autoComplete='off'
                        maxLength={11}
                        minLength={11}
                        error={errors.mobile && errors.mobile.message}
                        {...register('mobile')}
                    />
                </div>
                <div className="col-span-2">
                    <Input
                        label='BVN'
                        type='number'
                        placeholder='11234567890'
                        maxLength={11}
                        minLength={11}
                        autoComplete='off'
                        error={errors.bvn && errors.bvn.message}
                        {...register('bvn')}
                    />
                </div>
                <div className="col-span-1">
                    <div className={style.container + `w-full rounded-lg bg-primary-30 px-3 py-2 border ${errors.gender ? '!border-red-400 border-2' : ''}`}>
                        <label htmlFor="gender" className="text-sm block text-primary-20">Gender</label>
                        <select {...register('gender')} id="gender" className='border-none outline-none bg-transparent w-full text-sm text-white'>
                            <option value="male" selected className="!text-black">Male</option>
                            <option value="female" className="!text-black">Female</option>
                            <option value="others" className="!text-black">Others</option>
                        </select>
                        {errors.gender && <span className="text-red-400 text-sm px-1">{errors.gender.message}</span>}
                    </div>
                </div>
                <div className='col-span-1'>
                    <Input
                        label='Date of Birth'
                        type='date'
                        placeholder='eg 13/03/1987'
                        autoComplete='off'
                        error={errors.dob && errors.dob.message}
                        {...register('dob')}
                    />
                </div>
            </div>
            <div className="flex gap-4 py-10 w-full">
                <Button name="Skip" cls='basis-1/2' onClick={pushToSignInPage} ariaLabel="Skip button" color='white' type='button' />
                <Button name="Submit" cls='basis-1/2' processing={mutation.isPending} ariaLabel="Submit button" color="white" type='submit' />
            </div>
        </form>)
}

export default CompleteProfile