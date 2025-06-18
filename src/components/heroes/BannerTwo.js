import Image from 'next/image'
import React from 'react'

import RoundText from '@/components/common/RoundText'
import Star from '@/components/common/icons/Star'
import BannerSponsor from '@/components/common/BannerSponsor'
import EventDate from '@/components/common/EventDate'

import musicfest_1 from "@/assets/images/musicfest-1.png"

const BannerTwo = () => {
    return (
        <section className="hero-section hero-2 position-relative">
            <div className="hero-wrapper mx-auto position-relative parallax">
                <div className="container">
                    <div className="hero-inner-text position-relative">
                        <Image src={musicfest_1}   className="musicfest-image mb-10" alt="img" />
                        <h1 className="soundscapes fs-120 fw-extra-bold mb-0">Unveil the Magic of Soundscapes</h1>
                        <div className="circle-wrapper hero-2-circle">
                            <div className="star-icon">
                                <span><Star height={"42"} width={"47"} /></span>
                            </div>
                            <div className="circle-bg"></div>
                            <div className="rotate-text text-uppercase">

                                <RoundText text={"Where Melodies Unite Hearts Teatro-"} style={""} />

                            </div>
                        </div>
                        <BannerSponsor parentClass={"mb-30 mb-xxl-50 hero-brand-images"} />

                    </div>
                </div>
                <EventDate styleNum={1} />
            </div>
        </section>
    )
}

export default BannerTwo