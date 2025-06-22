import connectToDatabase from "@/lib/mongodb";
import {getLocale} from "next-intl/server";
import Event from "@/models/Event";
import {NextResponse} from "next/server";
import dayjs from "dayjs";
import Ticket from "@/models/Ticket";

export async function GET(req) {
  const {searchParams} = new URL(req.url);
  const id = searchParams.get('id'); // получаем ?id=..
  if (!id) {
    return NextResponse.json({error: 'Event ID is required'});
  }
  await connectToDatabase();
  const locale = await getLocale();
  const ticket = await Ticket.findById(id).lean();
  if (!ticket) {
    return NextResponse.json({error: 'Ticket not found', ticketId: id});
  }

  const event = await Event.findOne(ticket.eventId).lean();
  if (!event) {
    return NextResponse.json({error: 'Event not found', eventId: id});
  }
  const dtStart = dayjs(event.date).subtract(8, 'hour').format('YYYYMMDDTHHmmss') + 'Z';
  const dtEnd = dayjs(event.date).add(1, 'day').subtract(2, 'hour').format('YYYYMMDDTHHmmss') + 'Z';
  const summary = event.title;
  const description = locale === 'ru' ? event["description_ru"] : locale === 'ka' ? event["description_ka"] : event.description;
  const location = "TEATRO, 5b Lech and Maria Kaczynski St, Batumi 6000, Georgia";
  const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY: ${summary}
DESCRIPTION: Tickets: https://teatro.ge/ticket/${id}\\n\\n${description}\\n\\n\\n-----------------------------\\nDirection: https://maps.app.goo.gl/9nJVBcQgHZ3cggTMA\\nhttps://teatro.ge\\n+(995) 598 25 44 44
DTSTART:${dtStart}
DTEND:${dtEnd}
LOCATION: ${location}
END:VEVENT
END:VCALENDAR
  `.trim();

  return new Response(icsContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/calendar',
      'Content-Disposition': `attachment; filename=event-${summary.replace(/ /g, '_')}.ics`,
    },
  });
}
