import Image from 'next/image'
import React from 'react'
import { PiPiggyBankLight } from 'react-icons/pi'
import { ButtonLink } from '../Button/Button'

const BottomCards = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
            <div className='bg-primary-10 rounded-lg p-8'>
                <div className="flex items-center justify-between gap-4">
                    <h6 className="text-white text-xl font-semibold">Crush any goal with our unique target savings plan</h6>
                    <PiPiggyBankLight className='text-white h-14 w-14' />
                </div>
                <p className="text-[#CAE3E4] text-xs pt-3 pb-6 leading-5">Harness the collective strength of our community
                    to drive positive change where it matters most.</p>
                <Image src="/images/piggy-in-L.png" alt="piggy image" className="ml-auto mr-0 aspect-w-16 aspect-h-9" width={199} height={144} />
            </div>
            <div className='bg-white rounded-lg p-8'>
                <div className="flex items-center justify-between gap-4">
                    <h6 className="text-black text-xl font-semibold">Savings just got better!</h6>
                    <PiPiggyBankLight className='text-black h-14 w-14' />
                </div>
                <p className="text-[#323232] text-xs pt-3 pb-6 leading-5">Target Savings tool makes saving simple and efficient. Set your target, watch your savings grow, and reach your goals faster than ever before. No matter what you&apos;re saving for, we&apos;re here to help you stay on track and make it happen!</p>
                <ButtonLink cls='w-1/2' color='black' href='/dashboard/savings' name={'Start Savings'} ariaLabel='Start Savings Button' />
            </div>
        </section>
    )
}

export default BottomCards