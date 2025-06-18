"use client";

import "./styles.css";
import {BiCalendar} from "react-icons/bi";
import {FaTicket} from "react-icons/fa6";
import dayjs from "dayjs";
import Link from "next/link";

const EventCard = ({ event, onSelect }) => {
  return (
    <Link className="col-md-3 mb-3" href={`/event/${event._id}`}>
      <div className="event-card">
        <img src={event.image} alt={event.title} />
        <div className="event-card-body">
          <h2 className="title display-3 fw-extra-bold d-flex flex-column"  >
                <svg xmlns="http://www.w3.org/2000/svg" className="gradient-subtitle2" style={{height: 70, fontSize: 33, marginTop: -15}}>
                    <defs>
                        <linearGradient id="gradient-subtitle" y1="0" y2="1">
                            <stop stopColor="var(--bs-primary)" offset="0" />
                            <stop stopColor="var(--bs-secondary)" offset="1" />
                        </linearGradient>
                    </defs>
                    <g>
                        <text id="text" y="50" strokeWidth="1.5" stroke="url(#gradient-subtitle)" fill="none">{event.title}</text>
                    </g>
                </svg>
          </h2>
          {/*<p className="card-text text-muted">{event.description}</p>*/}
          <p className="card-text">
            <BiCalendar style={{marginRight: 5}} />
            { dayjs(event.date).format("DD MMMM, 00:00")}{" "}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;