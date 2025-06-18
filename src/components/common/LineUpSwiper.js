import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { Scrollbar, Navigation, Pagination } from 'swiper/modules';

import LineupCard from '@/components/common/cards/LineupCard';

const LineUpSwiper = ({ data, prevRef, nextRef, setInit, cardColor }) => {

    return (
        <Swiper
            spaceBetween={20}
            loop={true}
            className='swiper lineup-swiper'

            scrollbar={{
                hide: true,
            }}
            navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
            }}
            pagination={{
                el: '.lineup-swiper-pagination',

                type: "progressbar",
            }}
            breakpoints={{
                380: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                430: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                900: {
                    slidesPerView: 3,
                }
            }}
            onInit={() => setInit(true)}
            modules={[Scrollbar, Navigation, Pagination]}
        >
            {
                data.map(({ id, genere, img, name, socil_link }) => {
                    return (
                        <SwiperSlide key={id} className='swiper-slide'>
                            <LineupCard
                                cardColor={cardColor}
                                genere={genere}
                                img={img}
                                name={name}
                                socil_link={socil_link}
                                // cardColor={cardColor}
                            />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default LineUpSwiper