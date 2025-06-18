import React from 'react'
import Image from 'next/image'
import EventDate from '@/components/common/EventDate'
import RoundText from '@/components/common/RoundText'
import musicfest_img from "@/assets/images/musicfest-1.png"

const BannerSeven = () => {
    return (
        <section className="hero-section hero-1">
            <div className="container-fluid">
                <div className="hero-wrapper box-hero mx-auto position-relative parallax">
                    <div className="container">
                        <div className="position-relative">
                            <Image src={musicfest_img}   className="musicfest-image mb-10" alt="img" />
                            <h1 className={`text-gradient extra-huge-text text-uppercase fst-italic fw-extra-bold mb-0`}>Teatro</h1>
                            <div className="circle-wrapper hero-circle">
                                <div className="circle-bg"></div>
                                <div className="rotate-text text-uppercase">
                                    <RoundText
                                        text={"Where Melodies Unite Hearts Teatro-"}
                                        style={""}
                                    />
                                </div>
                            </div>
                            <p className="customise-display-6 fw-semibold mb-0">A Melodic Fusion of Sound and Soul</p>
                        </div>
                    </div>
                    <EventDate styleNum={2} />
                </div>
            </div>
        </section>
    )
}

export default BannerSeven