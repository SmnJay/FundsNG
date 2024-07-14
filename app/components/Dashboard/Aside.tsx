'use client';

import React, { useEffect } from 'react'
import Logo, { MiniLogo } from '../Logo/Logo'
import Navigation from '../Navigation'
import { useMenu } from '@/app/utils/hooks/contexts';

const Aside = () => {
  const { isOpen } = useMenu();

  return (
    <aside className={`max-w-xs w-[70px] md:w-[245px] border-r-2 bg-white h-screen overflow-x-hidden overflow-y-auto fixed left-0 top-0 ${isOpen ? 'max-md:translate-x-0' : 'max-md:-translate-x-[100%]'} ease-linear duration-100`}>
      <div className="h-[4rem] grid place-items-center">
        <span className="hidden md:block"><Logo /></span>
        <span className="md:hidden"><MiniLogo /></span>
      </div>

      <div className='border-b-2'>
        <Navigation />
      </div>
    </aside>
  )
}

export default Aside