'use client';

import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../Breadcrumb';
import { getActiveBankAccountsApiService, getBankAccountsApiService, getBankAccountsResolveApiService } from '@/app/utils/services/bankAccount/bankAccountApiService';
import { useMutation, useQuery } from '@tanstack/react-query';
import UserBank from '../Profile/UserBank';
import { PiBankFill } from 'react-icons/pi';
import Button, { ButtonLink } from '../Button/Button';
import Input, { InputNumber, InputSelect } from '../Input/Input';
import Spinner from '../Spinner/Spinner';
import { toast } from 'react-toastify';
import { linkCampaignToBankApiService } from '@/app/utils/services/campaign/campaignApiService';

const AddAccount = () => {
    const PageParams = useParams();
    const router = useRouter();

    const [isCheckingAccount, setIsCheckingAccount] = useState(false)
    const [formData, setFormData] = useState({
        bankName: '',
        accountName: '',
        bankCode: '',
        accountNumber: '',
        campaignId: ''
    });

    const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

    const items = [
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'Campaigns', path: '/dashboard/campaigns' },
        { label: 'Single Campaign Details', path: `/dashboard/campaigns/${PageParams.id}` },
        { label: 'Campaign Settings', path: `/dashboard/campaigns/${PageParams.id}/setting` },
        { label: 'Add Account' },
    ];

    const { data: activeBankAccounts, isLoading: activeBankAccountsIsLoading } = useQuery<{ bankName: string, accountName: string, id: string, accountNumber: string, isPrimary: boolean }[]>({
        queryKey: ['activeBankAccounts'],
        queryFn: getActiveBankAccountsApiService
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
                router.back();
            }
        },
    })
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

    const resolveBank = async () => {
        try {
            setIsCheckingAccount(true)
            const data = {
                accountNumber: formData.accountNumber,
                bankCode: formData.bankCode
            };
            const response = await getBankAccountsResolveApiService(data);
            if (response.success) {
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

    const isSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormData((prev) => ({
            ...prev,
            campaignId: PageParams.id as string
        }));
    };

    useEffect(() => {
        if (formData.campaignId) {
            linkAccount.mutate(formData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData.campaignId]); // Dependency on campaignId



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
        <>
            <Breadcrumb items={items} />
            <h3 className="font-semibold pt-4">Add Account to Campaign</h3>

            <section className="bg-white rounded-lg mt-4 p-6 md:w-2/3">
                <h5 className="text-primary font-semibold text-lg">Account</h5>
                <p className="text-gray-800 leading-loose text-sm py-3">Select account for funds withdrawal</p>
                {
                    activeBankAccountsIsLoading ? 'Loading...' :
                        <>
                            <div className=" max-h-64 overflow-y-auto grid grid-cols-3 gap-4">
                                {
                                    activeBankAccounts && activeBankAccounts?.length > 0 ?
                                        activeBankAccounts?.map((item, idx) => {
                                            return (
                                                <UserBank
                                                    showPrimary={false}
                                                    id={item.id}
                                                    key={idx}
                                                    bankName={item?.bankName}
                                                    accountName={item?.accountName}
                                                    accountNumber={item?.accountNumber}
                                                    // isPrimary={item?.isPrimary}
                                                />
                                            )
                                        })
                                        :
                                        null
                                }
                            </div>
                            {
                                !(activeBankAccounts && activeBankAccounts.length > 0) &&
                                <>
                                    <PiBankFill className='border rounded-full mx-auto p-2' color='#979A93' size={110} />
                                    <p className="text-center text-[#899192] leading-loose text-sm mt-6 mb-4">Link Bank Account for Withdrawal</p>
                                </>
                            }
                        </>
                }

                <div className="text-center text-gray-800 text-sm py-5 relative after:absolute after:content-[''] after:w-[100%] after:h-[1px] after:bg-black after:right-0 after:top-1/2 after:translate-y-1/2 "><span className="bg-white px-3 py-1 z-10 relative">Or use another account</span>
                </div>

                <div className="">
                    {
                        activeBankAccountsIsLoading ? 'Loading...' :
                            <form name='bank-details-form' className='w-1/2 mx-auto' onSubmit={isSubmit}>
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
                                        <ButtonLink
                                            href={`/dashboard/campaigns/${PageParams.id}/setting`}
                                            name='Go Back'
                                            ariaLabel='Button to go back to previous page'
                                            onClick={() => {
                                                setFormData({
                                                    bankName: '',
                                                    accountName: '',
                                                    bankCode: '',
                                                    accountNumber: '',
                                                    campaignId: ''
                                                })
                                            }}
                                            color='secondary'
                                            cls='w-full'
                                        />
                                        <Button name='Save' ariaLabel='Button to link account to campaign' processing={linkAccount.isPending} type='submit' color='primary' cls='w-full' />
                                    </div>
                                </div>
                            </form>
                    }
                </div>
            </section>
        </>
    )
}

export default AddAccount