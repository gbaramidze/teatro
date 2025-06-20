import connectToDatabase from '@/lib/mongodb';
import TempTicket from '@/models/TempTicket';
import Event from '@/models/Event';
import {NextResponse} from "next/server";
import fetch from 'node-fetch'
import Signature from '@/lib/Signature';

export async function POST(req) {
  try {
    await connectToDatabase();

    const body = await req.json();

    if (!body.eventId || !body.tableId) {
      return new Response(
        JSON.stringify({success: false, error: 'eventId and tableId are required'}),
        {status: 400}
      );
    }

    const tempTicket = await TempTicket.create({
      eventId: body.eventId,
      tableId: body.tableId,
      seat: body.seat,
      tickets: body.tickets,
      price: body.totalPrice,
      guestName: body.firstName,
      guestPhone: body.phone,
      guestEmail: body.email,
    });

    const event = await Event.findById(body.eventId)


    const orderId = tempTicket._id.toString();
    const amount = body.totalPrice * 100;
    // const serverCallbackUrl = `https://teatro.ge/api/checkout/${orderId}`;
    const responseUrl = `https://teatro.ge/api/checkout/${orderId}`;
    const message = `Buying ${body.tickets} ticket(s) on the event ${event.title} at Teatro.ge`

    const merchantId = '4054076';
    const secret = 'KopcGOSTBF8TLGcgurXPfhyasHUKGhvL';

    // const merchantId = '1549901';
    // const secret = 'test'

    Signature.setPassword(secret);
    Signature.setMerchant(merchantId);


    const data = {
      version: "1.0.1",
      order_id: orderId,
      currency: 'GEL',
      merchant_id: Number(merchantId),
      order_desc: message,
      amount,
      response_url: responseUrl,
      lifetime: 300,
    };
    const {signature} = Signature.sign(data)

    const payload = {
      request: {
        ...data,
        signature
      }
    }


    const resp = await fetch('https://pay.flitt.com/api/checkout/url', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload),
    });

    const json = await resp.json();

    if (json.response?.checkout_url) {
      return NextResponse.json({checkoutUrl: json.response.checkout_url});
    } else {
      await TempTicket.findByIdAndDelete(orderId);
      return NextResponse.json({error: json}, {status: 500});
    }
  } catch (err) {
    console.error('Error saving temp ticket:', err);
    return new Response(JSON.stringify({success: false, error: 'Internal Server Error'}), {
      status: 500,
    });
  }
}
