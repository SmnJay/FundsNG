'use client';

import { useParams, useRouter } from 'next/navigation';
import React, { Fragment, useState } from 'react'
import Breadcrumb from '../Breadcrumb';
import Link from 'next/link';
import UserBank from '../Profile/UserBank';
import { CardLoader } from '../Loader/Loader';
import { ICampaign } from '@/app/utils/models/Model';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteCampaignApiService, getSingleCampaign } from '@/app/utils/services/campaign/campaignApiService';
import { HiMiniExclamationTriangle } from 'react-icons/hi2';
import { BiRefresh } from 'react-icons/bi';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import { toast } from 'react-toastify';
import { InputSelect } from '../Input/Input';

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

    const handleToggleIsAuto = () => {
        setIsAuto(!isAuto);
    }

    const { data, isError, error, isFetching, isLoading } = useQuery<ICampaign>({
        queryKey: ['campaign', PageParams?.id],
        queryFn: () => getSingleCampaign(PageParams.id as string),
        enabled: !!PageParams.id
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
    })

    const handleDeleteCampaign = async () => {
        if (PageParams?.id) {
            await deleteCampaign.mutate(PageParams.id as string);
        } else {
            toast.error("Campaign ID is missing");
        }
    };

    const AutowithdrawalOptions = [
        { label: 'Monthly', value: '0' },
        { label: 'Bi-Weekly', value: '1' },
        { label: 'Weekly', value: '2' },
        { label: 'Daily', value: '3' },
    ]

    return (
        <Fragment>
            <Breadcrumb items={items} />
            <h3 className="font-semibold pt-4">Campaign Settings</h3>
            <section className="bg-white rounded-lg mt-4">
                <div className="md:w-4/5 xl:w-1/2 mx-auto py-6">
                    {
                        isLoading ?
                            <CardLoader /> :
                            data?.bankDetails === null ? <p className='flex items-center gap-3 rounded-md p-4 bg-slate-100 w-fit text-sm'><HiMiniExclamationTriangle className='text-amber-600 flex-shrink-0' /> This Campaign has no associated bank account information. Kindly add your bank details to this campaign</p> :
                                <UserBank
                                    showPrimary={false}
                                    id={data?.id as unknown as string}
                                    bankName={data?.bankDetails?.bankName as unknown as string}
                                    accountName={data?.bankDetails?.accountName as unknown as string}
                                    accountNumber={data?.bankDetails?.accountNumber as unknown as string}
                                />
                    }
                    {
                        !isLoading ?
                            <Link href='' className='flex items-center gap-2 text-leafGreen-20 hover:text-leafGreen-5 ease-linear duration-200 text-center leading-loose justify-center mx-auto mt-2'>
                                <BiRefresh />
                                <span className="">Use another Account</span>
                            </Link>
                            : null
                    }
                </div>
                <div className="md:w-4/5 xl:w-1/2 mx-auto py-6 border-y">
                    <h4 className="text-lg font-medium leading-loose">Withdrawal Type</h4>
                    <form className="mt-4">
                        <div className="space-y-3">
                            <div className="flex items-center ">
                                <input
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setIsAuto(false)
                                        } else {
                                            setIsAuto(true)
                                        }
                                    }}
                                    defaultChecked
                                    type="radio"
                                    name="withdrawal-mode"
                                    id="manual"
                                    className='accent-leafGreen-20 scale-105 mr-4 cursor-pointer'
                                />
                                <label className='font-light text-[#899192] cursor-pointer' htmlFor="manual">Manual Withdrawal</label>
                            </div>
                            <div className="flex items-center ">
                                <input
                                    type="radio"
                                    name="withdrawal-mode"
                                    id="auto"
                                    className='accent-leafGreen-20 scale-105 mr-4 cursor-pointer' onChange={(e) => {
                                        if (e.target.checked) {
                                            setIsAuto(true)
                                        } else {
                                            setIsAuto(false)
                                        }
                                    }}
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
                                />
                            </div>
                        }
                        <div className="grid grid-cols-2 items-center gap-4 mt-6 w-2/3 mx-auto">
                            <Link href={`/dashboard/campaigns/${PageParams.id}`} className="rounded-lg border text-primary py-3 ease-linear duration-200 hover:brightness-95 px-6 text-center bg-white">Back</Link>
                            <button className="rounded-lg border text-white py-3 ease-linear duration-200 hover:brightness-95 px-6 text-center bg-leafGreen-20 whitespace-nowrap">Save Settings</button>
                        </div>
                    </form>
                </div>
                <div className="md:w-4/5 xl:w-1/2 mx-auto py-6 flex items-center justify-center">
                    <button className="rounded-lg border text-white py-3 ease-linear duration-200 hover:brightness-95 px-6 text-center bg-red-700 whitespace-nowrap" disabled={deleteCampaign?.isPending} onClick={handleDeleteCampaign}>{deleteCampaign?.isPending ? <Spinner /> : 'Delete Campaign'}</button>
                </div>
            </section>
        </Fragment>
    )
}

export default CampaignSettings