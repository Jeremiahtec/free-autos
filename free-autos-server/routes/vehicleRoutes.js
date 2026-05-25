const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle'); // Imports your Mongoose schema

// @route   GET /api/vehicles
// @desc    Get all vehicles for the Showroom
router.get('/', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   GET /api/vehicles/:id
// @desc    Get a single vehicle for the Vehicle Detail page
router.get('/:id', async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });
    res.json(vehicle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   POST /api/vehicles
// @desc    Add a new vehicle (Used by the Admin Dashboard)
router.post('/', async (req, res) => {
  try {
    const newVehicle = new Vehicle(req.body);
    const savedVehicle = await newVehicle.save();
    res.status(201).json(savedVehicle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;