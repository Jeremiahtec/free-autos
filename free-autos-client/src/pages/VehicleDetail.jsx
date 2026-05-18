import { useParams, Link } from 'react-router-dom';

// We'll bring over our mock database to simulate fetching data
const dummyInventory = [
  {
    id: 1, make: "Porsche", model: "911 GT3 RS", year: 2024, price: 245000,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=2000&q=80",
    zeroToSixty: "3.0s", hp: 518, mileage: "1,200 mi", transmission: "7-Spd PDK",
    description: "This pristine 2024 Porsche 911 GT3 represents the pinnacle of naturally aspirated performance. Finished in a striking metallic hue, the exterior is paired with a race-tex interior featuring carbon fiber bucket seats. Every detail of this vehicle speaks to precision engineering, from the swan-neck rear wing to the center-locking forged wheels.",
    features: ["Carbon Fiber Roof", "Front Axle Lift System", "Chrono Package", "Ceramic Composite Brakes"]
  },
  // Add the McLaren and Aston Martin objects here if you want to test those links too!
];

export default function VehicleDetail() {
  const { id } = useParams();
  
  // Find the car that matches the ID in the URL. (Using == instead of === because URL params are strings)
  const car = dummyInventory.find(c => c.id == id);

  if (!car) {
    return <div className="pt-32 text-center text-white min-h-screen">Vehicle not found.</div>;
  }

  return (
    <main className="pt-[80px] pb-section-gap flex-grow">
      {/* Hero Carousel Section */}
      <section className="relative w-full h-[614px] md:h-[819px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
        <img alt={`${car.make} ${car.model}`} className="w-full h-full object-cover object-center" src={car.image} />
        <div className="absolute bottom-0 left-0 w-full z-20 p-margin-mobile md:p-margin-desktop bg-gradient-to-t from-background via-background/80 to-transparent">
          <div className="max-w-container-max mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-display-lg md:text-display-lg text-white mb-2">
                {car.year} {car.make} {car.model}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Precision engineered for the track. Refined for the street. A masterpiece of aerodynamic design and atmospheric performance.</p>
            </div>
            <div className="glass-panel p-6 rounded-lg text-center md:text-right flex-shrink-0">
              <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Asking Price</span>
              <span className="font-headline-md text-headline-md text-primary">${car.price.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Spec Grid Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto">
        <h2 className="font-headline-md text-headline-md text-white mb-8">Performance Specifications</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-gutter">
          <div className="glass-panel inner-glow p-6 rounded-lg flex flex-col justify-between hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant mb-4">speed</span>
            <div>
              <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">0-60 MPH</span>
              <span className="font-headline-md text-headline-md text-primary font-mono">{car.zeroToSixty}</span>
            </div>
          </div>
          <div className="glass-panel inner-glow p-6 rounded-lg flex flex-col justify-between hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant mb-4">settings</span>
            <div>
              <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Engine</span>
              <span className="font-headline-md text-headline-md text-primary font-mono">{car.hp} HP</span>
            </div>
          </div>
          <div className="glass-panel inner-glow p-6 rounded-lg flex flex-col justify-between hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant mb-4">local_gas_station</span>
            <div>
              <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Mileage</span>
              <span className="font-headline-md text-headline-md text-primary font-mono">{car.mileage}</span>
            </div>
          </div>
          <div className="glass-panel inner-glow p-6 rounded-lg flex flex-col justify-between hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant mb-4">account_tree</span>
            <div>
              <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Trans</span>
              <span className="font-headline-md text-headline-md text-primary font-mono">{car.transmission}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Info & Sticky CTA */}
      <section className="px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto flex flex-col lg:flex-row gap-gutter">
        <div className="flex-grow space-y-8">
          <div className="glass-panel inner-glow p-8 rounded-lg">
            <h3 className="font-headline-md text-headline-md text-white mb-4">Vehicle Overview</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{car.description}</p>
          </div>
          <div className="glass-panel inner-glow p-8 rounded-lg">
            <h3 className="font-headline-md text-headline-md text-white mb-4">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {car.features.map((feature, index) => (
                <li key={index} className="flex items-center font-body-md text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary mr-2">check_circle</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sticky Sidebar */}
        <div className="w-full lg:w-1/3 flex-shrink-0">
          <div className="sticky top-[100px] glass-panel inner-glow p-8 rounded-lg flex flex-col items-center text-center">
            <h3 className="font-headline-md text-headline-md text-white mb-2">Interested?</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Our specialists are ready to provide more details, arrange a viewing, or discuss financing options.
            </p>
            <button className="w-full bg-primary-container text-black font-label-sm text-label-sm px-6 py-4 rounded hover:scale-[1.02] transition-transform uppercase tracking-widest font-bold flex items-center justify-center mb-4">
              <span className="material-symbols-outlined mr-2">chat</span>
              Inquire on WhatsApp
            </button>
            <Link to="/trade-in" className="w-full border border-secondary-container text-white font-label-sm text-label-sm px-6 py-4 rounded hover:bg-white/5 transition-colors uppercase tracking-widest font-bold flex items-center justify-center">
              Trade-in This Vehicle
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}