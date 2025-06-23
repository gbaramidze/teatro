import React from 'react'
import Image from 'next/image'

import logo from "@/assets/images/global/logo.png"
import logo_dark from "@/assets/images/global/logo-dark.png"
import {FaCcMastercard, FaCcVisa} from "react-icons/fa6";
import Link from "next/link";

const FooterOne = () => {

  const year = new Date().getFullYear()
  return (
    <footer className="footer-section footer-1 py-lg-50 py-40 mt-auto">

      <script src="https://cdn.pulse.is/livechat/loader.js" data-live-chat-id="68584c44ae1f1abb2c0108b8" async/>
      <div className="container">
        <div className="row gy-lg-0 gy-10 justify-content-between align-items-center text-center text-lg-start">
          <div className="col-lg-4 order-3 order-lg-1">
            <p className="mb-0 footer-nav">&copy; <span className="current-year">2025</span> <Link
              href="https://teatro.ge" className="text-decoration-none" target="_blank">Teatro</Link>. All rights
              Reserved.</p>
          </div>
          <div className="col-lg-4 order-1 order-lg-2">
            <Link className="navbar-brand d-flex justify-content-center" href="/" aria-label="nav-brands">
              <Image src={logo} className="logo-light" alt="logo"/>
              <Image src={logo_dark} className="logo-dark" alt="logo"/>
            </Link>
          </div>
          <div className="col-lg-4 order-2 order-lg-3">
            <div className="text-center gap-2 mb-3">
              <FaCcMastercard size={64} className={"me-3"}/>
              <FaCcVisa size={64}/>
            </div>
            <ul
              className="footer-nav list-unstyled d-flex justify-content-center justify-content-lg-end gap-30 mb-0 custom-font-style-1">
              <li className="nav-item">
                <Link href="/privacy" className="nav-link" aria-label="nav-links">Privecy Policy</Link>
              </li>
              <li className="nav-item">
                <Link href="/terms" className="nav-link" aria-label="nav-links">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* -- row -- */}
      </div>
      {/* -- container --*/}
    </footer>
  )
}

export default FooterOne