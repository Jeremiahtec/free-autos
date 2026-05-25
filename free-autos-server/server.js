const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// --- THE NEW "LOUD" DATABASE CONNECTION ---
mongoose.connect(process.env.MONGO_URI, { 
  serverSelectionTimeoutMS: 5000 // Forces it to tell us the error in 5 seconds
})
.then(() => {
  console.log('🟢 SUCCESSFULLY CONNECTED TO MONGODB.');
})
.catch((err) => {
  console.error('🔴 MONGODB CONNECTION FAILED!');
  console.error('Exact Error:', err.message);
});

// Catches any background errors after startup
mongoose.connection.on('error', err => {
  console.error('🔴 Mongoose runtime error:', err.message);
});
// ------------------------------------------

// Test Route
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Free Autos Server is running at peak performance.' });
});

// API Routes
const vehicleRoutes = require('./routes/vehicleRoutes');
app.use('/api/vehicles', vehicleRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server ignited on port ${PORT}`);
});