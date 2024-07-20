import React, { forwardRef } from 'react';
import style from './InputField.module.css';

interface IInput {
    label: string
    error: string | undefined
    autoComplete?: 'on' | 'off'
    placeholder: string
    name: string
    type: string
    accept?: string
    where?: 'auth' | 'app'
}

const Input = forwardRef<HTMLInputElement, IInput>(
    ({ label, error, name, where = 'auth', accept, autoComplete, placeholder, type, ...props }, ref) => {
        return (

            <div className='relative'>
                <div className={`form-group rounded-lg ${where === 'auth' ? 'bg-primary-30' : 'bg-white'} border px-3 py-2 ${where === 'auth' ? style.container : style.containerApp}`}>
                    <label htmlFor={name} className={`block text-sm ${where === 'auth' ? 'text-primary-20' : 'text-[#979FA0]'}`}>{label}</label>
                    <input
                        {...props}
                        ref={ref}
                        accept={accept}
                        name={name}
                        type={type}
                        autoComplete={autoComplete || 'off'}
                        className={`peer w-full ${where === 'auth' ? 'text-white placeholder:text-white/70' : 'text-[#6B7172] placeholder:text-[#6b7172]'} bg-transparent focus:border-none focus:ring-none focus:outline-none`}
                        placeholder={placeholder}
                    />
                </div>
                <span className="text-red-500">{error}</span>
            </div>

        )
    })


export default Input;

export const InputTextArea = forwardRef<HTMLTextAreaElement, IInput>(
    ({ label, error, name, where = 'auth', autoComplete, placeholder, type, ...props }, ref) => {
        return (
            <div className='relative'>
                <div className={`form-group rounded-lg ${where === 'auth' ? 'bg-primary-30' : 'bg-white'} border px-3 py-2 ${where === 'auth' ? style.container : style.containerApp}`}>
                    <label htmlFor={name} className={`block text-sm ${where === 'auth' ? 'text-primary-20' : 'text-[#979FA0]'}`}>{label}</label>
                    <textarea
                        {...props}
                        rows={3}
                        ref={ref}
                        name={name}
                        autoComplete={autoComplete || 'off'}
                        className={`peer w-full ${where === 'auth' ? 'text-white placeholder:text-white/70' : 'text-[#6B7172] placeholder:text-[#6b7172]'} bg-transparent focus:border-none focus:ring-none focus:outline-none`}
                        placeholder={placeholder}
                    />
                </div>
                <span className="text-red-500">{error}</span>
            </div>
        )
    }
);

Input.displayName = 'Input';