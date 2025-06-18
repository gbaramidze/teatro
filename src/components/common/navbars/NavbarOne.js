"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import useStickyHeader from '@/hooks/useStickyHeader'
import TicketIcon from '@/components/common/icons/TicketIcon'
import NavbarOffcanvas from './NavbarOffcanvas'

import logo from "@/assets/images/global/logo.png"
import logo_dark from "@/assets/images/global/logo-dark.png"
import useHoverDropdown from '@/hooks/useHoverDropdown'
import { menuList } from '@/lib/menuList'

const NavbarOne = () => {
    const pathName = usePathname()
    useStickyHeader(pathName)
    const [isDropdownOpen, setDropdownOpen] = useHoverDropdown()

    return (
        <>
            <header className="header-section header-2 ordered-list-header sticky-navbar hover-menu">
                <div className="container">
                    <nav className="navbar navbar-expand-xl">
                        <div className="d-flex w-100 justify-content-between align-items-center">
                            <Link className="navbar-brand" href="/" aria-label="nav-brands">
                                <Image src={logo} height={80} width={80} className="logo-light d-md-block d-none" alt="logo" />
                                <Image src={logo} height={50} width={50} className="logo-light d-md-none d-block" alt="logo" />
                                <Image src={logo_dark} className="logo-dark" alt="logo" />
                            </Link>

                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navContentmenu" aria-controls="navContentmenu" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="d-none d-xl-block">
                                <div className="d-flex gap-40 align-items-center">
                                    <ul className="list-unstyled d-flex gap-40 navbar-nav mb-2 me-2 mb-lg-0">
                                        {
                                            menuList.map(({ id, isDropdown, name, path }) => {
                                                return (
                                                    <li key={id}
                                                        onMouseEnter={() => setDropdownOpen(id)}
                                                        onMouseLeave={() => setDropdownOpen("")}
                                                        className={`nav-item ${isDropdown && "dropdown single-pages-dropdown"} `}>
                                                        <Link className={`nav-link ${isDropdown && "dropdown-toggle"} d-flex align-items-end gap-0 flex-column text-uppercase`} href={path} aria-label="nav-links" data-bs-toggle={`${isDropdown && "dropdown"}`} >
                                                            <span className="fw-bold">{id}</span>
                                                            <span className="fw-semibold">{name}</span>
                                                        </Link>
                                                        {
                                                            // If dropdown have on menu list than active this code
                                                            isDropdown &&
                                                            <ul className={`dropdown-menu ${isDropdownOpen === id ? "show" : ""}`}>
                                                                {
                                                                    isDropdown.map(({ id, name, path }) => (
                                                                        <li key={id}>
                                                                            <Link className="dropdown-item" href={path} target="_blank" aria-label="single-pages">{name}</Link>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        }

                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>
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

export default NavbarOne