"use client"
import React from 'react'
import Image from 'next/image'
import circle from "@/assets/images/landing-feature-circle.svg"
import feature_icon_1 from "@/assets/images/feature-icon-1.png"
import feature_icon_2 from "@/assets/images/feature-icon-2.png"
import feature_icon_3 from "@/assets/images/feature-icon-3.png"
import feature_icon_4 from "@/assets/images/feature-icon-4.png"
import feature_icon_5 from "@/assets/images/feature-icon-5.png"
import feature_icon_6 from "@/assets/images/feature-icon-6.png"

const featuresData = [
    {
        id: 1,
        title: "Well Documented",
        desc: "Comprehensive guides and documentation make theme setup and customization a breeze, even for beginners.",
        circle: circle,
        img: feature_icon_1
    },
    {
        id: 2,
        title: "Optimized Code",
        desc: "Clean and efficient coding ensures faster load times, better SEO, and smoother website operation.",
        circle: circle,
        img: feature_icon_2
    },
    {
        id: 3,
        title: "Smooth Animation",
        desc: "Engage visitors with captivating animations that enhance the user experience and add a touch of elegance.",
        circle: circle,
        img: feature_icon_3
    },
    {
        id: 4,
        title: "Responsive Design",
        desc: "Seamlessly adapts to various devices, delivering an optimal viewing experience on smartphones, tablets, and desktops.",
        circle: circle,
        img: feature_icon_4
    },
    {
        id: 5,
        title: "OpenStreet Map",
        desc: "Integrated OpenStreet Map feature enhances location-based services, providing precise event venue information.",
        circle: circle,
        img: feature_icon_5
    },
    {
        id: 6,
        title: "OpenStreet Map",
        desc: "Integrated OpenStreet Map feature enhances location-based services, providing precise event venue information.",
        circle: circle,
        img: feature_icon_5
    },
    {
        id: 6,
        title: "Event structured data",
        desc: "Implement structured data to boost search engine visibility, making your events more discoverable online.",
        circle: circle,
        img: feature_icon_6
    },
]

const Features = () => {
    return (
        <section id="features" className="features-section features-landing py-60 py-lg-100 py-xxl-150">
            <div className="container">
                <div className="row gx-20 gy-30 gy-lg-0">
                    <div className="col-lg-5">
                        <h2 className="display-3 sticky-header text-gradient gradient-reverse fw-bold no-stroke custom-jakarta">Core Features</h2>
                    </div>
                    <div className="col-lg-7">
                        <div className="row gx-60 gy-40 gy-lg-0">
                            <div className="col-lg-6">
                                <div className="features-wrapper d-flex flex-column gap-40 gap-lg-70">
                                    {
                                        featuresData.slice(0, 3).map(({ circle, desc, id, img, title }) => <FeatureCard key={id} circle={circle} desc={desc} img={img} title={title} />)
                                    }

                                </div>
                                {/* -- features-wrapper -- */}
                            </div>
                            {/* -- col-6 -- */}
                            <div className="col-lg-6">
                                <div className="features-wrapper d-flex flex-column gap-40 gap-lg-70">
                                    {
                                        featuresData.slice(3, 6).map(({ circle, desc, id, img, title }) => <FeatureCard key={id} circle={circle} desc={desc} img={img} title={title} />)
                                    }
                                </div>
                                {/* <!-- features-wrapper --> */}
                            </div>
                            {/* <!-- col-6 --> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features


const FeatureCard = ({ circle, desc, img, title }) => {
    return (
        <div className="features-inner">
            <div className="features-image mb-20">
                <Image src={circle} className="circle-features" alt="img" width={96} height={96} />
                <div className="features-icon">
                    <Image src={img} alt="img" />
                </div>
            </div>
            <h5 className="features-heading mb-20">{title}</h5>
            <p className="features-text">{desc}</p>
        </div>
    )
}