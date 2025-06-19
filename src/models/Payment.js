// models/Payment.js
import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  date: { type: Date, default: Date.now },
  total: { type: Number, required: true },
  paymentType: {
    type: String,
    enum: ['cash', 'terminal_bog', 'terminal_tbc', 'transfer', 'card'],
    required: true,
  },
  price: { type: Number, required: true },
  payer: {
    fullName: String,
    email: String,
    phone: String,
  },
  details: {
    quantity: Number,
    seats: Number,
  },
});

export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);
