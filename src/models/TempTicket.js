import mongoose from 'mongoose';

const TempTicketSchema = new mongoose.Schema({
  eventId: {
    type: String,
    required: true,
  },
  tableId: {
    type: String,
    required: true,
  },
  tickets: Number,
  seat: String,
  price: Number,
  guestName: {
    type: String,
    required: true,
  },
  guestPhone: String,
  guestEmail: String,
  status: {
    type: String,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300, // auto-remove after 15 minutes
  },
});

export default mongoose.models.TempTicket || mongoose.model('TempTicket', TempTicketSchema);
