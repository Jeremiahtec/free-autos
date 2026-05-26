import { useLocation, Link } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  // The Stealth Fix: If the URL starts with /admin, render absolutely nothing
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <nav className="fixed w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#2A2A2A] px-6 md:px-12 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-display font-bold tracking-widest text-[#FFCEB4] hover:text-[#FF6B00] transition-colors">
        FREE AUTOS
      </Link>

      {/* Center Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <Link 
          to="/showroom" 
          className={`text-sm uppercase tracking-wider hover:text-white transition-colors ${
            location.pathname === '/showroom' || location.pathname === '/'
              ? 'text-white border-b-2 border-[#FFCEB4] pb-1' 
              : 'text-gray-400'
          }`}
        >
          Showroom
        </Link>
        <Link 
          to="/trade-in" 
          className={`text-sm uppercase tracking-wider hover:text-white transition-colors ${
            location.pathname === '/trade-in' 
              ? 'text-white border-b-2 border-[#FFCEB4] pb-1' 
              : 'text-gray-400'
          }`}
        >
          Trade-in
        </Link>
        <Link 
          to="/about" 
          className="text-sm text-gray-400 uppercase tracking-wider hover:text-white transition-colors"
        >
          About
        </Link>
        <Link 
          to="/contact" 
          className="text-sm text-gray-400 uppercase tracking-wider hover:text-white transition-colors"
        >
          Contact
        </Link>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <button className="p-2.5 bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-full text-white transition-colors border border-[#2A2A2A]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        
        {/* Inquire Button */}
        <button className="bg-[#FF6B00] hover:bg-[#E66000] text-black font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded transition-colors">
          Inquire
        </button>
      </div>
      
    </nav>
  );
}