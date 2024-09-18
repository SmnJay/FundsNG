import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import Input, { InputNumber, InputSelect } from '../Input/Input'
import { useMutation, useQuery } from '@tanstack/react-query'
import { addBankAccountApiService, getBankAccountsApiService, getBankAccountsResolveApiService } from '@/app/utils/services/bankAccount/bankAccountApiService'
import Button from '../Button/Button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { linkCampaignToBankApiService } from '@/app/utils/services/campaign/campaignApiService'
import { toast } from 'react-toastify'
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import Spinner from '../Spinner/Spinner'

type Props = {
    isOpen: boolean
    onClose: () => void
}
const AddBankDetailsModal = ({ isOpen, onClose }: Props) => {
    const route = usePathname();
    const [isCheckingAccount, setIsCheckingAccount] = useState(false)
    const [formData, setFormData] = useState({
        bankName: '',
        accountName: '',
        bankCode: '',
        accountNumber: '',
        bvn: '',
        campaignId: ''
    });

    const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

    const params = useParams();

    const bankNames = useQuery({
        queryKey: ['banks'],
        queryFn: getBankAccountsApiService
    });

    const resolveBank = async () => {
        try {
            setIsCheckingAccount(true)
            const data = {
                accountNumber: formData.accountNumber,
                bankCode: formData.bankCode
            };
            const response = await getBankAccountsResolveApiService(data);
            if (response.success) {
                toast.success(response.message)
                setFormData((prev) => ({
                    ...prev,
                    accountName: response.data.account_name // Assuming the response contains accountName
                }));
            } else {
                toast.error('Account name not found');
            }
        } catch (error) {
            toast.error('Failed to resolve bank account');
        } finally {
            setIsCheckingAccount(false);
        }
    };

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

    const addAccount = useMutation({
        mutationKey: ['add-bank-account'],
        mutationFn: addBankAccountApiService,
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
    };

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

    const checkRoute = route === '/settings/profile';
    const isSubmit2 = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
    };

    useEffect(() => {
        if (formData.bankCode && formData.accountNumber) {
            if (debounceTimeout) clearTimeout(debounceTimeout);

            const timeout = setTimeout(() => {
                resolveBank();
            }, 2000);

            setDebounceTimeout(timeout);
        }
        return () => {
            if (debounceTimeout) clearTimeout(debounceTimeout);
        }
    }, [formData.bankCode, formData.accountNumber]); // Dependencies on bankCode and accountNumber

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form name='bank-details-form' onSubmit={checkRoute ? isSubmit2 : isSubmit}>
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
                    {
                        isCheckingAccount ?
                            <span className='italic text-sm flex items-center gap-2'>Checking Account...<Spinner /></span> :
                            <Input
                                name='accountName'
                                label='Account Name'
                                type='text'
                                placeholder='Account Name'
                                error=''
                                where='app'
                                readOnly
                                value={formData.accountName}
                                onChange={(e) => {
                                    setFormData((prev) => ({
                                        ...prev,
                                        accountName: e.target.value
                                    }))
                                }}
                            />
                    }

                    <div className="flex items-center gap-4">
                        <Button
                            name='Close'
                            ariaLabel='Button to close this modal'
                            onClick={() => {
                                setFormData({
                                    bankName: '',
                                    accountName: '',
                                    bankCode: '',
                                    accountNumber: '',
                                    bvn: '',
                                    campaignId: ''
                                })
                                onClose()
                            }}
                            color='grey'
                            cls='w-full'
                        />
                        <Button name='Add' ariaLabel='Button to add account' processing={linkAccount.isPending} type='submit' color='primary' cls='w-full' />
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default AddBankDetailsModal