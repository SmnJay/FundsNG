import React from 'react'
import Input, { InputTextArea } from '../Input/Input'

interface CreateCampaign1Props {
    data: {
        campaign_for: string,
        fundraiser: string,
        description: string,
        videoFile?: File,
        videoLink: string
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
                    label='Who is the campaign for?'
                    placeholder='Myself'
                    autoComplete='off'
                    type='text'
                    name='campaign_for'
                    value={data.campaign_for}
                    onChange={handleChange}
                />
                <Input
                    error=''
                    where='app'
                    label='Your Fundraiser name?'
                    placeholder='eg; Food for the hungry'
                    autoComplete='off'
                    type='text'
                    name='fundraiser'
                    value={data.fundraiser}
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
                    name='campaign_for'
                />
                <div className="md:grid grid-cols-2 gap-8 relative items-center justify-between">
                    <Input
                        error=''
                        where='app'
                        label=''
                        placeholder='Insert a youtube or vimeo link'
                        autoComplete='off'
                        type='text'
                        name='videoLink'
                        value={data.videoLink}
                        onChange={handleChange}
                    />
                    <span className="text-center leading-loose block absolute left-1/2 -translate-x-1/2">Or</span>
                    <Input
                        accept='.mp4'
                        error=''
                        where='app'
                        label=''
                        placeholder='Upload from device'
                        autoComplete='off'
                        type='file'
                        name='videoFile'
                        onChange={handleFileChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default CreateCampaign1