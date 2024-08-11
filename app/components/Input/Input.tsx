import React, { forwardRef } from 'react';
import style from './InputField.module.css';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    error: string | undefined
    autoComplete?: 'on' | 'off'
    placeholder: string
    name: string
    type: string
    accept?: string
    where?: 'auth' | 'app'
    readonly?: boolean
}

interface TextArea extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    label: string
    error: string | undefined
    autoComplete?: 'on' | 'off'
    placeholder: string
    name: string
    type?: string
    accept?: string
    where?: 'auth' | 'app'
}

interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
    name: string
    options: { label: string, value: string }[]
    where?: 'auth' | 'app'
    placeholder?: string
    label: string
    error: string
}

const Input = forwardRef<HTMLInputElement, IInput>(
    ({ label, error, name, where = 'auth', accept, autoComplete, placeholder, type, readonly, ...props }, ref) => {
        return (

            <div className={`relative ${type === 'hidden' && 'hidden'}`}>
                <div className={`form-group rounded-lg ${where === 'auth' ? 'bg-primary-30' : 'bg-white'} border ${error ? '!border-red-400 border-2' : ''} px-3 py-2 ${where === 'auth' ? style.container : style.containerApp}`}>
                    <label htmlFor={name} className={`block text-sm ${where === 'auth' ? 'text-primary-20' : 'text-[#979FA0]'}`}>{label}</label>
                    <input
                        {...props}
                        ref={ref}
                        accept={accept}
                        name={name}
                        type={type}
                        autoComplete={autoComplete || 'off'}
                        readOnly={readonly}
                        className={`peer w-full ${where === 'auth' ? 'text-white placeholder:text-white/70' : 'text-[#6B7172] placeholder:text-[#6b7172]'} bg-transparent focus:border-none focus:ring-none focus:outline-none`}
                        placeholder={placeholder}
                    />
                </div>
                {error && <span className="text-red-400 text-sm px-1">{error}</span>}
            </div>

        )
    })

export default Input;

export const InputTextArea = forwardRef<HTMLTextAreaElement, TextArea>(
    ({ label, error, name, where = 'auth', autoComplete, placeholder, type, ...props }, ref) => {
        return (
            <div className='relative'>
                <div className={`form-group  rounded-lg ${where === 'auth' ? 'bg-primary-30' : 'bg-white'} border ${error ? '!border-red-400 border-2' : ''} px-3 py-2 ${where === 'auth' ? style.container : style.containerApp}`}>
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
                {error && <span className="text-red-500">{error}</span>}
            </div>
        )
    }
);

export const InputSelect = forwardRef<HTMLSelectElement, ISelect>(({ placeholder, name, options, label, where, error, ...props }, ref) => {
    return (
        <div className='relative'>
            <div className={`form-group  rounded-lg ${where === 'auth' ? 'bg-primary-30' : 'bg-white'} border ${error ? '!border-red-400 border-2' : ''} px-3 py-2 ${where === 'auth' ? style.container : style.containerApp}`}>
                <label htmlFor={name} className={`block text-sm ${where === 'auth' ? 'text-primary-20' : 'text-[#979FA0]'}`}>{label}</label>
                <select {...props} ref={ref} name={name} id={name} className="w-full focus:border-none focus:outline-none border-none outline-none text-[#6B7172] placeholder:text-[#6b7172] text-sm font-mediums active:border-none active:outline-none">
                    {
                        placeholder && <option value="" className="">{placeholder}</option>
                    }
                    {
                        options?.map((option) => {
                            return (
                                <option key={option.value} value={option.value} className="">{option.label}</option>
                            )
                        })
                    }
                </select>
            </div>
            {error && <span className="text-red-500">{error}</span>}
        </div>
    )
}
)

Input.displayName = 'Input';
InputTextArea.displayName = 'InputTextArea';
InputSelect.displayName = 'InputSelect'