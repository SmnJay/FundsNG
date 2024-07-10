import Image from 'next/image'
import React from 'react'

const Logo = ({ color }: { color?: string }) => {
    return (
        <Image src={`${color === 'white' ? '/images/white-full_logo.png' : '/images/full_logo.png'} `} alt="FundsNg Logo" width={193} height={40} className="" />
    )
}


export default Logo