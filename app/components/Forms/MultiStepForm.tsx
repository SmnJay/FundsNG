'use client'
import React, { useState } from 'react'
import CreateCampaign1 from './CreateCampaign1';
import CreateCampaign2 from './CreateCampaign2';
import PreviewCampaign from '../Campaigns/PreviewCampaign';
import { TfiShine } from 'react-icons/tfi';
import StepIndicator from '../StepIndicator';
import CreateCampaign3 from './CreateCampaign3';
import Modal from '../Modal/Modal';
import { toast } from 'react-toastify';
import { IoCopyOutline } from 'react-icons/io5';
import { RiInstagramFill, RiTwitterXFill } from 'react-icons/ri';
import { ImFacebook2 } from 'react-icons/im';
import { MdWhatsapp } from 'react-icons/md';

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
    const [showSubmitModal, setShowSubmitModal] = useState(false);
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

    const handleToggleModal = () => {
        setShowSubmitModal(!showSubmitModal)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault;
        console.log(formData);
        handleToggleModal();
        toast.success('Congratulations')

    }
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
                            <button onClick={handleSubmit} className="bg-leafGreen-20 hover:bg-leafGreen-30 text-sm text-white font-medium py-2 px-6 rounded">
                                Submit
                            </button>
                        }

                    </div>
                    <Modal isOpen={showSubmitModal} bgColor='bg-[#FCFDFC]' onClose={handleToggleModal}>
                        <h3 className="leading-loose text-xl font-medium text-primary-10 text-center">Share your campaign</h3>
                        <p className="text-center text-sm text-[#535758]">Share your campaign on your favourite social media platform to create awareness.</p>
                        <div className="rounded-lg my-4 bg-[#EBF7DF] border border-[#7D847C] py-2 px-3 flex items-center justify-between">
                            <div className="">
                                <span className="text-FBlack/50 block text-xs">Copy the link to your campaign</span>
                                <span className="text-FBlack text-sm font-medium block leading-loose">https://fundsng.com/my-campaign</span>
                            </div>
                            <button className="!font-bvp flex items-center gap-1 text-sm">
                               <span className="max-md:hidden">Copy Link</span><IoCopyOutline />
                            </button>
                        </div>
                        <div className="">
                            <span className=''>Share link to:</span>
                            <div className="flex flex-wrap gap-3 items-center mt-2 mb-8">
                                <button className="flex items-center gap-2 bg-[#EFF1EF] rounded p-2">
                                    <RiInstagramFill /> Share to Instagram
                                </button>
                                <button className="flex items-center gap-2 bg-[#EFF1EF] rounded p-2">
                                    <ImFacebook2 /> Share to Facebook
                                </button>
                                <button className="flex items-center gap-2 bg-[#EFF1EF] rounded p-2">
                                    <RiTwitterXFill /> Share to X(formerly Twitter)
                                </button>
                                <button className="flex items-center gap-2 bg-[#EFF1EF] rounded p-2">
                                    <MdWhatsapp /> Share to Whatsapp
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center text-sm justify-center">
                            <button onClick={handleToggleModal} className="bg-white rounded-lg py-2 px-6 border border-[#7d847c]">Maybe Later</button>
                        </div>
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default MultiStepForm