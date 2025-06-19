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

        fetch('/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...form, ...checkoutData }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        console.log('Form submitted:', {...form, ...checkoutData});
        // отправка данных на сервер, объединяя form + checkoutData
        close();
      }}
      isMobile={isMobile}
      label={checkoutData?.totalPrice || 0}
    />
  );

  return [modal, { open, close }];
}
