'use client';

import React from 'react'
import Button, { ButtonLink } from '../Button/Button'
import PasswordInput from '../Input/PasswordInput'
import Links from '../Links/Index'
import { WhiteLogo } from '../Logo/Logo'
import Input from '../Input/Input'
import { FcGoogle } from 'react-icons/fc'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { zodResolver } from '@hookform/resolvers/zod'
import signInSchema, { SignInSchema } from '@/app/schema/signInSchema';


const SignInForm = () => {
    const { control, register, handleSubmit, formState: { errors } } = useForm<SignInSchema>({ resolver: zodResolver(signInSchema), mode: 'onTouched' })

    const onSubmit = async (data: SignInSchema) => {
        // await signIn("credentials", {
        //     email: data.email,
        //     password: data.password,
        //     redirect: false,
        //     callbackUrl: '/dashboard'
        // })

        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="relative mx-auto max-w-[500px] px-4 py-8 md:p-8" autoComplete="off">
            <div className="pb-4 md:py-6">
                <WhiteLogo />
            </div>
            <h6 className="text-white font-semibold text-left text-xl md:text-3xl font-bvp leading-loose">Welcome Back!</h6>
            <p className="text-sm md:text-base text-left text-white/80 font-extralight">Glad to have you back. Your account details</p>
            <div className="space-y-4 pt-6">

                <Input
                    label='Email'
                    type='email'
                    placeholder='Enter Email Address'
                    autoComplete='off'
                    error={errors.email && errors.email.message}
                    {...register('email')}
                />
                <PasswordInput
                    label='Password'
                    type='password'
                    placeholder='Enter your password'
                    autoComplete='off'
                    error={errors.password && errors.password.message}
                    {...register('password')}
                />
            </div>
            <div className="pt-4 flex items-center justify-end">
                <Links color='white' cls='text-sm text-white' href='/forgot-password' ariaLabel='Link to visit the forgot password page.' name='Forgot Password?' />
            </div>
            <div className="flex flex-col gap-4 py-10">
                
                <Button type='submit' name="Continue" ariaLabel="Continue button" color="white" />
                {/* <ButtonLink href='/dashboard' name="Continue" ariaLabel="Continue button" color="white" /> */}
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