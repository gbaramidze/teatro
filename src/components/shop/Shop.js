"use client"
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import SectionName from '@/components/common/sectionTitle/SectionName'
import SectionDesc from '@/components/common/sectionTitle/SectionDesc'
import ShopCard from '@/components/common/cards/ShopCard';
import SectionTitleTwo from '@/components/common/sectionTitle/SectionTitleTwo';
import { productData } from '@/lib/productsData';



const Shop = ({ dotsImage }) => {
    return (
        <section id="merchandise" className="merchandise-section merchandise-1 position-relative mb-50 mb-lg-100 mb-xxl-120 py-50 py-lg-100 py-xxl-120">
            <div className="container">
                <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-40 mb-lg-70">
                    <div className="col-lg-4">
                        <div className="section-title wow fadeInRight">
                            <SectionName
                                name={"The Shop"}
                                className={""}
                            />
                            <SectionTitleTwo
                                title={"Get Our"}
                                subTitle={"Merchandise"}
                                titleClass={""}
                                subTitleClass={"text-primary"}
                            />
                        </div>
                        {/* <!-- section-title --> */}
                    </div>
                    <div className="col-lg-5">
                        <div className="highlights-text wow fadeInLeft">
                            <SectionDesc
                                desc={"Elevating the Music. Our valued partners and sponsors play a pivotal role in bringing our vision to life. With their support, we orchestrate an unforgettable music celebration."}
                                className={"custom-jakarta custom-font-style-2 mb-2 text-lg-end"}
                            />

                        </div>
                    </div>
                </div>
                {/* -- row -- */}

                <div className="merchandise-contents position-relative">
                    <div className="ellipse-image-4">
                        <Image src={dotsImage} className="img-fluid" alt="img" />
                    </div>

                    <Swiper
                        spaceBetween={20}
                        className="swiper merchandise-swiper  py-20"
                        breakpoints={{
                            420: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView: 2,
                                slidesPerGroup: 1,
                                spaceBetween: 30
                            },
                            1100: {
                                slidesPerView: 3,
                                slidesPerGroup: 1,
                                spaceBetween: 20
                            },
                            1500: {
                                slidesPerView: 4,
                                slidesPerGroup: 1,
                                spaceBetween: 20
                            },
                        }}
                    >
                        {
                            productData.map(({ id, img, link, name, price }) => {
                                return (
                                    <SwiperSlide key={id} className="swiper-slide">
                                        <ShopCard
                                            img={img}

                                            name={name}
                                            link={link}
                                            price={price}

                                        />
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>

                    {/* <!-- merchandise-swiper -->	 */}
                </div>

            </div>
        </section>
    )
}

export default Shop