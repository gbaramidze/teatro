"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import LineUpSwiper from '@/components/common/LineUpSwiper'
import SwiperIcon from '@/components/common/icons/SwiperIcon'
import SectionName from '@/components/common/sectionTitle/SectionName'
import SectionDesc from '@/components/common/sectionTitle/SectionDesc'
import TopUpArrow from '@/components/common/icons/TopUpArrow'
import SectionTitleTwo from '@/components/common/sectionTitle/SectionTitleTwo'

import ellipse_2 from "@/assets/images/home-1/ellipse-2.png"
import { singerData } from '@/lib/singerData'

const LineupSeven = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [_, setInit] = useState();

    return (
        <section id="line-up" className="lineup-section lineup-1 pt-60 mb-20 mb-lg-30 mb-xxl-40">
            <div className="lineup-contents bg-lg custom-inner-bg py-30 py-lg-50 position-relative">
                <div className="container">
                    <div className="row gx-60 gx-xxl-80 gy-30">
                        <div className="col-lg-7">
                            <div className="swiper-custom-progress position-relative wow fadeInRight">
                                <LineUpSwiper
                                    data={singerData}
                                    prevRef={prevRef}
                                    nextRef={nextRef}
                                    setInit={setInit}
                                    cardColor={""}
                                />
                                <div className="lineup-swiper-pagination"></div>
                                <SwiperIcon nextRef={nextRef} prevRef={prevRef} />
                            </div>

                        </div>
                        {/* <!-- col-7 --> */}
                        <div className="col-lg-5">
                            <div className="lineup-right-content mt-60 mt-lg-0 wow fadeInLeft">
                                <div className="section-title section-title-style-2 mb-4 mb-lg-30 mb-xxl-40">
                                    <SectionName
                                        name={"Line-Up"}
                                        className={""}
                                    />
                                    <SectionTitleTwo
                                        title={"O"}
                                        subTitle={"Revelations"}
                                        titleClass={""}
                                        subTitleClass={"primary-text-shadow"}
                                    />
                                </div>
                                {/* <!-- section-title --> */}
                                <SectionDesc
                                    desc={"Unleash the rhythm with an extraordinary lineup. Get ready for a musical extravaganza that will captivate your senses."}
                                    className={`mb-4 mb-lg-30`}
                                />
                                <SectionDesc
                                    desc={"Experience the magic of harmonious melodies in a night to remember."}
                                    className={""}
                                />
                                <div className="mt-20 mt-lg-0">

                                    <Link href="#" className="download-link d-flex align-items-center justify-content-lg-end gap-30" aria-label="buttons">See More <TopUpArrow className={"ticket-arrow"} height={"32"} width={"32"} /> </Link>
                                </div>
                            </div>
                            {/* <!-- lineup-right-content --> */}
                        </div>
                        {/* <!-- col-5 --> */}
                    </div>
                    {/* <!-- row --> */}
                </div>
                {/* <!-- container --> */}
                <div className="ellipse-image-2">
                    <Image src={ellipse_2}   className="img-fluid" alt="img" />
                </div>
            </div>
            {/* <!-- lineup-contents --> */}
        </section>
    )
}

export default LineupSeven