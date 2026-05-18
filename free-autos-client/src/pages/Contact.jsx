export default function Contact() {
  return (
    <main className="flex-grow pt-[140px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      
      {/* Header Section */}
      <div className="mb-12 max-w-3xl">
        <h1 className="font-headline-lg text-headline-lg text-white mb-6">Contact Our Concierge</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Experience precision service tailored to your luxury automotive needs. Whether you seek to acquire a rare masterpiece or require bespoke delivery logistics, our specialists await your instruction.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Inquiry Form */}
        <div className="lg:col-span-7 glass-panel inner-glow rounded-xl p-8 md:p-10 bg-black/40">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Full Name */}
              <div className="relative group mt-2">
                <input type="text" className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest text-white focus:ring-0 focus:border-primary-container peer pt-4 pb-2 px-0 transition-colors" placeholder=" " required />
                <label className="absolute left-0 top-4 text-on-surface-variant font-body-md transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-2 peer-valid:text-xs pointer-events-none">Full Name</label>
              </div>
              
              {/* Email Address */}
              <div className="relative group mt-2">
                <input type="email" className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest text-white focus:ring-0 focus:border-primary-container peer pt-4 pb-2 px-0 transition-colors" placeholder=" " required />
                <label className="absolute left-0 top-4 text-on-surface-variant font-body-md transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-2 peer-valid:text-xs pointer-events-none">Email Address</label>
              </div>
              
              {/* Phone Number */}
              <div className="relative group mt-2">
                <input type="tel" className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest text-white focus:ring-0 focus:border-primary-container peer pt-4 pb-2 px-0 transition-colors" placeholder=" " />
                <label className="absolute left-0 top-4 text-on-surface-variant font-body-md transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-2 peer-valid:text-xs pointer-events-none">Phone Number (Optional)</label>
              </div>
              
              {/* Interested In (Dropdown) */}
              <div className="relative group">
                <label className="block text-primary text-[11px] font-bold mb-1 uppercase tracking-wider">Interested In</label>
                <div className="relative">
                  <select className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest text-on-surface-variant focus:text-white focus:ring-0 focus:border-primary-container py-2 px-0 appearance-none transition-colors cursor-pointer">
                    <option className="bg-[#1a1a1a] text-white">Select Topic...</option>
                    <option className="bg-[#1a1a1a] text-white">Vehicle Acquisition</option>
                    <option className="bg-[#1a1a1a] text-white">Trade-In Evaluation</option>
                    <option className="bg-[#1a1a1a] text-white">Logistics & Delivery</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-0 top-2 text-on-surface-variant pointer-events-none text-lg">expand_more</span>
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="relative group pt-6">
              <textarea rows="4" className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest text-white focus:ring-0 focus:border-primary-container peer pt-4 pb-2 px-0 transition-colors resize-none" placeholder=" " required></textarea>
              <label className="absolute left-0 top-4 text-on-surface-variant font-body-md transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-6 peer-valid:text-xs pointer-events-none">Your Message</label>
            </div>
            
            {/* Submit Button */}
            <div className="pt-4">
              <button className="bg-primary-container text-black font-label-sm text-label-sm uppercase px-10 py-4 rounded hover:scale-[1.02] transition-transform font-bold tracking-widest">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Card 1: WhatsApp */}
          <div className="glass-panel inner-glow rounded-xl p-6 bg-black/40 flex items-start space-x-5 border border-white/5 hover:border-white/20 transition-all group">
            <div className="bg-surface-container-highest p-3 rounded-lg flex-shrink-0 group-hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-primary">chat</span>
            </div>
            <div>
              <h3 className="font-headline-md !text-[18px] text-white mb-1">WhatsApp Concierge</h3>
              <p className="font-body-md text-on-surface-variant text-sm mb-4 leading-relaxed">Instant messaging for immediate assistance.</p>
              <p className="text-white font-mono text-sm tracking-wide">+1 (800) 555-0199</p>
            </div>
          </div>
          
          {/* Card 2: Direct Line */}
          <div className="glass-panel inner-glow rounded-xl p-6 bg-black/40 flex items-start space-x-5 border border-white/5 hover:border-white/20 transition-all group">
            <div className="bg-surface-container-highest p-3 rounded-lg flex-shrink-0 group-hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-primary">call</span>
            </div>
            <div>
              <h3 className="font-headline-md !text-[18px] text-white mb-1">Direct Line</h3>
              <p className="font-body-md text-on-surface-variant text-sm mb-4 leading-relaxed">Available Mon-Sat, 9AM to 7PM EST.</p>
              <p className="text-white font-mono text-sm tracking-wide">+1 (800) 555-0199</p>
            </div>
          </div>
          
          {/* Card 3: Showroom */}
          <div className="glass-panel inner-glow rounded-xl p-6 bg-black/40 flex items-start space-x-5 border border-white/5 hover:border-white/20 transition-all group">
            <div className="bg-surface-container-highest p-3 rounded-lg flex-shrink-0 group-hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-primary">location_on</span>
            </div>
            <div>
              <h3 className="font-headline-md !text-[18px] text-white mb-1">Showroom</h3>
              <p className="font-body-md text-on-surface-variant text-sm mb-4 leading-relaxed">Private viewings by appointment only.</p>
              <p className="text-white text-sm leading-relaxed">100 Precision Way<br/>Motor City, MC 90210</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}