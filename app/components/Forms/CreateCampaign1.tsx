import React from 'react'
import Input, { InputTextArea } from '../Input/Input'

interface CreateCampaign1Props {
    data: {
        name: string,
        description: string,
        mediaUrl: string,
        binaryString?: File | string
    },
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CreateCampaign1: React.FC<CreateCampaign1Props> = ({ data, handleChange, handleFileChange }) => {

    return (
        <div className='max-w-2xl mx-auto p-4 md:p-6'>
            <div className="text-center text-sm md:text-base">
                <h2 className="text-leafGreen-5 font-semibold text-lg leading-loose md:text-xl">Basic Information</h2>
                <p className="textt-[#535758]">You can have your fundraiser set up in a few minutes</p>
            </div>
            <form className='mt-4 space-y-4' name='' id=''>
                <Input
                    error=''
                    where='app'
                    label='Campaign Name'
                    placeholder='Emergency for IDP camp'
                    autoComplete='off'
                    type='text'
                    name='name'
                    value={data.name}
                    onChange={handleChange}
                />
                <InputTextArea
                    error=''
                    where='app'
                    label='Description'
                    placeholder='Add a description to explain what your fundraiser is about.'
                    autoComplete='off'
                    type='text'
                    value={data.description}
                    onChange={handleChange}
                    name='description'
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative items-center justify-between">
                    <Input
                        error=''
                        where='app'
                        label=''
                        placeholder='Insert a youtube or vimeo link'
                        autoComplete='off'
                        type='text'
                        name='mediaUrl'
                        value={data.mediaUrl}
                        onChange={handleChange}
                    />
                    <span className="text-center text-sm leading-loose block absolute left-1/2 -translate-x-1/2">Or</span>
                    <Input
                        accept='.mp4'
                        error=''
                        where='app'
                        label=''
                        placeholder='Upload from device'
                        autoComplete='off'
                        type='file'
                        name='binaryString'
                        onChange={handleFileChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default CreateCampaign1