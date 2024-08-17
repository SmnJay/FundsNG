import React, { useState } from 'react';
import Input, { InputSelect } from '../Input/Input';
import Datepicker, { DateType, DateValueType } from 'react-tailwindcss-datepicker';
import style from '../Input/InputField.module.css'
import { useQuery } from '@tanstack/react-query';
import { getCampaignCategoriesApiService } from '@/app/utils/services/campaign/campaignApiService';

interface CreateCampaign2Props {
    data: {
        targetAmount: number,
        endDate: DateType,
        campaignCategoryId: string,
        mobile: string,
        state: string
        country: string
        agreementSigned: boolean
    },
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
    handleDateChange: (elem: DateType) => void
    handleCheckChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    // handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CreateCampaign2: React.FC<CreateCampaign2Props> = ({ data, handleChange, handleDateChange, handleCheckChange }) => {
    const [value, setValue] = useState<DateValueType>({
        startDate: new Date(),
        endDate: new Date()
    });

    const handleValueChange = (newValue: DateValueType) => {
        setValue(newValue);
        handleDateChange(value?.startDate ?? new Date())
    }

    const campaignCategory = useQuery({
        queryKey: ['campaign-category'],
        queryFn: getCampaignCategoriesApiService
    });

    const campaingCategoriesOptions = campaignCategory?.data?.map((item: { id: string, name: string }) => {
        const { id, name } = item;
        return ({
            value: id,
            label: name
        })
    })


    return (
        <div className='max-w-lg mx-auto p-4 md:p-6'>
            <div className="text-center text-sm md:text-base">
                <h2 className="text-leafGreen-5 font-semibold text-lg leading-loose md:text-xl">About the Campaign</h2>
                <p className="textt-[#535758]">You can have your fundraiser set up in a few minutes</p>
            </div>

            <form className='mt-4 space-y-4' name='' id=''>
                <Input
                    error=''
                    where='app'
                    label='Set the financial goal'
                    placeholder='i.e. NGN 1,000,000'
                    autoComplete='off'
                    type='number'
                    name='targetAmount'
                    value={data.targetAmount}
                    onChange={handleChange}
                />
                <div className='relative'>
                    <div className={`form-group rounded-lg bg-white border px-3 py-2 ${style.containerApp}`}>
                        <label htmlFor={'endDate'} className={`block text-sm text-[#979FA0]`}>Select a date to end the campaign</label>
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

                <InputSelect
                    error=''
                    name='campaignCategoryId'
                    placeholder='eg Medical Bills'
                    options={campaingCategoriesOptions}
                    label='Add a Category'
                    onChange={handleChange}
                />
                <Input
                    error=''
                    where='app'
                    label='Phone Number'
                    placeholder='+234 | 08012345678'
                    autoComplete='off'
                    type='tel'
                    value={data.mobile}
                    onChange={handleChange}
                    name='mobile'
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative items-center justify-between">
                    <Input
                        error=''
                        where='app'
                        label='Country'
                        placeholder='Nigeria'
                        autoComplete='off'
                        type='text'
                        name='country'
                        value={data.country}
                        onChange={handleChange}
                    />
                    <Input
                        accept='.mp4'
                        error=''
                        where='app'
                        label='State'
                        placeholder='Lagos State'
                        autoComplete='off'
                        type='text'
                        name='state'
                        value={data.state}
                        onChange={handleChange}
                    />
                </div>
                <div className="text-sm space-x-1">
                    <input onChange={handleCheckChange} type="checkbox" className='accent-leafGreen-30' name="agreementSigned" id="agreementSigned" />
                    <label htmlFor="agreementSigned" className="">Agreement Signed</label>
                </div>
            </form>
        </div>
    )
}

export default CreateCampaign2