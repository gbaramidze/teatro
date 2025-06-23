import {NextResponse} from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Event from '@/models/Event';
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import 'dayjs/locale/ka';

export async function GET(request) {
  await connectToDatabase();

  const {searchParams} = new URL(request.url);
  const id = searchParams.get('id');
  const locale = searchParams.get('locale') || 'en';

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
        description: description,
      });
    }

    const events = await Event.find({visible: true}).sort({date: 1}).lean();
    dayjs.locale(locale)

    const formatted = events.map((e) => {
      const description = locale === 'ru' ? e.description_ru : locale === 'ka' ? e.description_ka : e.description;
      return {
        id: e._id,
        title: e.title,
        date: dayjs(e.date).format('dddd DD MMMM, YYYY 00:00'),
        location: e.location,
        image: e.image || null,
        link: `https://teatro.ge/event/${e._id}`,
        description: description?.slice(0, 160) || '',
      }
    });

    return NextResponse.json({events: formatted});
  } catch (err) {
    console.error('Ошибка при получении событий:', err);
    return NextResponse.json({error: 'Server error'}, {status: 500});
  }
}
