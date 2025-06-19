import connectToDatabase from '@/lib/mongodb';
import TempTicket from '@/models/TempTicket';

export async function GET(req, { params }) {
  await connectToDatabase();

  try {
    const tempTicket = await TempTicket.findById(params.id);

    if (!tempTicket) {
      return new Response(JSON.stringify({ error: 'TempTicket not found' }), { status: 404 });
    }

    return new Response(
      JSON.stringify({
        status: tempTicket.status, // "pending", "paid", "failed"
        updatedAt: tempTicket.updatedAt || tempTicket.createdAt,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
}
