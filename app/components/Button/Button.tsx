import clsx from 'clsx';
import Link from 'next/link';
import React, { ReactNode } from 'react'

interface ButtonProps {
    processing?: boolean;
    cls?: string;
    name: string;
    ariaLabel: string
    outline?: boolean;
    color?: 'primary' | 'secondary' | 'grey' | 'black' | 'white' | 'leafGreen'
    type?: 'button' | 'submit' | 'reset';
    icon?: ReactNode
    textColor?: string
    onClick?: () => void
}

interface ButtonLinkProps extends ButtonProps {
    href: string
    fullWidth?: boolean
}

const Button: React.FC<ButtonProps> = ({ type = 'button', onClick, color, outline, cls, ariaLabel, processing, name, ...props }) => {
    const buttonClassNames = clsx(
        `${cls ? cls : ''} border-2 md:leading-4 font-medium px-8 max-md:text-sm group rounded-lg`,
        {
            'bg-primary text-white border-primary': color === 'primary' && !outline,
            'bg-transparent text-primary border-primary': color === 'primary' && outline,
            'bg-leafGreen-20 text-white border-leafGreen-20': color === 'leafGreen' && !outline,
            'bg-transparent text-leafGreen-20 border-leafGreen-20': color === 'leafGreen' && outline,
            'bg-white text-primary border-white': color === 'white' && !outline,
            'bg-transparent text-white border-white': color === 'white' && outline,
            'bg-black text-white border-black': color === 'black' && !outline,
            'bg-transparent text-black border-black': color === 'black' && outline,
            'bg-[#FCF9F8] text-FBlack border-[#FCF9F8]': color === 'grey' && !outline,
            'bg-transparent text-[#FCF9F8] border-[#FCF9F8]': color === 'grey' && outline,
        }
    )
    return (
        <button
            {...props}
            type={type}
            className={buttonClassNames}
            disabled={processing}
            aria-busy={processing}
            aria-label={ariaLabel}
            aria-live='polite'
            onClick={onClick}
        >
            {
                processing ?
                    <span className='block py-3 animate-pulse'>...sending</span>
                    :
                    <span className="block py-3 duration-300 ease-in-out">{name}</span>
            }

        </button>
    )
}


export const ButtonLink: React.FC<ButtonLinkProps> = ({ href, textColor, color, outline, ariaLabel, processing, name, cls, icon, fullWidth, ...props }) => {
    const buttonClassNames = clsx(
         `${cls ? cls : ''} border-2 md:leading-4 font-medium px-8 max-md:text-sm group rounded-lg`,
        {
            'bg-primary text-white border-primary': color === 'primary' && !outline,
            'bg-transparent text-primary border-primary': color === 'primary' && outline,
            'bg-leafGreen-20 text-white border-leafGreen-20': color === 'leafGreen' && !outline,
            'bg-transparent text-leafGreen-20 border-leafGreen-20': color === 'leafGreen' && outline,
            'bg-white text-primary border-white': color === 'white' && !outline,
            'bg-transparent text-white border-white': color === 'white' && outline,
            'bg-black text-white border-black': color === 'black' && !outline,
            'bg-transparent text-black border-black': color === 'black' && outline,
            'bg-[#FCF9F8] text-FBlack border-[#FCF9F8]': color === 'grey' && !outline,
            'bg-transparent text-[#FCF9F8] border-[#FCF9F8]': color === 'grey' && outline,
        }
    )
    return (
        <div className={buttonClassNames}>
            <Link
                {...props}
                href={href}
                aria-busy={processing}
                aria-label={ariaLabel}
                aria-live='polite'
            >
                {
                    processing ?
                        <span className='block py-3 animate-pulse'>...sending</span>
                        :
                        <span className="py-3 duration-300 ease-in-out text-center flex items-center justify-center gap-1">{name}{icon}</span>
                }
            </Link>
        </div>
    )
}

export default Button;