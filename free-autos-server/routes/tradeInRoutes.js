const express = require('express');
const router = express.Router();
const TradeIn = require('../models/TradeIn');
const { protect } = require('../middleware/authGuard');

// @route   POST /api/trade-ins
// @desc    Public route for customers to submit their car details
router.post('/', async (req, res) => {
  try {
    const newLead = await TradeIn.create(req.body);
    res.status(201).json(newLead);
  } catch (error) {
    res.status(400).json({ message: 'Failed to submit trade-in', error: error.message });
  }
});

// @route   GET /api/trade-ins
// @desc    Protected route for the Command Center to fetch all incoming leads
router.get('/', protect, async (req, res) => {
  try {
    // .sort({ createdAt: -1 }) ensures the newest leads show up at the top
    const leads = await TradeIn.find().sort({ createdAt: -1 });
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching leads' });
  }
});

module.exports = router;