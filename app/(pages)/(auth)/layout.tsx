import React from 'react'

const AuthLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className='relative md:bg-signUp-pattern h-screen md:grid md:place-items-center md:bg-[length:16em_16em]'>
            {children}
        </main>
    )
}

export default AuthLayout