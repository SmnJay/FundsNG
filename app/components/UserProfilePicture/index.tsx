import Image from 'next/image'
import React from 'react'
import { FaUser } from 'react-icons/fa'

const Avatar = () => {
    return (
        <div className='ring-1 ring-primary relative rounded-full h-[30px] w-[30px] overflow-hiddens grid place-items-center'>
            {/* <Image
                className='rounded-full'
                src={'/images/passport.jpg'}
                fill
                sizes={'30px'}
                style={{ objectPosition: 'center' }}
                alt={'Authenticated user avatar'}
            /> */}
            <FaUser className='text-primary'/>
            <div className="bg-green-700 h-3 w-3 rounded-full ring-2 ring-white absolute z-50 right-0 bottom-0 border"></div>
        </div>
    )
}

export const MemberAvatar = () => {
    return (
        <div className='relative rounded-full h-[50px] w-[50px] overflow-hiddens grid place-items-center'>
            <Image
                className='rounded-full'
                src={'/images/passport.jpg'}
                fill
                sizes={'50px'}
                style={{ objectPosition: 'center' }}
                alt={'Member user avatar'}
            />
        </div>
    )

}

export const ProfileAvatar = () => {
    return (
        <div className='relative rounded-full h-[150px] w-[150px] overflow-hiddens grid place-items-center'>
            <Image
                className='rounded-full'
                src={'/images/passport.jpg'}
                fill
                sizes={'150px'}
                style={{ objectPosition: 'center' }}
                alt={'Profile Picture Avatar'}
            />
        </div>
    );
};

export default Avatar