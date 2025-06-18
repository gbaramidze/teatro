import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import brand_1 from "@/assets/images/hero-brand-1.png"
import brand_2 from "@/assets/images/hero-brand-2.png"
import brand_3 from "@/assets/images/hero-brand-3.png"
const BannerSponsor = ({parentClass}) => {
    return (
        <div className={`${parentClass}`}>
            <h3 className="fst-italic fw-semibold mb-3 text-white">Powered by</h3>
            <div className="d-flex flex-md-wrap align-items-center gap-20 gap-md-5 gap-lg-50">
                <Link href="#" aria-label="brand-image">
                    <Image src={brand_1}   className="img-fluid" alt="img" />
                </Link>
                <Link href="#" aria-label="brand-image">
                    <Image src={brand_2}   className="img-fluid" alt="img" />
                </Link>
                <Link href="#" aria-label="brand-image">
                    <Image src={brand_3}   className="img-fluid" alt="img" />
                </Link>
            </div>
        </div>
    )
}

export default BannerSponsor