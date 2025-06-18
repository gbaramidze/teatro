"use client"
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SectionName from '@/components/common/sectionTitle/SectionName'
import SectionDesc from '@/components/common/sectionTitle/SectionDesc'
import BlogCard2 from '@/components/common/cards/BlogCard2';
import SectionTitleTwo from '@/components/common/sectionTitle/SectionTitleTwo';

import ellipse_img_1 from "@/assets/images/home-1/ellipse-1.png"
import { blogData2 } from '@/lib/blogData2';
import dayjs from "dayjs";

const BlogSeven = ({events}) => {
    return (
        <section className="blog-section blog-horizontal pt-3 pb-50 pb-lg-80 pb-xxl-100">
            <div className="container">
                <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-30 mb-lg-70">
                    <div className="col-lg-4">
                        <div className="section-title section-title-style-2 wow fadeInRight">
                            <SectionName
                                name={"The Power Behind Us"}
                                className={""}
                            />
                            <SectionTitleTwo
                                title={"Teatro"}
                                subTitle={"Headlines"}
                                titleClass={""}
                                subTitleClass={"primary-text-shadow"}
                            />
                        </div>
                        {/* -- section-title -- */}
                    </div>
                    <div className="col-lg-5">
                        <div className="highlights-text wow fadeInLeft">
                            <SectionDesc
                                desc={"Elevating the Music. Our valued partners and sponsors play a pivotal role in bringing our vision to life. We orchestrate an unforgettable music celebration that resonates."}
                                className={"custom-roboto text-lg-end"}
                            />

                        </div>
                    </div>
                </div>
                {/* -- row -- */}
                <div className="blog-content-wrapper position-relative">
                    <div className="ellipse-image-1">
                        <Image src={ellipse_img_1}   alt="ellipse-1" />
                    </div>

                    <Swiper
                        spaceBetween={20}
                        // slidesPerView={3}
                        className='swiper blog-swiper'
                        breakpoints={{
                            420: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                spaceBetween: 20,
                                pagination: true,
                            },
                            768: {
                                slidesPerView: 2,
                                slidesPerGroup: 1,
                                spaceBetween: 30,
                                pagination: true,
                            },
                        }}
                        a
                    >
                        {
                            events.map(({ _id, date, description, image, link, title }) => {
                                return (
                                    <SwiperSlide key={_id} className='swiper-slide'>
                                        <BlogCard2 date={dayjs(date).format("DD MMMM 00:00")} desc={description} img={image} id={_id} title={title} />
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>

                    {/* -- swiper -- */}
                </div>
                {/* -- blog-content-wrapper -- */}
            </div>
        </section>
    )
}

export default BlogSeven