import clsx from 'clsx';
import Link from 'next/link';
import React, { ReactNode } from 'react'
import { CgSpinnerTwo } from "react-icons/cg";

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
    disabled?: boolean
    onClick?: () => void
}

interface ButtonLinkProps extends ButtonProps {
    href: string
    iconPosition?: 'left' | 'right'
    fullWidth?: boolean
}

const Button: React.FC<ButtonProps> = ({ type = 'button', onClick, disabled, color, icon, outline, cls, ariaLabel, processing, name, ...props }) => {
    const buttonClassNames = clsx(
        `${cls ? cls : ''} border-2 md:leading-4 font-medium px-8 max-md:text-sm group rounded-lg ${processing && 'cursor-not-allowed'}`,
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
            disabled={disabled || processing}
            aria-busy={processing}
            aria-label={ariaLabel}
            aria-live='polite'
            onClick={onClick}
        >
            {
                processing ?
                    <span className='py-3 animate-spin text-center flex items-center justify-center'><CgSpinnerTwo /></span>
                    :
                    <span className="block  duration-300 ease-in-out">
                        <span className="flex p-2 md:p-3 justify-center items-center flex-shrink-0 gap-2">
                            <span className="flex-shrink-0">{icon}</span>{name}</span>
                    </span>
            }

        </button>
    )
}


export const ButtonLink: React.FC<ButtonLinkProps> = ({ href, textColor, color, outline, ariaLabel, iconPosition, processing, name, cls, icon, fullWidth, ...props }) => {
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
                        <span className={`py-3 duration-300 ease-in-out text-center flex items-center justify-center gap-1 whitespace-nowrap ${iconPosition === 'left' && 'flex-row-reverse'}`}>
                            <span className="">{name}</span>
                            <span className="flex-shrink-0">{icon}</span>
                        </span>
                }
            </Link>
        </div>
    )
}

export default Button;