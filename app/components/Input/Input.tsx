import React, { ReactNode, forwardRef } from 'react';

interface IInput {
    label: string
    error: string | undefined
    autoComplete?: 'on' | 'off'
    placeholder: string
    name: string
    type: string
}

const Input = forwardRef<HTMLInputElement, IInput>(
    ({ label, error, name, autoComplete, placeholder, type, ...props }, ref) => {
        return (

            <div className='relative'>
                <div className='form-group rounded-lg border border-[#E5E2E1] px-3 py-2'>
                    <label htmlFor={name} className="block text-sm text-[#929090] max-md:text-white">{label}</label>
                    <input
                        {...props}
                        name={name}
                        type={type}
                        autoComplete={autoComplete || 'off'}
                        className="max-md:bg-transparent max-md:text-white w-full text-FBlack font-medium focus:border-none focus:ring-none focus:outline-none"
                        placeholder={placeholder}
                    />
                </div>
                <span className="text-red-500">{error}</span>
            </div>

        )
    })
export default Input;