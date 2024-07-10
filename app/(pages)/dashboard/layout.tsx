import Aside from '@/app/components/Dashboard/Aside';
import Header from '@/app/components/Dashboard/Header';
import React from 'react'

const AppLayout = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='bg-appGrey/50 h-screen'>
      <Header />
      <Aside />
      <main className="ml-[250px] p-8">
        {children}
      </main>

    </div>
  )
}

export default AppLayout