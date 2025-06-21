'use client';

import React, {useState} from 'react';
import {Button, FloatingLabel, Form, Modal} from 'react-bootstrap';
import NumberFormat from "@/lib/NumberFormat";
import {useTranslations} from "next-intl";

export default function CheckoutModal({show, handleClose, handleSubmit, isMobile, label, loading}) {
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
  });
  const [agreement, setAgreement] = useState(false);
  const t = useTranslations('checkout');

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
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));

    // Clear error while typing
    if (errors[name]) {
      setErrors((prev) => ({...prev, [name]: null}));
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
        <Modal.Title>{t("Checkout")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate>
          <FloatingLabel controlId="formFirstName" label={t("Full Name")} className="mb-3">
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={onChange}
              isInvalid={!!errors.firstName}
              required
              autoFocus
            />
            <Form.Control.Feedback type="invalid">{t("Name Required")}</Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel controlId="phone" label={t("Phone")} className="mb-3">
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              onChange={onChange}
            />
          </FloatingLabel>

          <FloatingLabel controlId="email" label={t("Email")} className="mb-3">
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              isInvalid={!!errors.email}
              required
            />
            <Form.Control.Feedback type="invalid">{t("Invalid Email")}</Form.Control.Feedback>
          </FloatingLabel>
        </Form>

        <div className={"ticket-message"}>
          {t("Agreement Message")}{" "}
          <Button variant="link" onClick={() => setAgreement(true)} style={{margin: 0, padding: 0}}>
            {t("Terms Button")}
          </Button>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn btn-gradient"
          variant="primary"
          onClick={onSubmit}
          disabled={loading}
          style={{
            width: isMobile ? '100%' : 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 222
          }}
        >

          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 5
          }}>

            <div style={{fontSize: 18}}>
              {NumberFormat(label)} ₾
            </div>

            <div style={{fontSize: 14, fontWeight: 'normal'}}>
              {t("Pay Now")}
            </div>

          </div>


        </Button>
      </Modal.Footer>


      <Modal show={agreement} onHide={() => setAgreement(false)} dialogClassName={"modal-dialog-centered"}>
        <Modal.Header closeButton>
          <Modal.Title>{t("Terms Title")}</Modal.Title>

        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>{t("Term1")}</li>
            <li>{t("Term2")}</li>
            <li>{t("Term3")}</li>
            <li>{t("Term4")}</li>
            <li>{t("Term5")}</li>
            <li>{t("Term6")}</li>
          </ul>
        </Modal.Body>
      </Modal>
    </Modal>
  );
}
