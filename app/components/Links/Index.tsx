import Link from 'next/link'
import React, { FC, ReactNode } from 'react'

interface ILinks {
  href: string
  processing?: boolean
  ariaLabel: string
  name: ReactNode
  color?: string
}

const Links: FC<ILinks> = ({href, color, processing, name, ariaLabel, ...props}) => {
  return (
    <Link 
      {...props}
      href={href}
      aria-busy={processing}
      aria-label={ariaLabel}
      aria-live='polite'
      className={`${color ? color + 'md:text-primary' : 'text-primary'}`}
    >
      {name}
    </Link>
  )
}

export default Links;