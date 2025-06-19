"use client";

import React, {useState} from "react";
import useSWR from "swr";
import {redirect} from "@/i18n/routing";


const LoadingPayment = () => {
  return (
    <div>
      <dotlottie-player
        src="https://lottie.host/16d2bc14-4154-45e9-b944-566c1d4a1620/D9qcgOq3Ya.lottie"
        background="#04000A"
        speed="1"
        style={{width: "80px", height: "80px"}}
        direction="1"
        mode="normal"
        loop
        autoplay>
      </dotlottie-player>
      <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
    </div>
  )
}
const CheckStatus = ({ticketId}) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null); // null | 'success' | 'error'
  const { data, isLoading } = useSWR(`/api/checkout/status/${ticketId}`, (url) => fetch(url).then(res => res.json()));
  console.log(data)
  // if(data.data.statusCode === 404) {
  //   redirect('/')
  // }

  //
  // useEffect(() => {
  //   // if (!id || !status) return;
  //
  //   // const confirmPayment = async () => {
  //   //   try {
  //   //     const res = await fetch(`/api/checkout/callback/${id}?status=${status}`);
  //   //     if (res.ok) {
  //   //       setResult('success');
  //   //     } else {
  //   //       setResult('error');
  //   //     }
  //   //   } catch (err) {
  //   //     console.error(err);
  //   //     setResult('error');
  //   //   } finally {
  //   //     setLoading(false);
  //   //   }
  //   // };
  //   //
  //   // confirmPayment();
  // }, [id, status]);

  console.log(data, isLoading)

  return (
      <>
        {
          loading ? (
            <div className="text-center py-20">
              <h1 className="text-2xl font-semibold" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <LoadingPayment />
                Contacting to bank...</h1>
            </div>
          ) : (
            <div className="text-center py-20">
              {result === 'success' ? (
                <>
                  <h1 className="text-3xl font-bold text-green-600">✅ Оплата прошла успешно!</h1>
                  <p className="mt-4 text-lg">Ваш билет будет отправлен вам на почту или выдан на месте.</p>
                </>
              ) : (
                <>
                  <h1 className="text-3xl font-bold text-red-600">❌ Оплата не удалась</h1>
                  <p className="mt-4 text-lg">Пожалуйста, попробуйте снова или свяжитесь с поддержкой.</p>
                </>
              )}
            </div>
          )}
      </>
  )
}

export default CheckStatus;