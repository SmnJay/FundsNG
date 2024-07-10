import React from 'react'
import Logo from '../Logo/Logo'
import Input from '../Input/Input'
import { ButtonLink } from '../Button/Button'

const ForgotPasswordForm = () => {
    return (
        <form className="relative md:shadow-lg md:bg-white rounded-2xl px-4 py-8 md:p-8 w-auto md:min-w-[500px]" autoComplete="off">
            <div className="pt-6 pb-6">
                <Logo color='white'/>
            </div>
            <h6 className="text-white font-medium text-left text-xl leading-loose">Forgot Password</h6>
            <p className="text-left text-white ">Oh snap! Let&apos;s recover your account.</p>
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