const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Successfully connected to MongoDB.'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Test Route
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Free Autos Server is running at peak performance.' });
});

// We will add the Vehicle and Trade-in Routes here next...

// Start Server
app.listen(PORT, () => {
  console.log(`Server ignited on port ${PORT}`);
});