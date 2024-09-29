'use client';

import React, { useState } from 'react'
import CreateCampaign1 from './CreateCampaign1';
import CreateCampaign2 from './CreateCampaign2';
import StepIndicator from '../StepIndicator';
import { DateType } from 'react-tailwindcss-datepicker';
import { useMutation } from '@tanstack/react-query';
import { createCampaignApiService } from '@/app/utils/services/campaign/campaignApiService';
import Spinner from '../Spinner/Spinner';
import ShareCampaignModal from '../Modal/ShareCampaignModal';
import toast from 'react-hot-toast';

export interface FormData {
    name: string;
    description: string;
    binaryString?: File | string;  // Indicates that it can be a File or undefined
    mediaUrl: string;
    targetAmount: number;
    endDate: DateType;
    campaignCategoryId: string;
    mobile: string;
    state: string;
    country: string;
    agreementSigned: boolean
}

export interface EditFormData {
    id: string
    name: string;
    description: string;
    binaryString?: File | string;  // Indicates that it can be a File or undefined
    mediaUrl: string;
    targetAmount: number;
    endDate: DateType;
    campaignCategoryId: string;
    mobile: string;
    state: string;
    country: string;
    agreementSigned: boolean
}

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [showSubmitModal, setShowSubmitModal] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        // basic info
        name: '',
        description: '',
        mediaUrl: '',
        binaryString: '',
        agreementSigned: false,

        // About the campaign
        targetAmount: 0,
        endDate: '',
        campaignCategoryId: '',
        mobile: '',
        state: '',
        country: '',
    });

    const nextStep = () => {
        setCurrentStep(prev => prev + 1)
    };
    const prevStep = () => setCurrentStep(prev => prev - 1);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleDateChange = (date: DateType) => {
        if (date) {
            const dateObject = new Date(date);
            dateObject.setHours(0, 0, 0, 0);

            const isoDateString = dateObject.toISOString();

            setFormData({
                ...formData,
                endDate: isoDateString
            });
        } else {
            setFormData({
                ...formData,
                endDate: ''
            })
        }
    };

    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            agreementSigned: e.target.checked
        })
    }

    const handleToggleModal = () => {
        setShowSubmitModal(!showSubmitModal)
    }

    const createCampaign = useMutation({
        mutationKey: ['create-campaign'],
        mutationFn: createCampaignApiService,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess(data) {
            toast.success(data);
            handleToggleModal();
        },
    })

    const handleSubmit = (e: any) => {
        e.preventDefault;
        if ('binaryString' in formData && formData['binaryString'] === '') {
            delete formData['binaryString']
        }
        createCampaign.mutate(formData as any)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData({
                ...formData,
                binaryString: e.target.files[0],
                mediaUrl: ''
            })
        }
    }

    const steps = [
        <CreateCampaign1 key={1} data={formData} handleChange={handleChange} handleFileChange={handleFileChange} />,
        <CreateCampaign2 key={2} data={formData} handleChange={handleChange} handleDateChange={handleDateChange} handleCheckChange={handleCheckChange} />,
        // <CreateCampaign3 key={3} data={formData} handleChange={handleChange} />
    ];

    return (
        <>
            <div className="container mx-auto bg-white rounded-md mt-4">
                <div className='pb-8'>
                    <StepIndicator currentStep={currentStep} steps={steps?.length} />

                    <hr />

                    <div>
                        {steps[currentStep - 1]}
                    </div>

                    <div className="max-w-lg mx-auto flex justify-center gap-4 pt-8 items-center">
                        <button onClick={prevStep} disabled={currentStep === 1} className="bg-white border text-sm hover:bg-gray-100 text-black font-medium py-2 px-12 rounded">
                            Back
                        </button>
                        {currentStep < 2
                            ?
                            <button onClick={nextStep} className="bg-leafGreen-20 hover:bg-leafGreen-30 text-sm text-white font-medium py-2 px-12 rounded">
                                Next
                            </button>
                            :
                            <button onClick={handleSubmit} disabled={createCampaign.isPending} className="bg-leafGreen-20 hover:bg-leafGreen-30 text-sm text-white font-medium py-2 px-12 rounded">
                                {createCampaign.isPending ? <Spinner /> : 'Create'}
                            </button>
                        }
                    </div>

                    <ShareCampaignModal
                        showModal={showSubmitModal}
                        pushToUrl={'/dashboard/campaigns'}
                        handleModal={handleToggleModal}
                        shareableUrl={createCampaign?.data?.data?.shareableUrl as string}
                    />
                </div>
            </div>
        </>
    )
}

export default MultiStepForm