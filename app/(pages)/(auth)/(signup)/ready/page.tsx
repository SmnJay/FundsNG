import { ButtonLink } from '@/app/components/Button/Button'
import { WhiteLogo } from '@/app/components/Logo/Logo'
import Image from 'next/image'
import React from 'react'

const Ready = () => {
    return (
        <div className="mx-auto max-w-[500px] px-4 py-8 md:p-8 relative">
            <div>
                <Image src={'/images/check.gif'} width={253} className='mx-auto' height={253} alt={'check mark in a circle'} />
            </div>
            <h6 className="text-white font-semibold text-center text-2xl leading-loose">Your account is ready</h6>
            <p className="text-center text-white">Welcome to the online platform for fundraising and efficient saving towards goals</p>


            <div className="flex flex-col gap-4 py-10">
                <ButtonLink href='/dashboard' name="Continue" ariaLabel="Continue button" color="white" />
            </div>

        </div>
    )
}

export default Ready