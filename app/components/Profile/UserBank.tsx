'use client';

import { makeAccountPrimaryApiService } from '@/app/utils/services/bankAccount/bankAccountApiService';
import { useMutation } from '@tanstack/react-query';
import React from 'react'
import { PiBankFill } from 'react-icons/pi';
import Spinner from '../Spinner/Spinner';
import { toast } from 'react-toastify';
import { updateLinkCampaignToBankApiService } from '@/app/utils/services/campaign/campaignApiService';
import { useParams } from 'next/navigation';

type Props = {
    id: string
    bankName: string
    accountNumber: string
    accountName: string
    isPrimary?: boolean
    showPrimary: boolean
    linkAccount?: boolean
}
const UserBank = ({ bankName, accountNumber, accountName, linkAccount, showPrimary = true, isPrimary, id }: Props) => {
    const params = useParams();

    const makeBankPrimaryMutation = useMutation({
        mutationKey: ['make-bank-primary'],
        mutationFn: makeAccountPrimaryApiService,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data.message)
        }
    });

    const updateLinkBankAccountMutation = useMutation({
        mutationKey: ['update bank account'],
        mutationFn: updateLinkCampaignToBankApiService,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
        }

    })

    const submitMakeBankPriamry = async () => {
        await makeBankPrimaryMutation.mutateAsync({ accountId: id })
    }

    const submitUpdateLinkAccount = async (id: string) => {
        if (params.id) {
            await updateLinkBankAccountMutation.mutateAsync({ campaignId: params.id, bankAccountId: id })
        } else {
            toast.error("Please use an active campaign or log out and start afresh.")
        }
    }


    return (
        <div className='flex items-center gap-4 p-2 bg-[#F6F6F6] rounded-md relative'>
            {
                isPrimary &&
                <span className="inline-block absolute bg-primary-30 rounded-full top-4 right-2 h-4 w-4"></span>
            }
            <PiBankFill className='border rounded-full p-2' color='#4591A1' size={50} />
            <div className="">
                <h4 className="font-medium text-[#7D847C] py-1 text-base">{bankName}</h4>
                <h4 className="text-sm font-semibold">{accountName}</h4>
                <h4 className="text-sm text-[#899192]">{accountNumber}</h4>
                {
                    linkAccount && <button
                        className="text-xs text-leafGreen-20 underline"
                        disabled={makeBankPrimaryMutation.isPending}
                        onClick={() => submitUpdateLinkAccount(id)}>
                        {
                            updateLinkBankAccountMutation?.isPending ? <Spinner /> : 'Link Account'
                        }
                    </button>
                }
                {
                    showPrimary &&
                    (isPrimary ?
                        <span className="text-xs text-primary-30">Primary Account</span> :
                        <button
                            className="text-xs text-leafGreen-20 underline"
                            disabled={makeBankPrimaryMutation.isPending}
                            onClick={submitMakeBankPriamry}>
                            {
                                makeBankPrimaryMutation?.isPending ? <Spinner /> : 'Make Primary Account'
                            }
                        </button>)
                }

            </div>
        </div>
    )
}

export default UserBank