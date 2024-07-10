import React from 'react'

const AuthLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className='relative bg-signUp-pattern bg-primary h-screen overflow-hidden max-md:bg-[length:6em_6em]'>
            {children}
        </main>
    )
}

export default AuthLayout