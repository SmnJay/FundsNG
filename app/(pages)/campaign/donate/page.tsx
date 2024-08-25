import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <main className='app-width py-6'>
            <div className="w-fit mx-auto">
                <h1 className="font-semibold text-[#323232] text-lg lg:text-2xl pb-6">Campaign Title goes here</h1>
                <Image
                    src={'/images/donateDummyImage.png'}
                    width={630}
                    height={565}
                    alt='alt'
                />
            </div>
        </main>
    )
}

export default page