import Aside from '@/app/components/Dashboard/Aside';
import Header from '@/app/components/Dashboard/Header';
import React from 'react'

const AppLayout = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='bg-appGrey/50 min-h-screen'>
      <Header />
      <Aside />
      <main className="md:ml-[150px] p-4 md:p-8">
        {children}
      </main>

    </div>
  )
}

export default AppLayout