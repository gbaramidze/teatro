"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import ButtonFill from '@/components/common/buttons/ButtonFill'
import TicketIcon from '@/components/common/icons/TicketIcon'
import NavbarOffcanvas from '@/components/common/navbars/NavbarOffcanvas'
import useStickyHeader from '@/hooks/useStickyHeader'
import useHoverDropdown from '@/hooks/useHoverDropdown'

import logo from "@/assets/images/global/logo.png"
import logo_landing_light from "@/assets/images/global/logo-landing-light.png"
import logo_secondary from "@/assets/images/global/logo-secondary.png"
import { menuList } from '@/lib/menuList'


const NavbarThree = () => {
  const pathName = usePathname()
  useStickyHeader(pathName)
  const [isDropdownOpen, setDropdownOpen] = useHoverDropdown()
  return (
    <>
      <header className="header-section header-7 sticky-navbar hover-menu">
        <div className="container">
          <nav className="navbar navbar-expand-xl">
            <div className="d-flex w-100 justify-content-between">
              <Link className="navbar-brand" href="/" aria-label="nav-brands">
                <Image src={logo_landing_light} className="logo-light" alt="logo" />
                <Image src={logo_secondary} className="logo-dark" alt="logo" />
              </Link>

              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navContentmenu" aria-controls="navContentmenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="d-none d-xl-block">
                <div className="d-flex gap-50 align-items-center">
                  <ul className="menu-list navbar-nav mb-2 me-2 mb-lg-0">

                    {
                      menuList.map(({ id, isDropdown, name, path }) => {
                        return (
                          <li key={id}
                            onMouseEnter={() => setDropdownOpen(id)}
                            onMouseLeave={() => setDropdownOpen("")}
                            className={`nav-item ${isDropdown ? "dropdown single-pages-dropdown" : ""}`}>

                            <Link className={`nav-link text-uppercase custom-roboto ${isDropdown ? "dropdown-toggle" : ""}`} href={path} aria-label="nav-links" data-bs-toggle={`${isDropdown && "dropdown"}`}>
                              <span className="fw-semibold">{name}</span>
                            </Link>
                            {
                              isDropdown &&
                              <ul className={`dropdown-menu ${isDropdownOpen === id ? "show" : ""}`}>
                                {
                                  isDropdown.map(({ id, name, path }) => {
                                    return (
                                      <li key={id}><Link className="dropdown-item" href={path} target="_blank" aria-label="single-pages">{name}</Link></li>
                                    )
                                  })
                                }
                              </ul>
                            }
                          </li>
                        )
                      })
                    }

                  </ul>
                  <ButtonFill className={"gap-2 btn-rounded"} link={"#pricing"}>
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

export default NavbarThree