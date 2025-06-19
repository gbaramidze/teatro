"use client"
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import useStickyHeader from '@/hooks/useStickyHeader'
import TicketIcon from '@/components/common/icons/TicketIcon'
import NavbarOffcanvas from './NavbarOffcanvas'

import logo from "@/assets/images/global/logo.png"
import logo_dark from "@/assets/images/global/logo-dark.png"
import useHoverDropdown from '@/hooks/useHoverDropdown'
import { menuList } from '@/lib/menuList'
import {useLocale, useTranslations} from "next-intl";
import {Link} from "@/i18n/routing";

const locales = [{name: 'English', id: 'en'}, {name: 'Русский', id: 'ru'}, {name: 'ქართული', id: 'ka'}];
const NavbarOne = () => {
    const pathName = usePathname()
    useStickyHeader(pathName)
    const [isDropdownOpen, setDropdownOpen] = useHoverDropdown()
    const currentLocale = useLocale()

    const t = useTranslations('navigation');

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
                                                            <span className="fw-semibold">{t(name)}</span>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>

                                    {/*<div className="dropdown">*/}
                                    {/*    <button className="btn btn-sm btn-outline-primary d-flex align-items-center gap-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true">*/}
                                    {/*        <Image src={`/flags/${currentLocale}.svg`} alt={currentLocale} width={20} height={14} />*/}
                                    {/*        {locales.find((locale) => locale.id === currentLocale)?.name || 'Language'}*/}
                                    {/*    </button>*/}
                                    {/*    <ul className="dropdown-menu">*/}
                                    {/*        {[{name: 'English', id: 'en'}, {name: 'Русский', id: 'ru'}, {name: 'ქართული', id: 'ka'}].map((locale) => (*/}
                                    {/*          <li key={locale.id}>*/}
                                    {/*              <Link*/}
                                    {/*                className="dropdown-item d-flex align-items-center gap-2"*/}
                                    {/*                href={pathName.replace(`/${currentLocale}`, ``)}*/}
                                    {/*                locale={locale.id}*/}
                                    {/*              >*/}
                                    {/*                  <Image src={`/flags/${locale.id}.svg`} alt={locale.id} width={20} height={14} />*/}
                                    {/*                  {locale.name}*/}
                                    {/*              </Link>*/}
                                    {/*          </li>*/}
                                    {/*        ))}*/}
                                    {/*    </ul>*/}
                                    {/*</div>*/}

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