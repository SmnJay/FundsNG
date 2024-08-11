'use client';

import React from 'react'
import { WhiteLogo } from '../Logo/Logo'
import Input from '../Input/Input'
import Button, { ButtonLink } from '../Button/Button'
import { useMutation } from '@tanstack/react-query'
import { forgotPasswordApiService } from '@/app/utils/services/forgotPassword/forgotPasswordApiService'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

interface Props {
    email: string
}

const ForgotPasswordForm: React.FC<Props> = ({ email }) => {

    const router = useRouter();

    const forgotPasswordMutation = useMutation({
        mutationKey: ['forgot-password'],
        mutationFn: forgotPasswordApiService,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess(data) {
            if (data.success === false) {
                toast.error(data.message);

            } else {
                toast.success(data.message);
                router.push(`/reset-password?token=${encodeURIComponent(data.data)}`);
            }
        },
    })

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const data = {
            email: email
        };
        forgotPasswordMutation.mutate(data)
    }

    return (
        <form onSubmit={handleSubmit} className="relative mx-auto max-w-[500px] px-4 py-8 md:p-8" autoComplete="off">
            <Link href='/' className="pb-4 md:py-6">
                <WhiteLogo />
            </Link>
            <h6 className="text-white font-semibold text-left text-xl md:text-3xl font-bvp leading-loose">Forgot Password</h6>
            <p className="text-sm md:text-base text-left text-white/80 font-extralight">Oh snap! Let&apos;s recover your account.</p>
            <div className="space-y-4 pt-6">
                <Input
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='Enter Email Address'
                    autoComplete='off'
                    error=''
                    defaultValue={email}
                />
            </div>

            <div className="flex flex-col gap-4 py-10">
                <Button type='submit' processing={forgotPasswordMutation.isPending} name="Submit" ariaLabel="Submit button" color="white" />
            </div>
        </form>
    )
}

export default ForgotPasswordForm