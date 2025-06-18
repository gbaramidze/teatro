import React from 'react'
import PageHeader from '@/components/common/PageHeader'
import AboutOne from '@/components/about/AboutOne'
import Team from '@/components/teams/Team'
import HighlightTwo from '@/components/highlights/HighlightTwo'
import TicketTwo from '@/components/tickets/TicketTwo'
import EventCounterTwo from '@/components/common/eventCounter/EventCounterTwo'
import SponsorDark from '@/components/sponsores/SponsorDark'
import SubscriptionTwo from '@/components/subscriptions/SubscriptionTwo'
import Direction from '@/components/direction/Direction'

export const metadata = {
    title: 'Teatro next.js - About-us',
    description: 'Teatro next.js multipage webdite with next.js and bootstrap',
}
const AboutUs = () => {
    return (
        <>
            <PageHeader currentPage={"About us"} banner={"banner-1 banner-2"} />
            <AboutOne />
            <Team />
            <HighlightTwo styleNum={1} />
            <EventCounterTwo />
            <SponsorDark />
            <TicketTwo />
            <Direction styleNum={0} />
            <SubscriptionTwo styleNum={0} />
        </>
    )
}

export default AboutUs