"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';


import SwiperIcon from '@/components/common/icons/SwiperIcon';
import SectionName from '@/components/common/sectionTitle/SectionName';
import SectionDesc from '@/components/common/sectionTitle/SectionDesc';
import LineUpSwiper from '@/components/common/LineUpSwiper';
import TopUpArrow from '@/components/common/icons/TopUpArrow';
import SectionTitleTwo from '@/components/common/sectionTitle/SectionTitleTwo';

import ellipse_img from "@/assets/images/home-1/ellipse-2.png"
import { singerData2 } from '@/lib/singerData2';

const LineUpThree = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [_, setInit] = useState();

    return (
        <section id="line-up" className="lineup-section lineup-2 subscription-2 pt-40 pb-100 pt-lg-100 pb-lg-130 pt-xxl-120 pb-xxl-180 mb-20">

            <div className="container">
                <div className="row gx-80 gy-30 align-items-center">
                    <div className="col-lg-4">
                        <div className="lineup-right-content mt-3 mt-lg-0 wow fadeInRight">
                            <div className="section-title mb-4 mb-lg-30 mb-xxl-40">
                                <SectionName
                                    name={"Line-Up"}
                                    className={""}
                                />
                                <SectionTitleTwo
                                    title={"Rhythm"}
                                    subTitle={"Revelations"}
                                    titleClass={""}
                                    subTitleClass={"text-primary"}
                                />

                            </div>
                            {/* <!-- section-title --> */}
                            <SectionDesc
                                desc={"Unleash the rhythm with an extraordinary lineup. Get ready for a musical extravaganza that will captivate your senses."}
                                className={"custom-jakarta custom-font-style-2 mb-4 mb-lg-30"}
                            />


                            <div className="py-2 pb-lg-0 pt-lg-3">
                                <Link href="#" className="download-link d-flex align-items-center gap-30 custom-roboto" aria-label="buttons">See More<TopUpArrow height={"32"} width={"32"} className={"ticket-arrow"} /></Link>
                            </div>
                        </div>
                        {/* <!-- lineup-right-content --> */}
                    </div>
                    {/* <!-- col-5 --> */}
                    <div className="col-lg-8">

                        <div className="swiper-custom-progress position-relative wow fadeInLeft">
                            <LineUpSwiper
                                data={singerData2}
                                nextRef={nextRef}
                                prevRef={prevRef}
                                setInit={setInit}
                                cardColor={"lineup-image-style-2"}
                            />
                            {/* <!-- swiper --> */}
                            <div className="lineup-swiper-pagination"></div>
                            <SwiperIcon nextRef={nextRef} prevRef={prevRef} />

                            <div className="ellipse-image-2">
                                <Image src={ellipse_img}   className="img-fluid" alt="img" />
                            </div>
                        </div>

                    </div>
                    {/* <!-- col-7 --*/}
                </div>
                {/* <!-- row --> */}
            </div>
            {/* <!-- container -->	 */}
        </section>
    )
}

export default LineUpThree