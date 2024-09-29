'use client'

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { EditFormData } from '../Forms/MultiStepForm';
import { useMutation, useQuery } from '@tanstack/react-query';
import { editCampaignApiService, getSingleCampaign } from '@/app/utils/services/campaign/campaignApiService';
import Spinner from '../Spinner/Spinner';
import StepIndicator from '../StepIndicator';
import EditCampaign1 from '../Forms/EditCampaign1';
import EditCampaign2 from '../Forms/EditCampaign2';
import toast from 'react-hot-toast';
import { DateType } from 'react-tailwindcss-datepicker';

const EditCampaign = () => {
    const params = useParams();
    const { id } = params;
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<EditFormData>({
        id: id as string,
        name: '',
        description: '',
        mediaUrl: '',
        binaryString: '',
        agreementSigned: false,
        targetAmount: 0,
        endDate: new Date(),
        campaignCategoryId: '',
        mobile: '',
        state: '',
        country: '',
    });

    const router = useRouter();

    const { data: singleCampaignData, isLoading, isFetched: singleCampaignIsFetched, isSuccess: singleCampaignIsSuccess } = useQuery({
        queryKey: ['campaign', id],
        queryFn: () => getSingleCampaign(id as string),
        enabled: !!id
    });

    const editCampaign = useMutation({
        mutationKey: ['edit-campaign'],
        mutationFn: (updatedData) => editCampaignApiService(updatedData),
        onError: (error) => {
            toast.error('Failed to update campaign');
        },
        onSuccess: (data) => {
            toast.success(data ?? 'Campaign updated successfully');
            router.push('/dashboard/campaigns');
        },
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();

        editCampaign.mutate(formData as any);
    };

    const nextStep = () => {
        setCurrentStep(prev => prev + 1)
    };
    const prevStep = () => setCurrentStep(prev => prev - 1);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleDateChange = (date: DateType) => {
        if (date) {
            setFormData({
                ...formData,
                endDate: date, // Directly use the DateType here
            });
        }
    };

    const handleNumberChange = (e: number) => {
        console.log(e);
        // return;
        setFormData((prev) => ({
            ...prev,
            targetAmount: e
        }))
    }

    const handleFileChange = (e: any) => {
        if (e.target.files) {
            setFormData({
                ...formData,
                binaryString: e.target.files[0],
                mediaUrl: '',
            });
        }
    };

    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            agreementSigned: e.target.checked,
        });
    };


    const steps = [
        <EditCampaign1 key={1} data={formData} handleChange={handleChange} handleFileChange={handleFileChange} />,
        <EditCampaign2 key={2} data={formData} handleChange={handleChange} handleNumberChange={handleNumberChange} handleDateChange={handleDateChange} handleCheckChange={handleCheckChange} />,
        // <CreateCampaign3 key={3} data={formData} handleChange={handleChange} />
    ];


    useEffect(() => {
        if (singleCampaignData) {
            setFormData({
                id: id as string,
                name: singleCampaignData.name,
                description: singleCampaignData.description,
                mediaUrl: singleCampaignData.mediaUrl,
                binaryString: '',
                agreementSigned: singleCampaignData.agreementSigned,
                targetAmount: singleCampaignData.targetAmount,
                endDate: new Date(singleCampaignData.endDate),
                campaignCategoryId: singleCampaignData.campaignCategoryId,
                mobile: singleCampaignData.mobile,
                state: singleCampaignData.state,
                country: singleCampaignData.country,
            });
        }
    }, [singleCampaignData]);

    if (isLoading) {
        return <Spinner />;
    }


    return (
        <>
            <h1 className="font-semibold text-xl mt-4">Edit Campaign</h1>

            <div className="container mx-auto bg-white rounded-md mt-4">
                <div className='pb-8'>
                    <StepIndicator currentStep={currentStep} steps={steps.length} />

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
                            <button onClick={handleSubmit} disabled={editCampaign.isPending} className="bg-leafGreen-20 hover:bg-leafGreen-30 text-sm text-white font-medium py-2 px-12 rounded">
                                {editCampaign.isPending ? <Spinner /> : 'Submit'}
                            </button>
                        }

                    </div>


                </div>
            </div>
        </>
    )
}

export default EditCampaign