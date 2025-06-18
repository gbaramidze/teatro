"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

import SectionName from '@/components/common/sectionTitle/SectionName'
import SectionTitle from '@/components/common/sectionTitle/SectionTitle'
import SectionDesc from '@/components/common/sectionTitle/SectionDesc'


import TopUpArrow from '@/components/common/icons/TopUpArrow'
import ButtonCustom from '@/components/common/buttons/ButtonCustom';
import SectionTitleTwo from '@/components/common/sectionTitle/SectionTitleTwo';
import ellipse_1 from "@/assets/images/home-1/ellipse-1.png"
import { sponsorData } from '@/lib/sponsorData'

const SponsorSlider = ({ styleNum }) => {
    // styleNum 0 from home page 1 and home page 2
    // styleNum 1 from home page 5
    // styleNum 2 from home page 7

    // ----- Change classname define in home page
    let sectionDescClass;
    let sponsorBtn;
    let subTitle2;
    switch (styleNum) {
        case 0:
            sectionDescClass = "text-lg-end";
            sponsorBtn = "btn-gradient"
            break;
        case 1:
            sectionDescClass = "text-lg-end";
            subTitle2 = true;
            sponsorBtn = "btn-outline-primary"
            break;
        case 2:
            sectionDescClass = "custom-roboto text-lg-end";
            subTitle2 = true;
            sponsorBtn = "btn-outline-primary"
            break;
        default:
            break;
    }

    // ----- Change classname define in home page


    return (
        <section id="sponsor" className="sponsor-section sponsor-1 bg-lg custom-inner-bg position-relative pt-50 pt-lg-100 pt-xxl-120 pb-30 pb-lg-80 pb-xxl-100">
            <div className="ellipse-image-1">
                <Image src={ellipse_1} alt="ellipse-1" />
            </div>
            <div className="container">
                <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-30 mb-lg-70">
                    <div className="col-lg-4">
                        <div className="section-title section-title-style-2">
                            <SectionName
                                name={"The Power Behind Us"}
                                className={""}
                            />
                            {
                                subTitle2 ?
                                    <SectionTitleTwo
                                        title={"Cadence"}
                                        subTitle={"Contributors"}
                                        titleClass={""}
                                        subTitleClass={"primary-text-shadow"}
                                    />
                                    :
                                    <SectionTitle
                                        title={"Cadence"}
                                        subTitle={"Contributors"}
                                        titleClass={""}
                                        subTitleClass={""}
                                    />
                            }


                        </div>
                        {/* -- section-title -- */}
                    </div>
                    <div className="col-lg-5">
                        <div className="highlights-text" >
                            <SectionDesc
                                desc={"Elevating the Music. Our valued partners and sponsors play a pivotal role in bringing our vision to life. We orchestrate an unforgettable music celebration that resonates."}
                                className={sectionDescClass}
                            />

                        </div>
                    </div>
                </div>
                {/* -- row -- */}

                <div className="brand-logos position-relative wow slideInUp">
                    <div className="swiper brand-swiper">
                        <Swiper
                            spaceBetween={20}
                            // slidesPerView={5}
                            breakpoints={{
                                300: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                    spaceBetween: 20,
                                },
                                490: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 2,
                                    spaceBetween: 20
                                },
                                720: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 2,
                                    spaceBetween: 40
                                },
                                900: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 2,
                                    spaceBetween: 60
                                },
                                1200: {
                                    slidesPerView: 5,
                                    slidesPerGroup: 2,
                                    spaceBetween: 90
                                }
                            }}
                        >
                            {
                                sponsorData.map(({ id, sponsor_logo }) => {
                                    return (
                                        <SwiperSlide key={id} className="swiper-slide">
                                            <div className="brand-image position-relative">
                                                <Link href="#">
                                                    <Image src={sponsor_logo} className="img-fluid" alt="brand-image" />
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }

                        </Swiper>

                        {/* -- swiper-wrapper -- */}
                    </div>
                    {/* -- swiper -- */}
                </div>
                <div className="text-center mt-30 mt-lg-60 mt-xxl-70">
                    <ButtonCustom className={`${sponsorBtn} gap-3`} link={"#"}>
                        Become A Sponsor
                        <TopUpArrow height={"28"} width={"28"} />
                    </ButtonCustom>

                </div>
            </div>
        </section>
    )
}

export default SponsorSlider