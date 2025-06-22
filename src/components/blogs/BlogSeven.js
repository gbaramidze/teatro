"use client"
import React, {useRef} from 'react'
import Image from 'next/image'
import {useLocale, useTranslations} from 'next-intl'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import {Navigation, Scrollbar} from 'swiper/modules';

import SectionName from '@/components/common/sectionTitle/SectionName'
import SectionDesc from '@/components/common/sectionTitle/SectionDesc'
import BlogCard2 from '@/components/common/cards/BlogCard2';
import SectionTitleTwo from '@/components/common/sectionTitle/SectionTitleTwo';

import ellipse_img_1 from "@/assets/images/home-1/ellipse-1.png"
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import 'dayjs/locale/ka';
import ChevronRght from "@/components/common/icons/ChevronRght";
import ChevronLeft from "@/components/common/icons/ChevronLeft";

const SwiperButtons = () => {
  const swiperSlide = useSwiper();
  return (
    <div className="swiper-button-progress">
      <div className="swiper-button-next" onClick={() => swiperSlide.slideNext()}>
        <ChevronRght/>
      </div>
      <div className="swiper-button-prev" onClick={() => swiperSlide.slidePrev()}>
        <ChevronLeft/>
      </div>
    </div>
  )
}

const BlogSeven = ({events}) => {
  const t = useTranslations('blog')
  const locale = useLocale()
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  dayjs.locale(locale)
  return (
    <section className="blog-section blog-horizontal pt-3 pb-50 pb-lg-80 pb-xxl-100">
      <div className="container">
        <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-30 mb-lg-70">
          <div className="col-lg-4">
            <div className="section-title section-title-style-2 wow fadeInRight">
              <SectionName name={t('section_name')} className=""/>
              <SectionTitleTwo
                title={t('title')}
                subTitle={t('subtitle')}
                titleClass=""
                subTitleClass="primary-text-shadow"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="highlights-text wow fadeInLeft">
              <SectionDesc
                desc={t('description')}
                className="custom-roboto text-lg-end"
              />
            </div>
          </div>
        </div>

        <div className="blog-content-wrapper  position-relative">
          <div className="ellipse-image-1">
            <Image src={ellipse_img_1} alt="ellipse-1"/>
          </div>
          <Swiper
            spaceBetween={20}
            className='swiper blog-swiper'
            loop
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              el: '.lineup-swiper-pagination',

              type: "progressbar",
            }}
            scrollbar={{
              hide: true,
            }}
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
              1024: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 30,
              },
            }}
            modules={[Scrollbar, Navigation]}

          >
            {events.map(({_id, date, image, link, title, ...event}) => (
              <SwiperSlide key={_id} className='swiper-slide'>
                <BlogCard2
                  date={dayjs(date).format("D MMMM 00:00")}
                  desc={locale === 'ka' ? event['description_ka'] : locale === 'ru' ? event['description_ru'] : event['description']}
                  img={image}
                  id={_id}
                  title={title}
                />
              </SwiperSlide>
            ))}
            <SwiperButtons/>
          </Swiper>
          <div className="lineup-swiper-pagination"></div>
        </div>
      </div>
    </section>
  )
}

export default BlogSeven
