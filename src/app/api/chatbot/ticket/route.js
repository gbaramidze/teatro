import connectToDatabase from "@/lib/mongodb";
import Ticket from "@/models/Ticket";
import EntryTicket from "@/models/EntryTicket";
import Event from "@/models/Event";
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import 'dayjs/locale/ka';

export async function GET(request) {
  const {searchParams} = new URL(request.url);
  const id = searchParams.get('id');
  const locale = searchParams.get('locale') || 'en';
  dayjs.locale(locale);

  if (!id) {
    return new Response(JSON.stringify({error: 'ID is required'}), {status: 400});
  }

  try {
    await connectToDatabase();
    const ticket = await Ticket.findById(id).lean();
    if (!ticket) {
      return new Response(JSON.stringify({error: 'Ticket not found'}), {status: 404});
    }
    const entryTickets = await EntryTicket.find({orderId: ticket._id}).lean();
    const event = await Event.findById(ticket.eventId).lean();
    console.log(ticket)
    if (!event) {
      return new Response(JSON.stringify({error: 'Event not found'}), {status: 404});
    }
    return new Response(
      JSON.stringify({
        guest: ticket.fullName,
        email: ticket.email,
        event: {
          title: event.title,
          date: dayjs(event.date).format('dddd DD MMMM, YYYY 00:00'),
        },
        tickets: entryTickets.map(t => ({
          ticketNumber: t.ticketNumber,
          type: t.type,
          qr: `https://teatro.ge/api/qr/${t.ticketNumber}`,
        })),
      }),
      {status: 200}
    );

  } catch (error) {
    return new Response(JSON.stringify({error: 'Database connection error'}), {status: 500});
  }
}