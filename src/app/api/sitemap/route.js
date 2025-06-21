import {menuList} from '@/lib/menuList';
import connectToDatabase from '@/lib/mongodb';
import Event from '@/models/Event';

export async function GET() {
  const baseUrl = 'https://teatro.ge';

  // Подключение к БД и получение slug'ов
  const dynamicSlugs = await getDynamicPaths(); // ['id1', 'id2', ...]

  // Статичные и динамичные маршруты
  const routes = [
    ...menuList.map((item) => item.path),
    ...dynamicSlugs.map((slug) => `/events/${slug}`),
  ];

  // Генерация XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
    .map(
      (route) => `
      <url>
        <loc>${baseUrl}${route}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>`
    )
    .join('')}
  </urlset>`;

  // Возвращаем XML-ответ
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

// Получение событий из MongoDB
async function getDynamicPaths() {
  await connectToDatabase();
  const events = await Event.find({visible: true}).lean();
  return events.map((event) => event._id.toString()); // Преобразуем ObjectId в строку
}
