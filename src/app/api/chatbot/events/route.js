import {NextResponse} from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Event from '@/models/Event';

export async function GET(request) {
  await connectToDatabase();

  const {searchParams} = new URL(request.url);
  const id = searchParams.get('id');

  try {
    if (id) {
      const event = await Event.findById(id).lean();
      if (!event) {
        return NextResponse.json({error: 'Событие не найдено'}, {status: 404});
      }

      return NextResponse.json({
        id: event._id,
        title: event.title,
        date: event.date,
        location: event.location,
        image: event.image || null,
        link: `https://teatro.ge/event/${event._id}`,
        description: event.description,
      });
    }

    const events = await Event.find({}).sort({date: 1}).lean();

    const formatted = events.map((e) => ({
      id: e._id,
      title: e.title,
      date: e.date,
      location: e.location,
      image: e.image || null,
      link: `https://teatro.ge/event/${e._id}`,
      description: e.description?.slice(0, 160) || '',
    }));

    return NextResponse.json({events: formatted});
  } catch (err) {
    console.error('Ошибка при получении событий:', err);
    return NextResponse.json({error: 'Server error'}, {status: 500});
  }
}
