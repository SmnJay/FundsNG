import React from 'react'
import Logo from '../Logo/Logo'
import Avatar from '../UserProfilePicture'
import Navigation from '../Navigation'

const Aside = () => {
  return (
    <aside className='max-w-xs w-[245px] border-r-2 bg-white h-screen overflow-x-hidden overflow-y-auto fixed left-0 top-0 max-md:hidden'>
      <div className="h-[4rem] grid place-items-center">
        <Logo />
      </div>

      <div className="flex justify-center items-center gap-2 mt-6">
        <Avatar />
        <div className="">
          <h3 className="font-semibold">Tosin Akerele</h3>
          <p className="text-primary-30 text-xs">@TosinJ</p>
        </div>
      </div>
    
      <div className='border-b-2'>
        <Navigation />
      </div>
    </aside>
  )
}

export default Aside