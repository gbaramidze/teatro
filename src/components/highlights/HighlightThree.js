import React from 'react'
import Link from 'next/link'

import SectionName from '@/components/common/sectionTitle/SectionName'
import SectionDesc from '@/components/common/sectionTitle/SectionDesc'
import TopUpArrowShort from '@/components/common/icons/TopUpArrowShort'
import HighlightCard2 from '@/components/common/cards/HighlightCardTwo'
import SectionTitleTwo from '@/components/common/sectionTitle/SectionTitleTwo'
import { highlightsData } from '@/lib/highlightsData'


const HighlightThree = ({ styleNum, prantClass }) => {
    return (
        <section className={`highlight-section highlight-2 ${prantClass} pb-lg-100 pb-xxl-120`}>
            <div className="container position-relative">
                <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-30 mb-lg-70">
                    <div className="col-lg-5">
                        <div className="section-title wow fadeInRight">
                            <SectionName
                                name={"Highlights"}
                                className={""}
                            />
                            <SectionTitleTwo
                                title={"What"}
                                subTitle={"You will enjoy"}
                                titleClass={""}
                                subTitleClass={"text-primary"}
                            />

                        </div>
                        {/* -- section-title -- */}
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-30">
                    {
                        highlightsData.map(({ id, desc, icon, title }) => <HighlightCard2 key={id} desc={desc} icon={icon} title={title} styleNum={styleNum} />)
                    }
                    <div className="col">
                        <div className="highlights-link position-relative d-flex align-items-center justify-content-center h-100">
                            <Link href="#" className="text-decoration-none d-flex gap-10">
                                <span className="fs-4 fw-extra-bold custom-jakarta">See More</span>
                                <span className="arrow-up-short">
                                    <TopUpArrowShort />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HighlightThree


