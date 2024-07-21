import useClickOutside from '@/app/utils/hooks/clickOutside';
import React, { useEffect, useRef } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
    bgColor?: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, bgColor='bg-white/80', onClose, size = 'medium', children }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    useClickOutside(modalRef, onClose)

    if (!isOpen) return null;

    const sizeClasses = {
        small: 'max-w-sm',
        medium: 'max-w-md',
        large: 'max-w-lg',
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-300 ease-out p-4"
            style={{ opacity: isOpen ? 1 : 0 }}>
            <div className="absolute inset-0 bg-FBlack bg-opacity-50 backdrop-filter backdrop-blur" aria-hidden="true"></div>
            <div ref={modalRef} className={`relative ${bgColor} p-6 rounded-lg shadow-lg ${sizeClasses[size]} transition-transform duration-300 ease-out transform ${isOpen ? 'scale-100' : 'scale-95'}`}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
