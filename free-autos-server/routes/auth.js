const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

// Helper function to generate the security token
const generateToken = (id) => {
  // Uses your JWT_SECRET from .env, or a fallback string
  return jwt.sign({ id }, process.env.JWT_SECRET || 'free_autos_secure_key_2026', { 
    expiresIn: '30d' 
  });
};

// @route   POST /api/admin/login
// @desc    Authenticate admin & get token
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });

    if (admin && (await admin.matchPassword(password))) {
      res.json({
        _id: admin._id,
        username: admin.username,
        token: generateToken(admin._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
} catch (error) {
    console.error("Setup Route Error:", error); // <-- Add this line!
    res.status(500).json({ message: 'Server configuration error' });
  }
});

// @route   POST /api/admin/setup
// @desc    Create the initial admin account (Use Postman for this!)
router.post('/setup', async (req, res) => {
  try {
    const { username, password } = req.body;
    const adminExists = await Admin.findOne({ username });

    if (adminExists) {
      return res.status(400).json({ message: 'Admin already exists.' });
    }

    const admin = await Admin.create({ username, password });
    if (admin) {
      res.status(201).json({
        message: 'Admin created successfully.',
        _id: admin._id,
        username: admin.username,
        token: generateToken(admin._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid admin data' });
    }
  } catch (error) {
    console.error("Setup Route Error:", error); // <-- Add this line!
    res.status(500).json({ message: 'Server configuration error' });
  }
});

module.exports = router;