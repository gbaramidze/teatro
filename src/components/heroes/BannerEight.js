
import Image from 'next/image'
import React from 'react'

import EventDate from '@/components/common/EventDate'
import BannerSponsor from '@/components/common/BannerSponsor'
import { VideoBg } from '../common/videoBG'

// import hero_img_8 from "@/assets/images/hero-8-image.png"
import musicfest_2 from "@/assets/images/global/musicfest-2.png"
import CountDown from "@/components/common/CountDown";

const BannerEight = () => {
    return (
        <section className="hero-section hero-8 hero-video bg-dark position-relative">
            <div className="video-wrapper position-absolute w-100 top-0 start-0 z-0">
                <VideoBg/>
            </div>
            <div className="hero-wrapper mx-auto position-relative h-100">
                {/* <!-- hero-8-image --> */}

                {/* <!-- container --> */}
              <div className="container d-none d-md-block" style={{height: 'calc(100vh - 500px)'}} />
              <div className="container d-md-none d-block" style={{height: 'calc(100vh - 500px)'}} />

              <div className="d-none d-md-block">
                <CountDown styleNum={6} />
              </div>
                <div className="d-block d-md-none">
                  <CountDown styleNum={1} />
                </div>
              {/* <!-- event-info --> */}
            </div>
        </section>
    )
}

export default BannerEight




