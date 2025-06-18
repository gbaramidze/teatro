import Link from 'next/link'
import React from 'react'

const ButtonCustom = ({ link, className, children }) => {
    return (
        <Link href={link} className={`btn  d-inline-flex align-items-center  ${className}`} aria-label="buttons">
            {children}
        </Link>
    )
}

export default ButtonCustom