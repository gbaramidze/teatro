"use client";

import React, { useState } from "react";
import {Modal, Button, Row, Col} from "react-bootstrap";
import "./styles.css";
import {BiCalendar, BiFemale, BiMale, BiMinus, BiPlus} from "react-icons/bi";
import Image from "next/image";
import {AiFillCreditCard} from "react-icons/ai";

const TicketBookingForm = ({ event, ticketType, show, onClose }) => {
  const [femaleTickets, setFemaleTickets] = useState(0);
  const [maleTickets, setMaleTickets] = useState(0);
  const baseFemalePrice = 50;
  const baseMalePrice = 100;
  const priceMultiplier = ticketType === "VIP" ? 1.5 : 1;
  const femalePrice = baseFemalePrice * priceMultiplier;
  const malePrice = baseMalePrice * priceMultiplier;

  const handleFemaleIncrement = () => setFemaleTickets(femaleTickets + 1);
  const handleFemaleDecrement = () => setFemaleTickets(Math.max(0, femaleTickets - 1));
  const handleMaleIncrement = () => setMaleTickets(maleTickets + 1);
  const handleMaleDecrement = () => setMaleTickets(Math.max(0, maleTickets - 1));

  const totalPrice = femaleTickets * femalePrice + maleTickets * malePrice;

  return (
    <>
    <Modal
      show={show}
      onHide={onClose}
      // centered
      // dialogClassName="modal-dark"
      fullscreen={"sm-down"}
    >
      {show ? (<>
      <Modal.Header closeButton className="bg-dark border-0 pb-0">
        <Modal.Title className="text-white"><p className="card-text">
          <BiCalendar style={{marginRight: 5}} />
          {event.date}
        </p></Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">

          <div className={"section mb-4"}>
            Attention! By buying the tickets you agree to the terms of the event and confirm that you are aware of the rules and regulations. <br /><br />
            Buying tickets does not guarantee to join the event, it is necessary to fit the requirements of the "Teatro"
          </div>

          <div className="ticket-card-modal">
            <Row className={"mb-4"}>
              <Col sm={6} xs={6}>
                <h2 className="title display-3 fw-extra-bold d-flex flex-column"   style={{maxHeight: 45}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="gradient-subtitle2" style={{height: 70, fontSize: 33, marginTop: -15}}>
                    <defs>
                      <linearGradient id="gradient-subtitle" y1="0" y2="1">
                        <stop stopColor="var(--bs-primary)" offset="0" />
                        <stop stopColor="var(--bs-secondary)" offset="1" />
                      </linearGradient>
                    </defs>
                    <g>
                      <text id="text" y="50" strokeWidth="1.5" stroke="url(#gradient-subtitle)" fill="none">{event.title}</text>
                    </g>
                  </svg>
                </h2>
                <Image src={event.image} alt={event.title} width={150} height={150} style={{objectFit: 'cover', alignItems: 'center', borderRadius: 20}}/>
              </Col>
              <Col  sm={6}  xs={6}>
                <div className="mb-4 mt-4">
                  <div className="icon-label mb-2">
                    <i className="bi bi-person-standing-dress fs-4"></i>
                    <span><BiFemale size={24}/> Female - {femalePrice} ₾</span>
                  </div>
                  <div className="ticket-counter">
                    <Button className="btn  p-0" onClick={handleFemaleDecrement}>
                      <BiMinus />
                    </Button>
                    <span>{femaleTickets}</span>
                    <Button className="btn  p-0" onClick={handleFemaleIncrement}>
                      <BiPlus />
                    </Button>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="icon-label mb-2">
                    <i className="bi bi-person-standing fs-4"></i>
                    <span><BiMale size={24}/> Male - {malePrice} ₾</span>
                  </div>
                  <div className="ticket-counter">
                    <Button  className=" p-0" onClick={handleMaleDecrement}>
                      <BiMinus />
                    </Button>
                    <span>{maleTickets}</span>
                    <Button className="btn  p-0" onClick={handleMaleIncrement}>
                      <BiPlus />
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>


            <div className="total-section mb-4">
              {totalPrice} ₾
            </div>

            <div className="d-flex gap-2">
              <Button
                variant={"primary"}
                onClick={() => {
                  if (femaleTickets === 0 && maleTickets === 0) {
                    alert("Пожалуйста, выберите хотя бы один билет.");
                    return;
                  }
                  alert(`Забронировано на ${event.date} для ${event.title} (${ticketType}): ${femaleTickets} билетов для женщин, ${maleTickets} билетов для мужчин. Итого: ${totalPrice} ₾`);
                }}
                style={{width: "60%"}}
              >
                <AiFillCreditCard /> Checkout
              </Button>
              <Button
                className="btn w-30"
                variant={"outline-primary"}
                onClick={onClose}
              >
                Cancel
              </Button>
            </div>
          </div>
      </Modal.Body>
      </>) : null}
    </Modal>
    </>
  );
};

export default TicketBookingForm;