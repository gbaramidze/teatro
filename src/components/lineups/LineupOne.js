"use client"
import React, {useRef, useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {useTranslations} from 'next-intl';

import SectionName from '@/components/common/sectionTitle/SectionName'
import SectionTitle from '@/components/common/sectionTitle/SectionTitle'
import TopUpArrow from '@/components/common/icons/TopUpArrow'
import SwiperIcon from '@/components/common/icons/SwiperIcon';
import LineUpSwiper from '@/components/common/LineUpSwiper';
import SectionDesc from '@/components/common/sectionTitle/SectionDesc';

import ellipse_2 from "@/assets/images/home-1/ellipse-2.png"
import {singerData} from '@/lib/singerData';

const LineupOne = () => {
  const t = useTranslations('lineup');
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [_, setInit] = useState();

  return (
    <section id="line-up" className="lineup-section lineup-2 pt-lg-5 mb-lg-30 mb-xxl-40"
             style={{marginBottom: 60}}>
      <div className="container">
        <div className="row gx-60 gx-xxl-80 gy-30">
          <div className="col-lg-5">
            <div className="lineup-right-content mt-30 mt-lg-0">
              <div className="section-title section-title-style-2 mb-4 mb-lg-30 mb-xxl-40">
                <SectionName
                  name={t('line_up')}
                  className="fs-3"
                />
                <SectionTitle
                  title={t('local')}
                  subTitle={t('artists')}
                  titleClass=""
                  subTitleClass=""
                />
              </div>
              {/* -- section-title -- */}
              <SectionDesc
                desc={t('description')}
                className="mb-4 mb-lg-30"
              />

              <div className="py-2 pb-lg-0 pt-lg-3">
                <Link href="#" className="download-link d-flex align-items-center gap-30" aria-label="buttons">
                  {t('see_more')} <TopUpArrow height="32" width="32" className="ticket-arrow"/>
                </Link>
              </div>
            </div>
            {/* -- lineup-right-content -- */}
          </div>
          {/* -- col-5 -- */}
          <div className="col-lg-7">
            <div className="swiper-custom-progress progress-gradient position-relative">
              <LineUpSwiper
                data={singerData}
                prevRef={prevRef}
                nextRef={nextRef}
                setInit={setInit}
                cardColor=""
              />
              <div className="lineup-swiper-pagination"></div>
              <SwiperIcon nextRef={nextRef} prevRef={prevRef}/>

              <div className="ellipse-image-2">
                <Image src={ellipse_2} className="img-fluid" alt="img"/>
              </div>
            </div>
          </div>
          {/* <!-- col-7 --> */}
        </div>
        {/* <!-- row --> */}
      </div>
      {/* <!-- container --> */}
    </section>
  )
}

export default LineupOne
