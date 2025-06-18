import React from 'react'
import TeamCard from '@/components/common/cards/TeamCard'
import SectionDesc from '@/components/common/sectionTitle/SectionDesc'
import SectionName from '@/components/common/sectionTitle/SectionName'
import WordOpacity from '@/components/common/WordOpacity'
import { teamData } from '@/lib/teamData'

const Team = () => {
    return (
        <section id="commanders" className="commander-section about-1 pt-50 pt-lg-100 pt-xxl-150">
            <div className="container">
                <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-30 mb-lg-70">
                    <div className="col-lg-4">
                        <div className="section-title section-title-style-2 wow fadeInRight">
                            <SectionName
                                className={"fs-3 custom-roboto"}
                                name={"Behind The Teatro"}
                            />
                            <h2 className="title display-3 fw-extra-bold mb-n2 text-opacity custom-roboto"> <WordOpacity paragraph={"Creative"}/> </h2>
                            <h3 className="sub-title display-3 fw-extra-bold primary-text-shadow custom-roboto">Commanders</h3>
                        </div>
                        {/* <!-- section-title --> */}
                    </div>
                    <div className="col-lg-4">
                        <div className="highlights-text">
                            <SectionDesc
                                className={"custom-jakarta text-lg-end"}
                                desc={"Unleash the rhythm with an extraordinary lineup. Get ready for a musical extravaganza that will captivate your senses."}
                            />
                        </div>
                    </div>
                </div>
                {/* <!-- row --> */}
                <div className="d-flex flex-column gap-50 gap-lg-80 gap-xl-100">
                    <div className="row gx-30 gy-50 gy-lg-0">
                        {
                            teamData.slice(0, 4).map(({ id, img, name, position }) => <div key={id} className="col-sm-6 col-lg-4 col-xl-3"> <TeamCard img={img} name={name} position={position} /> </div>)
                        }

                    </div>
                    {/* <!-- row --> */}

                    <div className="row gx-30 gy-50 gy-lg-0">
                        {
                            teamData.slice(3, -1).map(({ id, img, name, position }) => <div key={id} className="col-sm-6 col-lg-4 col-xl-3"> <TeamCard img={img} name={name} position={position} /> </div>)
                        }

                    </div>
                    {/* <!-- row --> */}
                </div>
            </div>

        </section>
    )
}

export default Team