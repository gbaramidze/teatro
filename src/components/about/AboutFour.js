"use client";
import React, {useEffect, useState} from 'react'
import ButtonFill from '@/components/common/buttons/ButtonFill'
import TicketIcon from '@/components/common/icons/TicketIcon'
import SectionDesc from '@/components/common/sectionTitle/SectionDesc'
import SectionTitleTwo from '@/components/common/sectionTitle/SectionTitleTwo'
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import 'dayjs/locale/ka';
import {useLocale, useTranslations} from "next-intl";
import "./style.css"


const AboutFour = ({events}) => {
  const [isMobile, setIsMobile] = useState()
  const t = useTranslations('events')
  const locale = useLocale();
  // Check if the screen is mobile size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  dayjs.locale(locale)


  return (
    <section className="about-section about-3 py-50 py-lg-100 py-xxl-120 position-relative overflow-hidden">
      <div className="container">
        <div className={'background-glow'}/>
        {
          events && events.length > 0 && events.map((event, index) => {
              const evenOdd = index % 2 === 0 ? "even" : "odd";
              return (
                <div className="row gx-80 gy-lg-0 gy-40 align-items-center" key={`event.${event._id}`}>
                  {(evenOdd === "even" || isMobile) && (
                    <div className="col-lg-4 align-content-end">
                      <div className="about-3-image wow fadeInRight">
                        <img src={event.image} width={400} className="img-fluid rounded-5" alt="about-image"/>
                      </div>
                    </div>)}
                  {/* -- col-5 -- */}
                  <div className="col-lg-8 wow fadeInLeft">
                    <div className="section-title mb-30 mb-xxl-40">
                      <SectionTitleTwo
                        title={event.title}
                        subTitle={dayjs(event.date).format('dddd, D MMMM').toUpperCase()}
                        titleClass={""}
                        subTitleClass={"text-primary"}
                      />
                      <SectionDesc
                        desc={event.description}
                        className={"mb-0 mt-30 custom-font"}
                      />
                    </div>

                    <div className="d-block d-md-flex gap-4 mb-4">
                      <ButtonFill className={"btn-rounded"} link={`/event/${event._id}`}>
                        <TicketIcon height={"25"} width={"25"}/>
                        {t('buy_ticket')}
                      </ButtonFill>
                    </div>

                  </div>
                  {
                    evenOdd === "odd" && !isMobile && (
                      <div className="col-lg-4 align-content-end">
                        <div className="about-3-image wow fadeInRight">
                          <img src={event.image} width={'100%'} className="img-fluid rounded-5" alt="about-image"/>
                        </div>
                      </div>
                    )
                  }
                </div>
              )
            }
          )
        }
      </div>
    </section>
  )
}

export default AboutFour