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
      <main className="md:ml-[250px] p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <section className="col-span-2">{children}</section>
        <section className="col-span-1">
          <h3 className="text-primary font-medium font-bvp">Recent Activity</h3>
        </section>
       
      </main>

    </div>
  )
}

export default AppLayout