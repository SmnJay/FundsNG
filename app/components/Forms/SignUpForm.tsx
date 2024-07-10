'use client';

import React from 'react'
import PasswordInput from '../Input/PasswordInput'
import Button from '../Button/Button'
import Links from '../Links/Index'
import Input from '../Input/Input'
import Logo from '../Logo/Logo'
import { useRouter } from 'next/navigation'

const SignUpForm = () => {
    const router = useRouter();

    return (
        <form className="mx-auto max-w-[500px] px-4 py-8 md:p-8" autoComplete="off">
            <div className="pt-6 pb-6">
                <Logo color='white'/>
            </div>
            <h6 className="text-white font-semibold text-left text-2xl leading-loose">Good Day, Welcome!</h6>
            <p className=" text-white/80 font-extralight">Sign up with your email to access the platform</p>

            <div className="space-y-4 pt-6">

                <Input
                    label='Username'
                    name='username'
                    type='text'
                    placeholder='(eg @babablue)'
                    error=''
                />

                <Input
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='Enter your Email Address'
                    autoComplete='off'
                    error=''
                />

                <PasswordInput
                    label='Password'
                    name='passworrd'
                    type='password'
                    placeholder='Enter your password'
                    autoComplete='off'
                    error=''
                />

                <PasswordInput
                    label='Confirm Password'
                    name='passworrd'
                    type='password'
                    placeholder='Enter your password again'
                    autoComplete='off'
                    error=''
                />
            </div>

            <div className="flex flex-col gap-4 py-10 ">
                <Button name="Continue" ariaLabel="Continue button" color="white" onClick={() => router.push('/verify-email')}/>
            </div>
            <p className="text-center">
                <span className="text-white">Already have an account?</span>
                <span className="pl-1">
                    <Links cls='text-white underline' color='white' href="/signin" ariaLabel="link to go to sign in page" name={"Sign in here"} />
                </span>
            </p>
        </form>
    )
}

export default SignUpForm