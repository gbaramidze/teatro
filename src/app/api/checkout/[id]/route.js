import connectToDatabase from '@/lib/mongodb';
import Event from '@/models/Event';
import Ticket from '@/models/Ticket';
import TempTicket from '@/models/TempTicket';
import EntryTicket from '@/models/EntryTicket';
import Payment from '@/models/Payment';
import {NextResponse} from "next/server";

async function eventStats(id) {
  const event = await Event.findById(id);

  const soldResult = await Ticket.aggregate([
    {$match: {eventId: event._id}},
    {$group: {_id: null, totalSold: {$sum: "$quantity"}}}
  ]);
  const sold = soldResult[0]?.totalSold || 0;

  const totalSeats = event.seatingOverrides.reduce((acc, item) => {
    acc.seats += (item.seatCount || 0) + (item.standingCount || 0);
    acc.deposit += item.price || 0;
    return acc;
  }, {seats: 0, deposit: 0});

  return {
    totalSeats: totalSeats.seats,
    totalDeposit: totalSeats.deposit,
    sold,
    percentSold: Math.round((sold * 100) / totalSeats.seats),
  };
}

export async function POST(req, {params}) {
  await connectToDatabase();
  const {id: order_id} = params;

  const temp = await TempTicket.findById(order_id).lean();
  if (!temp || temp.status !== 'pending') {
    return new Response(JSON.stringify({error: 'Временный билет не найден или уже оплачен'}), {status: 404});
  }

  const {
    eventId,
    tableId,
    tickets,
    seat,
    price,
    guestName,
    guestPhone,
    guestEmail
  } = temp;

  const event = await Event.findById(eventId).lean();
  if (!event) return new Response(JSON.stringify({error: 'Событие не найдено'}), {status: 404});


  const seating = event.seatingOverrides.find(s => s._id.toString() === tableId);
  if (!seating) return new Response(JSON.stringify({error: 'Стол не найден'}), {status: 400});

  try {
    const bodyText = await req.text();
    const body = Object.fromEntries(new URLSearchParams(bodyText));

    const {
      order_status,
      response_status,
      amount,
      sender_email,
    } = body;

    if (order_status !== 'approved' || response_status !== 'success') {
      return new Response(JSON.stringify({error: 'Платёж не прошёл'}), {status: 400});
    }

    const finalQuantity = seating.seatCount || tickets || 1;

    const ticket = await Ticket.create({
      eventId,
      fullName: guestName,
      email: guestEmail || sender_email,
      phone: guestPhone,
      comment: '',
      quantity: finalQuantity,
      tableId,
      type: 'table',
    });

    const entryTickets = Array.from({length: finalQuantity}, () => ({
      eventId,
      orderId: ticket._id,
      checkedIn: false,
      createdAt: new Date(),
    }));

    await EntryTicket.insertMany(entryTickets);

    await Event.updateOne(
      {_id: eventId, 'seatingOverrides.tableId': tableId},
      {$set: {'seatingOverrides.$.sold': true}}
    );

    await Payment.create({
      eventId,
      total: price,
      paymentType: 'terminal_tbc',
      price,
      payer: {
        fullName: guestName,
        email: guestEmail || sender_email,
        phone: guestPhone,
      },
      details: {
        quantity: finalQuantity,
        seats: seating.seatCount || 1,
      },
    });

    // await checkEventToSwitchPrice(eventId);
    const stats = await eventStats(eventId);

    const escapeMarkdownV2 = (text) => {
      const specialChars = ['_', '*', '[', ']', '(', ')', '~', '`', '>', '#', '+', '-', '=', '|', '{', '}', '.', '!'];
      const pattern = new RegExp(`([${specialChars.map(c => '\\' + c).join('')}])`, 'g');
      return text.replace(pattern, '\\$1');
    };

    const message = `
🎟 *Новая покупка билета (Webhook)*
*Клиент:* ${escapeMarkdownV2(guestName)}
*Телефон:* ${escapeMarkdownV2(guestPhone || '—')}
*Email:* ${escapeMarkdownV2(guestEmail || sender_email || '—')}
*Кол-во мест:* ${finalQuantity}
*Сумма:* ${price} ₾
*Оплата:* Картой
*Мероприятие:* ${escapeMarkdownV2(event.title)}
*Место:* Стол ${seating.label} (${seating.floor} этаж, ${seating.seatCount} мест)
*Продано всего:* ${stats.sold}/${stats.totalSeats}
`;

    // await bot.sendMessage(process.env.CHAT_ID, message, {
    //   parse_mode: 'Markdown',
    // });

    temp.status = 'paid';
    await temp.save();

    const redirectUrl = `https://teatro.ge/ticket/${order_id}`;

    return NextResponse.redirect(redirectUrl, 302);

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({error: 'Ошибка на сервере'}), {status: 500});
  }
}
