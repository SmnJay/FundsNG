import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <Image src='/images/full_logo.png' alt="Funds Ng Logo" width={193} height={40} className="mx-auto" />
    )
}

export default Logo