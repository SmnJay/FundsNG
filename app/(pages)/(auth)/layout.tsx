import React from 'react'

const AuthLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className='relative bg-signUp-pattern bg-primary h-screen overflow-hidden bg-[length:6em_6em] smd:bg-[length:16em_16em]'>
            {children}
        </main>
    )
}

export default AuthLayout