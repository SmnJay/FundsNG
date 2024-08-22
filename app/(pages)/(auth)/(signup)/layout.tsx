import Image from 'next/image';
import React from 'react'

const layout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="lg:grid lg:grid-cols-3 h-full overflow-y-auto">
            <div className="col-span-2 lg:my-auto">
                {children}
            </div>
            <div className="max-lg:hidden lg:col-span-1 relative">
                <Image
                    className=''
                    src={"/images/auth-main-bg.png"}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    alt='Background image for the auth screens showing multiple people joining hands together to form a circle and a beam of light emananting into it.'
                />
            </div>
        </div>
    )
}

export default layout