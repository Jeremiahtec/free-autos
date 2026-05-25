const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  make: { 
    type: String, 
    required: true 
  },
  model: { 
    type: String, 
    required: true 
  },
  year: { 
    type: Number, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  image: { 
    type: String, 
    required: true // Eventually this will be a URL from an S3 bucket or Cloudinary
  },
  zeroToSixty: { 
    type: String, 
    required: true 
  },
  hp: { 
    type: Number, 
    required: true 
  },
  mileage: { 
    type: String,
    default: 'New'
  },
  transmission: {
    type: String,
    default: 'Automatic'
  },
  description: {
    type: String,
    required: true
  },
  features: [{
    type: String // Array of strings for the feature list
  }],
  status: {
    type: String,
    enum: ['Available', 'Pending', 'Sold'],
    default: 'Available'
  }
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema);