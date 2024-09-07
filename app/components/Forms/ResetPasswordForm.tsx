'use client';

import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter, useSearchParams } from 'next/navigation'
import { WhiteLogo } from '../Logo/Logo';
import { resetPasswordApiService } from '@/app/utils/services/resetPassword/resetPasswordApiService';
import { useMutation } from '@tanstack/react-query';
import Button from '../Button/Button';
import schema, { ResetPasswordSchema } from '@/app/schemaa/resetPasswordSchema';
import useFormValidation from '@/app/utils/hooks/useFormValidation';
import PasswordInput from '../Input/PasswordInput';
import Link from 'next/link';

interface Props {
}

const ResetPasswordForm: React.FC<Props> = () => {

    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');

    const { handleSubmit, errors, register } = useFormValidation<ResetPasswordSchema>(schema, 'onTouched');

    const searchParams = useSearchParams();


    const router = useRouter();

    const resetPasswordMutation = useMutation({
        mutationKey: ['forgot-password'],
        mutationFn: resetPasswordApiService,
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

    const submit = async (data: ResetPasswordSchema) => {

        const formData = {
            ...data,
            email: email,
            token: token
        }
        resetPasswordMutation.mutate(formData)
    }

    useEffect(() => {
        const emailParam = searchParams.get('email');
        let tokenParam = searchParams.get('token') as string;

        tokenParam = tokenParam?.replace(/ /g, '+');

        if (emailParam) setEmail(emailParam);
        if (tokenParam) setToken(tokenParam);
    }, [searchParams]);

    return (
        <form onSubmit={handleSubmit(submit)} className="relative mx-auto max-w-[500px] px-4 py-8 md:p-8" autoComplete="off">
            <Link href='/' className="pb-4 md:py-6">
                <WhiteLogo />
            </Link>
            <h6 className="text-white font-semibold text-left text-xl md:text-3xl font-bvp leading-loose">Reset Password</h6>
            <p className="text-sm md:text-base text-left text-white/80 font-extralight">Oh snap! Let&apos;s recover your account.</p>
            <div className="space-y-4 pt-6">
                <PasswordInput
                    label='New Password'
                    type='password'
                    placeholder='Enter New Password'
                    autoComplete='off'
                    error={errors.password?.message}
                    {...register('password')}
                />

                <PasswordInput
                    {...register('confirmPassword')}
                    label='Confirm Password'
                    type='password'
                    placeholder='Confirm New Password'
                    autoComplete='off'
                    error={errors.confirmPassword?.message}
                />
            </div>

            <div className="flex flex-col gap-4 py-10">
                <Button type='submit' processing={resetPasswordMutation.isPending} name="Submit" ariaLabel="Submit button" color="white" />
            </div>
        </form>
    )
}

export default ResetPasswordForm