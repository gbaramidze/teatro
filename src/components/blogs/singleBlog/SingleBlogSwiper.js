"use client"
import React, { useState } from 'react'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import blog_image_1 from "@/assets/images/blog-swiper-image-1.jpg"
import blog_image_2 from "@/assets/images/blog-swiper-image-2.jpg"
import blog_image_3 from "@/assets/images/blog-swiper-image-3.jpg"
import EvModal from '@/components/common/EvModal';

const blogImages = [
    {
        id: 1,
        thumb: blog_image_1
    },
    {
        id: 2,
        thumb: blog_image_2
    },
    {
        id: 3,
        thumb: blog_image_3
    },
    {
        id: 4,
        thumb: blog_image_1
    },
    {
        id: 5,
        thumb: blog_image_2
    },
    {
        id: 6,
        thumb: blog_image_3
    },
]
const SingleBlogSwiper = () => {
    const [currentId, setCurrentId] = useState(0);
    const [typeEle, setTypeEle] = useState("video")
    const [modalIsOpen, setModalIsOpen] = useState(false)

    // -------- Video and image modal open
    const handleOpenModal = (index, type) => {
        setModalIsOpen(true)
        setCurrentId(index)
        setTypeEle(type.toLowerCase())
    }
    // -------- Video and image modal open
    return (
        <>
            <Swiper
                breakpoints={{

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
                        spaceBetween: 20
                    }
                }}
                speed={6000}
                spaceBetween={30}
                loop={true}
                className='swiper blog-swiper-2'
            >
                {
                    blogImages.map(({ id, thumb }) => {
                        return (
                            <SwiperSlide key={id}>
                                <div className="blog-swiper-image">
                                    <div onClick={() => handleOpenModal(id, "image")} className="image-link" >
                                        <Image src={thumb} className="img-fluid" alt="img" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>

            {/* Image and video popup modal */}
            {
                modalIsOpen && <EvModal
                    setModalIsOpen={setModalIsOpen}
                    currentId={currentId}
                    type={typeEle}
                    images={blogImages}
                />
            }
            {/* Image and video popup modal */}
        </>
    )
}

export default SingleBlogSwiper