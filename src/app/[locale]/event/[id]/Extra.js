// components/EventExtras.tsx
import React from 'react';

const AddToCalendar = ({
                         title,
                         startTime,
                         endTime,
                         description
                       }) => {
  const formatDate = (date) => {
    return new Date(date).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const googleUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${formatDate(startTime)}/${formatDate(endTime)}&details=${encodeURIComponent(
    description
  )}&location=${encodeURIComponent('TEATRO, 5b Lech and Maria Kaczynski St, Batumi 6000, Georgia')}&sf=true&output=xml`;

  return (
    <div className="flex gap-4 flex-wrap">
      <a
        href={googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700"
      >
        Добавить в Google Календарь
      </a>
      <a
        href="/api/calendar"
        className="bg-gray-700 text-white px-4 py-2 rounded-xl shadow hover:bg-gray-800"
      >
        Скачать .ics (Apple / Outlook)
      </a>
    </div>
  );
};

export const YouTubeSongs = ({videoIds}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {videoIds.map((id) => (
        <div key={id} className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-xl"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default AddToCalendar;
