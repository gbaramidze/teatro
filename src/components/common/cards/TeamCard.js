// "use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TeamCard = ({ img, name, position }) => {
    return (
        <div className="commander-wrapper">
            <div className="commander-image mb-3">
                <Link href="#">
                    <Image src={img}   className="img-fluid" alt="img" />
                </Link>
            </div>
            <div className="commander-info">
                <h2 className="fw-semibold custom-jakarta mb-0">{name}</h2>
                <p className="mb-0 custom-font-style-1 fw-semibold custom-jakarta">{position}</p>
            </div>
        </div>
    )
}

export default TeamCard