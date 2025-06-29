import React from 'react'
import AboutFour from "@/components/about/AboutFour";
import SubscriptionOne from "@/components/subscriptions/SubscriptionOne";
import connectToDatabase from "@/lib/mongodb";
import Event from "@/models/Event";
import PageHeader from "@/components/common/PageHeader";
import HighlightThree from "@/components/highlights/HighlightThree";
import {getLocale, getTranslations} from "next-intl/server";
import DateSwiper from "@/app/[locale]/event/[id]/components/xz";

export async function generateMetadata() {
  const t = await getTranslations('events.meta');
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: t('url'),
      siteName: t('siteName'),
      images: [
        {
          url: 'https://teatro.ge/banner.jpg',
          width: 1800,
          height: 1201,
          alt: t('title'),
        },
      ],
      type: 'website',
      locale: t('openGraph.locale'),
    },
  }
}

const Venue = async () => {
  const t = await getTranslations('navigation');
  await connectToDatabase();
  const events = await Event.find({visible: true}).sort({date: 1}).lean();
  const locale = await getLocale();
  return (
    <>
      <PageHeader currentPage={(t('events'))} banner={"banner-1 banner-2"}/>
      <DateSwiper mainEvents={events.map(event => ({
        ...event,
        description: locale === 'ka' ? event['description_ka'] : locale === 'ru' ? event['description_ru'] : event['description'],
      }))}/>

      <AboutFour events={events.map(event => ({
        ...event,
        description: locale === 'ka' ? event['description_ka'] : locale === 'ru' ? event['description_ru'] : event['description'],
      }))}/>
      <HighlightThree/>
      <SubscriptionOne styleNum={0}/>
    </>
  )
}

export default Venue