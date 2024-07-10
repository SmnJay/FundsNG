'use client';

import React from 'react'
import Links from '../Links/Index';
import { nav_data as data } from '@/app/utils/navigation';
import { usePathname } from 'next/navigation';

const Navigation: React.FC = () => {
  const activePath = usePathname();

    return (
        <nav className='space-y-4 w-2/3 mx-auto py-8'>
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
                            cls={`${activePath === link && 'bg-appGrey'} text-primary block capitalize font-medium leading-loose hover:bg-appGrey rounded-lg ease-linear duration-200 py-1 px-2 outline outline-transparent hover:outline-[#FFECE5]s`}
                        />
                    )
                })
            }
        </nav>
    )
}

export default Navigation