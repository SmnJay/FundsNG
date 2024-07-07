import Aside from '@/app/components/Dashboard/Aside';
import Header from '@/app/components/Dashboard/Header';
import React from 'react'

const AppLayout = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='bg-appGrey/50'>
        <Header />
        <Aside />
        <main className=""></main>
        {children}
    </div>
  )
}

export default AppLayout