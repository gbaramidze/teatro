
import Image from 'next/image'
import React from 'react'

import EventDate from '@/components/common/EventDate'
import BannerSponsor from '@/components/common/BannerSponsor'

import hero_img_8 from "@/assets/images/hero-8-image.png"
import musicfest_2 from "@/assets/images/global/musicfest-2.png"

const BannerOne = () => {
    return (
        <section className="hero-section hero-8 position-relative">
            <div className="hero-wrapper mx-auto position-relative parallax">
                <div className="hero-8-image">
                    <Image src={hero_img_8} width={806} height={988} priority={true} className="img-fluid" alt="img" />
                </div>
                {/* <!-- hero-8-image --> */}

                <div className="container">
                    <div className="hero-8-inner">
                        <Image src={musicfest_2}   className="musicfest-image mb-20 mb-xxl-40" alt="img" />
                        <h1 className="hero-heading-text text-white text-uppercase custom-poppins mb-3 mb-xxl-20">Aural Euphoria</h1>
                        <BannerSponsor parentClass={"mb-40 mb-lg-0 hero-brand-images"} />
                    </div>
                    {/* <!-- hero-inner-text --> */}

                </div>
                {/* <!-- container --> */}

                <EventDate styleNum={0} />
                {/* <!-- event-info --> */}
            </div>
        </section>
    )
}

export default BannerOne




