const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  tableId: { type: mongoose.Schema.Types.ObjectId, ref: 'Table', required: false },
  type: { type: String, enum: ['table', 'standing'], required: true },
  seats: { type: Number, default: 1 }, // для standing
  quantity: { type: Number, default: 1 }, // для table
  comment: { type: String, default: '', required: false },
  fullName: { type: String, default: '' },
  phone: {
    type: String,
    default: '',
  },
  email: { type: String, default: '' },
  checkedIn: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', TicketSchema);
