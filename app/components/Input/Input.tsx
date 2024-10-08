import React, { forwardRef, useEffect, useState } from 'react';
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
    formatWithCommas?: boolean
    showCurrency?: boolean
    defaultValue?: string
    onValueChange?: (value: string) => void;
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
    error?: string
}

const Input = forwardRef<HTMLInputElement, IInput>(
    ({ label, error, name, where = 'auth', accept, autoComplete, formatWithCommas, placeholder, type, ...props }, ref) => {
        const [inputValue, setInputValue] = React.useState<string | number>('');

        const formatNumberWithCommas = (value: string) => {
            return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        };

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            let value = e.target.value.replace(/,/g, ''); // Remove commas for internal state

            // Ensure that it's a valid number or empty
            if (!isNaN(Number(value)) || value === '') {
                if (formatWithCommas) {
                    value = formatNumberWithCommas(value); // Apply formatting if enabled
                }
                setInputValue(value);
            }
        };
        const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (type === 'number' && (e.key === 'e' || e.key === 'E' || e.key === '+' || e.key === '-')) {
                e.preventDefault();
            }
        };

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
                        onKeyDown={handleKeyDown}
                        className={`peer w-full ${where === 'auth' ? 'text-white placeholder:text-white/70' : 'text-[#6B7172] placeholder:text-[#6b7172]'} appearance-none bg-transparent focus:border-none focus:ring-none focus:outline-none [&::-webkit-inner-spin-button]:appearance-none ${type === 'number' && style.noSpinners}`}
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

export const InputNumber = forwardRef<HTMLInputElement, IInput>(
    ({ name, label, autoComplete, defaultValue = '', placeholder, onValueChange, error, accept, where, showCurrency, formatWithCommas = false, ...props }, ref) => {
        const [value, setValue] = useState(defaultValue);
        const formatNumberWithCommas = (num: string) => {
            return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        };

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = event.target.value;

            const rawValue = newValue.replace(/,/g, '');
            // Use a regular expression to ensure the value is numeric
            if (rawValue === '' || /^\d+$/.test(rawValue)) {
                setValue(formatWithCommas ? formatNumberWithCommas(rawValue) : rawValue);
                if (onValueChange) {
                    onValueChange(rawValue); // Call the external onChange handler if it exists
                }
            }
        };

        useEffect(() => {
            if (defaultValue) {
                setValue(formatWithCommas ? formatNumberWithCommas(defaultValue) : defaultValue);
            }
        }, [defaultValue])

        return (
            <div className={`relative}`}>
                <div className={`form-group rounded-lg ${where === 'auth' ? 'bg-primary-30' : 'bg-white'} border ${error ? '!border-red-400 border-2' : ''} px-3 py-2 ${where === 'auth' ? style.container : style.containerApp}`}>
                    <label htmlFor={name} className={`block text-sm ${where === 'auth' ? 'text-primary-20' : 'text-[#979FA0]'}`}>{label}</label>
                    <div className="flex gap-1 items-center">
                        {showCurrency &&  <span className="text-[#6b7172]">&#8358;</span>}
                        <input
                            {...props}
                            ref={ref}
                            accept={accept}
                            name={name}
                            value={value}
                            type='text'
                            autoComplete={autoComplete || 'off'}
                            onChange={handleChange}
                            className={`peer w-full ${where === 'auth' ? 'text-white placeholder:text-white/70' : 'text-[#6B7172] placeholder:text-[#6b7172]'} appearance-none bg-transparent focus:border-none focus:ring-none focus:outline-none [&::-webkit-inner-spin-button]:appearance-none`}
                            placeholder={placeholder}
                        />
                    </div>
                </div>
                {error && <span className="text-red-400 text-sm px-1">{error}</span>}
            </div>
        )
    }
)

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
            {error && <span className="text-red-400 text-sm">{error}</span>}
        </div>
    )
}
)

Input.displayName = 'Input';
InputTextArea.displayName = 'InputTextArea';
InputSelect.displayName = 'InputSelect';
InputNumber.displayName = 'InputNumber';