import Link from 'next/link'
import React from 'react'

import SocialIcon2 from '@/components/common/icons/SocialIcon2'
import SocialIcon3 from '@/components/common/icons/SocialIcon3'
import SocialIcon4 from '@/components/common/icons/SocialIcon4'
import SocialIcon5 from '@/components/common/icons/SocialIcon5'
import SocialIcon1 from '@/components/common/icons/SocialIcon1'

const SubscriptionTwo = ({ styleNum }) => {
    // styleNum 0 from about page and venue

    let subscriptionClass;
    let wrapperClass;
    switch (styleNum) {
        case 0:
            subscriptionClass = "contact-1 mt-lg-100 mt-xxl-130";
            wrapperClass = "pt-60 pt-lg-100 pt-xxl-120 pb-40 pb-lg-50 pb-xxl-70"
            break;

        default:
            break;
    }

    // ----- Change classname define in home page


    return (
        <section className={`contact-section subscription-2 ${subscriptionClass} mt-50`}>
            <div className="container">
                <div className={`contact-wrapper ${wrapperClass}`}>
                    <div className="row gy-lg-0 gy-50">
                        <div className="col-lg-7">
                            <span className="fs-3 straight-line-wrapper fw-semibold position-relative"><span className="straight-line"></span>Contact Musicfest</span>
                            <div className="mt-20 mt-md-30 mt-lg-40 mt-xxl-60">
                                <Link href="#" className="text-decoration-none display-6 custom-jakarta fw-extra-bold">manager@teatro.ge</Link>
                                <div className="contact-details custom-heading-color-2 mt-10 mt-lg-30">
                                    <h3 className="custom-jakarta fw-semibold mb-5">Lech & Maria Kachinski 5. Batumi, Georgia</h3>
                                    <h3 className="custom-jakarta fw-bold">(+995) 598 254444</h3>
                                    <ul className="list-unstyled contact-icons d-flex align-items-center gap-20 gap-lg-30 mt-4 mt-lg-40 mb-0">
                                        <li><Link href="#" aria-label="icons"><SocialIcon1 height={"30"} width={"30"} /></Link></li>
                                        <li><Link href="https://www.instagram.com/teatro_night_club/" target="_blank" aria-label="icons"><SocialIcon4 height={"30"} width={"30"} /></Link></li>
                                        <li><Link href="#" aria-label="icons"><SocialIcon5 height={"31"} width={"30"} /></Link></li>
                                    </ul>
                                    {/* <!-- social-share-icons --> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- col-5 --> */}
                        <div className="col-lg-4">
                            <span className="fs-3 straight-line-wrapper fw-semibold position-relative"><span className="straight-line custom-heading-color-1"></span>Teatro links</span>
                            <div className="contact-details mt-20 mt-md-30 mt-lg-40 mt-xxl-60">
                                <h3 className="display-6 custom-jakarta fw-semibold custom-heading-color-1 border-bottom border-3">About Us</h3>
                                <ul className="list-unstyled contact-lists d-flex flex-column gap-2 mt-20 mt-lg-30 mb-0">
                                    <li><Link href="home-1.html#line-up" target="_blank" className="text-decoration-none custom-heading-color-2">Line Up</Link></li>
                                    <li><Link href="home-3.html#about" target="_blank" className="text-decoration-none custom-heading-color-2">Lates News</Link></li>
                                    <li><Link href="home-1.html#sponsor" target="_blank" className="text-decoration-none custom-heading-color-2">Become A Sponsor</Link></li>
                                    <li><Link href="#direction" target="_blank" className="text-decoration-none custom-heading-color-2">Venue</Link></li>
                                    <li><Link href="home-1.html#schedule" target="_blank" className="text-decoration-none custom-heading-color-2">Schedule</Link></li>
                                    <li><Link href="#direction" target="_blank" className="text-decoration-none custom-heading-color-2">Contact Us</Link></li>
                                </ul>
                                {/* <!-- social-share-icons --> */}
                            </div>
                        </div>
                        {/* <!-- col-4 --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscriptionTwo;



<svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>

    <symbol id="social-share-icon-1" viewBox="0 0 30 30">
        <path d="M30 15C30 6.71572 23.2843 0 15 0C6.71572 0 0 6.71572 0 15C0 22.4868 5.48525 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.322 5.85938C19.9626 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.925 9.84375 17.3438 11.0001 17.3438 12.1875V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.4868 30 15Z" />
    </symbol>

    <symbol id="social-share-icon-2" viewBox="0 0 30 30">
        <path d="M21.6579 0.817749H25.8747L16.6621 11.3471L27.5 25.6752H19.014L12.3675 16.9853L4.76243 25.6752H0.54304L10.3968 14.4129L0 0.817749H8.70139L14.7092 8.76066L21.6579 0.817749ZM20.1779 23.1512H22.5145L7.43174 3.20916H4.92433L20.1779 23.1512Z" />
    </symbol>
</svg>