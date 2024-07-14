'use client';

import { Menucontext } from "@/app/context/Menucontext"
import { useContext } from "react"

export const useMenu = () => {
    const context = useContext(Menucontext);

    if (!context) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
}