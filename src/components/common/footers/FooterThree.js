import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from "@/assets/images/global/logo.png"
import logo_dark from "@/assets/images/global/logo-dark.png"

import landing_logo from "@/assets/images/global/logo-landing-light.png"
import landing_logo_dark from "@/assets/images/global/logo-secondary.png"


const FooterThree = ({ styleNum }) => {
    // styleNum 7 from home page 7 layout , about page layout, contact page layout, venue page layout
    // styleNum 8 from blog page layout, single blog 1, 2, 2 page layout

    let currentLogo = ""
    let currentLogoDark = ""

    switch (styleNum) {
        case 7:
            currentLogo = logo
            currentLogoDark = logo_dark
            break;
        case 8:
            currentLogo = landing_logo
            currentLogoDark = landing_logo_dark
            break;
        default:
            break;
    } // ----- Change logo define in home page

    const year = new Date().getFullYear()

    return (
        <footer className="footer-section footer-1 py-lg-50 py-40 mt-auto">
            <div className="container">
                <div className="row gy-lg-0 gy-10 justify-content-between align-items-center text-center text-lg-start">
                    <div className="col-lg-4 order-3 order-lg-1">
                        <p className="mb-0  custom-roboto footer-nav">&copy; <span className="current-year" >{year}</span> <Link href="https://themeperch.net/" className="text-decoration-none" target="_blank">Themeperch</Link>. All rights Reserved.</p>
                    </div>
                    <div className="col-lg-4 order-1 order-lg-2">
                        <Link className="navbar-brand d-flex justify-content-center" href="/home-1/" aria-label="nav-brands">
                            <Image src={currentLogo} className="logo-light" alt="logo" />
                            <Image src={currentLogoDark} className="logo-dark" alt="logo" />
                        </Link>
                    </div>
                    <div className="col-lg-4 order-2 order-lg-3">
                        <ul className="footer-nav list-unstyled d-flex justify-content-center justify-content-lg-end gap-30 mb-0 custom-font-style-1">
                            <li className="nav-item">
                                <Link href="#" className="nav-link z" aria-label="nav-links">Privecy Policy</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#" className="nav-link" aria-label="nav-links">Terms & Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- row --> */}
            </div>
            {/* <!-- container -->			 */}
        </footer>
    )
}

export default FooterThree