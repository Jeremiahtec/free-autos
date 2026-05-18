import { Link } from 'react-router-dom';

export default function CarCard({ car }) {
  return (
    <div className="group relative bg-[#121212] rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 h-[420px]">
      
      {/* 1. Unblurred, Prominent Image */}
      <img 
        alt={`${car.year} ${car.make} ${car.model}`}
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" 
        src={car.image} 
      />
      
      {/* Subtle bottom gradient just so the white glass border pops, doesn't blur the image */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>

      {/* 2. Interactive Content Block */}
      <div className="absolute bottom-0 left-0 w-full p-4 z-10 flex flex-col justify-end h-full overflow-hidden">
        
        {/* Translates down by 88px (hiding the specs) until hovered */}
        <div className="transform translate-y-[88px] group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end">
          
          {/* The Blurred Glass Panel (Always visible Make/Model/Price) */}
          <div className="glass-panel inner-glow rounded-xl p-5 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)] flex justify-between items-center relative z-20">
            <div>
              <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{car.make}</span>
              <h3 className="font-headline-md text-headline-md text-white mt-1 !text-[20px] leading-tight">{car.model}</h3>
            </div>
            <div className="text-right">
              <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{car.year}</span>
              <div className="font-headline-md text-headline-md text-primary mt-1 !text-[20px] leading-tight">
                ${car.price.toLocaleString()}
              </div>
            </div>
          </div>

          {/* The Reveal Specs (Fades in below the glass panel) */}
          <div className="grid grid-cols-3 gap-3 pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 relative z-10 h-[76px]">
            <div className="glass-panel rounded-lg p-3 text-center bg-black/40 border border-white/5">
              <div className="font-label-sm text-label-sm text-on-surface-variant">0-60 MPH</div>
              <div className="font-body-md text-body-md text-white font-mono mt-1">{car.zeroToSixty}</div>
            </div>
            <div className="glass-panel rounded-lg p-3 text-center bg-black/40 border border-white/5">
              <div className="font-label-sm text-label-sm text-on-surface-variant">HP</div>
              <div className="font-body-md text-body-md text-white font-mono mt-1">{car.hp}</div>
            </div>
            <div className="flex items-center justify-end">
<Link 
  to={`/showroom/${car.id}`}
  className="w-full h-full rounded-lg glass-panel bg-primary-container/10 hover:bg-primary-container hover:text-black text-primary border border-primary-container/30 transition-all duration-300 flex items-center justify-center group/btn"
>
  <span className="material-symbols-outlined transform group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}