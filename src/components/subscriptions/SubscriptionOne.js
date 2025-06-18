'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import SectionName from '@/components/common/sectionTitle/SectionName'
import SectionTitle from '@/components/common/sectionTitle/SectionTitle'
import SectionDesc from '@/components/common/sectionTitle/SectionDesc'
import Map from '@/components/common/map/Map'
import SectionTitleTwo from '@/components/common/sectionTitle/SectionTitleTwo'
import RightArrow from '@/components/common/icons/RightArrow'
import ellipse_2 from "@/assets/images/home-1/ellipse-2.png"

const SubscriptionOne = ({ styleNum }) => {
    const [el, seEl] = useState("")

    // styleNum 0 from home page 1 and home page 2
    // styleNum 1 from home page 3 and blog page
    // styleNum 2 from home page 4
    // styleNum 3 from home page 5
    // styleNum 4 from home page 7
    // styleNum 5 from single blog 1, 2, 3

    // ----- Change classname define in home page
    let prentClass;
    let subscriptionWapperClass;
    let dotImg;
    let sectionDescClass;
    let directionBtn;
    let markerClr;
    let sectionWapperClass;
    let sectionName;
    let subTitle2;
    let subTitleClass;
    let titleClass;
    let addressClassName;
    let addressClass;

    switch (styleNum) {
        case 0:
            prentClass = 'subscription-section subscription-1 bg-lg custom-inner-bg';
            subscriptionWapperClass = 'py-50 py-lg-70 py-xxl-100';
            dotImg = true;
            sectionDescClass = "mb-30";
            directionBtn = "btn-gradient";
            markerClr = "map-marker-style-1";
            sectionWapperClass = "section-title-style-2";
            sectionName = true
            break;
        case 1:
            prentClass = "subscription-section subscription-2 py-50 py-lg-70 py-xxl-100 ";
            dotImg = false;
            sectionDescClass = "custom-jakarta custom-font-style-2 mb-30 ";
            subTitleClass = "text-primary";
            subTitle2 = true;
            directionBtn = "btn-primary btn-custom-dark";
            addressClassName = "custom-sans-serif";
            addressClass = "custom-roboto"
            break;
        case 2:
            prentClass = 'subscription-section subscription-2 py-50 py-lg-70 py-xxl-100';
            sectionDescClass = "custom-jakarta custom-font-style-2 mb-30 ";
            subTitleClass = "text-primary";
            subTitle2 = true;
            directionBtn = "btn-primary";
            addressClassName = "custom-sans-serif";
            addressClass = "custom-roboto"
            break;
        case 3:
            prentClass = 'subscription-section subscription-1 py-50 py-lg-70 py-xxl-100 bg-lg custom-inner-bg';
            dotImg = true;
            sectionDescClass = " mb-30 ";
            subTitleClass = "primary-text-shadow";
            subTitle2 = true;
            sectionWapperClass = "section-title-style-2";
            directionBtn = "btn-primary";
            break;
        case 4:
            prentClass = 'subscription-section subscription-1 bg-lg py-50 py-lg-70 py-xxl-100 custom-inner-bg';
            dotImg = true;
            sectionDescClass = "custom-roboto custom-font-style-1 mb-30 ";
            subTitleClass = "primary-text-shadow";
            subTitle2 = true;
            sectionWapperClass = "section-title-style-2";
            directionBtn = "btn-primary"
            sectionName = true
            break;
        case 5:
            prentClass = 'subscription-section subscription-2 py-50 py-lg-70 py-xxl-100';
            dotImg = false;
            sectionDescClass = "custom-jakarta custom-font-style-2 mb-30 ";
            subTitleClass = "display-3 text-primary mb-n1";
            subTitle2 = true;
            directionBtn = "btn-primary";
            titleClass = "mb-n3";
            sectionName = false
            break;
        default:
            break;
    }

    // ----- Change classname define in home page

    return (
        <section className={`position-relative ${prentClass}`}>
            {
                dotImg && <div className="ellipse-image-2">
                    <Image src={ellipse_2} alt="ellipse-1" />
                </div>
            }

            <div className="container">
                <div className={`subscription-wrapper ${subscriptionWapperClass} `}>
                    <div className="row justify-content-between gy-40 gy-lg-0">
                        <div className="col-lg-5">
                            <div className="subscription-left-content wow fadeInRight" >
                                <div className={`section-title ${sectionWapperClass} mb-4 mb-lg-5`}>
                                    <SectionName
                                        name={` ${sectionName ? "Subscribe" : "Join the Harmonious Beat"} `}
                                        className={""}
                                    />
                                    {
                                        subTitle2 ?
                                            <SectionTitleTwo
                                                title={"Sonic"}
                                                subTitle={"Dispatch"}
                                                titleClass={titleClass}
                                                subTitleClass={subTitleClass}
                                            />
                                            :
                                            <SectionTitle
                                                title={"To our"}
                                                subTitle={"Newsletter"}
                                                titleClass={""}
                                                subTitleClass={subTitleClass}
                                            />
                                    }


                                </div>
                                {/* -- section-title -- */}
                                <SectionDesc
                                    desc={"Share your email to us to up to date with our events, news, and special offers. We promise to keep your information safe and secure."}
                                    className={sectionDescClass}
                                />

                                <form action="#">
                                    <div className="subscription-form position-relative">
                                        <input type="email" className="form-control" id="subscriptionInput1" placeholder="Enter your Email" required />
                                        <button className="subscription-form-arrow" type="submit">
                                            <SubscriptionFormArrow />
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {/* -- subscription-left-content -- */}
                        </div>
                        {/* <!-- col-5 --> */}

                        <div className="col-lg-5 wow fadeInLeft">

                            <h3 className="straight-line-wrapper fw-semibold position-relative mb-20"> <span className="straight-line"></span>Find us</h3>
                            <div className="map-image parallax position-relative">

                                <div className="map-popup-content"><p className={`${addressClass}`}>Lech & Maria kachinski 5, Batumi</p>
                                    <Link onClick={(() => seEl(true))} id="mapDirectionBtn" href="#" className={`btn ${directionBtn} btn-sm d-flex align-items-center justify-content-center custom-roboto gap-10 btn-map-direction`} data-bs-toggle="modal" data-bs-target="#RoutingMapModal">Get Direction <RightArrow /> </Link>
                                </div>
                            </div>

                            {/* <!-- Modal-Map --> */}
                            <Map el={el} />
                            {/* <!-- Modal-Map --> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscriptionOne


const SubscriptionFormArrow = () => {
    return (
        <svg width="37" height="38"><use xlinkHref="#subscription-form-arrow">
            <symbol id="subscription-form-arrow" viewBox="0 0 37 38">
                <path d="M9.31312 32.4708C8.79853 31.9562 8.75564 31.1486 9.18447 30.5851L9.31312 30.4379L29.6424 10.1086C30.2038 9.54721 31.114 9.54721 31.6754 10.1086C32.19 10.6232 32.2329 11.4309 31.804 11.9943L31.6754 12.1415L11.3461 32.4708C10.7847 33.0322 9.8745 33.0322 9.31312 32.4708Z" />
                <path d="M14.2977 12.5972C13.5038 12.5989 12.8589 11.9567 12.8571 11.1628C12.8556 10.441 13.3862 9.84238 14.0792 9.73821L14.2915 9.72217L30.6553 9.68693C31.3792 9.68537 31.9788 10.219 32.0807 10.9143L32.0959 11.1274L32.062 27.4925C32.0604 28.2864 31.4154 28.9287 30.6215 28.927C29.8998 28.9255 29.3034 28.3924 29.2022 27.699L29.187 27.4866L29.217 12.565L14.2977 12.5972Z" />
            </symbol>
        </use></svg>
    )
}