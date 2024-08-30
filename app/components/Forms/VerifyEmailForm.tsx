'use client';

import Link from 'next/link'
import React from 'react'
import { WhiteLogo } from '../Logo/Logo'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useParams } from 'next/navigation';

const VerifyEmailForm = () => {
    const params = useParams();

    console.log(params);
    
    return (
        <form
            // onSubmit={handleSubmit}
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
                // defaultValue={email}
                />
            </div>

            <div className="flex flex-col gap-4 py-10">
                <Button
                    type='submit'
                    // processing={forgotPasswordMutation.isPending}
                    name="Submit"
                    ariaLabel="Submit button"
                    color="white"
                />
            </div>
        </form>
    )
}

export default VerifyEmailForm