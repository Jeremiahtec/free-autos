const mongoose = require('mongoose');

const tradeInSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerPhone: { type: String, required: true },
  vehicleMake: { type: String, required: true },
  vehicleModel: { type: String, required: true },
  vehicleYear: { type: Number, required: true },
  vehicleMileage: { type: Number, required: true },
  status: { type: String, default: 'New Lead' } // We will use this in the admin UI to track progress
}, { timestamps: true });

module.exports = mongoose.model('TradeIn', tradeInSchema);