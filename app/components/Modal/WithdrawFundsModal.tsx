'use client';

import React, { FC, useState } from 'react'
import Modal from './Modal'
import { IoCloseOutline } from 'react-icons/io5'
import moneyFormatter from '@/app/utils/helper/moneyFormatter'
import OTPModal from './OTPModal';

type Props = {
    showModal: boolean,
    handleModal: () => void
    amountToWithdraw: string | number
    accoutNumber: string
    accountName: string
    bankName: string
}
const WithdrawFundsModal: FC<Props> = ({ showModal, amountToWithdraw, accountName, accoutNumber, bankName, handleModal }) => {
    const [showOTPModal, setShowOTPModal] = useState(false);

    const handleShowOTPModal = () => {
        setShowOTPModal(!showOTPModal);
    }

    return (
        <>
            <Modal
                size='medium'
                isOpen={showModal}
                bgColor='bg-[#FCFDFC]'
                onClose={() => {
                    handleModal()
                }}
            >
                <div className="relative">
                    <button type="button" onClick={handleModal} className='right-0 -top-4 absolute mt-4 hover:text-red-500'>
                        <IoCloseOutline size={20} />
                    </button>
                    <h2 className="text-center font-semibold text-lg pb-4 text-primary-10">Withdraw Funds</h2>
                    <p className="text-center leading-loose text-sm">You are about to withdraw <span className='font-semibold'>&#8358;{moneyFormatter(amountToWithdraw)}</span></p>
                    <p className="text-center pt-1 pb-2 text-sm leading-6">Payment would be made to <span className="font-semibold">{accoutNumber} {bankName} {accountName}</span></p>
                    <button
                        className='flex items-center gap-2 font-light text-sm rounded-lg border border-leafGreen-20 hover:brightness-95 ease-linear duration-200 px-8 py-2 bg-leafGreen-20 text-white mt-3 mx-auto'
                        onClick={handleShowOTPModal}
                        type="button"
                    >
                        Proceed
                    </button>
                </div>
            </Modal>
            
            <OTPModal
                showModal={showOTPModal}
                handleModal={handleShowOTPModal}
            />
        </>
    )
}

export default WithdrawFundsModal