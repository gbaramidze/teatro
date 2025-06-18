import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



import Star from '@/components/common/icons/Star'
import RoundText from '@/components/common/RoundText'
import Facebook2 from '@/components/common/icons/Facebook2'
import Youtube2 from '@/components/common/icons/Youtube2'
import instagram from "@/assets/images/instagram-logo.svg"


const BannerThree = ({subTitle}) => {
    
    return (
        <section className="hero-section hero-3 position-relative">
            <div className="hero-wrapper mx-auto position-relative parallax">
                <div className="hero-inner-text position-relative">
                    <div className="hero-6-texts">
                        <Image src={subTitle}   className="musicfest-image mb-10" alt="img" />
                        <h1 className="custom-poppins extra-huge-text-1 text-primary fw-extra-huge-bold text-uppercase mb-0">Teatro</h1>
                        <h2 className="custom-poppins extra-huge-text-2 fw-extra-bold">2024</h2>
                    </div>
                    <div className="circle-wrapper hero-3-circle">
                        <div className="star-icon">
                            <span><Star height={"42"} width={"42"} /></span>
                        </div>
                        <div className="circle-bg"></div>
                        <div className="rotate-text text-uppercase">
                            <RoundText style={""} text={"Where Melodies Unite Hearts Teatro-"} />
                        </div>
                    </div>
                </div>
                <div className="social-links">
                    <Link className="d-flex gap-2 gap-xxl-20 align-items-center text-decoration-none" href="#">
                        <span className="facebook-icon"><Facebook2 /></span>
                        <h3 className="fw-bold custom-sans-serif">fb.com/Teatro</h3>
                    </Link>
                    <Link className="d-flex gap-2 gap-xxl-20 align-items-center text-decoration-none" href="#">
                        <Image src={instagram}  width={34} height={"auto"} alt="img"  />
                        <h3 className="fw-bold custom-sans-serif">instagram.com/Teatro</h3>
                    </Link>
                    <Link className="d-flex gap-2 gap-xxl-20 align-items-center text-decoration-none" href="#">
                        <span className="youtube-icon"><Youtube2 /></span>
                        <h3 className="fw-bold custom-sans-serif">youtube.com/Teatro</h3>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BannerThree


