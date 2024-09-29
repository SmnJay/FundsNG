'use client';

import React, { createContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
            <Toaster />
            <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-left' />
            <Menucontext.Provider value={{ isOpen, handleIsOpen }}>
                {children}
            </Menucontext.Provider>
        </QueryClientProvider>
    )
}

export default MenucontextProvider