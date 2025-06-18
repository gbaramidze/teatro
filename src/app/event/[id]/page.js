import Event from '@/models/Event';
import connectToDatabase from "@/lib/mongodb";
import { notFound } from 'next/navigation';
import PageHeader from "@/components/common/PageHeader";
import React from "react";
import {Col, Row, Container, Button} from "react-bootstrap";
import dayjs from "dayjs";
import TicketIcon from "@/components/common/icons/TicketIcon";
import {MdOutlineTableRestaurant} from "react-icons/md";
import dynamic from "next/dynamic";
import SellTicketActions from "./components/SellTicketActions";
const Share = dynamic(() => import('./Share'), {
  ssr: false,
});

export async function generateMetadata({ params }) {
  const { id } = params;
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

export default async function EventPage({ params }) {
  const { id } = params;

  await connectToDatabase();
  const event = await Event.findById(id).lean();

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <PageHeader currentPage={event.title} isBlogDetails={"Events"} banner={"banner-1 banner-2"} />
      <Container className={"mt-5"}>
        <Row>
          <Col xs={12} md={4}>
            <img src={event.image} alt={event.title} width={'100%'} style={{ borderRadius: 20}}/>
          </Col>
          <Col className="mt-md-0 mt-4">
            <h1>{event.title}</h1>
            <date>
              <h3 className="text-muted">
                {dayjs(event.date).format("dddd DD MMMM, YYYY")}{" "}
              </h3>
            </date>
            <article>{event.description}</article>
            <SellTicketActions event={event}/>
            <div style={{ borderBottom: '1px solid #222', margin: '20px 0' }} />
            <Share id={id} title={event.title}/>
          </Col>
        </Row>

      </Container>
    </>
  );
}
