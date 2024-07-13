import Button, { ButtonLink } from '@/app/components/Button/Button'
import Input from '@/app/components/Input/Input'
import Logo, { WhiteLogo } from '@/app/components/Logo/Logo'
import React from 'react'

const CompleteProfile = () => {
    return (
        <form className="relative mx-auto max-w-[500px] px-4 py-8 md:p-8" autoComplete="off">
            <div className="pt-6 pb-6">
                <WhiteLogo />
            </div>
            <h6 className="text-white font-semibold text-left text-3xl leading-loose font-bvp">Complete your profile</h6>
            <p className="text-left text-white ">It&apos; a good day to create ideas that will change the world</p>
            <div className="space-y-4 pt-6">
                <Input
                    label='First Name'
                    name='first_name'
                    type='text'
                    placeholder='eg John'
                    autoComplete='off'
                    error=''
                />
                <Input
                    label='Last Name'
                    name='last_name'
                    type='text'
                    placeholder='eg Doe'
                    autoComplete='off'
                    error=''
                />
                <Input
                    label='Phone Number'
                    name='phone'
                    type='tel'
                    placeholder='+234'
                    autoComplete='off'
                    error=''
                />
                <Input
                    label='Username'
                    name='username'
                    type='text'
                    placeholder='eg @noble_sphinx'
                    autoComplete='off'
                    error=''
                />
            </div>

            <div className="flex flex-col gap-4 py-10">
                <ButtonLink href='/ready' name="Continue" ariaLabel="Continue button" color="white" />
            </div>
        </form>
    )
}

export default CompleteProfile