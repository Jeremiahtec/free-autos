import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation(); // Gets the current URL path
  
  const navLinkStyle = ({ isActive }) => 
    isActive 
      ? "text-primary border-b-2 border-primary pb-1 px-3 py-2 transition-all duration-150 font-bold" 
      : "text-on-surface/80 hover:text-on-surface transition-colors hover:bg-white/5 pb-1 px-3 py-2 rounded";

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/10 backdrop-blur-[30px] border-b border-white/15 shadow-xl text-primary font-headline-md text-headline-md">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        
        <Link className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-md md:text-headline-md font-bold text-primary tracking-tighter" to="/">
          FREE AUTOS
        </Link>
        
        <div className="hidden md:flex items-center space-x-gutter font-body-md text-body-md">
          <NavLink className={navLinkStyle} to="/showroom">Showroom</NavLink>
          <NavLink className={navLinkStyle} to="/trade-in">Trade-in</NavLink>
          <NavLink className={navLinkStyle} to="/about">About</NavLink>
          <NavLink className={navLinkStyle} to="/contact">Contact</NavLink>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Conditionally render the search button ONLY if the path is exactly '/showroom' */}
          {location.pathname === '/showroom' && (
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full glass-panel text-on-surface hover:text-primary transition-colors animate-fadeIn">
              <span className="material-symbols-outlined">search</span>
            </button>
          )}
          
          <Link to="/contact" className="bg-primary-container text-black font-label-sm text-label-sm uppercase px-6 py-3 rounded hover:scale-[1.02] transition-transform font-bold tracking-widest inline-block">
            Inquire
          </Link>
        </div>
        
      </div>
    </nav>
  );
}