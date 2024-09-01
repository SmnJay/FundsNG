import Aside from '@/app/components/Dashboard/Aside';
import Header from '@/app/components/Dashboard/Header';
import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

const AppLayout = async ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await getServerSession(authOptions);

  if (!session?.user.emailConfirmed) {
    redirect('/verify-email')
  }

  return (
    <div className='bg-appGrey/50 min-h-screen'>
      <Header />
      <Aside />
      <main className="md:ml-[250px] p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-12 min-h-[calc(100vh-4rem)]">
        <section className="col-span-3 h-full">{children}</section>
      </main>

    </div>
  )
}

export default AppLayout