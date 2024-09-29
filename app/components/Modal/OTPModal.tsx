import React, { FC, useState } from 'react'
import Modal from './Modal'
import OTPInput from '../Forms/OTPInput'
import { useMutation } from '@tanstack/react-query'
import { withdrawCampaignApiService } from '@/app/utils/services/campaign/campaignApiService'
import Spinner from '../Spinner/Spinner'
import { encryptData } from '@/app/utils/encryption/EncryptDecrypt'
import toast from 'react-hot-toast'

type Props<T = Record<string, any>> = {
    showModal: boolean,
    handleModal: () => void
    formData: T
}
const OTPModal: FC<Props> = ({ showModal, formData, handleModal }) => {
    const [otpPin, setOtpPin] = useState<string | null>(null);

    const completeEnteringOtp = (pin: string) => {
        setOtpPin(pin);
    };

    const manualWithdrawCampaignFunds = useMutation({
        mutationKey: ['manual-withdraw'],
        mutationFn: withdrawCampaignApiService,
        onError: (error) => {
            toast.error(error.message);
            handleModal()
        },
        onSuccess(data) {
            if (data.success === false) {
                toast.error(data.message);

            } else {
                toast.success(data.message);
            }
        },
    });

    const handleSubmit = async () => {
        if (formData) {
            formData['transactionPin'] = otpPin;
        }

        if (Object.keys(formData).length == 3) {
            let data = encryptData(formData);
            let submitEncryptedData = { encryptedText: data };
            manualWithdrawCampaignFunds.mutateAsync(submitEncryptedData)
        }
    }

    return (
        <Modal
            size='large'
            isOpen={showModal}
            onClose={handleModal}
            zIndex='z-[100]'
        >
            <h2 className="text-center font-semibold text-lg pb-1 text-primary-10">Enter PIN</h2>
            <OTPInput length={4} onComplete={completeEnteringOtp} />
            <small className='text-center leading-loose block'>default is 0000</small>
            <button
                className='flex items-center gap-2 font-light text-sm rounded-lg border border-leafGreen-20 hover:brightness-95 ease-linear duration-200 px-8 py-2 bg-leafGreen-20 text-white mt-6 mx-auto'
                onClick={handleSubmit}
                type="button"
                disabled={manualWithdrawCampaignFunds.isPending}
            >
                {manualWithdrawCampaignFunds?.isPending ? <Spinner /> : 'Proceed'}
            </button>
        </Modal>
    )
}

export default OTPModal