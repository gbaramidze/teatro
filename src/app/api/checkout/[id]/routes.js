import connectToDatabase from '@/lib/mongodb';
import Event from '@/models/Event';
import Ticket from '@/models/Ticket';
import TempTicket from '@/models/TempTicket';
import EntryTicket from '@/models/EntryTicket';
import Payment from '@/models/Payment';
import bot from '@/lib/telegram';
import { eventStats } from '@/lib/stats';
import { checkEventToSwitchPrice } from '@/lib/event';

export async function GET(req, { params }) {
  await connectToDatabase();

  try {
    const url = new URL(req.url);
    const status = url.searchParams.get('status');
    const id = params.id;

    if (status !== 'success') {
      return new Response(JSON.stringify({ error: 'Оплата не прошла' }), { status: 400 });
    }

    const temp = await TempTicket.findById(id);
    if (!temp || temp.status !== 'pending') {
      return new Response(JSON.stringify({ error: 'Временный билет не найден или уже обработан' }), { status: 404 });
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

    const event = await Event.findById(eventId);
    if (!event) return new Response(JSON.stringify({ error: 'Событие не найдено' }), { status: 404 });

    const seating = event.seatingOverrides.find(s => s.tableId.toString() === tableId);
    if (!seating) return new Response(JSON.stringify({ error: 'Стол не найден' }), { status: 400 });

    const finalQuantity = seating.seatCount || tickets || 1;

    const ticket = await Ticket.create({
      eventId,
      fullName: guestName,
      email: guestEmail,
      phone: guestPhone,
      comment: '',
      quantity: finalQuantity,
      tableId,
      type: 'table',
    });

    const entryTickets = Array.from({ length: finalQuantity }, () => ({
      eventId,
      orderId: ticket._id,
      checkedIn: false,
      createdAt: new Date(),
    }));

    await EntryTicket.insertMany(entryTickets);

    await Event.updateOne(
      { _id: eventId, 'seatingOverrides.tableId': tableId },
      { $set: { 'seatingOverrides.$.sold': true } }
    );

    await Payment.create({
      eventId,
      total: price,
      paymentType: 'terminal_tbc',
      price,
      payer: {
        fullName: guestName,
        email: guestEmail,
        phone: guestPhone,
      },
      details: {
        quantity: finalQuantity,
        seats: seating.seatCount || 1,
      },
    });

    await checkEventToSwitchPrice(eventId);
    const stats = await eventStats(eventId);

    function escapeMarkdownV2(text) {
      const specialChars = ['_', '*', '[', ']', '(', ')', '~', '`', '>', '#', '+', '-', '=', '|', '{', '}', '.', '!'];
      const pattern = new RegExp(`([${specialChars.map(c => '\\' + c).join('')}])`, 'g');
      return text.replace(pattern, '\\$1');
    }

    const message = `
🎟 *Новая покупка билета*
*Клиент:* ${escapeMarkdownV2(guestName)}
*Телефон:* ${escapeMarkdownV2(guestPhone || '—')}
*Email:* ${escapeMarkdownV2(guestEmail || '—')}
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

    return new Response(JSON.stringify({ success: true, ticketId: ticket._id }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Ошибка на сервере' }), { status: 500 });
  }
}
