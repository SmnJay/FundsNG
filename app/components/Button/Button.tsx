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
}

interface ButtonLinkProps extends ButtonProps {
    href: string
    fullWidth?: boolean
}

const Button: React.FC<ButtonProps> = ({ type = 'button', color, outline, ariaLabel, processing, name, ...props }) => {
    const buttonClassNames = clsx(
        'border-2 px-8 max-md:text-sm group rounded-lg',
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
        `border-2 font-ageom px-8 max-md:text-sm  text-center max-h-[48px] group overflow-y-hidden ${fullWidth ? 'w-full' : 'w-fit'}`,
        {
            'bg-primary text-white': color === 'primary' && !outline,
            'bg-transparent text-red-400': color === 'primary' && outline,
            'bg-[#FFFFFF1C] text-white border-[#FFFFFF1C]': color === 'grey' && !outline,
            'bg-transparent text-[#FFFFFF1C] border-[#FFFFFF1C]': color === 'grey' && outline,
            'bg-black text-white border-black': color === 'black' && !outline,
            'bg-transparent text-black border-black': color === 'black' && outline,
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
                <span className="block py-3 group-hover:-translate-y-[48px] group-hover:scale-110 duration-300 ease-in-out  ">{name}</span>
                <span className="block py-3 group-hover:-translate-y-[48px] group-hover:scale-110 duration-300 ease-in-out  ">{name}</span>
            </Link>
        </div>
    )
}

export default Button;