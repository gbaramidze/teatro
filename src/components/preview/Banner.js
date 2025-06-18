import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import landing_image_1 from "@/assets/images/hero-landing-image-1.png"
import landing_image_2 from "@/assets/images/hero-landing-image-2.png"
import landing_image_5 from "@/assets/images/hero-landing-image-5.png"
import landing_image_4 from "@/assets/images/hero-landing-image-4.png"
import landing_image_3 from "@/assets/images/hero-landing-image-3.png"

const Banner = () => {
    return (
        <section id="hero-landing" className="hero-section hero-landing parallax">

            <div className="container">
                <div className="hero-txt">
                    <h1 className="display-1 text-gradient gradient-reverse fw-extra-bold no-stroke custom-jakarta">Elevate Your Music Event to New Heights</h1>
                    <p className="hero-text-inner mt-20 mt-lg-50 custom-jakarta mb-0">Explore a music event theme that redefines excellence. Elevate your event experience with stunning design and powerful features.</p>
                    <div className="d-inline-flex flex-column flex-lg-row align-items-lg-center gap-20 gap-lg-40 py-30 py-lg-60">
                        <Link href="#demos" className="btn btn-gradient btn-rounded" title="">View Demos</Link>
                        <Link href="#features" className="btn btn-outline-gradient btn-gradient-style-2" aria-label="buttons"><span className="text-gradient no-stroke">Features</span></Link>
                    </div>
                    <ul className="list-unstyled d-flex flex-wrap gap-20 gap-md-30 gap-lg-50 mb-0">
                        <li className="d-flex align-items-center gap-10"> <CheckIcon /> Unique Design</li>
                        <li className="d-flex align-items-center gap-10"><CheckIcon /> Clean Code</li>
                        <li className="d-flex align-items-center gap-10"><CheckIcon /> RTL Version Available</li>
                    </ul>
                </div>
            </div>
            {/* -- container -- */}

            <div className="hero-landing-image-1 d-none d-lg-block">
                <Image src={landing_image_1}  className="img-fluid" alt="img" />
            </div>
            <div className="hero-landing-image-2 d-none d-lg-block">
                <Image src={landing_image_2}   className="img-fluid" alt="img" />
            </div>

            <div className="d-flex flex-wrap flex-md-nowrap align-items-end mt-50 mt-lg-0 gap-30">

                <div className="hero-landing-image-5">
                    <Image src={landing_image_5}   className="img-fluid" alt="img" />
                </div>


                <div className="hero-landing-image-4">
                    <Image src={landing_image_4}   className="img-fluid" alt="img" />
                </div>


                <div className="hero-landing-image-3">
                    <Image src={landing_image_3}   className="img-fluid" alt="img" />
                </div>

            </div>

        </section>
    )
}

export default Banner


const CheckIcon = () => {
    return (
        <span className="check-circle-fill">
            <svg height={"28"} width={"28"} ><use height={"28"} width={"28"} xlinkHref="#check-circle-fill"></use>
                <symbol id="check-circle-fill" viewBox="0 0 28 28">
                    <path d="M26.5 14C26.5 20.9036 20.9036 26.5 14 26.5C7.09644 26.5 1.5 20.9036 1.5 14C1.5 7.09644 7.09644 1.5 14 1.5C20.9036 1.5 26.5 7.09644 26.5 14Z" stroke="#0DB10A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.5756 9.51003C19.9843 9.8279 20.0579 10.4169 19.74 10.8256L14.7313 17.2654C13.9516 18.2678 12.4851 18.3979 11.5412 17.5484L8.37285 14.6969C7.988 14.3505 7.9568 13.7577 8.30317 13.3729C8.64954 12.988 9.24231 12.9568 9.62716 13.3032L12.7955 16.1547C12.9304 16.2761 13.1399 16.2575 13.2512 16.1143L18.26 9.67447C18.5779 9.26577 19.1669 9.19215 19.5756 9.51003Z" fill="#0DB10A" />
                </symbol>
            </svg>
        </span>
    )
}