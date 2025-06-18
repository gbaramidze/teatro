"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import BlogCard from '@/components/common/cards/BlogCard';
import { blogData } from '@/lib/blogData';

const RelatedBlog = () => {
    return (
        <div className="blog-swiper-wrapper py-40">
            <div className="blog-inner-content">
                <h5 className="blog-inner-heading fw-semibold mb-30 mb-lg-50">
                    Related Posts
                </h5>
            </div>
            {/* <!-- blog-inner-content --> */}
            <Swiper
                breakpoints={{
                    430: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 30
                    },
                    700: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                        spaceBetween: 30
                    },
                }}
                speed={2000}
                spaceBetween={30}
                loop={true}
                className='swiper blog-swiper-3 px-1 pb-10'
            >

                {
                    blogData.map(({ id, date, desc, img, link, title }) => {
                        return (
                            <SwiperSlide key={id}>
                                <BlogCard date={date} desc={desc} img={img} link={link} title={title} parentClass={"blog-content-3"} />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
}

export default RelatedBlog