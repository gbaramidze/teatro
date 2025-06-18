import React from 'react'
import Image from 'next/image'
import SectionName from '@/components/common/sectionTitle/SectionName';
import SectionDesc from '@/components/common/sectionTitle/SectionDesc';
import EventCounterOne from '@/components/common/eventCounter/EventCounterOne';
import SectionTitleTwo from '@/components/common/sectionTitle/SectionTitleTwo';
import about_img_3 from "@/assets/images/home-6/about-3-image.jpg"

const AboutThree = ({ styleNum }) => {

    // styleNum 0 from home page 3
    // styleNum 1 from home page 6
    let prantClass;
    let sectionDescClass;
    let dateClass
    switch (styleNum) {
        case 0:
            prantClass = "pb-50 pb-lg-100";
            sectionDescClass = "custom-jakarta custom-font-style-2 mt-30";
            dateClass = "custom-jakarta"
            break;
        case 1:
            prantClass = "about-3-bg py-50 py-lg-80";
            sectionDescClass = "custom-jakarta custom-font-style-2 mt-30";
            dateClass = "custom-sans-serif"
            break;

        default:
            break;
    }

    // ----- Change classname define in home page

    return (
        <section id="about" className={`about-section about-3 ${prantClass} `}>
            <div className="container">
                <div className="row gx-30 gx-xxl-70 gy-lg-0 gy-40 align-items-center">
                    <div className="col-lg-4 col-xl-5">
                        <div className="about-3-image wow fadeInRight">
                            <Image src={about_img_3} width={"auto"} height={"auto"} className="img-fluid rounded-5" alt="about-image" />
                        </div>
                    </div>
                    {/* <!-- col-5 --> */}
                    <div className="col-lg-8 col-xl-7 wow fadeInLeft">
                        <div className="section-title mb-30 mb-xxl-40">
                            <SectionName
                                name={"About The Event"}
                                className={""}
                            />
                            <SectionTitleTwo
                                title={"Soulful"}
                                subTitle={"Symphony"}
                                titleClass={""}
                                subTitleClass={"text-primary"}
                            />
                            <SectionDesc
                                desc={"1111 Experience Teatro: where melodies transcend boundaries. Immerse in captivating performances that ignite the stage. Unleash your musical senses and embrace rhythmic bliss."}
                                className={sectionDescClass}
                            />

                        </div>
                        {/* <!-- section-title --> */}
                        <div className="about-3-text d-flex flex-column flex-lg-row gap-4 justify-content-between align-items-lg-center mb-40 mb-xl-80 mb-xxl-100">
                            <div>
                                <h4 className={`fw-extra-bold ${dateClass}`}>25-28 Dec, 2023</h4>
                                <p className="custom-jakarta custom-font-style-2 fw-semibold mb-0">4pm-12am</p>
                            </div>
                            <div>
                                <h4 className="text-uppercase fw-extra-bold custom-jakarta">Basement</h4>
                                <p className="custom-jakarta custom-font-style-2 fw-semibold mb-0">Lech and Maria kachinski 5, Batumi</p>
                            </div>
                        </div>
                        {/* <!-- about-3-text --> */}
                        <EventCounterOne />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutThree

