import React, { forwardRef } from 'react';
import style from './InputField.module.css';

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
                <div className={`form-group rounded-lg border px-3 py-2 ${style.container}`}>
                    <label htmlFor={name} className="block text-sm text-[#929090] ">{label}</label>
                    <input
                        {...props}
                        ref={ref}
                        name={name}
                        type={type}
                        autoComplete={autoComplete || 'off'}
                        className="peer max-md:bg-transparent  w-full text-FBlack font-medium focus:border-none focus:ring-none focus:outline-none"
                        placeholder={placeholder}
                    />
                </div>
                <span className="text-red-500">{error}</span>
            </div>

        )
    })


export default Input;

Input.displayName = 'Input';