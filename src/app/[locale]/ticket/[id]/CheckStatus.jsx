"use client";

import React, {useState} from "react";
import useSWR from "swr";
import {useSearchParams} from "next/navigation";
import EntryTicket from "@/components/EntryTicket";


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
      <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
              type="module"></script>
    </div>
  )
}
const SuccessPayment = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <dotlottie-player
        src="https://lottie.host/2c25aa9a-20a8-4f8b-a91d-d7a27b2fdf03/9bhwelPsx9.lottie"
        background="#04000A"
        speed="1"
        style={{width: "143px", height: "143px"}}
        playbackRate="1"
        autoplay>
      </dotlottie-player>
      <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
              type="module"></script>
    </div>
  )
}
const CheckStatus = ({ticketId}) => {
  const params = useSearchParams()
  const [loading, setLoading] = useState(true);
  const {data, isLoading} = useSWR(`/api/checkout/status/${ticketId}`, (url) => fetch(url).then(res => res.json()));

  const isSuccess = data?.tickets.length > 0;

  return (
    <>
      {
        isLoading ? (
          <div className="text-center py-20">
            <h1 className="text-2xl font-semibold"
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <LoadingPayment/>
              Contacting to bank...</h1>
          </div>
        ) : (
          <div className="text-center">
            {isSuccess ? (
              <>
                <div className='text-center'><SuccessPayment/></div>
                <h1 className="text-3xl font-bold text-green-600">Payment successful!</h1>
                <p className="mt-4 text-lg">A copy of your tickets has been sent to your email. Enjoy the event!</p>
                <p>
                  Bellow you'll find your tickets.
                </p>
                <p>
                  {
                    data.tickets.map((ticketInfo, index) => (
                      <div key={ticketInfo._id} className={"mt-2 mb-2"}>
                        <EntryTicket ticket={{
                          ...ticketInfo,
                          fullName: data.fullName,
                          number: `${index + 1}/${data.tickets.length}`,
                          table: data.table
                        }} event={data.event}/>
                      </div>
                    ))
                  }
                </p>
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