/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useState } from 'react'
import Input, { InputSelect } from '../Input/Input';
import Datepicker, { DateType, DateValueType } from 'react-tailwindcss-datepicker';
import style from '../Input/InputField.module.css'
import { GoPlus } from 'react-icons/go';
import SavingsMember from '../Savings/SavingsMember';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import createSavingsSchema, { CreateSavingsSchema } from '@/app/schemaa/createSavingsSchema';

interface FormDataProps {
    title: string,
    reason: string,
    targetAmount: string,
    amountPerSave: string,
    type: string,
    startDate: DateType,
    endDate: DateType,
    deductionDate: DateType,
    deductionTime: string,
    paymentSource: string,
    frequency: string,
    // participants: string //array of string. guessing user id
}
const CreateSavings = () => {
    const [formData, setFormData] = useState<FormDataProps>({
        title: '',
        reason: '',
        targetAmount: '',
        amountPerSave: '',
        type: '',
        startDate: '',
        endDate: '',
        deductionDate: '',
        deductionTime: '',
        paymentSource: '',
        frequency: '',
        // participants: ''
    });

    const { handleSubmit, control, register, trigger, watch, setValue, getValues, formState: { errors } } = useForm<CreateSavingsSchema>({
        resolver: zodResolver(createSavingsSchema),
        mode: 'onSubmit'
    });

    const savingsTypeOptions = [
        { label: 'Individual', value: '0' },
        { label: 'Group', value: '1' },
    ]

    const [step, setStep] = useState(1);

    const [value1, setValue1] = useState<DateValueType>({
        startDate: new Date(),
        endDate: new Date()
    });

    const [value2, setValue2] = useState<DateValueType>({
        startDate: new Date(),
        endDate: new Date()
    });

    const [value3, setValue3] = useState<DateValueType>({
        startDate: new Date(),
        endDate: new Date()
    });

    const handleNextStep = (val: number) => {
        return setStep(val)
    }

    const handleToStep2 = async () => {
        let res = await trigger(['title', 'reason', 'targetAmount', 'type', 'startDate', 'endDate']);
        if (!res) {
            return;
        }
        return setStep(2);
    }
    const handleToStep3 = async () => {
        let res = await trigger(['deductionDate', 'deductionTime', 'frequency', 'paymentSource']);
        if (!res) {
            return;
        }
        return setStep(3);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...formData,
            [name]: value
        }))
    }

    const handleValueChange = (newValue: DateValueType) => {
        setValue1(newValue);
    }

    const handleValue2Change = (newValue: DateValueType) => {
        setValue2(newValue);
    }

    const handleValue3Change = (newValue: DateValueType) => {
        setValue3(newValue);
    }

    const isSubmit = async (data: CreateSavingsSchema) => {
        console.log({ formData, data })
    }

    const startDate = watch("startDate");
    const endDate = watch("endDate");
    const deductionDate = watch("deductionDate");

    React.useEffect(() => {
        if (startDate) {
            setValue('startDate', (value1?.startDate as string))
            let a = getValues();

            const news = {
                ...a,
                startDate: new Date(value1?.startDate as string).toISOString()
            }
        }
    }, [startDate]);

    React.useEffect(() => {
        if (endDate) {
            setValue('endDate', value1?.endDate as string)
            let a = getValues();
            const newData = {
                ...a,
                endDate: new Date(value2?.startDate as string).toISOString()
            }
        }
    }, [endDate]);

    React.useEffect(() => {
        if (deductionDate) {
            setValue('deductionDate', value1?.startDate as string)
            let a = getValues();
            const newData = {
                ...a,
                deductionDate: new Date(value3?.startDate as string).toISOString()
            }
        }
    }, [deductionDate]);


    const Savings1 = () => (
        <React.Fragment>
            <div className="bg-primary text-white rounded-t-lg p-4 ">
                <h2>Create Target Savings</h2>
            </div>
            <div className="p-4 bg-white">
                <h3 className="text-[#323232] font-medium leading-loose">Enter basic savings information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="form-group">
                        <Input
                            where='app'
                            label='Target Title'
                            error={errors?.title?.message}
                            placeholder='Title goes here'
                            {...register('title')}
                            id='title'
                            type='text'
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            where='app'
                            label='Savings Reason'
                            error={errors?.reason?.message}
                            placeholder='Vacation'
                            {...register('reason')}
                            type='text'
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            where='app'
                            label='Target amount'
                            error={errors?.targetAmount?.message}
                            placeholder='500,000'
                            inputMode='numeric'
                            {...register('targetAmount')} type='number'
                        />
                    </div>
                    <div className="form-group">
                        <InputSelect
                            where='app'
                            label='Type'
                            error={errors?.type?.message}
                            placeholder='Select Savings Type'
                            {...register('type')}
                            options={savingsTypeOptions}
                        />
                    </div>
                    <div className='relative'>
                        <div className={`form-group rounded-lg bg-white border px-3 py-2 ${style.containerApp} ${errors?.startDate && 'border-2 !border-red-400'} `}>
                            <label htmlFor={'campaign_start_date'} className={`block text-sm !text-[#979FA0]'}`}>
                                Select a date to start the Savings
                            </label>
                            <Controller
                                name='startDate'
                                control={control}
                                render={({ field: { onChange, value } }) => {
                                    let startDateValue = value as unknown as DateValueType
                                    return (
                                        <Datepicker
                                            value={startDateValue}
                                            onChange={(newValue) => {
                                                onChange(newValue);
                                                handleValueChange(newValue);
                                            }}
                                            useRange={false}
                                            asSingle
                                            minDate={new Date()}
                                            inputClassName={'bg-white peer w-full ring-0 !focus:ring-none !border-none !focus:border-none !outline-none !focus:outline-none'}
                                            containerClassName={`${style.dateInput}`}
                                            popoverDirection='down'
                                        />
                                    )
                                }}
                            />
                        </div>
                        <span className="text-red-400 text-sm">{errors?.startDate?.message}</span>
                    </div>
                    <div className='relative'>
                        <div className={`form-group rounded-lg bg-white border px-3 py-2 ${style.containerApp} ${errors?.endDate && 'border-2 !border-red-400'}`}>
                            <label htmlFor={'campaign_end_date'} className={`block text-sm text-[#979FA0]`}>Select a date to end the Savings</label>
                            <Controller
                                name='endDate'
                                control={control}
                                render={({ field: { onChange, value } }) => {
                                    let endDateValue = value as unknown as DateValueType;
                                    return (
                                        <Datepicker
                                            value={endDateValue}
                                            onChange={(newValue) => {
                                                onChange(newValue); // Update form state
                                                handleValue2Change(newValue); // Update local state
                                            }}
                                            useRange={false}
                                            asSingle
                                            minDate={new Date()}
                                            popoverDirection='down'
                                            inputClassName={'bg-white peer w-full ring-0 !focus:ring-none !border-none !focus:border-none !outline-none !focus:outline-none'}
                                            containerClassName={`${style.dateInput}`}
                                        />
                                    )
                                }}
                            />
                        </div>
                        <span className="text-red-400 text-sm">{errors?.endDate?.message}</span>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full mt-8 mb-2">
                    <button
                        type='button'
                        className="rounded-md border text-sm px-6 py-2 border-[#0c424c] bg-[#0C424C] hover:bg-primary text-white font-medium ease-out duration-150"
                        onClick={handleToStep2}>
                        Next
                    </button>
                </div>
            </div>
        </React.Fragment>
    );

    const Savings2 = () => (
        <React.Fragment>
            <div className="bg-primary text-white rounded-t-lg p-4 ">
                <h2>Create Target Savings</h2>
            </div>
            <div className="p-4 bg-white">
                <h3 className="text-[#323232] font-medium leading-loose">Enter other target saving information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="form-group">
                        <Input where='app' label='Frequency' error={errors?.frequency?.message} placeholder='Monthly' {...register('frequency')} type='text' />
                    </div>
                    <div className="form-group">
                        <Input where='app' label='Amount to save monthly' error={errors?.amountPerSave?.message} placeholder='20,000' {...register('amountPerSave')} type='number' />
                    </div>
                    <div className='relative'>
                        <div className={`form-group rounded-lg bg-white border px-3 py-2 ${style.containerApp}`}>
                            <label htmlFor={'endDate'} className={`block text-sm text-[#979FA0]`}>Day of savings deduction</label>
                            <Controller
                                name='deductionDate'
                                control={control}
                                render={({ field: { onChange, value } }) => {
                                    let deductionDateValue = value as unknown as DateValueType;
                                    return (
                                        <Datepicker
                                            value={deductionDateValue}
                                            onChange={(newValue) => {
                                                onChange(newValue); // Update form state
                                                handleValue3Change(newValue); // Update local state
                                            }}
                                            useRange={false}
                                            asSingle
                                            minDate={new Date()}
                                            popoverDirection='down'
                                            inputClassName={'bg-white peer w-full ring-0 !focus:ring-none !border-none !focus:border-none !outline-none !focus:outline-none'}
                                            containerClassName={`${style.dateInput}`}
                                        />
                                    )
                                }}
                            />
                        </div>
                        <span className="text-red-500">{errors?.deductionDate?.message}</span>
                    </div>
                    <div className="form-group">
                        <Input where='app' label='Time of savings deduction' error={errors?.deductionTime?.message} placeholder='Select' {...register('deductionTime')} type='time' />
                    </div>
                    <div className="form-group">
                        <Input where='app' label='Savings Source' error={errors?.paymentSource?.message} placeholder='Wallet' {...register('paymentSource')} type='text' />
                    </div>
                </div>

                <div className="flex items-center justify-center w-full mt-8 mb-2 gap-4">
                    <button type='button' className="rounded-md border text-sm px-6 py-2 border-[#0c424c] text-[#0C424C] hover:bg-appGrey ease-out duration-150" onClick={() => handleNextStep(1)}>Back</button>
                    <button type='button' className="rounded-md border text-sm px-6 py-2 border-[#0c424c] bg-[#0C424C] hover:bg-primary text-white font-medium ease-out duration-150" onClick={handleToStep3}>Next</button>
                </div>
            </div>
        </React.Fragment>

    );

    const Savings3 = () => (
        <React.Fragment>
            <div className="bg-primary text-white rounded-t-lg p-4 ">
                <h2>Add members to target savings</h2>
            </div>
            <div className="bg-white rounded-b-lg pb-6">
                <div className="max-w-md mx-auto flex items-center p-6">
                    <input type="text" name='email_or_phone' id='email_or_phone' placeholder='Enter email or phone number' className="text-sm bg-[#f8f8f8] py-2 px-3 rounded-l w-full focus:border-none focus:outline-none focus:ring-none" />
                    <label htmlFor="email_or_phone" className="hidden"></label>
                    <button type='button' className="bg-primary-10 text-white p-2 rounded-r">
                        <GoPlus size={20} />
                    </button>
                </div>
                <hr className="" />
                <div className="max-w-md mx-auto p-6 space-y-3">
                    <SavingsMember />
                    <SavingsMember />
                    <SavingsMember />
                    <SavingsMember />
                </div>
                <div className="max-w-md mx-auto px-6 flex items-center justify-center gap-4 w-full">
                    <button type='button' className="rounded-md border text-sm px-6 py-2 border-[#0c424c] text-[#0C424C] hover:bg-appGrey ease-out duration-150" onClick={() => handleNextStep(2)}>Back</button>
                    <button type='submit' className="rounded-md border text-sm px-6 py-2 border-[#0c424c] bg-[#0C424C] hover:bg-primary text-white font-medium ease-out duration-150" onClick={() => handleNextStep(3)}>Create</button>
                </div>
            </div>

        </React.Fragment>

    );

    return (
        <div className='mt-4'>
            <form onSubmit={handleSubmit(isSubmit)} name='create_savings' id='create-savings' className='max-w-3xl mr-auto'>

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