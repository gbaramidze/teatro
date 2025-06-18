"use client"
import React from 'react'
import Marquee from 'react-fast-marquee'

const ScrollSection = ({prentClass}) => {
    return (
        <div className={`scroll-section py-3 py-lg-30 position-relative ${prentClass}`}>
            <div className="marquee-elements">
                <div className="scroll-elements">
                    <Marquee direction='right' speed={"20"} autoFill={true}>
                        <span className="scroll-items js-elements">
                            <span className="scroll-light-text fs-180 fw-extra-bold text-uppercase d-flex gap-10 mb-0">
                                <span>experience</span><span className="mx-10 mx-lg-4">/</span>
                                <span className="primary-text-shadow me-30 me-lg-50">celebrate</span>
                            </span>
                        </span>
                        {/* <span className="scroll-items js-elements"><span className="scroll-light-text fs-180 fw-extra-bold text-uppercase d-flex gap-10 mb-0"><span>experience</span><span className="mx-10 mx-lg-4">/</span><span className="primary-text-shadow me-30 me-lg-50">celebrate</span> </span></span> */}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default ScrollSection