'use client'

import React, { useState } from 'react'
import Input from '../Input/Input';
import Datepicker, { DateValueType } from 'react-tailwindcss-datepicker';
import style from '../Input/InputField.module.css'
import Button from '../Button/Button';

const CreateSavings = () => {
    const [step, setStep] = useState(1);

    const [value, setValue] = useState<DateValueType>({
        startDate: new Date(),
        endDate: new Date()
    });
    const [value2, setValue2] = useState<DateValueType>({
        startDate: new Date(),
        endDate: new Date()
    });

    const handleValueChange = (newValue: DateValueType) => {
        console.log(newValue);
        setValue(newValue);
    }

    const handleValue2Change = (newValue: DateValueType) => {
        console.log(newValue);
        setValue2(newValue);
    }

    const Savings1 = () => (
        <React.Fragment>
            <div className="bg-primary text-white rounded-t-lg p-4 ">
                <h2>Create Target Savings</h2>
            </div>
            <div className="p-4 bg-white">
                <h3 className="text-[#323232] font-medium leading-loose">Enter basic savings information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="form-group">
                        <Input where='app' label='Target Title' error='' placeholder='Title goes here' name='' type='text' />
                    </div>
                    <div className="form-group">
                        <Input where='app' label='Savings Reason' error='' placeholder='Vacation' name='' type='text' />
                    </div>
                    <div className="form-group">
                        <Input where='app' label='Target amount' error='' placeholder='500,000' name='' type='number' />
                    </div>
                    <div className="form-group">
                        <Input where='app' label='Type' error='' placeholder='Individual' name='' type='text' />
                    </div>
                    <div className='relative'>
                        <div className={`form-group rounded-lg bg-white border px-3 py-2 ${style.containerApp}`}>
                            <label htmlFor={'campaign_end_date'} className={`block text-sm text-[#979FA0]`}>Select a date to end the campaign</label>
                            <Datepicker
                                value={value}
                                onChange={handleValueChange}
                                useRange={false}
                                asSingle
                                minDate={new Date()}
                                inputClassName={'bg-white peer w-full ring-0 !focus:ring-none !border-none !focus:border-none !outline-none !focus:outline-none'}
                                containerClassName={`${style.dateInput}`}
                            />
                        </div>
                        <span className="text-red-500">{''}</span>
                    </div>
                    <div className='relative'>
                        <div className={`form-group rounded-lg bg-white border px-3 py-2 ${style.containerApp}`}>
                            <label htmlFor={'campaign_end_date'} className={`block text-sm text-[#979FA0]`}>Select a date to end the campaign</label>
                            <Datepicker
                                value={value2}
                                onChange={handleValue2Change}
                                useRange={false}
                                asSingle
                                minDate={new Date()}
                                inputClassName={'bg-white peer w-full ring-0 !focus:ring-none !border-none !focus:border-none !outline-none !focus:outline-none'}
                                containerClassName={`${style.dateInput}`}
                            />
                        </div>
                        <span className="text-red-500">{''}</span>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full mt-8 mb-2">
                    <Button name='Next' cls='' color='primary' ariaLabel='Next button' onClick={() => setStep(2)} />
                </div>
            </div>
        </React.Fragment>

    )
    const Savings2 = () => (
        <React.Fragment>
            <div className="bg-primary text-white rounded-t-lg p-4 ">
                <h2>Create Target Savings</h2>
            </div>
            <div className="p-4 bg-white">
                <h3 className="text-[#323232] font-medium leading-loose">Enter other target saving information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="form-group">
                        <Input where='app' label='Frequency' error='' placeholder='Monthly' name='' type='text' />
                    </div>
                    <div className="form-group">
                        <Input where='app' label='Amount to save monthly' error='' placeholder='20,000' name='' type='text' />
                    </div>
                    <div className='relative'>
                        <div className={`form-group rounded-lg bg-white border px-3 py-2 ${style.containerApp}`}>
                            <label htmlFor={'campaign_end_date'} className={`block text-sm text-[#979FA0]`}>Day of savings deduction</label>
                            <Datepicker
                                value={value}
                                onChange={handleValueChange}
                                useRange={false}
                                asSingle
                                minDate={new Date()}
                                inputClassName={'bg-white peer w-full ring-0 !focus:ring-none !border-none !focus:border-none !outline-none !focus:outline-none'}
                                containerClassName={`${style.dateInput}`}
                            />
                        </div>
                        <span className="text-red-500">{''}</span>
                    </div>
                    <div className="form-group">
                        <Input where='app' label='Time of savings deduction' error='' placeholder='Select' name='' type='time' />
                    </div>
                    <div className="form-group">
                        <Input where='app' label='Savings Source' error='' placeholder='Wallet' name='' type='text' />
                    </div>
                </div>

                <div className="flex items-center justify-center w-full mt-8 mb-2 gap-4">
                    <Button name='Back' cls='' color='primary' ariaLabel='Prev button' onClick={() => setStep(1)} />
                    <Button name='Next' cls='' color='primary' ariaLabel='Next button' onClick={() => setStep(3)} />
                </div>
            </div>
        </React.Fragment>

    )
    const Savings3 = () => (
        <React.Fragment>
            <div className="bg-primary text-white rounded-t-lg p-4 ">
                <h2>Add members to target savings</h2>
            </div>
            <div className="p-4 bg-white">
                <h3 className="text-[#323232] font-medium leading-loose"></h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="form-group">
                        <Input where='app' label='Target Title' error='' placeholder='Title goes here' name='' type='text' />
                    </div>
                    <div className="form-group">
                        <Input where='app' label='Savings Reason' error='' placeholder='Vacation' name='' type='text' />
                    </div>
                    <div className="form-group">
                        <Input where='app' label='Target amount' error='' placeholder='500,000' name='' type='number' />
                    </div>
                    <div className="form-group">
                        <Input where='app' label='Type' error='' placeholder='Individual' name='' type='text' />
                    </div>
                    <div className='relative'>
                        <div className={`form-group rounded-lg bg-white border px-3 py-2 ${style.containerApp}`}>
                            <label htmlFor={'campaign_end_date'} className={`block text-sm text-[#979FA0]`}>Select a date to end the campaign</label>
                            <Datepicker
                                value={value}
                                onChange={handleValueChange}
                                useRange={false}
                                asSingle
                                minDate={new Date()}
                                inputClassName={'bg-white peer w-full ring-0 !focus:ring-none !border-none !focus:border-none !outline-none !focus:outline-none'}
                                containerClassName={`${style.dateInput}`}
                            />
                        </div>
                        <span className="text-red-500">{''}</span>
                    </div>
                    <div className='relative'>
                        <div className={`form-group rounded-lg bg-white border px-3 py-2 ${style.containerApp}`}>
                            <label htmlFor={'campaign_end_date'} className={`block text-sm text-[#979FA0]`}>Select a date to end the campaign</label>
                            <Datepicker
                                value={value2}
                                onChange={handleValue2Change}
                                useRange={false}
                                asSingle
                                minDate={new Date()}
                                inputClassName={'bg-white peer w-full ring-0 !focus:ring-none !border-none !focus:border-none !outline-none !focus:outline-none'}
                                containerClassName={`${style.dateInput}`}
                            />
                        </div>
                        <span className="text-red-500">{''}</span>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full mt-8 mb-2 gap-4">
                    <Button name='Back' cls='' color='primary' ariaLabel='Prev button' onClick={() => setStep(2)} />
                    <Button name='Submit' cls='' color='primary' ariaLabel='Next button' onClick={() => setStep(3)} />
                </div>
            </div>
        </React.Fragment>

    )
    return (
        <div className='mt-4'>
            <form action="" name='create_savings' id='create-savings' className='max-w-3xl mr-auto'>

                {/* step 1 */}
                {step === 1 && Savings1()}

                {/* step 2 */}
                {step === 2 && Savings2()}

                {/* step 3 */}
                {step === 3 && Savings3()}
            </form>
        </div>
    )
}

export default CreateSavings