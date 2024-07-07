import React from 'react'
import Button from '../Button/Button'
import PasswordInput from '../Input/PasswordInput'
import Links from '../Links/Index'
import Logo from '../Logo/Logo'
import Input from '../Input/Input'

const SignInForm = () => {
    return (
        <form className="relative md:shadow-lg md:bg-white rounded-2xl px-4 py-8 md:p-8 w-auto md:min-w-[500px]" autoComplete="off">
            <div className="pt-6 pb-6">
                <Logo />
            </div>
            <h6 className="text-primary font-medium text-center text-xl leading-loose">Welcome Back!</h6>
            <p className="text-center text-[#929090] ">Glad to have you back. Your account details</p>
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
            <div className="py-2 flex items-center justify-end">
                <Links color='text-primary' cls='text-sm' href='/forgot-password' ariaLabel='Link to visit the forgot password page.' name='Forgot Password?' />
            </div>
            <div className="flex flex-col gap-4 py-10">
                <Button name="Continue" ariaLabel="Continue button" color="primary" />
            </div>
            <p className="text-center">
                <span className=" text-FBlack ">Don&apos;t have an account?</span>
                <span className="pl-1">
                    <Links color='text-white' href="/" ariaLabel="link to go to sign up page" name={"Sign up here"} />
                </span>
            </p>
        </form>
    )
}

export default SignInForm