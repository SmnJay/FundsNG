'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'; // Optional for smooth animation

type Props = {
    isOpen: boolean
    closeDrawer: () => void
    children: React.ReactNode
}
const DrawerTab = ({ isOpen, closeDrawer, children }: Props) => {
    const drawerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
                closeDrawer();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, closeDrawer]);

    return (
        <>
            {isOpen && (
                <div
                    onClick={closeDrawer} 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40" 
                />
            )}
            <motion.div
                initial={{ x: '100%' }} // Start hidden off-screen
                animate={{ x: isOpen ? 0 : '100%' }} // Slide in or out based on `isOpen`
                transition={{ type: 'spring', stiffness: 300, damping: 30 }} // Smooth animation
                className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{ overflowY: 'auto' }} // Make the drawer scrollable
                ref={drawerRef} // Reference to the drawer element
            >
                <div className="flex flex-col h-full">
                    <div className="p-5 flex-shrink-0">
                        <button onClick={closeDrawer} className="text-gray-500">Close</button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-5">
                        {children} {/* Dynamically render content passed as children */}
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default DrawerTab;
