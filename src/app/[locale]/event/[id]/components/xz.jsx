'use client';

import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper/modules';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import 'dayjs/locale/ka';
import 'swiper/css';
import 'swiper/css/free-mode';
import './style.css';
import {useLocale, useTranslations} from "next-intl";

const getMainEventForDate = (fullDate, mainEvents) => {
  return mainEvents.find(
    (event) => dayjs(event.date).format('YYYY-MM-DD') === fullDate
  );
};

const getScheduleByDate = (fullDate) => {
  const day = dayjs(fullDate).day();
  const everyday = [
    '🎧 ACT I - 00:00 — DJ Set',
    '🎧 ACT II - 01:30–03:00 — DJ Set + Dancers & Airshow',
    '🎧 ACT III - 03:00–06:00 — DJ Set',
  ];
  const weekend = [
    '🎧 ACT I - 00:00 — DJ MAN',
    '💃 ACT II - 01:30 — Show Ballet',
    '🔥 ACT III - 02:00 — DJ MISHIN + Dancers & Airshow',
    '🎧 ACT IV - 03:00 — DJ MISHIN / DJ MAN',
  ];
  if (day === 5 || day === 6) {
    return ['🚪 OPEN DOOR - 22:00', ...weekend];
  }
  return ['🚪 OPEN DOOR - 22:00', ...everyday];
};

const generateDates = (days = 60) => {
  const today = dayjs();
  return Array.from({length: days + 1}, (_, i) => {
    const date = today.add(i, 'day');
    return {
      day: date.format('DD'),
      weekday: date.format('dd'),
      month: date.format('MMM'),
      fullDate: date.format('YYYY-MM-DD'),
    };
  });
};

const DateSwiper = ({mainEvents}) => {
  const locale = useLocale()
  const t = useTranslations('events');
  const dates = generateDates(60);
  const [selectedDate, setSelectedDate] = useState(dates[0].fullDate);

  const mainEvent = getMainEventForDate(selectedDate, mainEvents);
  const isMainEventDay = !!mainEvent;
  const defaultEvents = isMainEventDay ? [] : getScheduleByDate(selectedDate);
  dayjs.locale(locale)

  return (
    <div className="container py-3 text-light">
      <Swiper
        modules={[FreeMode]}
        slidesPerView={7}
        slidesPerGroup={7}
        spaceBetween={0}
        breakpoints={{
          320: {slidesPerView: 7, slidesPerGroup: 7, spaceBetween: 0},
          768: {slidesPerView: 14, slidesPerGroup: 14, spaceBetween: 4},
          1024: {slidesPerView: 21, slidesPerGroup: 21, spaceBetween: 4},
        }}
        className="mb-3"
      >
        {dates.map((date) => (
          <SwiperSlide key={date.fullDate} style={{width: 'auto'}}>
            <div
              className={`custom-date-box text-center ${
                selectedDate === date.fullDate ? 'selected' : ''
              }`}
              onClick={() => setSelectedDate(date.fullDate)}
            >
              <div className="date-month">{date.month}</div>
              <div className="date-weekday">{date.weekday}</div>
              <div className="date-day">{date.day}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {defaultEvents.length > 0 && (
        <div className="mt-3 px-2">
          <h6 className="text-warning mb-2">
            {t('program')} {dayjs(selectedDate).format('dddd, DD MMMM YYYY')}:
          </h6>
          <ul className="list-group list-group-flush">
            {defaultEvents.map((event, idx) => (
              <li
                key={idx}
                className="list-group-item text-light border-warning py-2 px-3"
              >
                {event}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DateSwiper;