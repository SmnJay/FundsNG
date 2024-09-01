import React from 'react'
import Modal from './Modal'
import Input, { InputSelect } from '../Input/Input'
import { useQuery } from '@tanstack/react-query'
import { getBankAccountsApiService } from '@/app/utils/services/bankAccount/bankAccountApiService'
import Button from '../Button/Button'

type Props = {
    isOpen: boolean
    onClose: () => void
}
const AddBankDetailsModal = ({ isOpen, onClose }: Props) => {

    const bankNames = useQuery({
        queryKey: ['banks'],
        queryFn: getBankAccountsApiService
    })

    console.log(bankNames.data);

    const bankOptions = bankNames.data?.map((banks: { name: string }) => {
        return ({
            label: banks.name,
            value: banks.name
        })
    })

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form action="" name='bank-details-form'>
                <h2 className="text-center font-semibold text-lg pb-4">Add Bank Details</h2>
                <div className="space-y-4">
                    <InputSelect
                        options={bankOptions}
                        name='bankName'
                        label='Select Bank Name'
                    />
                    <Input name='accountName' label='Account Name' type='text' placeholder='Account Name' error='' where='app' />
                    <Input name='accountNumber' label='Account Number' type='number' placeholder='Account Number' error='' where='app' />
                    <div className="flex items-center gap-4">
                        <Button name='Close' ariaLabel='Button to close this modal' onClick={onClose} color='grey' cls='w-full'/>
                        <Button name='Add' ariaLabel='Button to add account' type='button' color='primary' cls='w-full'/>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default AddBankDetailsModal