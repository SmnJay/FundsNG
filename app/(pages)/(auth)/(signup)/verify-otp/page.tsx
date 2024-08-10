'use client';

import Button from '@/app/components/Button/Button'
import OTPInput from '@/app/components/Forms/OTPInput';
import Input from '@/app/components/Input/Input';
import { WhiteLogo } from '@/app/components/Logo/Logo';
import { resendOtpApiService } from '@/app/utils/services/resendOtp/resendOtpApiService';
import { verifyOtpApiService } from '@/app/utils/services/verifyOtp/verifyOtpApiService';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { NextRequest } from 'next/server';
import React, { useState } from 'react'
import { toast } from 'react-toastify';


const page = () => {
  const [otpPin, setOtpPin] = useState<string | null>(null);
  const [email, setEmail] = useState('')

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
      console.log(data);

      if (data.success === false) {
        toast.error(data.message)
      } else {
        toast.success(data.message);
        router.push('/ready')
      }
    }
  });
  const submit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const data = { otp: otpPin as string, email: email }

    mutation.mutate(data);
  };



  const resendOtpMutation = useMutation({
    mutationKey: ['resend-otp'],
    mutationFn: resendOtpApiService,
  })

  // const handleResendOtp = () => {
  //   resendOtpApiService.mutate('')
  // }

  return (
    <form onSubmit={submit} className="mx-auto max-w-[500px] px-4 py-8 md:p-8 relative" autoComplete="off">
      <div className="pb-4 md:py-6">
        <WhiteLogo />
      </div>
      <h6 className="text-white font-semibold text-left text-xl md:text-3xl leading-loose font-bvp">Check your email</h6>
      <p className="text-sm md:text-base text-left text-white lg:w-5/6 ">We sent an OTP to email. Please check to recover your account</p>

      <section className='mx-auto flex flex-col justify-center mt-6'>
        <Input
          error=''
          label='Enter your email to be verified'
          placeholder='xyz@mail.com'
          name='email'
          type='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <OTPInput length={6} onComplete={completeEnteringOtp} />
      </section>



      {/* <section className="pt-6">
        <p className="text-white text-sm leading-loose">Didn&apos;t get the code? <button onClick={handleResendOtp} className='underline'>Resend</button></p>
      </section> */}

      <div className="flex flex-col gap-4 pt-10 pb-10 ">
        <Button type='submit' processing={mutation.isPending} name="Continue" ariaLabel="button to continue" color="white" />
      </div>
    </form>
  )
}

export default page