"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useStickyHeader from '@/hooks/useStickyHeader'
import useHoverDropdown from '@/hooks/useHoverDropdown'


import ShopIcon from '../icons/ShopIcon'
import ButtonFill from '../buttons/ButtonFill'
import TicketIcon from '../icons/TicketIcon'

import logo from "@/assets/images/global/logo.png"
import logo_dark from "@/assets/images/global/logo-dark.png"
import { usePathname } from 'next/navigation'
import NavbarOffcanvas from './NavbarOffcanvas'
import Cart from './Cart'
import { menuList } from '@/lib/menuList'

const NavbarSix = () => {
    const pathName = usePathname()
    useStickyHeader(pathName)
    const [isDropdownOpen, setDropdownOpen] = useHoverDropdown()

    return (
        <>
            <header className="header-section header-4 sticky-navbar">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg">
                        <div className="d-flex w-100 justify-content-between align-items-center">
                            <Link className="navbar-brand" href="/" aria-label="nav-brands">
                                <Image src={logo} className="logo-light" alt="logo" />
                                <Image src={logo_dark} className="logo-dark" alt="logo" />
                            </Link>

                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navContentmenu" aria-controls="navContentmenu" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="d-none d-lg-block">
                                <div className="d-flex gap-30 align-items-center">
                                    <ul className="menu-list navbar-nav mb-2 me-2 mb-lg-0">
                                        {
                                            menuList.map(({ id, isDropdown, name, path, }) => {
                                                return (
                                                    <li key={id}
                                                        onMouseEnter={() => setDropdownOpen(id)}
                                                        onMouseLeave={() => setDropdownOpen("")}
                                                        className={`nav-item ${isDropdown && "dropdown single-pages-dropdown"}`}>
                                                        <Link className={`nav-link ${isDropdown && "dropdown-toggle"}`} href={path} aria-label="nav-links" data-bs-toggle={`${isDropdown && "dropdown"}`}>{name}</Link>
                                                        {
                                                            isDropdown && (
                                                                <ul className={`dropdown-menu ${isDropdownOpen === id ? "show" : ""}`}>
                                                                    {
                                                                        isDropdown.map(({ id, path, name }) => {
                                                                            return (
                                                                                <li key={id}><Link className="dropdown-item" href={path} target="_blank" aria-label="single-pages">{name}</Link></li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            )
                                                        }

                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>

                            <div className="d-none d-lg-block">
                                <div className="d-flex gap-50 align-items-center">
                                    <Link href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasShop" aria-controls="offcanvasShop" aria-expanded="false" aria-label="Toggle navigation"><span className="shop-icon-xl"> <ShopIcon height={"28"} width={"28"} /> </span></Link>
                                    <ButtonFill className={" btn-rounded gap-2"} link={"#pricing"}>
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
            <Cart />
        </>
    )
}

export default NavbarSix