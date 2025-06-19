"use client";
import {Badge, Button, Col, Row} from "react-bootstrap";
import TicketIcon from "@/components/common/icons/TicketIcon";
import {MdOutlineTableRestaurant} from "react-icons/md";
import React, {useEffect, useState} from "react";
import ResponsiveModal from "@/components/ResponsiveModal";
import { Modal } from 'react-bootstrap';
import {BiCalendar, BiCreditCard, BiFemale, BiMale, BiMinus, BiPlus} from "react-icons/bi";
import Image from "next/image";
import {AiFillCreditCard} from "react-icons/ai";
import dayjs from "dayjs";
import {BsTicket} from "react-icons/bs";
import HallModal from "@/components/Hall";
import "./style.css"
import {useCheckout} from "../hooks/useCheckout";
import NumberFormat from "@/lib/NumberFormat";
import {useSearchParams} from "next/navigation";
import {useTranslations} from "next-intl";

const SellTicketActions = ({event}) => {
  const params = useSearchParams();
  const ticketsEnabled = params.get('enabled') === 'true';
  const {title, date, image, activePrice} = event;
  const [ticketModal, setTicketModal] = React.useState(false);
  const [count, setCount] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [showHall, setShowHall] = useState(false);
  const [modal, checkout] = useCheckout(isMobile);
  const t = useTranslations('event');

  const standingTableId = event.seatingOverrides.find((seat) => seat.seatCount > 0)?.tableId || null;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const totalPrice = count * activePrice;

  const handleCheckout = async () => {
    const ticketInfo = {
      eventId: event._id,
      eventTitle: title,
      eventDate: date,
      tableId: standingTableId,
      seat: 'standing',
      totalPrice,
      tickets: count
    }

    checkout.open(ticketInfo)
  }

  const handleSelectTable = (table) => {
    const ticketInfo = {
      eventId: event._id,
      eventTitle: title,
      eventDate: date,
      tableId: table._id,
      seat: 'table',
      totalPrice: table.price + (activePrice * table.seatCount),
      tickets: table.seatCount,
    }

    checkout.open(ticketInfo);
  }
  return (
    <>
      {modal}
      {ticketsEnabled ? <div className="mt-4 eventButtons">
        <Button variant="outline-primary" onClick={() => setTicketModal(true)}>
          <TicketIcon/> Buy Ticket
        </Button>
        <Button variant="outline-primary" onClick={() => setShowHall(true)}>
          <MdOutlineTableRestaurant size={24} className={'pr-2'}/> <span className={"ml-2"}>Book a table</span>
        </Button>
      </div> : (
        <div className={'mt-4 text-muted border rounded p-2 pb-0 pt-3'}>
          <p className="text-center">
            <TicketIcon size={24} className={'mr-2'}/> {t('tickets_not_available')}
          </p>
        </div>
      )}

      <HallModal show={showHall} onHide={() => setShowHall(false)} isMobile={isMobile} eventId={event._id} onHandleSubmit={handleSelectTable}/>

      <ResponsiveModal show={ticketModal} onHide={() => setTicketModal(false)} isMobile={isMobile}>
          <>
            {modal ? (
              <>
                <Modal.Header closeButton className="bg-dark border-0 pb-0">
                  <Modal.Title className="text-white"><p className="card-text">
                    <BiCalendar style={{marginRight: 5}} />
                    {new dayjs(date).format('dddd DD MMMM, YYYY')}
                  </p></Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark">

                  <div className="ticket-card-modal">
                    <Row className={"mb-4"} style={{ alignItems: 'center'}}>
                      <Col sm={9} xs={12}>
                        <div style={{display: 'flex', gap: 12, alignItems: 'center', background: '#222', padding: 12, borderRadius: 32}}>
                          <div style={{background: '#444', marginRight: 12, borderRadius: '50%', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', flexBasis: 60}}>
                            <BsTicket size={25}/>
                          </div>
                          <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div>
                              Standard ticket {activePrice === event.bucket1Price && <Badge bg="success">Early bird</Badge>}
                            </div>
                            <div>
                              {activePrice} ₾
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col  sm={3}  xs={12}>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <div className="ticket-counter">
                            <Button  className=" p-0" onClick={() => setCount(v => v - 1)} disabled={count === 1}>
                              <BiMinus />
                            </Button>
                            <span>{count}</span>
                            <Button className="btn  p-0" onClick={() => setCount(v => v + 1)} disabled={count === 10}>
                              <BiPlus />
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className={"ticket-actions"}>

                      <div className="d-flex gap-2 justify-content-end ticket-buttons">
                        <Button
                          className="btn btn-gradient"
                          variant="primary"
                          onClick={handleCheckout}
                          style={{ width: isMobile ? '100%' : 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16}}
                        >
                              {NumberFormat(totalPrice)} ₾ Next
                        </Button>
                      </div>
                    </div>
                  </div>
                </Modal.Body>


              </>
            ) : modal}
          </>
      </ResponsiveModal>
    </>
  )
}

export default SellTicketActions;