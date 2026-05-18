import { Link } from 'react-router-dom';

export default function HomeFeatures() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="mb-16">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Why Choose Free Autos</h2>
        <div className="w-20 h-1 bg-primary-container rounded"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[300px]">
        {/* Large Card: Nationwide Delivery */}
        <div className="md:col-span-8 bg-surface rounded-xl overflow-hidden relative group border border-white/5 hover:border-white/15 transition-all inner-glow">
          <img 
            alt="Nationwide delivery truck" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500" 
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full bg-surface/20 backdrop-blur-md border-t border-white/10">
            <div className="flex items-center space-x-4 mb-3">
              <span className="material-symbols-outlined text-primary-container">local_shipping</span>
              <h3 className="font-headline-md text-headline-md !text-[24px] text-white">Nationwide Delivery</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              White-glove transport to your driveway. We ensure your vehicle arrives in showroom condition, no matter where you are.
            </p>
          </div>
        </div>

        {/* Small Card 1: High-End Inventory */}
        <div className="md:col-span-4 bg-surface rounded-xl p-8 relative flex flex-col justify-end border border-white/5 hover:border-white/15 transition-all inner-glow overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-full blur-[50px] -mr-10 -mt-10"></div>
          <span className="material-symbols-outlined text-primary-container text-4xl mb-6">verified</span>
          <h3 className="font-headline-md text-headline-md !text-[24px] text-white mb-3">High-End Inventory</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            A meticulously curated selection of the world's most sought-after performance and luxury marques.
          </p>
        </div>

        {/* Small Card 2: Seamless Trade-In */}
        <div className="md:col-span-4 bg-surface rounded-xl p-8 relative flex flex-col justify-end border border-white/5 hover:border-white/15 transition-all inner-glow overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-full blur-[50px] -mr-10 -mt-10"></div>
          <span className="material-symbols-outlined text-primary-container text-4xl mb-6">handshake</span>
          <h3 className="font-headline-md text-headline-md !text-[24px] text-white mb-3">Seamless Trade-In</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Transparent, fair valuations for your current vehicle, making your upgrade effortless.
          </p>
        </div>

        {/* Medium Card: Ready to Experience */}
        <div className="md:col-span-8 bg-surface rounded-xl overflow-hidden relative group border border-white/5 hover:border-white/15 transition-all inner-glow flex items-center p-8">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-surface-container-high to-surface"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="font-headline-md text-headline-md !text-[24px] text-white mb-3">Ready to experience the drive?</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Schedule a private viewing at our exclusive showroom.</p>
            </div>
            {/* UPDATED: Converted button to Link pointing to /contact */}
            <Link to="/contact" className="bg-transparent border border-secondary-container text-on-surface font-label-sm text-label-sm uppercase px-8 py-4 rounded hover:bg-white/5 transition-colors whitespace-nowrap inline-block">
              Contact Concierge
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}