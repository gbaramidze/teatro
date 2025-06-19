import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req) {
  const {
    orderId,
    amount,
    serverCallbackUrl = `https://teatro.ge/api/checkout/${orderId}`,
    responseUrl = `https://teatro.ge/checkout/${orderId}`,
  } = await req.json();

  const merchantId = process.env.FLITT_MERCHANT_ID;
  const secret = process.env.FLITT_SECRET;

  // Формируем подпись: SHA1(order_id + merchant_id + amount + secret)
  const signature = crypto
    .createHash('sha1')
    .update(orderId + merchantId + amount + secret)
    .digest('hex');

  const payload = {
    request: {
      server_callback_url: serverCallbackUrl,
      order_id: orderId,
      currency: 'GEL',
      merchant_id: Number(merchantId),
      payment_system: 'opb',
      payment_method: 'tbc',
      order_desc: `Оплата заказа ${orderId}`,
      amount: Math.round(amount * 100), // копейки
      response_url: responseUrl,
      signature,
    }
  };

  const resp = await fetch('https://pay.flitt.dev/api/checkout/url', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const json = await resp.json();

  if (json.response?.checkout_url) {
    return NextResponse.json({ checkoutUrl: json.response.checkout_url });
  } else {
    return NextResponse.json({ error: json }, { status: 500 });
  }
}
