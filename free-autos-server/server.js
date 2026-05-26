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
  serverSelectionTimeoutMS: 5000 
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
const authRoutes = require('./routes/auth'); 
const tradeInRoutes = require('./routes/tradeInRoutes'); // <-- NEW: Imported Trade-In Routes

app.use('/api/vehicles', vehicleRoutes);
app.use('/api/admin', authRoutes); 
app.use('/api/trade-ins', tradeInRoutes); // <-- NEW: Mounted Trade-In Routes

// Start Server
app.listen(PORT, () => {
  console.log(`Server ignited on port ${PORT}`);
});