import React, { forwardRef, useState } from 'react';
import Input from './Input';
import { IoEye, IoEyeOffSharp } from 'react-icons/io5';

interface IPasswordInput {
    label: string
    error: string | undefined
    autoComplete?: 'on' | 'off'
    placeholder: string
    name: string
    type: string
    register: any
}

const PasswprdInput = forwardRef<HTMLInputElement, IPasswordInput>(
    ({ label, error, name, autoComplete, register, placeholder, type, ...props }, ref) => {
        const [hidePassword, setHidePassword] = useState(false);

        const handleHidePassword = () => {
            setHidePassword(!hidePassword)
        }

        return (
            <>
                <Input
                    {...props}
                    ref={ref}
                    label={label}
                    type={!hidePassword ? "text" : "password"}
                    error={error}
                    {...register(name)}
                />
                <span className="absolute top-[35px] transform right-3">
                    {hidePassword ? (
                        <IoEyeOffSharp
                            onClick={handleHidePassword}
                            className="cursor-pointer"
                        />
                    ) : (
                        <IoEye onClick={handleHidePassword} className="cursor-pointer" />
                    )}
                </span>
            </>
        )
    })
export default PasswprdInput;