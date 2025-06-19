import React from 'react'
import PageHeader from '@/components/common/PageHeader'
import Ticket1 from '@/components/tickets/TicketTwo'
import Direction from '@/components/direction/Direction'
import Contact from "@/components/contact/Contact";
import AboutOne from "@/components/about/AboutOne";

export const metadata = {
    title: 'Teatro - Contact-us',
    description: 'Do not hasitate to contact us for any questions or concerns. We are here to assist you with your inquiries and provide the best possible service. Reach out to us via email, phone, or our contact form, and we will respond promptly. Your satisfaction is our priority!',
}
const ContactUs = () => {
    return (
        <>
            <PageHeader currentPage={"Contact us"} banner={"banner-1 banner-2"} />
            <AboutOne />
            <Direction styleNum={0} />
        </>
    )
}

export default ContactUs