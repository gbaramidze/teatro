"use client"
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { hallList } from '@/lib/hallList';



const ConferenceHall = () => {
    return (
        <section id="commanders" className="commander-section about-1 pt-50 pt-lg-100 pt-xxl-150">
            <div className="container">
                <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-30 mb-lg-70">
                    <div className="col-lg-5">
                        <div className="section-title section-title-style-2">
                            <span className="fs-3 straight-line-wrapper fw-semibold position-relative custom-roboto"> <span className="straight-line"></span>Hall View</span>
                            <h2 className="title display-3 fw-extra-bold mb-n2 text-opacity custom-roboto">The</h2>
                            <h3 className="sub-title display-3 fw-extra-bold primary-text-shadow custom-roboto">Conference Hall</h3>
                        </div>
                        {/* <!-- section-title --> */}
                    </div>
                    <div className="col-lg-5">
                        <div className="highlights-text">
                            <p className="custom-jakarta text-lg-end mb-2">
                                Immerse in mesmerizing performances and interactive art at our music extravaganza . Experience a festival atmosphere like no other else.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- row --> */}
                <Swiper
                    loop={true}
                    grabCursor={true}
                    spaceBetween={20}
                    breakpoints={
                        {
                            330: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                spaceBetween: 20
                            },
                            540: {
                                slidesPerView: 2,
                                slidesPerGroup: 1,
                                spaceBetween: 20
                            },
                            1100: {
                                slidesPerView: 3,
                                slidesPerGroup: 1,
                                spaceBetween: 30
                            }
                        }
                    }
                    className='swiper blog-swiper-2'
                >
                    {
                        hallList.map(({ id, thumb }) => {
                            return (
                                <SwiperSlide key={id}>
                                    <div className="hall-image">
                                        <div className="image-link" >
                                            <Image src={thumb} className="img-fluid" alt="img" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                {/* -- blog-swiper-2 -- */}
            </div>
        </section>
    )
}

export default ConferenceHall