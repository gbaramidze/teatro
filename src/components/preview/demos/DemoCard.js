import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const DemoCard = ({ img, name, link, id }) => {
    return (
        <div className="col-md-6 col-lg-4 "  data-aos="fade-up" data-aos-duration="1000" data-aos-delay={`${id}00`} data-aos-offset="0">
            <div className="demo-image landing-inner-bg shadow-lg">
                <div className="dots d-flex gap-2 align-items-center">
                    <DotIcon />
                    <DotIcon />
                    <DotIcon />
                </div>
                <Link href={link} title="" target="_blank">
                    <Image className="img-fluid rounded-4" src={img}  alt="layout-6-preview" loading="lazy" width={373} height={493}  />
                </Link>
                <Link href={link} className="demo-title text-decoration-none" target="_blank">{name}</Link>
            </div>
        </div>
    )
}

export default DemoCard


const DotIcon = () => {
    return (
        <span className="circle-dot">
            <svg width="9" height="9"><use xlinkHref="#circle-dot"><symbol id="circle-dot" viewBox="0 0 9 9">
                <circle cx="4.66623" cy="4.22214" r="3.88889" fill="#0A111F" />
            </symbol>	</use></svg>
        </span>
    )
}