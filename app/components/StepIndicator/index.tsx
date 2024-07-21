import React, { Fragment } from 'react'

interface StepIndicatorProps {
    steps: number
    currentStep: number
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep }) => {
    return (
        <div className="flex justify-center items-center max-w-lg mx-auto p-4 md:p-6">
            {Array.from({ length: steps }, (_, i) => (
                <Fragment key={i}>
                    <div className={`font-bvp font-semibold w-8 md:w-12 h-8 md:h-12 flex items-center justify-center rounded-full text-sm md:text-base border-2 ${currentStep > i ? 'bg-[#CEE9B366] border-leafGreen-20 text-leafGreen-20' : i + 1 === currentStep ? 'bg-[#CEE9B366] border-leafGreen-20 text-leafGreen-20' : 'bg-white border-gray-300 text-gray-500'}`}>
                        {i + 1}
                    </div>
                    {i < steps - 1 && (
                        <div className={`h-[2px] flex-1 ${currentStep > i + 1 ? 'bg-leafGreen-20' : 'bg-gray-300'}`}></div>
                    )}
                </Fragment>
            ))}
        </div>
    )
}

export default StepIndicator;
