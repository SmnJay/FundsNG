import Image from 'next/image'
import React from 'react'

const Avatar = () => {
    return (
        <div className='ring-1 ring-white relative h-[50px] w-[50px] overflow-hiddens grid place-items-center'>
            <Image
                className='rounded-full'
                src={'/images/passport.jpg'}
                fill
                objectPosition='center'
                alt={'Authenticated user avatar'}
            />
            <div className="bg-green-700 h-3 w-3 rounded-full ring-2 ring-white absolute z-50 right-0 bottom-0 border"></div>
        </div>
    )
}

export default Avatar