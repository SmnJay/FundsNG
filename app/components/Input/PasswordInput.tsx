'use client';
import React, { ReactNode, forwardRef, useState } from 'react';
import Input from './Input';
import { IoEye, IoEyeOffSharp } from 'react-icons/io5';

interface IPasswordInput {
    label: string
    error: string | undefined
    autoComplete?: 'on' | 'off'
    placeholder: string
    name: string
    type: string
}

const PasswordInput = forwardRef<HTMLInputElement, IPasswordInput>(
    ({ label, error, name, autoComplete, placeholder, type, ...props }, ref) => {
        const [hidePassword, setHidePassword] = useState(false);

        const handleHidePassword = () => {
            setHidePassword(!hidePassword)
        }

        return (
            <div className='relative'>
                <div className='form-group rounded-lg border border-[#E5E2E1] px-3 py-2'>
                    <label htmlFor={name} className="block text-sm text-[#929090] max-md:text-white">{label}</label>
                    <input
                        {...props}
                        name={name}
                        type={!hidePassword ? 'password' : 'text'}
                        autoComplete={autoComplete || 'off'}
                        className="max-md:bg-transparent max-md:text-white w-full text-FBlack font-medium focus:border-none focus:ring-none focus:outline-none"
                        placeholder={placeholder}
                    />
                </div>
                <span className="absolute bg-white right-0 -translate-x-1 top-8 px-3 overflow-hidden z-10">
                    {hidePassword ? (
                        <button
                            onClick={handleHidePassword}
                            type="button"
                        >
                            <IoEyeOffSharp
                                size={18}
                                className="cursor-pointer text-primary"
                            />
                        </button>
                    ) : (
                        <button
                            onClick={handleHidePassword}
                            type="button"
                        >
                            <IoEye
                                size={18}
                                className="text-primary cursor-pointer"
                            />
                        </button>

                    )}
                </span>
                <span className="text-red-500">{error}</span>
            </div>
        )
    })
export default PasswordInput;