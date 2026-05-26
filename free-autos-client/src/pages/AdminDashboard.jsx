import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(false);

  // Form State for the New Car
  const [newCar, setNewCar] = useState({
    make: '', model: '', year: '', price: '', 
    image: '', description: '', mileage: '', hp: '', zeroToSixty: '', transmission: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  // CRM State
  const [leads, setLeads] = useState([]);
  const [loadingLeads, setLoadingLeads] = useState(true);

  // 1. Initial Authorization Check
  useEffect(() => {
    const savedToken = localStorage.getItem('adminToken');
    if (!savedToken) {
      navigate('/admin/login');
    } else {
      setAuthorized(true);
      fetchLeads(); // Fetch immediately once we confirm the token exists
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  // 2. Bulletproof Fetch (Grabs fresh token directly)
  const fetchLeads = async () => {
    setLoadingLeads(true);
    const freshToken = localStorage.getItem('adminToken'); 
    
    try {
      const response = await fetch('https://free-autos.onrender.com/api/trade-ins', {
        headers: {
          'Authorization': `Bearer ${freshToken}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setLeads(data);
      } else if (response.status === 401) {
        // If the token expired or is invalid, kick to login
        handleLogout();
      }
    } catch (error) {
      console.error('Failed to fetch leads:', error);
    } finally {
      setLoadingLeads(false);
    }
  };

  // 3. Bulletproof Post (Grabs fresh token directly)
  const handleAddCar = async (e) => {
    e.preventDefault();
    setStatusMessage('Uploading to database...');
    const freshToken = localStorage.getItem('adminToken');

    try {
      const response = await fetch('https://free-autos.onrender.com/api/vehicles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${freshToken}` 
        },
        body: JSON.stringify(newCar)
      });

      if (response.ok) {
        setStatusMessage('🟢 Vehicle successfully added to Showroom!');
        setNewCar({ make: '', model: '', year: '', price: '', image: '', description: '', mileage: '', hp: '', zeroToSixty: '', transmission: ''});
      } else if (response.status === 401) {
         handleLogout();
      } else {
        const errorData = await response.json();
        setStatusMessage(`🔴 Error: ${errorData.message}`);
      }
    } catch (error) {
      setStatusMessage('🔴 Network error. Check server.');
    }
  };

  if (!authorized) return null;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-8 md:p-12">
      
      {/* Top Header */}
      <div className="flex justify-between items-center mb-12 border-b border-[#2A2A2A] pb-6">
        <div>
          <h1 className="text-3xl font-display tracking-wide">Command Center</h1>
          <p className="text-gray-400 mt-1">Manage Inventory & Leads</p>
        </div>
        <button 
          onClick={handleLogout}
          className="px-6 py-2 border border-[#2A2A2A] hover:bg-white/5 transition-colors rounded text-xs font-bold uppercase tracking-widest text-[#FF6B00]"
        >
          Secure Logout
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* ADD VEHICLE FORM */}
        <div className="border border-[#2A2A2A] bg-[#111111] p-8 rounded-xl relative overflow-hidden h-fit">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-30"></div>
           
           <h2 className="text-xl font-display tracking-wide mb-2">Deploy New Vehicle</h2>
           <p className="text-sm text-gray-400 mb-8">Fill specs to instantly push a new car to the live showroom.</p>

           <form onSubmit={handleAddCar} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Make" required className="bg-[#1A1A1A] border border-[#2A2A2A] p-3 text-sm focus:border-[#FF6B00] outline-none rounded" value={newCar.make} onChange={e => setNewCar({...newCar, make: e.target.value})} />
                <input type="text" placeholder="Model" required className="bg-[#1A1A1A] border border-[#2A2A2A] p-3 text-sm focus:border-[#FF6B00] outline-none rounded" value={newCar.model} onChange={e => setNewCar({...newCar, model: e.target.value})} />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <input type="number" placeholder="Year" required className="bg-[#1A1A1A] border border-[#2A2A2A] p-3 text-sm focus:border-[#FF6B00] outline-none rounded" value={newCar.year} onChange={e => setNewCar({...newCar, year: e.target.value})} />
                <input type="number" placeholder="Price ($)" required className="bg-[#1A1A1A] border border-[#2A2A2A] p-3 text-sm focus:border-[#FF6B00] outline-none rounded" value={newCar.price} onChange={e => setNewCar({...newCar, price: e.target.value})} />
              </div>

              <input type="text" placeholder="Image URL (Unsplash link)" required className="w-full bg-[#1A1A1A] border border-[#2A2A2A] p-3 text-sm focus:border-[#FF6B00] outline-none rounded" value={newCar.image} onChange={e => setNewCar({...newCar, image: e.target.value})} />

              <textarea placeholder="Vehicle Description" required rows="3" className="w-full bg-[#1A1A1A] border border-[#2A2A2A] p-3 text-sm focus:border-[#FF6B00] outline-none rounded resize-none" value={newCar.description} onChange={e => setNewCar({...newCar, description: e.target.value})}></textarea>

              <div className="grid grid-cols-2 gap-4">
                <input type="number" placeholder="Horsepower" className="bg-[#1A1A1A] border border-[#2A2A2A] p-3 text-sm focus:border-[#FF6B00] outline-none rounded" value={newCar.hp} onChange={e => setNewCar({...newCar, hp: e.target.value})} />
                <input type="text" placeholder="0-60 mph" className="bg-[#1A1A1A] border border-[#2A2A2A] p-3 text-sm focus:border-[#FF6B00] outline-none rounded" value={newCar.zeroToSixty} onChange={e => setNewCar({...newCar, zeroToSixty: e.target.value})} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input type="number" placeholder="Mileage" className="bg-[#1A1A1A] border border-[#2A2A2A] p-3 text-sm focus:border-[#FF6B00] outline-none rounded" value={newCar.mileage} onChange={e => setNewCar({...newCar, mileage: e.target.value})} />
                <input type="text" placeholder="Transmission" className="bg-[#1A1A1A] border border-[#2A2A2A] p-3 text-sm focus:border-[#FF6B00] outline-none rounded" value={newCar.transmission} onChange={e => setNewCar({...newCar, transmission: e.target.value})} />
              </div>

              <button type="submit" className="w-full bg-white text-black hover:bg-gray-200 font-bold py-4 rounded uppercase text-xs tracking-widest mt-4 transition-colors">
                Publish to Showroom
              </button>

              {statusMessage && (
                <div className="text-center text-sm mt-4 text-[#FF6B00]">
                  {statusMessage}
                </div>
              )}
           </form>
        </div>

        {/* INCOMING LEADS FEED */}
        <div className="border border-[#2A2A2A] bg-[#111111] p-8 rounded-xl flex flex-col h-full max-h-[850px]">
           <div className="flex justify-between items-end mb-6">
             <div>
               <h2 className="text-xl font-display tracking-wide mb-1">Trade-In Leads</h2>
               <p className="text-sm text-gray-400">Incoming CRM requests</p>
             </div>
             <button onClick={fetchLeads} className="text-xs text-gray-400 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2">
               <span className="material-symbols-outlined text-[16px]">refresh</span>
               Refresh
             </button>
           </div>

           <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
             {loadingLeads ? (
               <div className="text-gray-500 text-sm text-center mt-10">Decrypting secure leads...</div>
             ) : leads.length === 0 ? (
               <div className="text-gray-500 text-sm text-center mt-10 border border-[#2A2A2A] border-dashed p-8 rounded-lg">
                 No pending trade-in leads right now.
               </div>
             ) : (
               leads.map((lead) => (
                 <div key={lead._id} className="bg-[#1A1A1A] border border-[#2A2A2A] p-5 rounded-lg hover:border-[#4A4A4A] transition-colors">
                   <div className="flex justify-between items-start mb-3">
                     <h3 className="font-bold text-[#FFCEB4]">{lead.customerName}</h3>
                     <span className="bg-[#FF6B00]/10 text-[#FF6B00] text-[10px] px-2 py-1 uppercase tracking-widest rounded border border-[#FF6B00]/20">
                       {lead.status || 'New Lead'}
                     </span>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-300 mb-4">
                     <div>
                       <span className="text-gray-500 text-xs block uppercase mb-0.5">Vehicle</span>
                       {lead.vehicleYear} {lead.vehicleMake} {lead.vehicleModel}
                     </div>
                     <div>
                       <span className="text-gray-500 text-xs block uppercase mb-0.5">Mileage</span>
                       {lead.vehicleMileage.toLocaleString()} miles
                     </div>
                   </div>

                   <div className="flex gap-4 border-t border-[#2A2A2A] pt-4">
                     <a href={`mailto:${lead.customerEmail}`} className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">mail</span>
                        Email
                     </a>
                     <a href={`tel:${lead.customerPhone}`} className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">call</span>
                        Call
                     </a>
                   </div>
                 </div>
               ))
             )}
           </div>
        </div>

      </div>
    </div>
  );
}