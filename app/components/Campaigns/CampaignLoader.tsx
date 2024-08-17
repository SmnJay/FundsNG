import React from 'react'

const CampaignLoader = () => {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-6'>
            <div className="h-40 w-full bg-zinc-200 rounded-md md:rounded-lg animate-pulse"></div>
            <div className="h-40 w-full bg-zinc-200 rounded-md md:rounded-lg animate-pulse"></div>
            <div className="h-40 w-full bg-zinc-200 rounded-md md:rounded-lg animate-pulse"></div>
            <div className="h-40 w-full bg-zinc-200 rounded-md md:rounded-lg animate-pulse"></div>
        </section>
    )
}

export default CampaignLoader