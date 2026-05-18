import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Showroom from './pages/Showroom';
import VehicleDetail from './pages/VehicleDetail';
import TradeIn from './pages/TradeIn';
import About from './pages/About';     // <-- Import About
import Contact from './pages/Contact'; // <-- Import Contact

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/showroom/:id" element={<VehicleDetail />} />
          <Route path="/trade-in" element={<TradeIn />} />
          <Route path="/about" element={<About />} />       {/* <-- Add About Route */}
          <Route path="/contact" element={<Contact />} />   {/* <-- Add Contact Route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}