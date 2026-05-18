import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center pt-24 pb-section-gap overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="hero vehicle" 
          className="w-full h-full object-cover object-center opacity-60" 
          src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2000&auto=format&fit=crop" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-4 md:grid-cols-12 gap-gutter">
        <div className="col-span-4 md:col-span-8 lg:col-span-6 flex flex-col justify-center items-start">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-6">Precision Engineering</span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-8">
            A Beautiful Sunday Deserves a Beautiful Ride
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
            Experience the pinnacle of automotive excellence. Our curated collection of high-performance vehicles is engineered for those who demand uncompromising speed, luxury, and design.
          </p>
          {/* UPDATED: Converted button to Link */}
          <Link 
            to="/showroom" 
            className="inline-block bg-primary-container text-surface-container-lowest font-headline-md text-headline-md !text-[18px] px-10 py-4 rounded hover:scale-[1.02] transition-transform duration-200"
          >
            Explore Showroom
          </Link>
        </div>
      </div>
    </header>
  );
}