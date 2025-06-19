import React, {useEffect} from 'react';
import {Card, Col, Image, Row} from 'react-bootstrap';
import dayjs from 'dayjs';
import StyledQRCode from './StyledQR'; // Optional

const EntryTicketCard = ({ticket, event}) => {
  const [isMobile, setIsMobile] = React.useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <Card
      className="my-3 mx-auto"
      style={{
        maxWidth: '700px',
        backgroundColor: '#121212',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        borderRadius: '1rem',
        overflow: 'hidden',
        border: 'none',
      }}
    >
      <Row className="g-0 flex-column flex-md-row align-items-center" style={{backgroundColor: '#1e1e1e'}}>
        {/* Left - QR Section */}
        <Col
          md={4}
          className="d-flex flex-column p-4"
          style={{
            backgroundColor: '#1e1e1e',
            height: '100%',
            borderRight: !isMobile ? '2px dashed #444' : 'none',
          }}
        >
          <small style={{marginBottom: '0.5rem', color: '#bbb'}}>
            {ticket.ticketNumber}
          </small>
          <StyledQRCode value={`${ticket.ticketNumber}`}/>
        </Col>

        {/* Right - Info Section */}
        <Col
          md={8}
          className="position-relative p-4"
          style={{backgroundColor: '#1c1c1c'}}
        >
          {/* Background image */}
          {event.image && (
            <img
              src={event.image}
              alt="Event background"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.08,
                filter: 'blur(1px) saturate(0.8)',
                zIndex: 0,
              }}
            />
          )}

          {/* Foreground Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Event Info */}
            <div style={{
              display: 'flex',
              alignItems: !isMobile ? 'flex-start' : 'center',
              justifyContent: 'left',
              flexDirection: 'column'
            }}>
              <h5
                style={{
                  fontWeight: 'bold',
                  color: '#fff',
                  fontSize: 22,
                  textShadow: '0 0 8px rgba(255,255,255,0.5)',
                  letterSpacing: 1,
                  marginBottom: '0.5rem',
                }}
              >
                {event.title}
              </h5>
              <small style={{color: '#ccc', fontSize: '0.85rem'}} className={"mt-1 mb-2"}>
                {dayjs(event.startDate).format('D MMMM YYYY, 00:00')}
              </small>
              <div style={{marginTop: '0.5rem', color: '#ccc', fontSize: '0.9rem', fontWeight: "bold"}}>
                {ticket.type === 'table'
                  ? `Seating: ${ticket.floor} floor — ${ticket.label}`
                  : 'Standing'}
              </div>
            </div>

            {/* User Info */}
            <div style={{marginTop: '1rem', fontSize: 16, alignItems: isMobile ? 'center' : 'flex-start'}}
                 className={"d-flex flex-column"}>
              <div>
                <span style={{fontWeight: 'bold'}}>Name:</span> {ticket.fullName}
              </div>
              <div>
                <span style={{fontWeight: 'bold'}}>Place:</span> {ticket.table.label} - {ticket.table.floor} floor
              </div>
              <div>
                <span style={{fontWeight: 'bold'}}>Ticket:</span> {ticket.number}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-3 d-none d-md-block">
              <Image src="/logo.png" alt="Logo" style={{height: 30}}/>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default EntryTicketCard;
