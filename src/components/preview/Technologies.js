import Image from 'next/image'
import React from 'react'
import bootstrap from "@/assets/images/bootstrap-logo.png"
import googleFont from "@/assets/images/google-font-logo.png"
import nextjs from "@/assets/images/next_js.png"
import sass from "@/assets/images/sass-logo.png"
import code from "@/assets/images/code-logo.png"
import frame from "@/assets/images/frame-logo.png"
import technologies_md from "@/assets/images/technologies-md-image.png"
import technologies_md_2 from "@/assets/images/technologies-md-image-2.png"
import technologies_img from "@/assets/images/technologies-lg-image.png"

const Technologies = () => {
    return (
        <section id="technologies" className="technologies-section features-landing pt-60 pt-lg-100 pt-xxl-120">
            <div className="container">
                <div className="d-flex flex-column flex-lg-row align-items-center gap-20 gap-lg-30 mb-30">
                    <div className="d-flex flex-row flex-lg-column gap-20 gap-lg-30">
                        <SmallCard img={nextjs} title={"Next.js"} />
                        <SmallCard img={bootstrap} title={"Bootstrap 5"} />

                    </div>

                    <div className="technologies-wrapper landing-inner-bg technologies-lg">
                        <Image src={technologies_img} className="technologies-lg-image img-fluid" alt="img" />

                        <div className="technologies-lg-content text-center">
                            <div className="d-flex align-items-center justify-content-center gap-3 mb-10 mb-lg-30 position-relative">
                                <Image src={frame} className="frame-image img-fluid" alt="img" />
                                <h3 className="technologies-lg-heading text-gradient text-gradient-style-2 fw-bold no-stroke custom-jakarta mb-0">Teatro
                                </h3>
                                {/* <span className="custom-badge">1.0</span> */}
                            </div>
                            <p className="technologies-text mb-0">
                                Where design meets Sound, and Creativity orchestrates unforgettable Music Event experiences. Elevate your events today!
                            </p>
                        </div>
                    </div>

                    <div className="d-flex flex-row flex-lg-column gap-20 gap-lg-30">
                        <SmallCard img={googleFont} title={"Google Font"} />
                        <SmallCard img={sass} title={"Sass Available"} />
                    </div>
                </div>

                <div className="d-flex gap-20 gap-lg-30 flex-column flex-lg-row align-items-center">

                    <MediumCard img={technologies_md} title={"50+"} />
                    <MediumCard img={technologies_md_2} title={"50+"} />

                    <SmallCard img={code} title={"Custom Clean Code"} />

                </div>
            </div>
        </section>
    )
}

export default Technologies


const SmallCard = ({ img, title }) => {
    return (
        <div className="technologies-wrapper landing-inner-bg technologies-sm d-flex flex-column gap-3 gap-lg-20 align-items-center justify-content-center">
            <Image src={img} className="technologies_img" alt="img" />
            <h4 className="technologies-heading">{title}</h4>
        </div>
    )
}

const MediumCard = ({ img, title }) => {
    return (
        <div className="technologies-wrapper landing-inner-bg technologies-md">
            <Image src={img} className="img-fluid" alt="img" />
            <h4 className="technologies-huge-text">{title}</h4>
            <h2 className="display-3 technologies-gradient-text text-gradient gradient-reverse fw-bold no-stroke custom-jakarta">Elements included</h2>
        </div>
    )
}