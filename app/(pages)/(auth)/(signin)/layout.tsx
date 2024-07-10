import Image from 'next/image';
import React from 'react'

const layout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="lg:grid lg:grid-cols-2 h-full overflow-y-auto">
        <div className="col-span-1 lg:my-auto">
            {children}
        </div>
        <div className="max-lg:hidden lg:col-span-1 relative flex items-center justify-center">
            <Image
                className='mx-auto my-auto'
                src={"/images/sign-in-bg.png"}
                width={600}
                height={400}
                alt='Background image for the auth screens showing multiple people joining hands together to form a circle and a beam of light emananting into it.'
            />
        </div>
    </div>
    )
}

export default layout