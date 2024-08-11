'use client';

import React, { useState } from 'react'
import PasswordInput from '../Input/PasswordInput'
import Button, { ButtonLink } from '../Button/Button'
import Links from '../Links/Index'
import Input from '../Input/Input'
import Logo, { WhiteLogo } from '../Logo/Logo'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import signUpSchema, { SignUpSchema } from '@/app/schemaa/signUpSchema';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { registerApiService } from '@/app/utils/services/register/registerApiService';
import Modal from '../Modal/Modal';
import Image from 'next/image';

const SignUpForm = () => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const mutation = useMutation({
        mutationFn: registerApiService,
        mutationKey: ['register'],
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess(data) {
            if (data.success === false) {
                toast.error(data.message);
                console.log(data);

            } else {
                toast.success(data.message);
                setShowSuccessModal(true)
            }
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
        <>
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
            <Modal
                isOpen={showSuccessModal}
                onClose={() => {
                    setShowSuccessModal(false);
                    router.push('/signin')
                }}

                bgColor='bg-white'
            >
                <div className="mx-auto max-w-[500px] px-4 py-8 md:p-8 relative">

                    <h6 className="font-semibold text-left text-xl md:text-3xl leading-loose font-bvp text-primary">Check your email</h6>
                    <p className="text-sm md:text-base text-left">We sent you an OTP to your email. Kindly check to verify your acount.</p>

                    <div>
                        <Image src={'/images/verify-email.gif'} width={253} className='mx-auto' height={253} alt={'Envelope representing email sent to the mailbox'} />
                    </div>

                    <div className="flex flex-col gap-4 py-10">
                        <ButtonLink href='/signin' name="Continue" ariaLabel="Continue button" color="primary" />
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default SignUpForm