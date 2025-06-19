'use client';

import React, { useState } from 'react';
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';
import NumberFormat from "@/lib/NumberFormat";
import {BiCreditCard} from "react-icons/bi";

export default function CheckoutModal({ show, handleClose, handleSubmit, isMobile, label, loading }) {
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
  });
  const [agreement, setAgreement] = useState(false);

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Full name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error while typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const onSubmit = () => {
    if (validate()) {
      handleSubmit(formData);
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      dialogClassName={isMobile ? 'bottom-sheet-modal' : 'modal-md modal-dialog-centered'}
      contentClassName={isMobile ? 'bottom-sheet-content' : ''}
    >
      <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate>
          <FloatingLabel controlId="formFirstName" label="Full Name" className="mb-3">
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={onChange}
              isInvalid={!!errors.firstName}
              required
              autoFocus
            />
            <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel controlId="phone" label="Phone (+995)" className="mb-3">
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              onChange={onChange}
            />
          </FloatingLabel>

          <FloatingLabel controlId="email" label="Email" className="mb-3">
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              isInvalid={!!errors.email}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </FloatingLabel>
        </Form>

        <div className={"ticket-message"}>
          By purchasing a ticket, you agree to our <Button variant="link" onClick={() => setAgreement(true)} style={{ margin: 0, padding: 0}}>terms and conditions</Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn btn-gradient"
          variant="primary"
          onClick={onSubmit}
          disabled={loading}
          style={{ width: isMobile ? '100%' : 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 222}}
        >

          <div style={{display: 'flex', flexDirection: isMobile ? 'row' : 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 5}}>

            <div style={{ fontSize: 18 }}>
              {NumberFormat(label)} ₾
            </div>

            <div style={{ fontSize: 14, fontWeight: 'normal'}}>
              Pay now
            </div>
          </div>


        </Button>
      </Modal.Footer>


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
    </Modal>
  );
}
