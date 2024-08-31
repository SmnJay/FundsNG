'use client';

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { WhiteLogo } from '../Logo/Logo'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useRouter, useSearchParams } from 'next/navigation';
import { verifyEmailApiService } from '@/app/utils/services/verifyEmail/verifyEmailApiService';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const VerifyEmailForm = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    console.log(searchParams)

    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');

    console.log({ email, token })

    useEffect(() => {
        const emailParam = searchParams.get('email');
        const tokenParam = searchParams.get('token');

        if (emailParam) setEmail(emailParam);
        if (tokenParam) setToken(tokenParam);
    }, [searchParams]);

    console.log({ email, token });

    const formData = {
        email,
        token
    };

    const verifyEmailMutation = useMutation({
        mutationKey: ['verify-email'],
        mutationFn: verifyEmailApiService,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess(data) {
            if (data.success === false) {
                toast.error(data.message);
            } else {
                toast.success(data.message);
                router.push('/signin')
            }
        },
    })

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        verifyEmailMutation.mutate(formData)
    }



    return (
        <form
            onSubmit={handleSubmit}
            className="relative mx-auto max-w-[500px] px-4 py-8 md:p-8"
            autoComplete="off"
        >
            <Link href='/' className="pb-4 md:py-6">
                <WhiteLogo />
            </Link>
            <h6 className="text-white font-semibold text-left text-xl md:text-3xl font-bvp leading-loose">Verify Email</h6>
            <p className="text-sm md:text-base text-left text-white/80 font-extralight">Oh yea! Let&apos;s verify your account.</p>
            <div className="space-y-4 pt-6">
                <Input
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='Enter Email Address'
                    autoComplete='off'
                    error=''
                    readOnly
                    defaultValue={email !== null ? email : ''}
                />
            </div>
            <Link href='/' className='text-right text-white leading-loose mt-4 flex justify-end mx-auto'>Resend Verification Link</Link>

            <div className="flex flex-col gap-4 py-10">
                <Button
                    type='submit'
                    processing={verifyEmailMutation.isPending}
                    name="Submit"
                    ariaLabel="Submit button"
                    color="white"
                />
            </div>
        </form>
    )
}

export default VerifyEmailForm