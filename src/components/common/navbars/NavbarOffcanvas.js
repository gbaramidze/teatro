import React, {useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {usePathname} from 'next/navigation'
import {menuList} from '@/lib/menuList'
import {useLocale, useTranslations} from "next-intl";

const locales = [{name: 'English', id: 'en'}, {name: 'Русский', id: 'ru'}, {name: 'ქართული', id: 'ka'}];

const NavbarOffcanvas = ({img}) => {
  const pathName = usePathname()
  const locale = useLocale();
  // Remove offcanvas opacity background when change router
  useEffect(() => {
    const offcanvas_backdrop = document.querySelector(".offcanvas-backdrop")
    if (offcanvas_backdrop) {
      if (offcanvas_backdrop.classList.contains("show")) {
        offcanvas_backdrop.classList.remove("offcanvas-backdrop", "show")
      }
    }
  }, [pathName])
  const currentLocale = useLocale()
  const t = useTranslations('navigation');

  return (
    <div className="offcanvas offcanvas-top" id="navContentmenu" data-bs-backdrop="static" tabIndex="-1">
      <div className="offcanvas-header">
        <Link className="navbar-brand" href="/" aria-label="nav-brands"><Image src={img} alt="logo"/></Link>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
      </div>
      <div className="offcanvas-body d-flex justify-content-center">
        <ul className="navbar-nav custom-navbar-nav mb-2 mb-lg-0">
          {
            menuList.map(({id, isDropdown, name, path}) => {
              return (
                <li key={id} className={`nav-item ${isDropdown && "dropdown offcanvas-pages-dropdown"} `}>
                  <Link className={`nav-link ${isDropdown && "dropdown-toggle"} `} href={path} aria-label="nav-links"
                        data-bs-toggle={`${isDropdown && "dropdown"}`}>{t(name)}</Link>

                </li>
              )
            })
          }


        </ul>
      </div>
      <div>
        <div className="dropdown mb-3 m-3">
          <button className="btn btn-sm btn-outline-primary d-flex align-items-center gap-2 dropdown-toggle"
                  type="button" data-bs-toggle="dropdown" aria-expanded="true">
            <Image src={`/flags/${currentLocale}.svg`} alt={currentLocale} width={20} height={14}/>
            {locales.find((locale) => locale.id === currentLocale)?.name || 'Language'}
          </button>
          <ul className="dropdown-menu">
            {[{name: 'English', id: 'en'}, {name: 'Русский', id: 'ru'}, {
              name: 'ქართული',
              id: 'ka'
            }].map((locale) => (
              <li key={locale.id}>
                <Link
                  className="dropdown-item d-flex align-items-center gap-2"
                  href={pathName.replace(`/${currentLocale}`, ``)}
                  locale={locale.id}
                >
                  <Image src={`/flags/${locale.id}.svg`} alt={locale.id} width={20} height={14}/>
                  {locale.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavbarOffcanvas