import React from 'react'
import Logo, { WhiteLogo } from '../Logo/Logo'
import Input from '../Input/Input'
import Button from '../Button/Button'

const CompleteProfile = () => {
    return (
        <form className="relative md:shadow-lg md:bg-white rounded-2xl px-4 py-8 md:p-8 w-auto md:min-w-[500px]" autoComplete="off">
            <div className="pt-6 pb-6">
                <WhiteLogo />
            </div>
            <h6 className="text-white font-semibold text-left text-2xl leading-loose">Complete your profile</h6>
            <p className="text-white/80 font-extralight">It&apos; a good day to create ideas that will change the world</p>
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
                <Button name="Continue" ariaLabel="Continue button" color="primary" />
            </div>
        </form>
    )
}

export default CompleteProfile;