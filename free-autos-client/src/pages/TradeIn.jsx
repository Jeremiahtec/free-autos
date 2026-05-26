import { useState } from 'react';

export default function TradeIn() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  
  // Updated state to perfectly match your backend schema!
  const [formData, setFormData] = useState({
    vehicleMake: '', vehicleModel: '', vehicleYear: '', vehicleMileage: '', condition: 'Good',
    customerName: '', customerEmail: '', customerPhone: ''
  });

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://free-autos.onrender.com/api/trade-ins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: formData.customerName,
          customerEmail: formData.customerEmail,
          customerPhone: formData.customerPhone,
          vehicleMake: formData.vehicleMake,
          vehicleModel: formData.vehicleModel,
          vehicleYear: Number(formData.vehicleYear),
          vehicleMileage: Number(formData.vehicleMileage)
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ vehicleMake: '', vehicleModel: '', vehicleYear: '', vehicleMileage: '', condition: 'Good', customerName: '', customerEmail: '', customerPhone: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-grow pt-[100px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col items-center">
      <header className="text-center mb-16 max-w-2xl">
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-white mb-4">Precision Trade-in Evaluation</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">Enter your vehicle details for an immediate, high-performance market assessment.</p>
      </header>

      {/* Form Container */}
      <div className="w-full max-w-3xl glass-panel inner-glow rounded-xl p-8 md:p-12 relative overflow-hidden bg-white/5">
        
        {submitStatus === 'success' ? (
           <div className="text-center animate-fadeIn py-12">
             <div className="w-20 h-20 bg-primary-container/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-4xl text-primary-container">check_circle</span>
             </div>
             <h2 className="text-2xl text-white font-bold mb-2">Evaluation Received</h2>
             <p className="text-on-surface-variant mb-8">Our appraisal team is reviewing your vehicle. We will contact you shortly.</p>
             <button onClick={() => { setStep(1); setSubmitStatus(null); }} className="px-8 py-3 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider border border-surface-container-highest text-white hover:bg-white/5 transition-colors">
               Submit Another Vehicle
             </button>
           </div>
        ) : (
          <>
            {/* Progress Indicator */}
            <div className="flex items-center justify-between mb-12 relative z-10">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-surface-container-highest -z-10 -translate-y-1/2"></div>
              {/* Active Progress Bar Line */}
              <div 
                className="absolute top-1/2 left-0 h-[2px] bg-primary-container -z-10 -translate-y-1/2 transition-all duration-500"
                style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
              ></div>

              {/* Step 1 Circle */}
              <div className="flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 1 ? 'bg-primary-container text-black' : 'bg-surface-container-highest text-white'}`}>1</div>
                <span className={`font-label-sm text-label-sm ${step >= 1 ? 'text-primary' : 'text-on-surface-variant'}`}>Vehicle</span>
              </div>
              {/* Step 2 Circle */}
              <div className="flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 2 ? 'bg-primary-container text-black' : 'bg-surface-container-highest text-white'}`}>2</div>
                <span className={`font-label-sm text-label-sm ${step >= 2 ? 'text-primary' : 'text-on-surface-variant'}`}>Condition</span>
              </div>
              {/* Step 3 Circle (Changed to Contact) */}
              <div className="flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 3 ? 'bg-primary-container text-black' : 'bg-surface-container-highest text-white'}`}>3</div>
                <span className={`font-label-sm text-label-sm ${step >= 3 ? 'text-primary' : 'text-on-surface-variant'}`}>Contact</span>
              </div>
            </div>

            {/* Dynamic Form Content */}
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              {/* STEP 1: Vehicle Details */}
              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
                  {['vehicleMake', 'vehicleModel', 'vehicleYear', 'vehicleMileage'].map((field) => (
                    <div key={field} className="relative group">
                      <input 
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        type={field.includes('Year') || field.includes('Mileage') ? 'number' : 'text'}
                        className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest text-white focus:ring-0 focus:border-primary-container peer pt-4 pb-2 px-0 transition-colors" 
                        placeholder=" " 
                        required 
                      />
                      <label className="absolute left-0 top-4 text-on-surface-variant font-body-md text-body-md transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-2 peer-valid:text-xs capitalize pointer-events-none">
                        {field.replace('vehicle', '')}
                      </label>
                    </div>
                  ))}
                </div>
              )}

              {/* STEP 2: Condition */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <label className="font-body-md text-body-md text-white block">Vehicle Condition</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Excellent', 'Good', 'Fair', 'Poor'].map((cond) => (
                      <button
                        key={cond}
                        type="button"
                        onClick={() => setFormData({ ...formData, condition: cond })}
                        className={`p-4 rounded border text-center transition-all duration-200 ${
                          formData.condition === cond 
                            ? 'border-primary-container text-primary-container bg-primary-container/10' 
                            : 'border-surface-container-highest text-on-surface-variant hover:bg-white/5'
                        }`}
                      >
                        {cond}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: Contact Details */}
              {step === 3 && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <input name="customerName" value={formData.customerName} onChange={handleChange} type="text" className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest text-white focus:ring-0 focus:border-primary-container peer pt-4 pb-2 px-0 transition-colors" placeholder=" " required />
                      <label className="absolute left-0 top-4 text-on-surface-variant transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-2 peer-valid:text-xs pointer-events-none">Full Name</label>
                    </div>
                    <div className="relative group">
                      <input name="customerPhone" value={formData.customerPhone} onChange={handleChange} type="tel" className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest text-white focus:ring-0 focus:border-primary-container peer pt-4 pb-2 px-0 transition-colors" placeholder=" " required />
                      <label className="absolute left-0 top-4 text-on-surface-variant transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-2 peer-valid:text-xs pointer-events-none">Phone Number</label>
                    </div>
                  </div>
                  <div className="relative group">
                    <input name="customerEmail" value={formData.customerEmail} onChange={handleChange} type="email" className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest text-white focus:ring-0 focus:border-primary-container peer pt-4 pb-2 px-0 transition-colors" placeholder=" " required />
                    <label className="absolute left-0 top-4 text-on-surface-variant transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-2 peer-valid:text-xs pointer-events-none">Email Address</label>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="text-red-400 text-sm mt-4">Failed to submit evaluation. Please check your connection and try again.</div>
                  )}
                </div>
              )}

              {/* Actions (Footer Buttons) */}
              <div className="pt-8 flex justify-between gap-4 border-t border-surface-container-highest mt-8">
                <button 
                  type="button" 
                  onClick={handleBack}
                  className={`px-6 py-3 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider text-white border border-secondary-container hover:bg-white/5 transition-colors ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                  Back
                </button>
                <button 
                  type="button" 
                  disabled={isSubmitting}
                  onClick={step === 3 ? handleSubmit : handleNext}
                  className="px-8 py-3 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider bg-primary-container text-black hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:scale-100"
                >
                  {isSubmitting ? 'Sending...' : step === 3 ? 'Submit Evaluation' : 'Next Step'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </main>
  );
}