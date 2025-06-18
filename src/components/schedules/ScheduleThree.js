
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SectionName from '@/components/common/sectionTitle/SectionName'
import SectionDesc from '@/components/common/sectionTitle/SectionDesc'
import ScheduleTabs from '@/components/common/ScheduleTabs'
import DownRightArrow from '@/components/common/icons/DownRightArrow'
import ScheduleCard2 from '@/components/common/cards/ScheduleCardTwo'
import SectionTitleTwo from '@/components/common/sectionTitle/SectionTitleTwo'
import { scheduleData } from '@/lib/scheduleData'


const ScheduleThree = ({ dotsImage }) => {
    return (
        <section id="schedule" className="schedule-section schedule-1 schedule-style-3 pt-50 pt-lg-120 position-relative">
            <div className="container">
                <div className="row gx-70 gy-40">
                    <div className="col-lg-4">
                        <div className="sticky-contents">
                            <div className="schedule-left-content wow fadeInRight">
                                <div className="section-title mb-30 mb-lg-40 mb-xxl-60">
                                    <SectionName
                                        name={"Schedule"}
                                        className={""}
                                    />
                                    <SectionTitleTwo
                                        title={"Melody"}
                                        subTitle={"Agenda"}
                                        titleClass={""}
                                        subTitleClass={"text-primary"}
                                    />
                                </div>
                                {/* <!-- section-title --> */}
                                <SectionDesc
                                    desc={"Captivating performances, interactive workshops, and delightful culinary delights await you at Teatro Music Festival. Let the melodies transcend boundaries on this unforgettable musical journey."}
                                    className={"custom-jakarta custom-font-style-2"}
                                />
                                <div className="pt-4 pt-lg-30 ">
                                    <Link href="#" className="download-link d-flex align-items-center gap-40 custom-sans-serif" aria-label="buttons">Download Agenda <span className='ticket-arrow arrow-down-right'><DownRightArrow height={"36"} width={"36"} /> </span> </Link>
                                </div>
                            </div>
                            {/* <!-- schedule-left-content --> */}
                        </div>
                    </div>
                    {/* <!-- col-4 --> */}
                    <div className="col-lg-8">
                        <div className="schedule-right-content position-relative wow fadeInLeft">
                            <div className="ellipse-image-3">
                                <Image src={dotsImage}   className="img-fluid" alt="img" />
                            </div>

                            {/* <!-- Tabs --> */}
                            <ScheduleTabs ulClass={"schedule-tabs nav nav-pills mb-50 mb-lg-70 d-flex justify-content-between justify-content-lg-center"} />


                            {/* <!-- Tabs-Contents -->             */}
                            <div className="tab-content" id="pills-tabContent">

                                {
                                    scheduleData.map(({ id, label_ledby, list }) => {
                                        return (
                                            <div key={id} className={`tab-pane fade ${id === "day-1" && "show active"} `} id={id} role="tabpanel" aria-labelledby={label_ledby} tabIndex="0">
                                                <ul className="schedule-tabs-content list-unstyled d-flex flex-column mb-0 gap-30">
                                                    {
                                                        list.map(({ id, date, desc, vanu }) => <ScheduleCard2 key={id} date={date} desc={desc} vanu={vanu} />)
                                                    }

                                                </ul>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                            {/* <!-- Tabs-Contents --> */}

                        </div>
                        {/* <!-- schedule-right-content --> */}
                    </div>
                    {/* <!-- col-8 --> */}
                </div>
            </div>
        </section>
    )
}

export default ScheduleThree



