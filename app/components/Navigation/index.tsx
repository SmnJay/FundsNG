'use client';

import React from 'react'
import Links from '../Links/Index';
import { nav_data as data } from '@/app/utils/navigation';
import { usePathname } from 'next/navigation';

const Navigation: React.FC = () => {
  const activePath = usePathname();

    return (
        <nav className='space-y-4 w-4/5 mx-auto py-6 md:py-8'>
            {
                data.map((item) => {
                    const { id, name, link, icon } = item;
                    
                    return (
                        <Links
                            key={id}
                            href={link}
                            name={
                                <div className='flex items-center gap-3'>
                                    <span className='text-2xl ease-linear duration-200 md:text-base'>{icon}</span>
                                    <span className='hidden ease-linear duration-200 md:block'>{name}</span>
                                </div>
                            }
                            ariaLabel={name} 
                            cls={`${activePath === link && 'hover:cursor-text bg-[#CEE9B3] pointer-events-none'} w-fit text-primary block capitalize font-medium leading-loose hover:bg-appGrey text-sm rounded-lg ease-linear duration-200 py-2 px-4 md:px-6 outline outline-transparent hover:outline-[#FFECE5]s w-full`}
                        />
                    )
                })
            }
        </nav>
    )
}

export default Navigation