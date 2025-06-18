import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { menuList } from '@/lib/menuList'

const NavbarOffcanvas = ({ img }) => {
    const pathName = usePathname()
    // Remove offcanvas opacity background when change router
    useEffect(() => {
        const offcanvas_backdrop = document.querySelector(".offcanvas-backdrop")
        if (offcanvas_backdrop) {
            if (offcanvas_backdrop.classList.contains("show")) {
                offcanvas_backdrop.classList.remove("offcanvas-backdrop", "show")
            }
        }
    }, [pathName])
    return (
        <div className="offcanvas offcanvas-top" id="navContentmenu" data-bs-backdrop="static" tabIndex="-1">
            <div className="offcanvas-header">
                <Link className="navbar-brand" href="/" aria-label="nav-brands"><Image src={img} alt="logo" /></Link>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-flex justify-content-center">
                <ul className="navbar-nav custom-navbar-nav mb-2 mb-lg-0">
                    {
                        menuList.map(({ id, isDropdown, name, path }) => {
                            return (
                                <li key={id} className={`nav-item ${isDropdown && "dropdown offcanvas-pages-dropdown"} `}>
                                    <Link className={`nav-link ${isDropdown && "dropdown-toggle"} `} href={path} aria-label="nav-links" data-bs-toggle={`${isDropdown && "dropdown"}`}>{name}</Link>
                                    {
                                        isDropdown &&
                                        <ul className="dropdown-menu">
                                            {
                                                isDropdown.map(({ id, name, path }) => <li key={id}><Link className="dropdown-item" href={path} target="_blank" aria-label="single-pages">{name}</Link></li>)
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
    )
}

export default NavbarOffcanvas