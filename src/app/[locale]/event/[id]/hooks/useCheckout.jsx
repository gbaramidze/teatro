import { useState, useCallback } from 'react';
import CheckoutModal from '../components/CheckoutForm';

export function useCheckout(isMobile) {
  const [show, setShow] = useState(false);
  const [checkoutData, setCheckoutData] = useState({});
  const [loading, setLoading] = useState(false);

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
      loading={loading}
      handleSubmit={(form) => {
        setLoading(true)
        fetch('/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...form, ...checkoutData }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.checkoutUrl) {
              window.location = data.checkoutUrl
            }
            setLoading(false);
            close();
          })
          .catch((error) => {
            alert(`Something went wrong while processing your payment, please try again later.`);
          });
        // отправка данных на сервер, объединяя form + checkoutData
      }}
      isMobile={isMobile}
      label={checkoutData?.totalPrice || 0}
    />
  );

  return [modal, { open, close }];
}
