'use client';

import Image from 'next/image';
import React from 'react'

const SignInCarousel = () => {
    return (

        <Image
            className='mx-auto my-auto'
            src={"/images/sign-in-bg.png"}
            width={600}
            height={400}
            alt='Background image for the auth screens showing multiple people joining hands together to form a circle and a beam of light emananting into it.'
        />
    )
}

export default SignInCarousel