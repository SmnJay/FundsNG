import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <Image src={'/images/full_logo.png'} alt="FundsNg Logo" width={193} height={40} className="" />
    )
}

export const MiniLogo = () => {
    return (
        <Image src={'/images/Logo.png'} alt="FundsNg Logo" width={40} height={40} className="" />
    )
}

export const WhiteLogo = () => {
    return (
        <Image src={'/images/white-full_logo.png'} alt="FundsNg Logo" width={193} height={40} className="" />
    )
}


export default Logo