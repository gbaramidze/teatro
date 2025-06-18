import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useStickyHeader from '@/hooks/useStickyHeader'

import logo_light from "@/assets/images/global/logo-landing-light.png"
import logo_secondary from "@/assets/images/global/logo-secondary.png"
const Navbar = () => {
    useStickyHeader()
    return (

        <>
            <header className="header-section header-landing sticky-navbar">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-xl">
                        <div className="d-flex w-100 justify-content-between align-items-center">
                            <a className="navbar-brand" href="index.html" aria-label="nav-brands">
                                <Image src={logo_light} className="logo-light" alt="logo" />
                                <Image src={logo_secondary} className="logo-dark" alt="logo" />
                            </a>

                            <div className="d-block d-xl-none">
                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navContentmenu" aria-controls="navContentmenu" aria-expanded="false" aria-label="Toggle navigation" >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>

                            <div className="d-none d-xl-block">
                                <div className="d-flex gap-30 align-items-center">
                                    <ul className="menu-list navbar-nav mb-2 me-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" href="#demos" aria-label="nav-links">Demos</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="#features" aria-label="nav-links">Features</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/documentation/" target="_blank" aria-label="nav-links">Documentation</Link>
                                        </li>
                                        {/* <li className="nav-item">
                                            <Link className="nav-link" href="https://themeforest.net/user/themeperch" target="_blank" aria-label="nav-links">Friendly Support</Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>

                            <div className="d-none d-xl-block">
                                <Link href="https://themeforest.net/user/themeperch/portfolio" className="btn btn-primary btn-light-style-2 d-inline-flex btn-rounded align-items-center gap-10" target="_blank" aria-label="buttons">Buy Teatro</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/* ============== Offcanvas menu  */}
            <div className={`offcanvas offcanvas-top `} id="navContentmenu">
                <div className="offcanvas-header">
                    <Link className="navbar-brand" href="index.html" aria-label="nav-brands">
                        <Image src={logo_light} alt="logo" />
                    </Link>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-flex justify-content-center">
                    <ul className="navbar-nav custom-navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item" data-bs-dismiss="offcanvas">
                            <Link className="nav-link active" aria-current="page" href="#demos" aria-label="nav-links">Demos</Link>
                        </li>
                        <li className="nav-item" data-bs-dismiss="offcanvas">
                            <Link className="nav-link" href="#features" aria-label="nav-links">Features</Link>
                        </li>
                        <li className="nav-item" data-bs-dismiss="offcanvas">
                            <Link className="nav-link" href="Teatro-documentation/documentation.html" aria-label="nav-links">Documentation</Link>
                        </li>
                        <li className="nav-item" data-bs-dismiss="offcanvas">
                            <Link className="nav-link" href="https://themeforest.net/user/themeperch/#contact" aria-label="nav-links">Friendly Support</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar