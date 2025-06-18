"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import SectionName from '@/components/common/sectionTitle/SectionName'
import SectionTitle from '@/components/common/sectionTitle/SectionTitle'
import SectionDesc from '@/components/common/sectionTitle/SectionDesc'
import PricingCard from '@/components/common/cards/PricingCard';
import SectionTitleTwo from '@/components/common/sectionTitle/SectionTitleTwo';
import { pricingData } from '@/lib/pricingData';

const Pricing = ({ styleNum, styleNum2 }) => {

    // styleNum 0 from home page 1 and home page 2
    // styleNum 1 from home page 3
    // styleNum 2 from home page 4
    // styleNum 3 from home page 6

    // ----- Change classname define in home page
    let sectionDescClass;
    let subTitle2;
    let subTitleClass;
    let titleClass;
    switch (styleNum) {
        case 0:
            sectionDescClass = "text-lg-end";
            break;

        case 1:
            subTitle2 = true;
            subTitleClass = "custom-jakarta text-primary";
            sectionDescClass = "text-lg-end custom-jakarta custom-font-style-2 mb-2"
            break;
        case 2:
            subTitle2 = true;
            subTitleClass = "text-primary";
            titleClass = "custom-jakarta";
            sectionDescClass = "text-lg-end custom-jakarta custom-font-style-2 mb-2"
            break;
        case 3:
            subTitle2 = true
            break
        default:

            break;
    }
    // ----- Change classname define in home page


    return (
        <section id="pricing" className="pricing-section pricing-1 pb-50 pb-lg-100 pb-xxl-120">
            <div className="container">
                <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-30 mb-lg-70">
                    <div className="col-lg-4">
                        <div className="section-title section-title-style-2">
                            <SectionName
                                name={"Ticket"}
                                className={""}
                            />
                            {
                                subTitle2 ?
                                    <SectionTitleTwo
                                        title={"Teatro"}
                                        subTitle={"Admissions"}
                                        titleClass={titleClass}
                                        subTitleClass={subTitleClass}
                                    />
                                    :
                                    <SectionTitle
                                        title={"Teatro"}
                                        subTitle={"Admissions"}
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
                                desc={"Unleash the rhythm with an extraordinary lineup. Get ready for a musical extravaganza that will captivate your senses."}
                                className={sectionDescClass}
                            />
                        </div>
                    </div>
                </div> {/* -- row --*/}

                <div className="swiper pricing-swiper wow slideInUp">
                    <div className="swiper-wrapper">
                        <Swiper
                            spaceBetween={20}
                            breakpoints={{
                                500: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                },
                                769: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 1,
                                    spaceBetween: 30
                                },

                                1200: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 1,
                                    spaceBetween: 30
                                }
                            }}
                        >
                            {
                                pricingData.map(({ id, card_name, features, icon, link, price }) => {
                                    return (
                                        <SwiperSlide key={id} className="swiper-slide">
                                            <PricingCard
                                                id={id}
                                                card_name={card_name}
                                                features={features}
                                                icon={icon}
                                                link={link}
                                                price={price}
                                                styleNum2={styleNum2}
                                            />
                                        </SwiperSlide>
                                    )
                                })
                            }

                        </Swiper>
                    </div>
                    {/* -- swiper-wrapper -- */}
                </div>
                {/* -- swiper -- */}
            </div>
        </section>
    )
}

export default Pricing



