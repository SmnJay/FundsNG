import { ButtonLink } from '@/app/components/Button/Button'
import Logo, { WhiteLogo } from '@/app/components/Logo/Logo'
import Image from 'next/image'
import React from 'react'

const VerifyEmail = () => {

    return (
        <div className="mx-auto max-w-[500px] px-4 py-8 md:p-8 relative">
            <div className="pt-6 pb-6">
                <WhiteLogo />
            </div>
            <h6 className="text-white font-semibold text-left text-2xl leading-loose">Check your email</h6>
            <p className="text-left text-white ">We sent you an email. Please, check to verify your acount.</p>

            <div>
                <Image src={'/images/verify-email.gif'} width={253} className='mx-auto' height={253} alt={'Envelope representing email sent to the mailbox'} />
            </div>

            <div className="flex flex-col gap-4 py-10">
                <ButtonLink href='/complete-profile' name="Continue" ariaLabel="Continue button" color="white" />
            </div>

        </div>
    )
}

export default VerifyEmail