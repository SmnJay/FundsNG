import React from 'react'
import Logo from '../Logo/Logo'

const Aside = () => {
  return (
    <aside className='max-w-xs w-[245px] bg-white h-screen overflow-x-hidden overflow-y-auto fixed left-0 top-0 '>
        <div className="h-[4rem] grid place-items-center">
            <Logo />
        </div>
    </aside>
  )
}

export default Aside