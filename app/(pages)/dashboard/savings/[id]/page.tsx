'use client';

import { PaymentActivities } from '@/app/components/Activity';
import Breadcrumb from '@/app/components/Breadcrumb';
import ProgressBar from '@/app/components/ProgressBar';
import { useParams } from 'next/navigation'
import React from 'react'

const SingleSavingsDetails = () => {
    const items = [
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'Savings', path: '/dashboard/savings' },
        { label: 'Single' },
    ];
    const params = useParams();

    const data = [
        { id: 1, savings: 12500 },
        { id: 2, savings: 0 },
        { id: 3, savings: 35 },
    ];

    let pageData = data.find((elem) => elem.id === +params.id);
    
    return (
        <>
            <Breadcrumb items={items} />

            <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0 md:gap-2 mt-4">
                <div className="col-span-2 bg-primary px-12 py-4 rounded-lg">

                    <div className="flex flex-col sitems-center justify-center bg-white p-4 rounded-md">
                        <h3 className="text-[#323232] font-medium text-base">Savings Title</h3>
                        <h4 className="text-primary font-bvps font-semibold text-lg md:text-xl pt-4 pb-3">&#8358;{pageData?.savings.toLocaleString()}</h4>
                        <ProgressBar value={pageData?.savings ? (+(pageData?.savings / 15000).toFixed(2) * 100) : 0} showPercentage />
                        <div className='grid grid-cols-2 gap-1 mt-4'>
                            <div className='flex items-center text-sm gap-1 font-bvp'>
                                Deadline
                            </div>
                            <div className="text-sm text-[#626262] font-bvp">Sept 20, 2024</div>
                        </div>
                    </div>

                </div>
                <div className=""></div>
                <div className="col-span-2 bg-white rounded-md">
                    <div className="px-4 py-3">
                        <h3 className="font-semibold">Payment Activities</h3>
                    </div>
                    <hr />
                    <div className="px-4 py-3 space-y-2 md:space-y-4">
                        <PaymentActivities />
                        <PaymentActivities />
                        <PaymentActivities />
                        <PaymentActivities />
                        <PaymentActivities />
                    </div>
                </div>
                <div className="col-span-1 bg-white rounded-md p-4">
                    <h3 className='text-[#626262] font-medium'>Members (12)</h3>
                </div>
            </div>
        </>
    )
}

export default SingleSavingsDetails