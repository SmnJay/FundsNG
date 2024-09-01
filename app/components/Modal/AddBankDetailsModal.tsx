import React, { useState } from 'react'
import Modal from './Modal'
import Input, { InputNumber, InputSelect } from '../Input/Input'
import { useQuery } from '@tanstack/react-query'
import { getBankAccountsApiService } from '@/app/utils/services/bankAccount/bankAccountApiService'
import Button from '../Button/Button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

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
    });

    const bankNames = useQuery({
        queryKey: ['banks'],
        queryFn: getBankAccountsApiService
    });

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

    const isSubmit = async (e: any) => {
        e.preventDefault();
        console.log(formData)
    }

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
                        <Button name='Add' ariaLabel='Button to add account' type='submit' color='primary' cls='w-full' />
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default AddBankDetailsModal