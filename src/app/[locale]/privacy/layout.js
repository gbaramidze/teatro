import React from 'react'
import NavbarSix from '@/components/common/navbars/NavbarSix'
import FooterThree from '@/components/common/footers/FooterThree'
import NavbarOne from "@/components/common/navbars/NavbarOne";
import FooterOne from "@/components/common/footers/FooterOne";

const Layout = ({ children }) => {
    return (
        <>
          <NavbarOne />
            {children}
          <FooterOne />
        </>
    )
}

export default Layout