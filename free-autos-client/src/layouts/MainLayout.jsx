import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col">
      <Navbar />
      {/* The Outlet is where your pages (Home, Showroom, etc.) will render */}
      <Outlet />
      <Footer />
    </div>
  );
}