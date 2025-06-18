import { useState, useCallback } from 'react';
import CheckoutModal from '../components/CheckoutForm';

export function useCheckout(isMobile) {
  const [show, setShow] = useState(false);
  const [checkoutData, setCheckoutData] = useState({});

  const open = useCallback((data = {}) => {
    setCheckoutData(data);
    setShow(true);
  }, []);

  const close = useCallback(() => {
    setShow(false);
  }, []);

  const modal = (
    <CheckoutModal
      show={show}
      handleClose={close}
      handleSubmit={(form) => {
        console.log('Form Submitted:', form);
        console.log('Ticket Info:', checkoutData);
        // отправка данных на сервер, объединяя form + checkoutData
        close();
      }}
      isMobile={isMobile}
      label={checkoutData?.totalPrice || 0}
    />
  );

  return [modal, { open, close }];
}
