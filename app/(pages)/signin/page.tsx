import React from 'react';
import Links from '@/app/components/Links/Index';
import Button from '@/app/components/Button/Button';
import Input from '@/app/components/Input/Input';
import PasswordInput from '@/app/components/Input/PasswordInput';
import Logo from '@/app/components/Logo/Logo';

const SignIn = () => {
    return (
        <main className='md:bg-signUp-pattern bg-primary h-screen md:grid md:place-items-center md:bg-[length:12em_12em]'>
            <form className="relative md:shadow-lg md:bg-white rounded-2xl px-4 py-8 md:p-8 w-auto md:min-w-[500px]" autoComplete="off">
                <div className="pt-6 pb-10">
                    <Logo />
                </div>
                <p className="text-primary max-md:text-white font-medium text-center text-xl leading-loose">Welcome Back!</p>
                <p className="text-center text-[#929090] max-md:text-white">Glad to have you back. Your account details</p>

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

                <div className="flex flex-col gap-4 py-16 ">
                    <Button name="Continue" ariaLabel="Continue button" color="primary" />
                </div>
                <p className="text-center">
                    <span className="max-md:text-white text-FBlack ">Don&apos;t have an account?</span>
                    <span className="pl-1">
                        <Links color='text-white' href="/" ariaLabel="link to go to sign up page" name={"Sign up here"} />
                    </span>
                </p>
            </form>
        </main>
    );
}

export default SignIn