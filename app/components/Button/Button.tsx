import clsx from 'clsx';
import Link from 'next/link';
import React from 'react'

interface ButtonProps {
    processing?: boolean;
    name: string;
    ariaLabel: string
    outline?: boolean;
    color?: 'primary' | 'secondary' | 'grey' | 'black' | 'white'
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void
}

interface ButtonLinkProps extends ButtonProps {
    href: string
    fullWidth?: boolean
}

const Button: React.FC<ButtonProps> = ({ type = 'button', onClick, color, outline, ariaLabel, processing, name, ...props }) => {
    const buttonClassNames = clsx(
        'border-2 font-semibold px-8 max-md:text-sm group rounded-lg',
        {
            'bg-primary text-white border-primary': color === 'primary' && !outline,
            'bg-transparent text-primary border-primary': color === 'primary' && outline,
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
                    <span className="block py-3 duration-300 ease-in-out  ">{name}</span>
            }

        </button>
    )
}


export const ButtonLink: React.FC<ButtonLinkProps> = ({ href, color, outline, ariaLabel, processing, name, fullWidth, ...props }) => {
    const buttonClassNames = clsx(
        'border-2 font-semibold px-8 max-md:text-sm group rounded-lg',
        {
            'bg-primary text-white border-primary': color === 'primary' && !outline,
            'bg-transparent text-primary border-primary': color === 'primary' && outline,
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
                        <span className="block py-3 duration-300 ease-in-out text-center">{name}</span>
                }
            </Link>
        </div>
    )
}

export default Button;