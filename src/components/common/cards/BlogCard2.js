import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TopUpArrow from '../icons/TopUpArrow'
import Calendar from '../icons/Calendar'
import {OverlayTrigger, Popover} from "react-bootstrap";
import {useTranslations} from "next-intl";

const EllipsisText = ({children}) => {
  const style = {
    display: '-webkit-box',
    WebkitLineClamp: 5,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };


  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        {children}
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger content={children} overlay={popover} placement={'bottom-start'}>
      <div
        style={{...style, transition: 'all 0.3s ease'}}
      >
        {children}
      </div>
    </OverlayTrigger>
  );
};

const BlogCard2 = ({img, date, desc, id, title}) => {
  const t = useTranslations('events');
  return (
    <div className="blog-content">
      <div className="blog-content-4 custom-inner-bg">
        <div className="row gx-20 gy-50 gy-lg-0 align-items-center justify-content-between">
          <div className="col-lg-6 order-lg-2">
            <div className="blog-image">
              <Image src={img} width={220} height={460} className="img-fluid" alt="img"/>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="blog-left-content">
              <p><span className="calendar me-10"> <Calendar/> </span>{date}</p>
              <h2 className="title display-3 fw-extra-bold d-flex flex-column">
                <svg xmlns="http://www.w3.org/2000/svg" className="gradient-subtitle2"
                     style={{height: 70, fontSize: 33, marginTop: -15}}>
                  <defs>
                    <linearGradient id="gradient-subtitle" y1="0" y2="1">
                      <stop stopColor="var(--bs-primary)" offset="0"/>
                      <stop stopColor="var(--bs-secondary)" offset="1"/>
                    </linearGradient>
                  </defs>
                  <g>
                    <text id="text" y="50" strokeWidth="1.5" stroke="url(#gradient-subtitle)" fill="none">{title}</text>
                  </g>
                </svg>
              </h2>
              <EllipsisText>{desc}</EllipsisText>
              <div>
                <Link href={`/event/${id}`} className="download-link d-flex align-items-center gap-30"
                      aria-label="buttons">{t('buy_ticket')} <TopUpArrow className={"ticket-arrow"} height={"32"}
                                                                         width={"32"}/> </Link>
              </div>
            </div>
            {/* -- left-content -- */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard2