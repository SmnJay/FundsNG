import React from 'react'
import Input from '../Input/Input'

interface CreateCampaign3Props {
    data: {
        bank_name: string,
        account_number: number | null,
        bvn: number | null
    },
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

const CreateCampaign3:React.FC<CreateCampaign3Props> = ({data, handleChange}) => {
    return (
        <div className='max-w-2xl mx-auto p-4 md:p-6'>
            <div className="text-center text-sm md:text-base">
                <h2 className="text-leafGreen-5 font-semibold text-lg leading-loose md:text-xl">Link your Bank Account</h2>
                <p className="textt-[#535758]">You can have your fundraiser set up in a few minutes</p>
            </div>
            <form className='mt-4 space-y-4' name='' id=''>
                <Input
                    error=''
                    where='app'
                    label='Bank Name'
                    placeholder='eg; Zenith Bank'
                    autoComplete='off'
                    type='text'
                    name='bank_name'
                    value={data.bank_name}
                    onChange={handleChange}
                />
                <Input
                    error=''
                    where='app'
                    label='Account Number'
                    placeholder='208365832'
                    autoComplete='off'
                    type='number'
                    name='account_number'
                    value={data.account_number ?? ''}
                    onChange={handleChange}
                />
                <Input
                    error=''
                    where='app'
                    label='BVN'
                    placeholder='1234567890'
                    autoComplete='off'
                    type='number'
                    name='bvn'
                    value={data.bvn ?? ''}
                    onChange={handleChange}
                />
            </form>
            
        </div>
    )
}

export default CreateCampaign3