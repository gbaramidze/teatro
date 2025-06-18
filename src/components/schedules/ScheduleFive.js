import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionName from '@/components/common/sectionTitle/SectionName'
import SectionDesc from '@/components/common/sectionTitle/SectionDesc'
import DownRightArrow from '@/components/common/icons/DownRightArrow'
import ScheduleTabs from '@/components/common/ScheduleTabs'
import WordOpacity from '@/components/common/WordOpacity'
import SectionTitleTwo from '@/components/common/sectionTitle/SectionTitleTwo'

import schedule_img from "@/assets/images/home-1/schedule-image.png"
import ellipse_1 from "@/assets/images/home-1/ellipse-1.png"
import ellipse_2 from "@/assets/images/home-1/ellipse-2.png"
import { scheduleData } from '@/lib/scheduleData'

const ScheduleFive = () => {
    return (
        <section id="schedule" className="schedule-section schedule-1 py-50 py-lg-100 pt-xxl-120 position-relative ">
            <div className="container">
                <div className="row gx-70 gy-40">
                    <div className="col-lg-4">
                        <div className="schedule-left-content wow fadeInRight">
                            <div className="section-title section-title-style-2 mb-30 mb-lg-40 mb-xxl-60">
                                <SectionName
                                    name={"Schedule"}
                                    className={"fs-3"}
                                />
                                <SectionTitleTwo
                                    title={"Melody"}
                                    subTitle={"Agenda"}
                                    titleClass={""}
                                    subTitleClass={"primary-text-shadow"}
                                />
                            </div>
                            {/* -- section-title -- */}
                            <SectionDesc
                                desc={"Captivating performances, interactive workshops, and delightful culinary delights await you at Teatro Music Festival. Let the melodies transcend boundaries on this unforgettable musical journey."}
                                className={"custom-font-style-1 custom-sans"}
                            />

                            <div className="pt-4 pt-lg-30 mb-10 mb-lg-40">
                                <Link href="#" className="download-link d-flex align-items-center gap-40" aria-label="buttons">Download Agenda <span className="ticket-arrow arrow-down-right"><DownRightArrow /></span></Link>
                            </div>

                            <div className="schedule-image bg-mask d-none d-lg-block">
                                <Image src={schedule_img}   className="img-fluid" alt="image" />
                            </div>

                            <div className="ellipse-image-1">
                                <Image src={ellipse_1}   className="img-fluid" alt="img" />
                            </div>
                        </div>
                        {/* -- schedule-left-content -- */}
                    </div>
                    {/* -- col-4 -- */}
                    <div className="col-lg-8">
                        <div className="schedule-right-content position-relative wow fadeInLeft">
                            <div className="ellipse-image-2">
                                <Image src={ellipse_2}   className="img-fluid" alt="img" />
                            </div>

                            {/* -- Tabs -- */}
                            <ScheduleTabs ulClass={"schedule-tabs custom-inner-bg nav nav-pills mb-50 mb-lg-70 d-flex justify-content-between justify-content-lg-center"} />
                            {/* -- Tabs -- */}


                            {/* -- Tabs-Contents --             */}
                            <div className="tab-content" id="pills-tabContent">


                                {
                                    scheduleData.map(({ id, label_ledby, list }) => {
                                        return (
                                            <div key={id} className={`tab-pane fade ${id === "day-1" && "show active"} `} id={id} role="tabpanel" aria-labelledby={label_ledby} tabIndex="0">
                                                <ul className="schedule-tabs-content list-unstyled d-flex flex-column mb-0 gap-30">
                                                    {
                                                        list.map(({ id, date, desc, vanu }) => {

                                                            return (
                                                                <li key={id} className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
                                                                    <h2 className="fw-extra-bold schedule-time text-opacity"> <WordOpacity paragraph={date}/></h2>
                                                                    <div>
                                                                        <h2 className="fw-semibold text-opacity"><WordOpacity paragraph={date}/></h2>
                                                                        {desc &&
                                                                            <p className="custom-sans custom-font-style-1">
                                                                                {desc}
                                                                            </p>
                                                                        }

                                                                    </div>
                                                                </li>
                                                            )
                                                        })
                                                    }

                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {/* -- Tabs-Contents -- */}

                        </div>
                        {/* -- schedule-right-content -- */}
                    </div>
                    {/* -- col-8 -- */}
                </div>
            </div>
        </section>
    )
}

export default ScheduleFive