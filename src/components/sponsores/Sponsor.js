import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import SectionName from '@/components/common/sectionTitle/SectionName'
import SectionDesc from '@/components/common/sectionTitle/SectionDesc'
import SectionTitleTwo from '@/components/common/sectionTitle/SectionTitleTwo'
import { SponsorData2 } from '@/lib/sponsorData2'

const Sponsor = () => {

    return (
        <section id="sponsor" className="sponsor-section sponsor-2 position-relative pt-50 pt-lg-100 pt-xxl-120">
            <div className="container">
                <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-40 mb-lg-70">
                    <div className="col-lg-4">
                        <div className="section-title wow fadeInRight">
                            <SectionName
                                name={"The Power Behind Us"}
                                className={""}
                            />
                            <SectionTitleTwo
                            
                                title={"Cadence"}
                                subTitle={"Contributors"}
                                titleClass={""}
                                subTitleClass={"text-primary"}
                            />

                        </div>
                        {/* -- section-title -- */}
                    </div>
                    <div className="col-lg-5">
                        <div className="highlights-text wow fadeInLeft">
                            <SectionDesc
                                desc={"Elevating the Music. Our valued partners and sponsors play a pivotal role in bringing our vision to life. With their support, we orchestrate an unforgettable music celebration that resonates."}
                                className={"custom-jakarta custom-font-style-2 mb-2 text-lg-end"}
                            />

                        </div>
                    </div>
                </div>
                {/* -- row -- */}


                {
                    SponsorData2.map(({ id, sponsor_list, sponsors_type }) => {
                        return (
                            <div key={id} className={`row gy-4 gy-lg-0 justify-content-lg-between ${id !== 3 && "mb-60 mb-lg-100"} `}>
                                <div className="col-lg-4">
                                    <div className="sponsors-type">
                                        <h2 className={`fw-extra-bold mb-0 custom-sans-serif`}>{sponsors_type}</h2>
                                    </div>
                                </div>

                                <div className="col-lg-8">
                                    <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3 g-20 g-lg-30 align-items-center">
                                        {
                                            sponsor_list.map(({ id, sponsor_logo }) => {
                                                return (
                                                    <div className="col" key={id}>
                                                        <Link href="#" className="sponsor-wrapper">
                                                            <Image src={sponsor_logo}   className="img-fluid" alt="img" />
                                                        </Link>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>


        </section>
    )
}

export default Sponsor