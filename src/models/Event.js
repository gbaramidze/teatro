import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  description: String,
  image: String,
  bucket1Price: Number,
  bucket2Price: Number,
  activePrice: Number,
  seatingOverrides: [
    {
      tableId: mongoose.Schema.Types.ObjectId,
      price: Number,
      seatCount: Number,
      standingCount: Number,
      available: Boolean,
      sold: Boolean,
      floor: Number,
      x: Number,
      y: Number,
      width: Number,
      height: Number,
      label: String,
    },
  ],
  visible: {
    type: Boolean,
    default: true
  }
});

// ✅ экспортируем модель
export default mongoose.models.Event || mongoose.model("Event", EventSchema);
