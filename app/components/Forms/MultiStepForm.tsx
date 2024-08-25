'use client'
import React, { useState } from 'react'
import CreateCampaign1 from './CreateCampaign1';
import CreateCampaign2 from './CreateCampaign2';
import PreviewCampaign from '../Campaigns/PreviewCampaign';
import StepIndicator from '../StepIndicator';
import Modal from '../Modal/Modal';
import { toast } from 'react-toastify';
import { IoCopyOutline } from 'react-icons/io5';
import { RiTwitterXFill } from 'react-icons/ri';
import { DateType } from 'react-tailwindcss-datepicker';
import { useMutation } from '@tanstack/react-query';
import { createCampaignApiService } from '@/app/utils/services/campaign/campaignApiService';
import Spinner from '../Spinner/Spinner';
import { useRouter } from 'next/navigation';

interface FormData {
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
    // bank_name: string;
    // account_number: number | null;
    // bvn: number | null;
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

        // link account
        // bank_name: '',
        // account_number: null,
        // bvn: null
    });

    const router = useRouter();

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
            console.log(error);
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


        console.log(formData)
        createCampaign.mutate(formData as any)

        // toast.success('Congratulations')
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

    const handleCopyClick = async () => {
        alert('copy link pressed')
        try {
            await navigator.clipboard.writeText('https://funds-ng.vercel.app');
            toast.success('Text copied to clipboard!');
        } catch (err) {
            toast.error('Failed to copy text: ' + err);
        }
    };

    const steps = [
        <CreateCampaign1 key={1} data={formData} handleChange={handleChange} handleFileChange={handleFileChange} />,
        <CreateCampaign2 key={2} data={formData} handleChange={handleChange} handleDateChange={handleDateChange} handleCheckChange={handleCheckChange} />,
        // <CreateCampaign3 key={3} data={formData} handleChange={handleChange} />
    ];

    return (
        <>

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
                            <button onClick={handleSubmit} disabled={createCampaign.isPending} className="bg-leafGreen-20 hover:bg-leafGreen-30 text-sm text-white font-medium py-2 px-12 rounded">
                                {createCampaign.isPending ? <Spinner /> : 'Submit'}
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
                            <button className="!font-bvp flex items-center gap-1 text-sm" onClick={handleCopyClick}>
                                <span className="max-md:hidden">Copy Link</span><IoCopyOutline />
                            </button>
                        </div>
                        <div className="">
                            <span className='text-center block'>Share link to:</span>
                            <div className="flex flex-wrap gap-6 justify-center items-center mt-3 mb-8">
                                <button className="flex items-center justify-center ">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_3911_7652)">
                                            <path d="M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z" fill="url(#paint0_radial_3911_7652)" />
                                            <path d="M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z" fill="url(#paint1_radial_3911_7652)" />
                                            <path d="M12.0008 2.625C9.45478 2.625 9.13519 2.63616 8.13525 2.68163C7.13719 2.72738 6.45591 2.88534 5.85984 3.11719C5.24316 3.35662 4.72013 3.67697 4.19906 4.19822C3.67753 4.71937 3.35719 5.24241 3.117 5.85881C2.8845 6.45506 2.72634 7.13662 2.68144 8.13422C2.63672 9.13425 2.625 9.45394 2.625 12.0001C2.625 14.5463 2.63625 14.8648 2.68163 15.8647C2.72756 16.8628 2.88553 17.5441 3.11719 18.1402C3.35681 18.7568 3.67716 19.2799 4.19841 19.8009C4.71938 20.3225 5.24241 20.6436 5.85862 20.883C6.45516 21.1148 7.13653 21.2728 8.13441 21.3186C9.13444 21.364 9.45375 21.3752 11.9997 21.3752C14.5461 21.3752 14.8646 21.364 15.8646 21.3186C16.8626 21.2728 17.5447 21.1148 18.1412 20.883C18.7576 20.6436 19.2799 20.3225 19.8007 19.8009C20.3223 19.2799 20.6425 18.7568 20.8828 18.1404C21.1133 17.5441 21.2715 16.8626 21.3184 15.8649C21.3633 14.865 21.375 14.5463 21.375 12.0001C21.375 9.45394 21.3633 9.13444 21.3184 8.13441C21.2715 7.13634 21.1133 6.45516 20.8828 5.85909C20.6425 5.24241 20.3223 4.71937 19.8007 4.19822C19.2793 3.67678 18.7578 3.35644 18.1406 3.11728C17.543 2.88534 16.8613 2.72728 15.8632 2.68163C14.8632 2.63616 14.5448 2.625 11.9979 2.625H12.0008ZM11.1598 4.31447C11.4095 4.31409 11.688 4.31447 12.0008 4.31447C14.5041 4.31447 14.8007 4.32347 15.7892 4.36838C16.7032 4.41019 17.1994 4.56291 17.5298 4.69125C17.9674 4.86112 18.2793 5.06428 18.6072 5.3925C18.9353 5.72062 19.1384 6.03309 19.3088 6.47062C19.4371 6.80062 19.59 7.29675 19.6316 8.21081C19.6765 9.19913 19.6863 9.49594 19.6863 11.9979C19.6863 14.4999 19.6765 14.7968 19.6316 15.7851C19.5898 16.6991 19.4371 17.1952 19.3088 17.5253C19.1389 17.9629 18.9353 18.2744 18.6072 18.6023C18.2791 18.9305 17.9676 19.1335 17.5298 19.3035C17.1997 19.4324 16.7032 19.5848 15.7892 19.6266C14.8009 19.6715 14.5041 19.6812 12.0008 19.6812C9.49753 19.6812 9.20081 19.6715 8.21259 19.6266C7.29853 19.5844 6.80241 19.4317 6.47166 19.3033C6.03422 19.1333 5.72166 18.9303 5.39353 18.6022C5.06541 18.274 4.86234 17.9623 4.692 17.5246C4.56366 17.1945 4.41075 16.6984 4.36913 15.7843C4.32422 14.796 4.31522 14.4992 4.31522 11.9956C4.31522 9.49209 4.32422 9.19678 4.36913 8.20847C4.41094 7.29441 4.56366 6.79828 4.692 6.46781C4.86197 6.03028 5.06541 5.71781 5.39363 5.38969C5.72175 5.06156 6.03422 4.85841 6.47175 4.68816C6.80222 4.55925 7.29853 4.40691 8.21259 4.36491C9.07744 4.32581 9.41259 4.31409 11.1598 4.31212V4.31447ZM17.0052 5.87109C16.3841 5.87109 15.8802 6.37453 15.8802 6.99572C15.8802 7.61681 16.3841 8.12072 17.0052 8.12072C17.6263 8.12072 18.1302 7.61681 18.1302 6.99572C18.1302 6.37463 17.6263 5.87072 17.0052 5.87072V5.87109ZM12.0008 7.18556C9.34209 7.18556 7.18641 9.34125 7.18641 12.0001C7.18641 14.6589 9.34209 16.8136 12.0008 16.8136C14.6597 16.8136 16.8146 14.6589 16.8146 12.0001C16.8146 9.34134 14.6595 7.18556 12.0007 7.18556H12.0008ZM12.0008 8.87503C13.7267 8.87503 15.1259 10.2741 15.1259 12.0001C15.1259 13.7259 13.7267 15.1252 12.0008 15.1252C10.2749 15.1252 8.87588 13.7259 8.87588 12.0001C8.87588 10.2741 10.2749 8.87503 12.0008 8.87503Z" fill="white" />
                                        </g>
                                        <defs>
                                            <radialGradient id="paint0_radial_3911_7652" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.375 25.8485) rotate(-90) scale(23.7858 22.1227)">
                                                <stop stopColor="#FFDD55" />
                                                <stop offset="0.1" stopColor="#FFDD55" />
                                                <stop offset="0.5" stopColor="#FF543E" />
                                                <stop offset="1" stopColor="#C837AB" />
                                            </radialGradient>
                                            <radialGradient id="paint1_radial_3911_7652" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-4.02009 1.72884) rotate(78.681) scale(10.6324 43.827)">
                                                <stop stopColor="#3771C8" />
                                                <stop offset="0.128" stopColor="#3771C8" />
                                                <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
                                            </radialGradient>
                                            <clipPath id="clip0_3911_7652">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <button className="flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_3911_7659)">
                                            <path d="M24 12C24 5.37262 18.6274 0 12 0C5.37262 0 0 5.37262 0 12C0 17.9895 4.38825 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9705 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.3399 7.875 13.875 8.80003 13.875 9.74906V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6117 22.954 24 17.9896 24 12Z" fill="#1877F2" />
                                            <path d="M16.6711 15.4688L17.2031 12H13.875V9.74906C13.875 8.79994 14.3399 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6575 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.7453 23.9514 11.3722 24.0002 12 24C12.6278 24.0002 13.2547 23.9514 13.875 23.8542V15.4688H16.6711Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3911_7659">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </button>
                                <button className="flex items-center justify-center">
                                    <RiTwitterXFill size={25} />
                                </button>
                                <button className="flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_3911_7664)">
                                            <path d="M0.510853 11.8563C0.510295 13.8728 1.03718 15.8417 2.03904 17.5771L0.415039 23.5066L6.48313 21.9156C8.16149 22.8292 10.042 23.308 11.9529 23.3081H11.9579C18.2663 23.3081 23.4015 18.1748 23.4042 11.8653C23.4054 8.80792 22.2158 5.93295 20.0545 3.76997C17.8936 1.60718 15.0196 0.415458 11.9575 0.414062C5.64834 0.414062 0.513551 5.54709 0.510946 11.8563" fill="url(#paint0_linear_3911_7664)" />
                                            <path d="M0.102465 11.8527C0.101813 13.9417 0.647581 15.981 1.68516 17.7786L0.00292969 23.9207L6.2886 22.2726C8.02051 23.2168 9.97046 23.7147 11.9547 23.7154H11.9598C18.4945 23.7154 23.8141 18.3975 23.8169 11.8621C23.818 8.69488 22.5856 5.71656 20.3471 3.47609C18.1083 1.23591 15.1316 0.00130233 11.9598 0C5.42395 0 0.105069 5.31721 0.102465 11.8527ZM3.84581 17.469L3.61112 17.0965C2.62451 15.5277 2.10377 13.7149 2.10451 11.8534C2.10656 6.4213 6.5274 2.00186 11.9635 2.00186C14.596 2.00298 17.0701 3.02921 18.9309 4.89116C20.7917 6.7533 21.8156 9.22865 21.8149 11.8614C21.8125 17.2935 17.3916 21.7135 11.9598 21.7135H11.9559C10.1872 21.7126 8.4526 21.2376 6.93986 20.34L6.57986 20.1265L2.84981 21.1045L3.84581 17.469Z" fill="url(#paint1_linear_3911_7664)" />
                                            <path d="M8.99597 6.89771C8.77401 6.4044 8.54043 6.39445 8.32936 6.3858C8.15652 6.37836 7.95894 6.37892 7.76155 6.37892C7.56397 6.37892 7.24294 6.45324 6.97159 6.74952C6.69997 7.04608 5.93457 7.76273 5.93457 9.22031C5.93457 10.678 6.99624 12.0866 7.14424 12.2845C7.29243 12.482 9.19383 15.5689 12.2052 16.7564C14.7079 17.7433 15.2172 17.547 15.7603 17.4975C16.3036 17.4482 17.5133 16.7811 17.7601 16.0892C18.007 15.3975 18.007 14.8046 17.933 14.6807C17.8589 14.5572 17.6614 14.4831 17.3651 14.335C17.0687 14.1868 15.6122 13.4701 15.3406 13.3712C15.069 13.2724 14.8715 13.2231 14.6739 13.5198C14.4763 13.8159 13.909 14.4831 13.7361 14.6807C13.5633 14.8787 13.3904 14.9034 13.0942 14.7552C12.7977 14.6065 11.8436 14.2941 10.7116 13.2849C9.83085 12.4996 9.23624 11.5298 9.06341 11.2331C8.89057 10.937 9.0449 10.7764 9.19345 10.6288C9.32657 10.496 9.48983 10.2828 9.63811 10.1099C9.78583 9.93687 9.83513 9.81343 9.93392 9.61585C10.0328 9.41808 9.98331 9.24506 9.90936 9.09687C9.83513 8.94868 9.25941 7.48347 8.99597 6.89771Z" fill="white" />
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_3911_7664" x1="1149.87" y1="2309.67" x2="1149.87" y2="0.414062" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#1FAF38" />
                                                <stop offset="1" stopColor="#60D669" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_3911_7664" x1="1190.7" y1="2392.07" x2="1190.7" y2="0" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#F9F9F9" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <clipPath id="clip0_3911_7664">
                                                <rect width="23.82" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </button>
                            </div>
                        </div>
                        <div className="flex items-center text-sm justify-center">
                            <button onClick={() => {
                                router.push('/dashboard/campaigns')
                                handleToggleModal()
                            }} className="bg-white rounded-lg py-2 px-6 border border-[#7d847c]">Maybe Later</button>
                        </div>
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default MultiStepForm