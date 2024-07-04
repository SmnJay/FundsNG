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
        <form className="md:shadow-lg md:bg-white rounded-2xl w-auto md:min-w-[500px] px-4 py-8 md:p-8" autoComplete="off">
            <div className="pt-6 pb-10">
                <Logo />
            </div>
            <p className="text-primary font-medium text-center text-xl leading-loose">Good Day, Welcome!</p>
            <p className="text-center text-[#929090]">It&apos;s a good day to create ideas that will change the world</p>

            <div className="space-y-4 pt-6">

                <Input
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='Enter Email Address'
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

            <div className="flex flex-col gap-4 py-16 ">
                <Button name="Sign up with Google" ariaLabel="button to sign up with google" color="grey" />
                <Button name="Continue" ariaLabel="Continue button" color="primary" onClick={() => router.push('/verify-email')}/>
            </div>
            <p className="text-center">
                <span className="text-FBlack">Already have an account?</span>
                <span className="pl-1">
                    <Links href="/signin" ariaLabel="link to go to sign in page" name={"Sign in here"} />
                </span>
            </p>
        </form>
    )
}

export default SignUpForm