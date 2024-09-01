import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import Input, { InputNumber, InputSelect } from '../Input/Input'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getBankAccountsApiService } from '@/app/utils/services/bankAccount/bankAccountApiService'
import Button from '../Button/Button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { linkCampaignToBankApiService } from '@/app/utils/services/campaign/campaignApiService'
import { toast } from 'react-toastify'
import { useParams, useSearchParams } from 'next/navigation'

type Props = {
    isOpen: boolean
    onClose: () => void
}
const AddBankDetailsModal = ({ isOpen, onClose }: Props) => {
    const [formData, setFormData] = useState({
        bankName: '',
        accountName: '',
        bankCode: '',
        accountNumber: '',
        bvn: '',
        campaignId: ''
    });

    const params = useParams();

    const bankNames = useQuery({
        queryKey: ['banks'],
        queryFn: getBankAccountsApiService
    });

    const linkAccount = useMutation({
        mutationKey: ['link-account'],
        mutationFn: linkCampaignToBankApiService,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess(data) {
            if (data.success === false) {
                toast.error(data.message);

            } else {
                toast.success(data);
                onClose();
            }
        },
    })

    const bankOptions = bankNames.data?.map((banks: { name: string }) => {
        return ({
            label: banks.name,
            value: banks.name
        })
    });

    const getBankCode = (bankName: string) => {
        if (bankNames?.data) {
            let code = bankNames.data.find((item: { name: string, code: string }) => item.name === bankName);
            if (code) {
                setFormData((prev) => ({
                    ...prev,
                    bankCode: code.code
                }))
            }
        }
    }
    useEffect(() => {
        if (formData.campaignId) {
            linkAccount.mutate(formData);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData.campaignId]); // Dependency on campaignId

    const isSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormData((prev) => ({
            ...prev,
            campaignId: params.id as string
        }));
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form name='bank-details-form' onSubmit={isSubmit}>
                <h2 className="text-center font-semibold text-lg pb-4">Add Bank Details</h2>
                <div className="space-y-4">
                    <InputSelect
                        options={bankOptions}
                        label='Select Bank Name'
                        name='bankName'
                        onChange={(e) => {
                            setFormData((prev) => ({
                                ...prev,
                                bankName: e.target.value
                            }));
                            getBankCode(e.target.value as string);
                        }}
                    />
                    <InputNumber
                        name='accountNumber'
                        label='Account Number'
                        type='number'
                        placeholder='Account Number'
                        error=''
                        where='app'
                        onValueChange={(e) => {
                            setFormData((prev) => ({
                                ...prev,
                                accountNumber: e
                            }))
                        }}
                    />
                    <InputNumber
                        name='bvn'
                        label='BVN'
                        type='number'
                        placeholder='BVN'
                        error=''
                        where='app'
                        onValueChange={(e) => {
                            setFormData((prev) => ({
                                ...prev,
                                bvn: e
                            }))
                        }}
                    />
                    <Input
                        name='accountName'
                        label='Account Name'
                        type='text'
                        placeholder='Account Name'
                        error=''
                        where='app'
                        onChange={(e) => {
                            setFormData((prev) => ({
                                ...prev,
                                accountName: e.target.value
                            }))
                        }}
                    />

                    <div className="flex items-center gap-4">
                        <Button name='Close' ariaLabel='Button to close this modal' onClick={onClose} color='grey' cls='w-full' />
                        <Button name='Add' ariaLabel='Button to add account' processing={linkAccount.isPending} type='submit' color='primary' cls='w-full' />
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default AddBankDetailsModal