'use client';

import Button from '@/app/components/Button/Button'
import OTPInput from '@/app/components/Forms/OTPInput';
import Input from '@/app/components/Input/Input';
import { WhiteLogo } from '@/app/components/Logo/Logo';
import { resendOtpApiService } from '@/app/utils/services/resendOtp/resendOtpApiService';
import { verifyOtpApiService } from '@/app/utils/services/verifyOtp/verifyOtpApiService';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';


interface Props {
    email: string
    userId: string
}
const VerifyOtpForm: React.FC<Props> = ({ email, userId }) => {
    const [otpPin, setOtpPin] = useState<string | null>(null);

    const router = useRouter();

    const completeEnteringOtp = (pin: string) => {
        setOtpPin(pin);
    };

    const mutation = useMutation({
        mutationKey: ['verify-otp'],
        mutationFn: verifyOtpApiService,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {

            if (data.success === false) {
                toast.error(data.message)
            } else {
                toast.success(data.message);
                router.push('/ready')
            }
        }
    });

    const resendMutation = useMutation({
        mutationKey: ['resend-otp'],
        mutationFn: resendOtpApiService,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {

            if (data.success === false) {
                toast.error(data.message)
            } else {
                toast.success(data.message);
            }
        }
    })

    const submit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const data = { otp: otpPin as string, email: email }

        mutation.mutate(data);
    };

    return (
        <form onSubmit={submit} className="mx-auto max-w-[500px] px-4 py-8 md:p-8 relative" autoComplete="off">
            <div className="pb-4 md:py-6">
                <WhiteLogo />
            </div>
            <h6 className="text-white font-semibold text-left text-xl md:text-3xl leading-loose font-bvp">Check your email</h6>
            <p className="text-sm md:text-base text-left text-white lg:w-5/6 ">We sent an OTP to email. Please check to recover your account</p>

            <section className='mx-auto flex flex-col justify-center mt-6'>
                <OTPInput length={6} onComplete={completeEnteringOtp} />
            </section>

            <div className='flex items-center justify-end'>
                <button className="text-sm text-white leading-loose pb-2 pt-6" type='button' onClick={() => resendMutation.mutate({ userId: userId as unknown as string })}>{resendMutation.isPending ? 'sending' : 'Resend OTP'}</button>
            </div>

            <div className="flex flex-col gap-4 pb-10 ">
                <Button type='submit' processing={mutation.isPending} name="Continue" ariaLabel="button to continue" color="white" />
            </div>
        </form>
    )
}

export default VerifyOtpForm