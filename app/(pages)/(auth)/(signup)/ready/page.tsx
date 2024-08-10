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
            <h6 className="text-white font-semibold text-center text-xl md:text-3xl leading-loose font-bvp">Your account is ready</h6>
            <p className="text-sm md:text-base text-center text-white">Welcome to the online platform for fundraising and efficient saving towards goals</p>


            <div className="flex gap-4 py-10">
                <ButtonLink cls='basis-1/2' href='/complete-profile' name="Setup Profile" ariaLabel="Setup Profile" color="white" />
                <ButtonLink cls='basis-1/2' href='/signin' name="Go to Sign in" ariaLabel="Continue button" color="white" />
            </div>

        </div>
    )
}

export default Ready