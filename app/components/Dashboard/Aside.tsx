'use client';

import React, { useEffect } from 'react'
import Logo, { MiniLogo } from '../Logo/Logo'
import Navigation from '../Navigation'
import { useMenu } from '@/app/utils/hooks/contexts';
import Links from '../Links/Index';
import { BsBellFill } from 'react-icons/bs';
import { signOut } from 'next-auth/react';
import { CgSpinnerTwo } from 'react-icons/cg';

const Aside = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const { isOpen } = useMenu();
  const handleLogout = async () => {
    setIsLoading(true);
    await signOut({
      callbackUrl: "/",
    });
  };

  return (
    <aside className={`max-w-xs w-[70px] md:w-[245px] border-r-2 bg-white h-screen z-50 overflow-x-hidden overflow-y-auto fixed left-0 top-0 ${isOpen ? 'max-md:translate-x-0' : 'max-md:-translate-x-[100%]'} ease-linear duration-100`}>
      <div className="h-[4rem] grid place-items-center">
        <span className="hidden md:block"><Logo /></span>
        <span className="md:hidden"><MiniLogo /></span>
      </div>

      <div className='border-b-2'>
        <Navigation />
      </div>
      <div className="md:hidden flex flex-col items-center mt-6 space-y-4">
        <BsBellFill size={34} className='hover:bg-appGrey text-primary-10 p-2 rounded-lg ease-linear duration-200' />
        <button aria-label='link to sign out of the application' onClick={handleLogout} className="hidden md:block hover:bg-appGrey p-2 rounded-lg ease-linear duration-200">
         { isLoading ? <CgSpinnerTwo className='animate-spin' /> : <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.75 0.250061C2.12665 0.250061 0 2.37671 0 5.00006V13.0001C0 15.6234 2.12665 17.7501 4.75 17.7501H12C14.6234 17.7501 16.75 15.6234 16.75 13.0001C16.75 12.5859 16.4142 12.2501 16 12.2501C15.5858 12.2501 15.25 12.5859 15.25 13.0001C15.25 14.795 13.7949 16.2501 12 16.2501H7.46412C8.26157 15.4004 8.75 14.2573 8.75 13.0001V5.00006C8.75 3.74285 8.26157 2.59971 7.46412 1.75006H12C13.7949 1.75006 15.25 3.20514 15.25 5.00006C15.25 5.41428 15.5858 5.75006 16 5.75006C16.4142 5.75006 16.75 5.41428 16.75 5.00006C16.75 2.37671 14.6234 0.250061 12 0.250061H4.75ZM17.1464 11.5304C16.8535 11.2375 16.8535 10.7626 17.1464 10.4697L17.8661 9.75002H11.75C11.3357 9.75002 11 9.41423 11 9.00002C11 8.58581 11.3357 8.25002 11.75 8.25002H17.8661L17.1464 7.53035C16.8535 7.23746 16.8535 6.76258 17.1464 6.46969C17.4393 6.1768 17.9142 6.1768 18.2071 6.46969L19.5 7.76258C20.1834 8.446 20.1834 9.55404 19.5 10.2375L18.2071 11.5304C17.9142 11.8232 17.4393 11.8232 17.1464 11.5304Z" fill="#2D7381" />
          </svg>}
        </button>
        <Links
          href='/signin'
          ariaLabel='link to sign out of the application'
          cls='hover:bg-appGrey p-2 rounded-lg ease-linear duration-200'
          name=<>
            <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.75 0.250061C2.12665 0.250061 0 2.37671 0 5.00006V13.0001C0 15.6234 2.12665 17.7501 4.75 17.7501H12C14.6234 17.7501 16.75 15.6234 16.75 13.0001C16.75 12.5859 16.4142 12.2501 16 12.2501C15.5858 12.2501 15.25 12.5859 15.25 13.0001C15.25 14.795 13.7949 16.2501 12 16.2501H7.46412C8.26157 15.4004 8.75 14.2573 8.75 13.0001V5.00006C8.75 3.74285 8.26157 2.59971 7.46412 1.75006H12C13.7949 1.75006 15.25 3.20514 15.25 5.00006C15.25 5.41428 15.5858 5.75006 16 5.75006C16.4142 5.75006 16.75 5.41428 16.75 5.00006C16.75 2.37671 14.6234 0.250061 12 0.250061H4.75ZM17.1464 11.5304C16.8535 11.2375 16.8535 10.7626 17.1464 10.4697L17.8661 9.75002H11.75C11.3357 9.75002 11 9.41423 11 9.00002C11 8.58581 11.3357 8.25002 11.75 8.25002H17.8661L17.1464 7.53035C16.8535 7.23746 16.8535 6.76258 17.1464 6.46969C17.4393 6.1768 17.9142 6.1768 18.2071 6.46969L19.5 7.76258C20.1834 8.446 20.1834 9.55404 19.5 10.2375L18.2071 11.5304C17.9142 11.8232 17.4393 11.8232 17.1464 11.5304Z" fill="#2D7381" />
            </svg>
          </>
        />
      </div>
    </aside>
  )
}

export default Aside