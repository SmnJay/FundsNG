import React, { FC, useState } from 'react'
import Modal from './Modal'
import OTPInput from '../Forms/OTPInput'

type Props = {
    showModal: boolean,
    handleModal: () => void
}
const OTPModal: FC<Props> = ({ showModal, handleModal }) => {
    const [otpPin, setOtpPin] = useState<string | null>(null);

    const completeEnteringOtp = (pin: string) => {
        setOtpPin(pin);
    };

    return (
        <Modal
            size='large'
            isOpen={showModal}
            onClose={handleModal}
            zIndex='z-[100]'
        >
            <h2 className="text-center font-semibold text-lg pb-1 text-primary-10">Enter OTP</h2>
            <OTPInput length={6} onComplete={completeEnteringOtp} />
            <button
                className='flex items-center gap-2 font-light text-sm rounded-lg border border-leafGreen-20 hover:brightness-95 ease-linear duration-200 px-8 py-2 bg-leafGreen-20 text-white mt-6 mx-auto'
                onClick={() => { }}
                type="button"
            >

                Proceed
            </button>
        </Modal>
    )
}

export default OTPModal