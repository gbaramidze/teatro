import Image from 'next/image'
import React from 'react'
import ButtonOutline from '@/components/common/buttons/ButtonOutline'
import ShopIcon from '@/components/common/icons/ShopIcon'
import ButtonFill from '@/components/common/buttons/ButtonFill'
import TicketIcon from '@/components/common/icons/TicketIcon'
import SectionName from '@/components/common/sectionTitle/SectionName'
import SectionDesc from '@/components/common/sectionTitle/SectionDesc'

import about_img_7 from "@/assets/images/home-7/about-7-image.jpg"
import SectionTitleTwo from '@/components/common/sectionTitle/SectionTitleTwo'
import dayjs from "dayjs";

const AboutFour = ({ events }) => {


    return (
        <section className="about-section about-3 py-50 py-lg-100 py-xxl-120">
            <div className="container">
                {
                    events && events.length > 0 && events.map((event, index) => {
                        const evenOdd = index % 2 === 0 ? "even" : "odd";
                        return (
                    <div className="row gx-80 gy-lg-0 gy-40 align-items-center" key={`event.${event._id}`}>
                      {evenOdd === "even" && (
                        <div className="col-lg-4 align-content-end">
                          <div className="about-3-image wow fadeInRight">
                            <img src={event.image} width={400}  className="img-fluid rounded-5" alt="about-image" />
                          </div>
                        </div>)}
                        {/* -- col-5 -- */}
                        <div className="col-lg-8 wow fadeInLeft">
                            <div className="section-title mb-30 mb-xxl-40">
                                <SectionTitleTwo
                                  title={event.title}
                                  subTitle={dayjs(event.date).format('dddd, DD MMMM')}
                                  titleClass={""}
                                  subTitleClass={"text-primary"}
                                />
                                <SectionDesc
                                  desc={event.description}
                                  className={"custom-jakarta custom-font-style-2 mb-0 mt-30"}
                                />
                            </div>

                            <div className="d-block d-md-flex gap-4">
                                <ButtonFill className={"btn-rounded"} link={`/event/${event._id}`}>
                                    <TicketIcon height={"25"} width={"25"} />
                                    Buy Ticket
                                </ButtonFill>
                            </div>

                        </div>
                      {
                        evenOdd === "odd" && (
                            <div className="col-lg-4 align-content-end">
                              <div className="about-3-image wow fadeInRight">
                                <img src={event.image} width={'100%'}  className="img-fluid rounded-5" alt="about-image" />
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