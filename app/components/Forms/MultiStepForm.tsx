'use client'
import React, { useState } from 'react'
import CreateCampaign1 from './CreateCampaign1';
import CreateCampaign2 from './CreateCampaign2';
import PreviewCampaign from '../Campaigns/PreviewCampaign';
import { TfiShine } from 'react-icons/tfi';
import StepIndicator from '../StepIndicator';

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [showPreview, setShowPreview] = useState(false);
    const [formData, setFormData] = useState({
        // basic info
        basic_info: {
            campaign_for: '',
            fundraiser: '',
            description: '',
            video: '',
        },

        // About the campaign
        about: {
            goal: '',
            campaign_end_date: '',
            category: '',
            phone: '',
            state: '',
            country: '',
        },

        // link account
        account: {
            bank_name: '',
            account_number: '',
            bvn: ''
        }
    });

    const nextStep = () => setCurrentStep(prev => prev + 1);
    const prevStep = () => setCurrentStep(prev => prev - 1);
    const togglePreview = () => setShowPreview(!showPreview);

    const steps = [
        <CreateCampaign1 />,
        <CreateCampaign2 />,
        <PreviewCampaign />
    ];

    return (
        <>
            <button onClick={togglePreview} className="block bg-leafGreen-20 hover:bg-leafGreen-30 text-white font-bold text-sm py-2 px-4 rounded ml-auto my-4">
                <span className='flex items-center gap-1 md:gap-2'><TfiShine /> Preview</span>
            </button>
            <div className="container mx-auto bg-white rounded-md">
                <div className=''>
                    <StepIndicator currentStep={currentStep} steps={steps.length} />
                    <hr />
                    <div>
                        {steps[currentStep - 1]}
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <button onClick={prevStep} disabled={currentStep === 1} className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
                            Back
                        </button>
                        {currentStep < 3 && (
                            <button onClick={nextStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Continue
                            </button>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

export default MultiStepForm