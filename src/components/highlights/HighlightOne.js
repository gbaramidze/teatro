"use client"
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import SectionTitle from '@/components/common/sectionTitle/SectionTitle';
import SectionName from '@/components/common/sectionTitle/SectionName';
import HighlightCard1 from '@/components/common/cards/HighlightCardOne';
import SectionDesc from '@/components/common/sectionTitle/SectionDesc';
import SectionTitleTwo from '@/components/common/sectionTitle/SectionTitleTwo';

import ellipse_1 from "@/assets/images/home-1/ellipse-1.png"
import { highlightsData1 } from '@/lib/highlightsData1';


const HighlightOne = ({ styleNum }) => {

    // styleNum 0 from home page 1 and home page 2
    // styleNum 1 from home page 5
    // styleNum 2 from home page 7

    // ----- Change classname define in home page
    let parentClass;
    let sectionDescClass;
    let subTitle2;

    switch (styleNum) {
        case 0:
            parentClass = " highlight-2 pb-50 pb-lg-100 pb-xxl-120";
            sectionDescClass = "text-lg-end"
            break;
        case 1:
            parentClass = " highlight-1 py-50 py-lg-100 py-xxl-120 mt-20 mt-lg-40";
            sectionDescClass = "text-lg-end";
            subTitle2 = true
            break;
        case 2:
            parentClass = " highlight-1 py-50 py-lg-100 py-xxl-120 mt-20 mt-lg-40";
            sectionDescClass = "text-lg-end custom-roboto";
            subTitle2 = true
            break
        default:
            break;
    }
    // ----- Change classname define in home page

    return (
        <section className={`highlight-section ${parentClass}`}>
            <div className="container position-relative">
                <div className="ellipse-image-1">
                    <Image src={ellipse_1} alt="ellipse-1" />
                </div>
                <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-30 mb-lg-70">
                    <div className="col-lg-5">
                        <div className="section-title section-title-style-2">
                            <SectionName
                                name={"Highlights"}
                                className={""}
                            />
                            {
                                subTitle2 ?
                                    <SectionTitleTwo
                                        title={"Music"}
                                        subTitle={"Extravaganza"}
                                        titleClass={""}
                                        subTitleClass={"primary-text-shadow"}
                                    />
                                    :
                                    <SectionTitle
                                        title={"Music"}
                                        subTitle={"Extravaganza"}
                                        titleClass={""}
                                        subTitleClass={""}
                                    />
                            }

                        </div>
                        {/* -- section-title -- */}
                    </div>
                    <div className="col-lg-5">
                        <div className="highlights-text">
                            <SectionDesc
                                desc={"Immerse in mesmerizing performances and interactive art at our music extravaganza. Experience a festival atmosphere like no other, where unforgettable moments."}
                                className={sectionDescClass}
                            />

                        </div>
                    </div>
                </div>
                {/* -- row -- */}

                <Swiper
                    spaceBetween={20}
                    loop={true}
                    className='swiper highlight-swiper'
                    breakpoints={{
                        430: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                            spaceBetween: 20
                        },
                        1100: {
                            slidesPerView: 3,
                            slidesPerGroup: 1,
                            spaceBetween: 20
                        }
                    }}
                >
                    {
                        highlightsData1.map(({ id, className, thumb, title }) => {
                            return (
                                <SwiperSlide key={id} className="swiper-slide">
                                    <HighlightCard1 img={thumb} title={title} className={className} />
                                </SwiperSlide >
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default HighlightOne


