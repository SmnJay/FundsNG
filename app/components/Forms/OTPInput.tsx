'use client';

import React, { useRef, useState, ChangeEvent } from 'react';

type InputProps = {
    length?: number;
    onComplete: (pin: string) => void;
};

const OTPInput = ({ length = 6, onComplete }: InputProps) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(length).fill(null));

    const [OTP, setOTP] = useState<string[]>(Array(length).fill(''));

    const handleTextChange = (input: string, index: number) => {
        const newPin = [...OTP];
        newPin[index] = input;
        setOTP(newPin);

        if (input.length === 1 && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }

        if (input.length === 0 && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }

        if (newPin.every((digit) => digit !== '')) {
            onComplete(newPin.join(''));
        }
    };

    return (
        <div className={`mt-6 flex items-center justify-between gap-1 w-4/5 mx-auto`}>
            {Array.from({ length }, (_, index) => {
                return (
                    <>
                        <input
                            key={index}
                            type="text"
                            maxLength={1}
                            value={OTP[index]}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleTextChange(e.target.value, index)}
                            ref={(ref) => {
                                inputRefs.current[index] = ref;
                            }}
                            className="h-12 w-12 border-2 mx-auto border-solid text-center rounded-lg focus:border-primary outline-none"
                            placeholder="-"
                            // style={{ marginRight: index === length - 1 ? '0' : '10px' }} 
                        />
                        {
                            index === (length / 2) - 1 && <span className=''>-</span>
                        }
                    </>
                )
            })}
        </div>
    );
};

export default OTPInput;
