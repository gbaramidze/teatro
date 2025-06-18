"use client";
import {Button, Col, Row} from "react-bootstrap";
import TicketIcon from "@/components/common/icons/TicketIcon";
import {MdOutlineTableRestaurant} from "react-icons/md";
import React, {useEffect, useState} from "react";
import ResponsiveModal from "@/components/ResponsiveModal";
import { Modal } from 'react-bootstrap';
import {BiCalendar, BiFemale, BiMale, BiMinus, BiPlus} from "react-icons/bi";
import Image from "next/image";
import {AiFillCreditCard} from "react-icons/ai";
import dayjs from "dayjs";
import {BsTicket} from "react-icons/bs";
import HallModal from "@/components/Hall";
import "./style.css"

const SellTicketActions = ({event}) => {
  const {title, date, image, activePrice} = event;
  const [ticketModal, setTicketModal] = React.useState(false);
  const [count, setCount] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [showHall, setShowHall] = useState(false);
  const [agreement, setAgreement] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const totalPrice = count * activePrice;
  return (
    <>
      <div className="mt-4 eventButtons">
        <Button variant="outline-primary" onClick={() => setTicketModal(true)}>
          <TicketIcon /> Buy Ticket
        </Button>
        <Button variant="outline-primary" onClick={() => setShowHall(true)}>
          <MdOutlineTableRestaurant size={24} className={'pr-2'}/> <span className={"ml-2"}>Book a table</span>
        </Button>
      </div>

      <HallModal show={showHall} onHide={() => setShowHall(false)} isMobile={isMobile} eventId={event._id} />

      <ResponsiveModal show={ticketModal} onHide={() => setTicketModal(false)} isMobile={isMobile}>
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
                        Standard ticket
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
                      <Button className="btn  p-0" onClick={() => setCount(v => v + 1)}>
                        <BiPlus />
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className={"ticket-actions"}>
                <div className={"ticket-message"}>
                  By purchasing a ticket, you agree to our <Button variant="link" onClick={() => setAgreement(true)} style={{ margin: 0, padding: 0}}>terms and conditions</Button>
                </div>
                <div className="d-flex gap-2 justify-content-end ticket-buttons">
                  <Button
                    variant={"primary"}
                    size="sm"
                    style={{width: isMobile ? '100%' : 'auto'}}
                  >
                    {totalPrice} ₾ Buy now
                  </Button>
                </div>
              </div>
            </div>
          </Modal.Body>

        <Modal show={agreement} onHide={() => setAgreement(false)} dialogClassName={"modal-dialog-centered"}>
          <Modal.Header closeButton>
            <Modal.Title>
              Terms and Conditions
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              <li>Venue is strictly 21+. Valid government-issued ID can be required for entry.</li>
              <li>Face control is enforced. Management reserves the right to deny entry to maintain the venue's atmosphere and dress code.</li>
              <li>Dress code: Elegant & stylish. We are a luxury lounge and club; please dress accordingly.</li>
              <li>No refunds will be issued for denied entry due to violation of these terms.</li>
              <li>Respect the venue, staff, and fellow guests. Any inappropriate behavior may result in removal from the premises.</li>
              <li>Management reserves all rights.</li>
            </ul>
          </Modal.Body>
        </Modal>
      </ResponsiveModal>
    </>
  )
}

export default SellTicketActions;