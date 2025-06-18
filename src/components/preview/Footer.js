import Image from 'next/image'
import Link from 'next/link'
import React from "react";
import logo from "@/assets/images/global/logo-landing-light.png"
import logo_dark from "@/assets/images/global/logo-secondary.png"
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer-section footer-1 py-lg-50 py-40 mt-auto">
            <div className="container">
                <div className="row gy-lg-0 gy-10 justify-content-between align-items-center text-center text-lg-start">
                    <div className="col-lg-4 order-3 order-lg-1">
                        <p className="custom-roboto custom-font-style-1">&copy; <span className="current-year" >{year}</span> <Link href="https://themeperch.net/" className="text-primary text-decoration-none" target="_blank">Themeperch</Link>. All rights Reserved.</p>
                    </div>
                    <div className="col-lg-4 order-1 order-lg-2">
                        <Link className="navbar-brand d-flex justify-content-center" href="/" aria-label="nav-brands">
                            <Image src={logo}  className="logo-light" alt="logo" />
                            <Image src={logo_dark}  className="logo-dark" alt="logo" />
                        </Link>
                    </div>
                    <div className="col-lg-4 order-2 order-lg-3">
                        <ul className="footer-nav list-unstyled d-flex justify-content-center justify-content-lg-end gap-30 mb-0 custom-font-style-1">
                            <li className="nav-item">
                                <Link href="#" className="nav-link" aria-label="nav-links">Privecy Policy</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#" className="nav-link" aria-label="nav-links">Terms & Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* -- row -- */}
            </div>
            {/* -- container -- */}
        </footer>
    )
}

export default Footer