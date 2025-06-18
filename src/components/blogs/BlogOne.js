"use client"
import React from 'react'
import 'swiper/css';

import SectionName from '@/components/common/sectionTitle/SectionName'
import SectionTitle from '@/components/common/sectionTitle/SectionTitle'
import EventList from "@/components/common/Events/EventList";

const BlogOne = ({events}) => {

    return (
        <section className="blog-section blog-vertical pb-50 pb-lg-80">
            <div className="container">
                <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-30 mb-lg-70">
                    <div className="col-lg-4">
                        <div className="section-title section-title-style-2" >
                            <SectionName
                                name={"Calendar"}
                                className={""}
                            />
                            <SectionTitle
                                title={"Upcoming"}
                                subTitle={"Events"}
                                titleClass={""}
                                subTitleClass={""}
                            />
                        </div>
                        {/* <!-- section-title --> */}
                    </div>
                </div>
                {/* <!-- row --> */}
                <EventList events={events}/>
                {/* <!-- swiper --> */}
            </div>
            {/* <!-- blog-content-wrapper --> */}
        </section >
    )
}

export default BlogOne