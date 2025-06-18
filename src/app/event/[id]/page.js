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

export default async function EventPage({ params }) {
  const { id } = params;

  await connectToDatabase();
  const event = await Event.findById(id).lean();

  if (!event) return notFound();

  return (
    <>
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
