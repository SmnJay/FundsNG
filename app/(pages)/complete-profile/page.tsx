import Button from '@/app/components/Button/Button'
import Input from '@/app/components/Input/Input'
import Logo from '@/app/components/Logo/Logo'
import React from 'react'

const CompleteProfile = () => {
    return (
        <form className="relative md:shadow-lg md:bg-white rounded-2xl px-4 py-8 md:p-8 w-auto md:min-w-[500px]" autoComplete="off">
            <div className="pt-6 pb-10">
                <Logo />
            </div>
            <p className="text-primary font-medium text-center text-xl leading-loose">Complete your profile</p>
            <p className="text-center text-[#929090] ">It&apos; a good day to create ideas that will change the world</p>
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

            <div className="flex flex-col gap-4 py-16 ">
                <Button name="Continue" ariaLabel="Continue button" color="primary" />
            </div>
        </form>
    )
}

export default CompleteProfile