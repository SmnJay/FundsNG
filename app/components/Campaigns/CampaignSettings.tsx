'use client';

import { useParams, useRouter } from 'next/navigation';
import React, { Fragment, useEffect, useState } from 'react'
import Breadcrumb from '../Breadcrumb';
import Link from 'next/link';
import UserBank from '../Profile/UserBank';
import { CardLoader } from '../Loader/Loader';
import { ICampaign } from '@/app/utils/models/Model';
import { useMutation, useQuery } from '@tanstack/react-query';
import { campaignWithdrawalModeApiService, deleteCampaignApiService, getCampaignSettingsApiService, getSingleCampaign } from '@/app/utils/services/campaign/campaignApiService';
import { HiMiniExclamationTriangle } from 'react-icons/hi2';
import { BiRefresh } from 'react-icons/bi';
import Spinner from '../Spinner/Spinner';
import { toast } from 'react-toastify';
import { InputSelect } from '../Input/Input';
import ChangeAccountModal from '../Modal/ChangeAccountModal';

const CampaignSettings = () => {
    const PageParams = useParams();
    const router = useRouter();

    const items = [
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'Campaigns', path: '/dashboard/campaigns' },
        { label: 'Single Campaign Details', path: `/dashboard/campaigns/${PageParams.id}` },
        { label: 'Campaign Settings' },
    ];

    const [isAuto, setIsAuto] = useState(false);
    const [showChangeAccountModal, setShowChangeAccountModal] = useState(false);

    const { data, isError, error, isFetching, isLoading } = useQuery<ICampaign>({
        queryKey: ['campaign', PageParams?.id],
        queryFn: () => getSingleCampaign(PageParams.id as string),
        enabled: !!PageParams.id
    });

    const { data: CampaignSettingData, isLoading: CampaignSettingsLoading } = useQuery<{ id: string, bankName: string, accountName: String, accountNumber: string, frequency: string, withdrawalType: string }>({
        queryKey: ['campaign settings'],
        queryFn: getCampaignSettingsApiService
    });

    const [formData, setFormData] = useState<{ bankAccountId: string, withdrawalType: number, frequency?: number }>({
        bankAccountId: data?.bankAccountId ?? '',
        withdrawalType: 0
    });

    const deleteCampaign = useMutation({
        mutationKey: ['delete-campaign', PageParams?.id],
        mutationFn: deleteCampaignApiService,
        onError: (error) => {
            toast.error('Failed to delete campaign');
        },
        onSuccess: (data) => {
            toast.success(data ?? 'Campaign updated successfully');
            router.push('/dashboard/campaigns');
        },
    });

    const _saveSettings = useMutation({
        mutationKey: ['save campaign settings'],
        mutationFn: campaignWithdrawalModeApiService,
        onError: (error) => {
            console.log(error)
            toast.error('Failed to save campaign settings');
        },
        onSuccess: (data) => {
            toast.success(data ?? 'Campaign updated successfully');
            router.push('/dashboard/campaigns');
        },
    })

    const handleDeleteCampaign = async () => {
        if (PageParams?.id) {
            await deleteCampaign.mutate(PageParams.id as string);
        } else {
            toast.error("Campaign ID is missing");
        }
    };

    const handleToggleShowChangeAccountModal = async () => {
        setShowChangeAccountModal(!showChangeAccountModal);
    };

    const AutowithdrawalOptions = [
        { label: 'Monthly', value: '0' },
        { label: 'Bi-Weekly', value: '1' },
        { label: 'Weekly', value: '2' },
        { label: 'Daily', value: '3' },
    ];

    const defaultWithdrawalOption = AutowithdrawalOptions.find((value) => value.label === CampaignSettingData?.frequency);

    const saveSettings = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        _saveSettings.mutate(formData)
    }

    useEffect(() => {
        if (CampaignSettingData?.withdrawalType === 'Auto') {
            setIsAuto(true);
        }
    }, [CampaignSettingData]);

    return (
        <Fragment>
            <Breadcrumb items={items} />
            <h3 className="font-semibold pt-4">Campaign Settings</h3>
            <section className="bg-white rounded-lg mt-4">
                <div className="md:w-4/5 xl:w-1/2 mx-auto py-6">
                    {
                        CampaignSettingsLoading ?
                            <CardLoader /> :
                            CampaignSettingData?.bankName === null ? <p className='flex items-center gap-3 rounded-md p-4 bg-slate-100 w-fit text-sm'><HiMiniExclamationTriangle className='text-amber-600 flex-shrink-0' /> This Campaign has no associated bank account information. Kindly add your bank details to this campaign</p> :
                                <UserBank
                                    showPrimary={false}
                                    id={data?.id as unknown as string}
                                    bankName={data?.bankDetails?.bankName as unknown as string}
                                    accountName={data?.bankDetails?.accountName as unknown as string}
                                    accountNumber={data?.bankDetails?.accountNumber as unknown as string}
                                />
                    }
                    {
                        !CampaignSettingsLoading ?
                            <Link href={`setting/add`} className='flex items-center gap-2 text-leafGreen-20 hover:text-leafGreen-5 ease-linear duration-200 text-center leading-loose justify-center mx-auto mt-2'>
                                <BiRefresh />
                                <span className="">Use another Account</span>
                            </Link>
                            : null
                    }
                </div>
                <div className="md:w-4/5 xl:w-1/2 mx-auto py-6 border-y">
                    <h4 className="text-lg font-medium leading-loose">Withdrawal Type</h4>
                    {
                        CampaignSettingsLoading ? 'Loading...' :
                            <form className="mt-4" onSubmit={saveSettings}>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <input
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setIsAuto(false);
                                                    if (Object.keys(formData).includes('frequency')) {
                                                        delete formData['frequency']
                                                    }
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        withdrawalType: Number(e.target.value)
                                                    }))
                                                } else {
                                                    setIsAuto(true)
                                                }
                                            }}
                                            defaultChecked={CampaignSettingData?.withdrawalType !== 'Auto'}
                                            type="radio"
                                            name="withdrawal-mode"
                                            id="manual"
                                            value={0}
                                            className='accent-leafGreen-20 scale-105 mr-4 cursor-pointer'
                                        />
                                        <label className='font-light text-[#899192] cursor-pointer' htmlFor="manual">Manual Withdrawal</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="withdrawal-mode"
                                            id="auto"
                                            className='accent-leafGreen-20 scale-105 mr-4 cursor-pointer' onChange={(e) => {
                                                if (e.target.checked) {
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        withdrawalType: Number(e.target.value)
                                                    }))
                                                    setIsAuto(true)
                                                } else {
                                                    setIsAuto(false)
                                                }
                                            }}
                                            defaultChecked={CampaignSettingData?.withdrawalType === 'Auto'}
                                            value={1}
                                        />
                                        <label className='font-light text-[#899192] cursor-pointer' htmlFor="auto">Automatic Withdrawal</label>
                                    </div>
                                </div>
                                {
                                    isAuto && <div className='mt-4'>
                                        <InputSelect
                                            name='withdrawal frequency'
                                            label='Auto Withdrawal Frequency'
                                            options={AutowithdrawalOptions}
                                            defaultValue={defaultWithdrawalOption?.value}
                                            onChange={(e) => {
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    frequency: +e.target.value
                                                }))
                                            }}
                                        />
                                    </div>
                                }
                                <div className="grid grid-cols-2 items-center gap-4 mt-6 w-2/3 mx-auto">
                                    <Link href={`/dashboard/campaigns/${PageParams.id}`} className="rounded-lg border text-primary py-3 ease-linear duration-200 hover:brightness-95 px-6 text-center bg-white">Back</Link>
                                    <button className="rounded-lg border text-white py-3 ease-linear duration-200 hover:brightness-95 px-6 text-center bg-leafGreen-20 whitespace-nowrap" type='submit' disabled={_saveSettings.isPending}>{_saveSettings?.isPending ? <Spinner /> : 'Save Settings'}</button>
                                </div>
                            </form>
                    }
                </div>
                <div className="md:w-4/5 xl:w-1/2 mx-auto py-6 flex items-center justify-center">
                    <button className="rounded-lg border text-white py-3 ease-linear duration-200 hover:brightness-95 px-6 text-center bg-red-700 whitespace-nowrap" disabled={deleteCampaign?.isPending} onClick={handleDeleteCampaign}>{deleteCampaign?.isPending ? <Spinner /> : 'Delete Campaign'}</button>
                </div>
            </section>
            <ChangeAccountModal showChangeAccount={showChangeAccountModal} handleModal={handleToggleShowChangeAccountModal} />
        </Fragment>
    )
}

export default CampaignSettings