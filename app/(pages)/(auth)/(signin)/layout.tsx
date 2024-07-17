import React from 'react'
import SignInCarousel from '@/app/components/Carousel/SignInCarousel';

const layout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="lg:grid lg:grid-cols-2 h-full overflow-y-auto">
            <div className="col-span-1 lg:my-auto">
                {children}
            </div>
            <div className="max-lg:hidden lg:col-span-1 relative flex items-center justify-center">
                <SignInCarousel />
            </div>
        </div>
    )
}

export default layout