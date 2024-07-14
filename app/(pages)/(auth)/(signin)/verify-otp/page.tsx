'use client';

import Button, { ButtonLink } from '@/app/components/Button/Button'
import OTPInput from '@/app/components/Forms/OTPInput';
import Logo, { WhiteLogo } from '@/app/components/Logo/Logo';
import React from 'react'
import toast from 'react-hot-toast';

const page = () => {
  const handleSubmit = (pin: string) => {
    // handle api request here but I'm console logging it
    console.log(pin)
    toast.success('Here is my toast');
  };

  return (
    <form className="mx-auto max-w-[500px] px-4 py-8 md:p-8 relative" autoComplete="off">
      <div className="pb-4 md:py-6">
        <WhiteLogo />
      </div>
      <h6 className="text-white font-medium text-left text-xl md:text-3xl leading-loose font-bvp">Check your email</h6>
      <p className="text-sm md:text-base text-left text-white lg:w-5/6 ">We sent an OTP to email. Please check to recover your account</p>

      <section className='mx-auto flex justify-center'>
        <OTPInput length={6} onComplete={handleSubmit} />
      </section>

      <div className="flex flex-col gap-4 py-10 ">
        <ButtonLink href='/signin' name="Continue" ariaLabel="button to continue" color="white" />
      </div>
    </form>
  )
}

export default page