import React from 'react'
import AboutFour from "@/components/about/AboutFour";
import SubscriptionOne from "@/components/subscriptions/SubscriptionOne";
import connectToDatabase from "@/lib/mongodb";
import Event from "@/models/Event";
import PageHeader from "@/components/common/PageHeader";
import HighlightThree from "@/components/highlights/HighlightThree";
import {getTranslations} from "next-intl/server";

export const metadata = {
    title: 'Event calendar - Teatro',
    description: 'Teatro is a Lounge and Nightclub in Batumi, Georgia. Experience the best of live music, DJ performances, and unforgettable events in a vibrant atmosphere. Join us for an extraordinary nightlife experience!',
}

const Venue = async () => {
  const t = await getTranslations('navigation');
  await connectToDatabase();
  const events = await Event.find().lean();
    return (
        <>
            <PageHeader currentPage={(t('events'))} banner={"banner-1 banner-2"}/>
            <AboutFour events={events} />
            <HighlightThree />
            <SubscriptionOne styleNum={0} />
        </>
    )
}

export default Venue