// models/EntryTicketSchema.js

const mongoose = require('mongoose');

const EntryTicketSchema = new mongoose.Schema(
  {
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
      required: true,
    },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ticket',
      required: true,
    },
    ticketNumber: {
      type: String,
      default: () => Math.random().toString(36).substring(2, 10).toUpperCase(),
      unique: true,
    },
    checkedIn: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // createdAt и updatedAt
  }
);

module.exports = mongoose.model('EntryTicket', EntryTicketSchema);
