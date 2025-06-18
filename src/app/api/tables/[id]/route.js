// app/api/tables/route.js
import connectToDatabase from '@/lib/mongodb';
import Event from '@/models/Event';

export async function GET(request, {params}) {
  try {
    await connectToDatabase();

    const tables = await Event.findById(params.id);

    return Response.json({ success: true, data: tables });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
