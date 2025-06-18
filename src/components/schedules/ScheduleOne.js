import React from 'react'

import SectionName from '@/components/common/sectionTitle/SectionName'
import SectionTitle from '@/components/common/sectionTitle/SectionTitle'
import SectionDesc from '@/components/common/sectionTitle/SectionDesc'
import ScheduleCard1 from '@/components/common/cards/ScheduleCardOne'
import WordOpacity from '@/components/common/WordOpacity'
import { scheduleData2 } from '@/lib/scheduleData2'



const ScheduleOne = () => {
    return (
        <section id="schedule" className="schedule-section schedule-2 py-50 py-lg-100 pt-xxl-120 position-relative">
            <div className="container">
                <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-40 mb-lg-80 mb-xxl-100">
                    <div className="col-lg-4">
                        <div className="section-title section-title-style-2" >
                            <SectionName
                                name={"Schedule"}
                                className={"fs-3"}
                            />
                            <SectionTitle
                                title={"Melody"}
                                subTitle={"Agenda"}
                                titleClass={""}
                                subTitleClass={""}
                            />
                        </div>
                        {/* <!-- section-title --> */}
                    </div>
                    <div className="col-lg-5">
                        <div className="highlights-text" >
                            <SectionDesc
                                desc={"Immerse in mesmerizing performances and interactive art at our music extravaganza. Experience a festival atmosphere like no other, where unforgettable moments."}
                                className={"text-lg-end"}
                            />

                        </div>
                    </div>
                </div> {/* -- row -- */}


                <SchedulePart
                    data={scheduleData2.slice(0, 4)}
                    className={"mb-40 mb-lg-80 mb-xxl-100"}
                    date={"August 25, 2023"}
                    day={"Day 1: Friday"}
                />

                <SchedulePart
                    data={scheduleData2.slice(5, -1)}
                    className={""}
                    date={"August 26, 2023"}
                    day={"Day 2: Saturday"}
                />
            </div>
        </section>
    )
}

export default ScheduleOne


const SchedulePart = ({ day, date, className, data }) => {
    return (
        <div className={`row gx-90 gy-40 gy-lg-0 ${className}`}>
            <div className="col-lg-4 col-xxl-3">
                <div className="schedule-date sticky-contents">
                    <h2 className="fw-extra-bold text-opacity"><WordOpacity paragraph={day} /></h2>
                    <h2 className="fw-light">{date}</h2>
                </div>
            </div>
            {/* <!-- col-4 --> */}
            <div className="col-lg-8 col-xxl-9">
                <div className="schedule-wrapper custom-inner-bg">
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-10">
                        {
                            data.map(({ id, desc, img, schedule_name, time }) => {
                                return (
                                    <ScheduleCard1
                                        key={id}
                                        desc={desc}
                                        img={img}
                                        schedule_name={schedule_name}
                                        time={time}

                                    />
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}