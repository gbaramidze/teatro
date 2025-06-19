const mongoose = require("mongoose");
const tableSchema = new mongoose.Schema({
  id: Number,
  floor: Number, // этаж!
  x: Number,
  y: Number,
  width: Number,
  height: Number,
  label: String,
  color: String,
  type: String,
  seatCount: Number,
  standingCount: Number,
  price: Number,
});
const Table = mongoose.model("Table", tableSchema);

module.exports = Table;