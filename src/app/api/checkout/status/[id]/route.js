import connectToDatabase from '@/lib/mongodb';
import Ticket from '@/models/Ticket';
import EntryTicket from "@/models/EntryTicket";
import Event from "@/models/Event";

export async function GET(req, {params}) {
  await connectToDatabase();

  try {
    const tempTicket = await Ticket.findById(params.id).lean();

    if (!tempTicket) {
      return new Response(JSON.stringify({error: 'TempTicket not found'}), {status: 404});
    }

    const entryTickets = await EntryTicket.find({orderId: tempTicket._id}).lean();
    const event = await Event.findById(tempTicket.eventId).lean();

    return new Response(
      JSON.stringify({
        ...tempTicket,
        tickets: entryTickets,
        event: {
          title: event.title,
          date: event.date,
          image: event.image,
        },
        table: event.seatingOverrides.find((seat) => seat.tableId.toString() === tempTicket.tableId.toString()) || null,
      }),
      {status: 200}
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({error: 'Internal server error'}), {status: 500});
  }
}
