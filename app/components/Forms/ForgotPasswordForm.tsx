import React from 'react'
import Logo, { WhiteLogo } from '../Logo/Logo'
import Input from '../Input/Input'
import { ButtonLink } from '../Button/Button'

const ForgotPasswordForm = () => {
    return (
        <form className="relative mx-auto max-w-[500px] px-4 py-8 md:p-8" autoComplete="off">
            <div className="pb-4 md:py-6">
                <WhiteLogo />
            </div>
            <h6 className="text-white font-medium text-left text-xl md:text-3xl font-bvp leading-loose">Forgot Password</h6>
            <p className="text-sm md:text-base text-left text-white/80 font-extralight">Oh snap! Let&apos;s recover your account.</p>
            <div className="space-y-4 pt-6">
                <Input
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='Enter Email Address'
                    autoComplete='off'
                    error=''
                />
            </div>
           
            <div className="flex flex-col gap-4 py-10">
                <ButtonLink href='/verify-otp' name="Continue" ariaLabel="Continue button" color="white" />
            </div>
        </form>
    )
}

export default ForgotPasswordForm