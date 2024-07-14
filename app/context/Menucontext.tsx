'use client';

import React, { createContext, useState } from 'react';

interface MenuContextType {
    isOpen: boolean;
    handleIsOpen: () => void;
}

export const Menucontext = createContext<MenuContextType | undefined>(undefined);

const MenucontextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Menucontext.Provider value={{ isOpen, handleIsOpen }}>
            {children}
        </Menucontext.Provider>
    )
}

export default MenucontextProvider