"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TicketIcon from '@/components/common/icons/TicketIcon'
import ShopIcon from '@/components/common/icons/ShopIcon'
import MenuIcon from '@/components/common/icons/MenuIcon'
import useStickyHeader from '@/hooks/useStickyHeader'
import NavbarOffcanvas from './NavbarOffcanvas'
import ButtonOutline from '../buttons/ButtonOutline'

import logo from "@/assets/images/global/logo-yellow-big.png"
import logo_dark from "@/assets/images/global/logo-yellow-big-dark.png"
import { usePathname } from 'next/navigation'
import Cart from './Cart'

const NavbarTwo = () => {
  const pathName = usePathname()
  useStickyHeader(pathName)
  return (
    <>
      <header className="header-section header-3 transparent-header sticky-navbar">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg">
            <div className="d-flex w-100 justify-content-between align-items-center">
              <Link className="navbar-brand brand-logo" href="/" aria-label="nav-brands">
                <Image src={logo} className="logo-custom-light" alt="logo" />
                <Image src={logo_dark} className="logo-custom-dark" alt="logo" />
              </Link>
              <div className="d-flex align-items-center gap-20">
                <Link href="#merchandise" className="d-block d-lg-none" aria-label="buttons"><span className="shop-icon-xl"><ShopIcon height={"46"} width={"42"} /></span></Link>
                <button className="navbar-toggler offcanvas-menu-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#navContentmenu" aria-controls="navContentmenu" aria-expanded="false" aria-label="Toggle navigation">
                  <span ><MenuIcon height={"24"} width={"24"} /> </span>
                </button>
              </div>


              <div className="d-none d-lg-block">
                <div className="d-flex gap-40 gap-xxl-60 align-items-center">
                  <ButtonOutline link={"#pricing"} className={"btn-primary btn-custom-dark gap-1"}>
                    <TicketIcon /> Buy Ticket
                  </ButtonOutline>
                  <Link href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasShop" aria-controls="offcanvasShop" aria-expanded="false" aria-label="Toggle navigation"><span className="shop-icon-xl"> <ShopIcon height={"46"} width={"42"} /> </span></Link>

                  <Link href="#" className="offcanvas-menu-icon" data-bs-toggle="offcanvas" data-bs-target="#navContentmenu" aria-controls="navContentmenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span > <MenuIcon height={"44"} width={"44"} /> </span>
                  </Link>
                </div>

              </div>
            </div>
          </nav>
        </div>
      </header>

      <NavbarOffcanvas img={logo} />
      <Cart />
    </>
  )
}

export default NavbarTwo