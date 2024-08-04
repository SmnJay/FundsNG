'use client';

import React from 'react'
import PasswordInput from '../Input/PasswordInput'
import Button from '../Button/Button'
import Links from '../Links/Index'
import Input from '../Input/Input'
import { WhiteLogo } from '../Logo/Logo'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import signUpSchema, { SignUpSchema } from '@/app/schemaa/signUpSchema';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { registerApiService } from '@/app/utils/services/register/registerApiService';

const SignUpForm = () => {
    const mutation = useMutation({
        mutationFn: registerApiService,
        mutationKey: ['register'],
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess(data) {
            if (data.success === false) {
                toast.error(data.message)
            } else {
                toast.success(data.message);
                router.push('/signin')
            }
            console.log(data);
        },
    });

    const router = useRouter();

    const { handleSubmit, register, formState: { errors } } = useForm<SignUpSchema>({
        resolver: zodResolver(signUpSchema),
        mode: 'onTouched'
    });



    const onSubmit = (formData: SignUpSchema) => {
        mutation.mutate(formData)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-[500px] px-4 py-8 md:p-8" autoComplete="off">
            <div className="pb-4 md:py-6">
                <WhiteLogo />
            </div>
            <h6 className="text-white font-semibold text-left text-xl md:text-3xl font-bvp leading-loose">Good Day, Welcome!</h6>
            <p className="text-sm md:text-base text-white/80 font-extralight">Sign up with your email to access the platform</p>

            <div className="space-y-4 pt-6">
                <Input
                    label='Email'
                    type='email'
                    placeholder='Enter your Email Address'
                    autoComplete='off'
                    error={errors.email && errors.email.message}
                    {...register("email")}
                />

                <PasswordInput
                    label='Password'
                    type='password'
                    placeholder='Enter your password'
                    autoComplete='off'
                    error={errors.password && errors.password.message}
                    {...register("password")}
                />
            </div>

            <div className="flex flex-col gap-4 py-10 ">
                <Button processing={mutation.isPending} name="Continue" type='submit' ariaLabel="Continue button" color="white" />
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