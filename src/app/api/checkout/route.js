import connectToDatabase from '@/lib/mongodb';
import TempTicket from '@/models/TempTicket';

export async function POST(req) {
  try {
    await connectToDatabase();

    const body = await req.json();

    if (!body.eventId || !body.tableId) {
      return new Response(
        JSON.stringify({ success: false, error: 'eventId and tableId are required' }),
        { status: 400 }
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

    return Response.json({
      success: true,
      tempTicketId: tempTicket._id,
    });
  } catch (err) {
    console.error('Error saving temp ticket:', err);
    return new Response(JSON.stringify({ success: false, error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
