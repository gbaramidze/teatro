import Event from '@/models/Event';
import connectToDatabase from "@/lib/mongodb";
import {notFound} from 'next/navigation';
import PageHeader from "@/components/common/PageHeader";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import 'dayjs/locale/ka';
import dynamic from "next/dynamic";
import SellTicketActions from "./components/SellTicketActions";
import {getLocale, getTranslations} from "next-intl/server";

const Share = dynamic(() => import('./Share'), {
  ssr: false,
});


export async function generateMetadata({params}) {
  const {id} = params;
  await connectToDatabase();
  const event = await Event.findById(id).lean();
  if (!event) return notFound();

  return {
    title: event.title,
    description: event.description?.slice(0, 160),
    openGraph: {
      title: event.title,
      description: event.description?.slice(0, 160),
      images: [event.image],
    },
  };
}

export default async function EventPage({params}) {
  const {id} = params;
  const locale = await getLocale();
  dayjs.locale(locale)
  await connectToDatabase();
  const event = await Event.findById(id).lean();

  const t = await getTranslations();

  if (!event) return notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    image: event.image,
    description: event.description,
    eventStatus: "https://schema.org/EventScheduled",
    startDate: `${dayjs(event.date).format("YYYY-MM-DDT00:00:00")}`,
    endDate: `${dayjs(event.date).add(1, 'day').format("YYYY-MM-DDT06:00:00")}`,
    location: {
      "@type": "place",
      "name": "Teatro",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lech and Maria kachenski street 5b",
        "addressLocality": "Batumi",
        "addressRegion": "Adjara",
        "postalCode": "6000",
        "addressCountry": "GE"
      },
    },
    offers: {
      "@type": "Offer",
      "url": "https://teatro.ge/events/" + id,
      "price": event.activePrice,
      "priceCurrency": "GEL",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-06-12T12:00"
    },
    "performer": {
      "@type": "PerformingGroup",
      "name": event.title,
    },
    "organizer": {
      "@type": "Organization",
      "name": "Teatro",
      "url": "https://teatro.ge"
    }
  }

  const description = locale === 'ka' ? event['description_ka'] : locale === 'ru' ? event['description_ru'] : event['description'];


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <PageHeader currentPage={event.title} isBlogDetails={t("navigation.events")} banner={"banner-1 banner-2"}/>
      <Container className={"mt-5"}>
        <Row>
          <Col xs={12} md={4}>
            <img src={event.image} alt={event.title} width={'100%'} style={{borderRadius: 20}}/>
          </Col>
          <Col className="mt-md-0 mt-4">
            <h1>{event.title}</h1>
            <date>
              <h3 className="text-muted">
                {dayjs(event.date).format("dddd DD MMMM, YYYY")}{" "}
              </h3>
            </date>
            <article>{description}</article>
            <SellTicketActions event={event}/>

            <div className="mt-4 text-muted text-center text-sm border rounded p-4">
              {t("EventPage.Cancel Info 1")}
              {t("EventPage.Cancel Info 2")}
            </div>

            <div style={{borderBottom: '1px solid #222', margin: '20px 0'}}/>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.2980845663624!2d41.596415755486525!3d41.62449260043808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4067850004a59ac9%3A0xa1f9725a6502abfa!2sTEATRO!5e1!3m2!1sru!2sge!4v1750539110835!5m2!1sru!2sge"
              width="100%" height="150" style={{border: 0}} allowFullScreen={false}/>
            <Share id={id} title={event.title}/>
          </Col>
        </Row>

      </Container>
    </>
  );
}
