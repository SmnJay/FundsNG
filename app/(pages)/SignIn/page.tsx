import React from 'react'
import Image from 'next/image';
import Links from '@/app/components/Links/Index';
import Button from '@/app/components/Button/Button';

const SignIn = () => {
    return (
        <main className='md:bg-signUp-pattern bg-primary h-screen md:grid md:place-items-center md:bg-[length:12em_12em]'>
            <form className="md:shadow-lg md:bg-white rounded-2xl px-4 py-8 md:p-8 w-auto md:min-w-[500px]" autoComplete="off">
                <div className="pt-6 pb-10">
                    <Image src='/images/full_logo.png' alt="Funds Ng Logo" width={193} height={40} className="mx-auto" />
                </div>
                <p className="text-primary max-md:text-white font-medium text-center text-xl leading-loose">Welcome Back!</p>
                <p className="text-center text-[#929090] max-md:text-white">Glad to have you back. Your account details</p>

                <div className="space-y-4 pt-6">
                    <div>
                        <div className='form-group rounded-lg border border-[#E5E2E1] px-3 py-2'>
                            <label htmlFor="" className="block text-sm text-[#929090] max-md:text-white">Email</label>
                            <input type="email" autoComplete="off" className="max-md:bg-transparent max-md:text-white w-full text-FBlack font-medium focus:border-none focus:ring-none focus:outline-none" placeholder="Enter your Email" />
                        </div>
                        <span className="text-red-500 hidden">Error</span>
                    </div>

                    <div>
                        <div className='form-group rounded-lg border border-[#E5E2E1] px-3 py-2'>
                            <label htmlFor="" className="block text-sm text-[#929090] max-md:text-white">Password</label>
                            <input type="password" autoComplete="off" className="max-md:bg-transparent max-md:text-white w-full text-FBlack font-medium focus:border-none focus:ring-none focus:outline-none" placeholder="Enter your Password" />
                        </div>
                        <span className="text-red-500 hidden">Error</span>
                    </div>
                </div>

                <div className="flex flex-col gap-4 py-16 ">
                    <Button name="Continue" ariaLabel="Continue button" color="primary" />
                </div>
                <p className="text-FBlack text-center">
                    <span className="max-md:text-white">Don&apos;t have an account?</span>
                    <span className="pl-1">
                        <Links color='text-white' href="/" ariaLabel="link to go to sign in page" name={"Sign up here"} />
                    </span>
                </p>
            </form>
        </main>
    );
}

export default SignIn