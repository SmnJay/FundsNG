import Link from 'next/link'
import React, { FC, ReactNode } from 'react';

interface ILinks {
  href: string
  processing?: boolean
  ariaLabel: string
  name: ReactNode
  color?: string
  cls?: string
  icon?: ReactNode
  handleClick?: () => void
}

const Links: FC<ILinks> = ({ href, color, handleClick, icon, processing, name, cls, ariaLabel, ...props }) => {

  return (
    <Link legacyBehavior {...props} href={href}>
      <a
        aria-busy={processing}
        aria-label={ariaLabel}
        aria-live='polite'
        className={`${color ? color + 'md:text-primary' : 'text-primary'} ${cls}`}
        onClick={handleClick}
      >
        {name}
      </a>
    </Link>
  )
}

export default Links;