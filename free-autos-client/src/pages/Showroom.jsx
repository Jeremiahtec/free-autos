import CarCard from '../components/CarCard';

// This mirrors the JSON structure you will eventually get from your Mongoose backend
const dummyInventory = [
  {
    id: 1,
    make: "Porsche",
    model: "911 GT3 RS",
    year: 2024,
    price: 245000,
    // Fresh Unsplash link for a dark Porsche
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80", 
    zeroToSixty: "3.0s",
    hp: 518
  },
  {
    id: 2,
    make: "McLaren",
    model: "750S Spider",
    year: 2024,
    price: 345000,
    // Fresh Unsplash link for a sleek supercar
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80",
    zeroToSixty: "2.7s",
    hp: 740
  },
  {
    id: 3,
    make: "Aston Martin",
    model: "DBS Superleggera",
    year: 2023,
    price: 335000,
    // The blue car that was already working
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=800&q=80",
    zeroToSixty: "3.2s",
    hp: 715
  }
];

export default function Showroom() {
  return (
    <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex-grow w-full">
      {/* Header & Filters */}
      <div className="mb-16">
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-8">Showroom</h1>
        
        <div className="glass-panel inner-glow rounded-xl p-6 flex flex-col md:flex-row gap-6 items-end">
          <div className="w-full md:w-1/4">
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">Make</label>
            <div className="relative">
              <select className="w-full bg-surface-container-high border-b-2 border-[#2A2A2A] text-on-surface focus:border-primary-container focus:ring-0 rounded-none py-3 appearance-none transition-colors">
                <option>All Makes</option>
                <option>Porsche</option>
                <option>McLaren</option>
                <option>Aston Martin</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-3 text-on-surface-variant pointer-events-none">arrow_drop_down</span>
            </div>
          </div>
          
          <div className="w-full md:w-1/4">
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">Body Style</label>
            <div className="relative">
              <select className="w-full bg-surface-container-high border-b-2 border-[#2A2A2A] text-on-surface focus:border-primary-container focus:ring-0 rounded-none py-3 appearance-none transition-colors">
                <option>All Styles</option>
                <option>Coupe</option>
                <option>Convertible</option>
                <option>SUV</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-3 text-on-surface-variant pointer-events-none">arrow_drop_down</span>
            </div>
          </div>
          
          <div className="w-full md:w-1/4">
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">Price Range</label>
            <div className="relative">
              <select className="w-full bg-surface-container-high border-b-2 border-[#2A2A2A] text-on-surface focus:border-primary-container focus:ring-0 rounded-none py-3 appearance-none transition-colors">
                <option>Any Price</option>
                <option>Under $100k</option>
                <option>$100k - $200k</option>
                <option>Over $200k</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-3 text-on-surface-variant pointer-events-none">arrow_drop_down</span>
            </div>
          </div>
          
          <div className="w-full md:w-1/4 flex justify-end">
            <button className="w-full md:w-auto border border-[#2A2A2A] text-on-surface px-8 py-3 rounded font-label-sm text-label-sm uppercase hover:bg-white/5 transition-colors">
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* Inventory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {dummyInventory.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="border border-[#2A2A2A] text-on-surface px-8 py-4 rounded font-label-sm text-label-sm uppercase tracking-wider hover:bg-white/5 transition-colors">
          Load More Inventory
        </button>
      </div>
    </main>
  );
}