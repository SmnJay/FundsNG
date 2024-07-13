'use client';

import React from 'react'
import Links from '../Links/Index';
import { nav_data as data } from '@/app/utils/navigation';
import { usePathname } from 'next/navigation';

const Navigation: React.FC = () => {
  const activePath = usePathname();

    return (
        <nav className='space-y-4 w-4/5 mx-auto py-8 font-bvp'>
            {
                data.map((item) => {
                    const { id, name, link, icon } = item;
                    console.log({link, activePath});
                    
                    return (
                        <Links
                            key={id}
                            href={link}
                            name={
                                <div className='flex items-center gap-3'>
                                    <span>{icon}</span>
                                    <span>{name}</span>
                                </div>
                            }
                            ariaLabel={name} 
                            cls={`${activePath === link && 'hover:cursor-text bg-appGrey pointer-events-none'} text-primary block capitalize font-medium leading-loose hover:bg-appGrey rounded-lg ease-linear duration-200 py-2 px-6 outline outline-transparent hover:outline-[#FFECE5]s`}
                        />
                    )
                })
            }
        </nav>
    )
}

export default Navigation