import React from 'react'
import PageHeader from '@/components/common/PageHeader'
import About1 from '@/components/about/AboutOne'

import Ticket1 from '@/components/tickets/TicketTwo'
import Direction from '@/components/direction/Direction'
import Contact from '@/components/contact/Contact'

export const metadata = {
    title: 'Teatro next.js - Contact-us',
    description: 'Teatro next.js multipage webdite with next.js and bootstrap',
}
const ContactUs = () => {
    return (
        <>
            <PageHeader currentPage={"Contact us"} banner={"banner-1 banner-2"} />
            <Ticket1 />
            <Direction styleNum={0} />
        </>
    )
}

export default ContactUs