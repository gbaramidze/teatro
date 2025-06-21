import {menuList} from '@/lib/menuList';
import connectToDatabase from '@/lib/mongodb';
import Event from '@/models/Event';

export async function GET() {
  const baseUrl = 'https://teatro.ge';

  // Подключение к БД и получение slug'ов
  const dynamicSlugs = await getDynamicPaths(); // ['id1', 'id2', ...]

  // Статичные и динамичные маршруты
  const routes = [
    ...menuList.filter(r => !r.external).map((item) => item.path),
    ...dynamicSlugs.map((slug) => `/event/${slug}`),
  ];

  // Генерация XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${routes
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <xhtml:link rel="alternate" hreflang="ru" href="${baseUrl}/ru${route}" />
      <xhtml:link rel="alternate" hreflang="ka" href="${baseUrl}/ka${route}" />
      <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${route}" />
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
