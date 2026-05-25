const mongoose = require('mongoose');
require('dotenv').config();
const Vehicle = require('./models/Vehicle');

const seedCars = [
  {
    make: "Porsche", model: "911 GT3 RS", year: 2024, price: 245000,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
    zeroToSixty: "3.0s", hp: 518, mileage: "1,200 mi", transmission: "7-Spd PDK",
    description: "This pristine 2024 Porsche 911 GT3 represents the pinnacle of naturally aspirated performance. Finished in a striking metallic hue, the exterior is paired with a race-tex interior featuring carbon fiber bucket seats. Every detail of this vehicle speaks to precision engineering, from the swan-neck rear wing to the center-locking forged wheels.",
    features: ["Carbon Fiber Roof", "Front Axle Lift System", "Chrono Package", "Ceramic Composite Brakes"],
    status: "Available"
  },
  {
    make: "McLaren", model: "750S Spider", year: 2024, price: 345000,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80",
    zeroToSixty: "2.7s", hp: 740, mileage: "450 mi", transmission: "7-Spd SSG",
    description: "The lightest and most powerful series-production McLaren ever built. The 750S Spider delivers ferocious performance with an open-air driving experience that is second to none.",
    features: ["Bowers & Wilkins Audio", "Carbon Ceramic Brakes", "Vehicle Lift", "Carbon Fibre Monocage"],
    status: "Available"
  },
  {
    make: "Aston Martin", model: "DBS Superleggera", year: 2023, price: 335000,
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=800&q=80",
    zeroToSixty: "3.2s", hp: 715, mileage: "2,100 mi", transmission: "8-Spd Auto",
    description: "A beautifully brutal grand tourer equipped with a 5.2L Twin-Turbo V12. The DBS Superleggera combines blistering speed with bespoke British luxury.",
    features: ["Bang & Olufsen BeoSound", "360 Camera", "Ventilated Seats", "Gloss Black Exterior Badge"],
    status: "Available"
  }
];

// The standard, clean Mongoose connection
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to DB. Clearing old inventory...');
    await Vehicle.deleteMany({}); 
    
    console.log('Inserting new high-end inventory...');
    await Vehicle.insertMany(seedCars);
    
    console.log('Database seeded successfully!');
    process.exit();
  })
  .catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);
  });