"use client"
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ButtonFill from '@/components/common/buttons/ButtonFill'
import TicketIcon from '@/components/common/icons/TicketIcon'
import useStickyHeader from '@/hooks/useStickyHeader'
import NavbarOffcanvas from '@/components/common/navbars/NavbarOffcanvas'
import useHoverDropdown from '@/hooks/useHoverDropdown'

import logo from "@/assets/images/global/logo.png"
import logo_dark from "@/assets/images/global/logo-dark.png"
import { menuList } from '@/lib/menuList'

const NavbarFive = () => {
  const pathName = usePathname()
  useStickyHeader(pathName)
  const [isDropdownOpen, setDropdownOpen] = useHoverDropdown()
  return (
    <>
      <header className="header-section header-5 sticky-navbar hover-menu">
        <div className="container">
          <nav className="navbar navbar-expand-xl custom-inner-bg">
            <div className="d-flex w-100 justify-content-between align-items-center">
              <Link className="navbar-brand" href="/" aria-label="nav-brands">
                <Image src={logo} className="logo-light" alt="logo" />
                <Image src={logo_dark} className="logo-dark" alt="logo" />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navContentmenu" aria-controls="navContentmenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="d-none d-xl-block">
                <div className="d-flex gap-30 align-items-center">
                  <ul className="menu-list navbar-nav mb-2 me-2 mb-lg-0">
                    {
                      menuList.map(({ id, isDropdown, name, path }) => {
                        return (
                          <li key={id}
                            onMouseEnter={() => setDropdownOpen(id)}
                            onMouseLeave={() => setDropdownOpen("")}
                            className={`nav-item ${isDropdown && "dropdown single-pages-dropdown"}`}>
                            <Link className={`nav-link text-uppercase ${isDropdown && "dropdown-toggle"}`} href={path} aria-label="nav-links" data-bs-toggle={`${isDropdown && "dropdown"}`}> <span className="fw-semibold">{name}</span></Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                  <ButtonFill className={"gap-2"} link={"#"}>
                    <TicketIcon height={"25"} width={"25"} />
                    Buy Ticket
                  </ButtonFill>

                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <NavbarOffcanvas img={logo} />
    </>
  )
}

export default NavbarFive