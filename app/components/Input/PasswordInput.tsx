'use client';
import React, { forwardRef, useState } from 'react';
import style from './InputField.module.css';
import { IoEye, IoEyeOffSharp } from 'react-icons/io5';
import { Input } from 'postcss';

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
                <div className={`form-group rounded-lg bg-primary-30 border px-3 py-2 ${style.container}`}>
                    <label htmlFor={name} className="block text-sm text-primary-20">{label}</label>
                    <input
                        {...props}
                        ref={ref}
                        name={name}
                        type={!hidePassword ? 'password' : 'text'}
                        autoComplete={autoComplete || 'off'}
                        className="peer w-full text-white placeholder:text-white/70 bg-transparent focus:border-none focus:ring-none focus:outline-none"
                        placeholder={placeholder}
                    />
                </div>
                <span className="absolute right-0 -translate-x-1 top-8 px-3 overflow-hidden z-10">
                    {hidePassword ? (
                        <button
                            onClick={handleHidePassword}
                            type="button"
                        >
                            <IoEyeOffSharp
                                size={18}
                                className="cursor-pointer text-white"
                            />
                        </button>
                    ) : (
                        <button
                            onClick={handleHidePassword}
                            type="button"
                        >
                            <IoEye
                                size={18}
                                className="text-white cursor-pointer"
                            />
                        </button>

                    )}
                </span>
                <span className="text-red-500">{error}</span>
            </div>
        )
    })
export default PasswordInput;

PasswordInput.displayName = 'PasswordInput'