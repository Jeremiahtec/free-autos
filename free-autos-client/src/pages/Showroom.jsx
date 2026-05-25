import { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';

export default function Showroom() {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://free-autos.onrender.com/api/vehicles')
      .then(async (res) => {
        if (!res.ok) throw new Error(`Server Error: ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setInventory(data);
        } else {
          setInventory([]); 
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching vehicles:", err);
        setInventory([]); 
        setLoading(false);
      });
  }, []);

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

      {/* Dynamic Inventory Grid */}
      {loading ? (
        <div className="text-center py-20 text-on-surface-variant font-headline-md">
           Loading High-End Inventory...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {inventory.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      )}

      {/* Load More Button */}
      <div className="mt-16 text-center">
        <button className="border border-[#2A2A2A] text-on-surface px-8 py-4 rounded font-label-sm text-label-sm uppercase tracking-wider hover:bg-white/5 transition-colors">
          Load More Inventory
        </button>
      </div>

    </main>
  );
}