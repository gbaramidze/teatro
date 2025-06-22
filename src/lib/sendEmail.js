import {Resend} from 'resend';
import connectToDatabase from "@/lib/mongodb";
import Ticket from "@/models/Ticket";
import QRCode from 'qrcode';
import EntryTicket from '@/models/EntryTicket';
import Event from '@/models/Event';
import dayjs from "dayjs";

const resend = new Resend('re_B17tW7Vy_XQHRfchDezsQh5Z8vojN1Fzt');

const SendTicket = async (ticketId) => {

  try {
    await connectToDatabase()

    const tempTicket = await Ticket.findById(ticketId).lean();
    if (!tempTicket) return {error: 'Ticket not found'};

    const entryTickets = await EntryTicket.find({orderId: tempTicket._id}).lean();
    const event = await Event.findById(tempTicket.eventId).lean();

    if (!event) return {error: 'Event not found'};

    const table = event.seatingOverrides?.find(
      (seat) => seat.tableId?.toString() === tempTicket.tableId?.toString()
    ) || null;

    let html = `
      <div style="background:#121212;padding:20px;color:#fff;font-family:Arial;border-radius:10px;max-width:700px;margin:auto">
        <h2 style="text-align:center;color:#fff;">🎟️ Tickets for <strong>${event.title}</strong></h2>
        <p style="text-align:center;color:#bbb;font-size:14px">
          ${dayjs(event.date).format('dddd DD MMMM, YYYY')} 00:00 (midnight)
        </p>
        <hr style="border-color:#444"/>
    `;

    for (const ticket of entryTickets) {
      const qrBase64 = await QRCode.toDataURL(ticket.ticketNumber, {type: 'image/png'});
      html += `
        <div style="margin-top:30px;padding:20px;background:#1c1c1c;border-radius:8px;">
          <div style="display:flex;gap:20px;">
            <div style="text-align:center;flex-shrink:0">
              <img src="https://teatro.ge/api/qr/${ticket.ticketNumber}" alt="QR Code" style="width:100px;height:100px;" />
              <div style="color:#aaa;font-size:12px;margin-top:8px;">${ticket.ticketNumber}</div>
            </div>
            <div style="margin-left: 12px">
              <p><strong>Name:</strong> ${tempTicket.fullName}</p>
              <p><strong>Place:</strong> ${table?.label || '-'} – ${table?.floor || '-'} floor</p>
              <p><strong>Ticket ID:</strong> ${ticket.ticketNumber}</p>
              <p><strong>Type:</strong> ${ticket.type === 'table' ? 'Seating' : 'Standing'}</p>
            </div>
          </div>
        </div>
      `;
    }

    html += `
      <div style="text-align:center;margin-top:40px;">
      <a href="https://teatro.ge/api/calendar?id=${tempTicket._id}" 
         style="display:inline-block;background:#816009;color:#fff;text-decoration:none;
                padding:10px 20px;border-radius:6px;font-weight:bold;margin-bottom:20px">
        📅 Add to Calendar
      </a>
      <br />
        <img src="https://teatro.ge/logo.png" alt="Logo" style="height:30px"/>
        <p style="font-size:12px;color:#888;margin-top:10px">
          This is an automated ticket from Teatro. Please do not reply.
        </p>
      </div>
    </div>`;

    const requestData = {
      from: 'Teatro <no-reply@teatro.ge>',
      to: tempTicket.email,
      subject: `Your Tickets for ${event.title}`,
      html,
    }

    const result = await resend.emails.send(requestData);

    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send ticket email');
  }
}

export default SendTicket;