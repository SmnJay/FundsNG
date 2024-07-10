import React from 'react'
import Button, { ButtonLink } from '../Button/Button'
import PasswordInput from '../Input/PasswordInput'
import Links from '../Links/Index'
import Logo from '../Logo/Logo'
import Input from '../Input/Input'
import { FcGoogle } from 'react-icons/fc'

const SignInForm = () => {
    return (
        <form className="relative mx-auto max-w-[500px] px-4 py-8 md:p-8" autoComplete="off">
            <div className="pt-6 pb-6">
                <Logo color='white' />
            </div>
            <h6 className="text-white font-semibold text-left text-2xl leading-loose">Welcome Back!</h6>
            <p className="text-left text-white/80 font-extralight">Glad to have you back. Your account details</p>
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
            </div>
            <div className="pt-4 flex items-center justify-end">
                <Links color='white' cls='text-sm text-white' href='/forgot-password' ariaLabel='Link to visit the forgot password page.' name='Forgot Password?' />
            </div>
            <div className="flex flex-col gap-4 py-10">
                <ButtonLink href='/dashboard' name="Continue" ariaLabel="Continue button" color="white" />
                <ButtonLink href='/' name="Sign in with Google" icon={<FcGoogle />} ariaLabel="Continue button" color="white" />
            </div>
            <p className="text-center">
                <span className=" text-white ">Don&apos;t have an account?</span>
                <span className="pl-1">
                    <Links color='white' cls='text-white underline' href="/" ariaLabel="link to go to sign up page" name={"Sign up here"} />
                </span>
            </p>
        </form>
    )
}

export default SignInForm