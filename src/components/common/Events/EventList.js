import EventCard from "@/components/common/Events/EventCard";

const EventList = ({events}) => {
  console.log('events recieved', events)

  return (
    <div>
      <div className="container">
        <div className="row">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onSelect={console.log}
            />
          ))}
        </div>
      </div>
        {/*<TicketBookingForm*/}
        {/*  event={selectedEvent}*/}
        {/*  ticketType={ticketType}*/}
        {/*  show={!!selectedEvent}*/}
        {/*  onClose={handleClose}*/}
        {/*/>*/}
    </div>
  );
};

export default EventList;