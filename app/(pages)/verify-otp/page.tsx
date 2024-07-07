'use client';

import Button from '@/app/components/Button/Button'
import OTPInput from '@/app/components/Forms/OTPInput';
import React from 'react'
import toast from 'react-hot-toast';

const page = () => {
  const handleSubmit = (pin: string) => {
    // handle api request here but I'm console logging it
    console.log(pin)
    toast.success('Here is my toast');
  };

  return (
    <form className="md:shadow-lg md:bg-white rounded-2xl w-auto md:min-w-[500px] px-4 py-8 md:p-8" autoComplete="off">
      <h6 className="text-primary font-medium text-center text-xl leading-loose">Check your email</h6>
      <p className="text-center text-[#929090] w-5/6 mx-auto">We sent an OTP to email. Please check to recover your account</p>

      <section className='mx-auto flex justify-center'>
        <OTPInput length={6} onComplete={handleSubmit} />

      </section>

      <div className="flex flex-col gap-4 py-10 ">
        <Button name="Continue" ariaLabel="button to continue" color="primary" />
      </div>
    </form>
  )
}

export default page