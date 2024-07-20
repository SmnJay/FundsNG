'use client'
import React, { useState } from 'react'
import CreateCampaign1 from './CreateCampaign1';
import CreateCampaign2 from './CreateCampaign2';
import PreviewCampaign from '../Campaigns/PreviewCampaign';
import { TfiShine } from 'react-icons/tfi';
import StepIndicator from '../StepIndicator';
import CreateCampaign3 from './CreateCampaign3';

interface FormData {
    campaign_for: string;
    fundraiser: string;
    description: string;
    videoFile?: File;  // Indicate that it can be a File or undefined
    videoLink: string;
    goal: string;
    campaign_end_date: string;
    category: string;
    phone: string;
    state: string;
    country: string;
    bank_name: string;
    account_number: number | null;
    bvn: number | null;
}

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [showPreview, setShowPreview] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        // basic info
        campaign_for: '',
        fundraiser: '',
        description: '',
        videoFile: undefined,
        videoLink: '',

        // About the campaign
        goal: '',
        campaign_end_date: '',
        category: '',
        phone: '',
        state: '',
        country: '',

        // link account
        bank_name: '',
        account_number: null,
        bvn: null
    });

    const nextStep = () => {
        console.log(formData)
        setCurrentStep(prev => prev + 1)
    };
    const prevStep = () => setCurrentStep(prev => prev - 1);
    const togglePreview = () => setShowPreview(!showPreview);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
        setFormData({
            ...formData,
            [name]: value
        });

    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData({
                ...formData,
                videoFile: e.target.files[0],
                videoLink: ''
            })
        }
    }

    const steps = [
        <CreateCampaign1 key={1} data={formData} handleChange={handleChange} handleFileChange={handleFileChange} />,
        <CreateCampaign2 key={2} data={formData} handleChange={handleChange} />,
        <CreateCampaign3 key={3} data={formData} handleChange={handleChange} />
    ];

    return (
        <>
            <button onClick={togglePreview} className="block bg-leafGreen-20 hover:bg-leafGreen-30 text-white font-bold text-sm py-2 px-4 rounded ml-auto my-4">
                <span className='flex items-center gap-1 md:gap-2'><TfiShine /> Preview</span>
            </button>
            <div className="container mx-auto bg-white rounded-md">
                <div className='pb-8'>
                    <StepIndicator currentStep={currentStep} steps={steps.length} />

                    <hr />

                    <div>
                        {steps[currentStep - 1]}
                    </div>

                    <div className="max-w-lg mx-auto flex justify-center gap-4 pt-8 items-center">
                        <button onClick={prevStep} disabled={currentStep === 1} className="bg-gray-300 text-sm hover:bg-gray-400 text-black font-medium py-2 px-6 rounded">
                            Back
                        </button>
                        {currentStep < 3
                            ?
                            <button onClick={nextStep} className="bg-leafGreen-20 hover:bg-leafGreen-30 text-sm text-white font-medium py-2 px-6 rounded">
                                Next
                            </button>
                            :
                            <button onClick={nextStep} className="bg-leafGreen-20 hover:bg-leafGreen-30 text-sm text-white font-medium py-2 px-6 rounded">
                                Submit
                            </button>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default MultiStepForm