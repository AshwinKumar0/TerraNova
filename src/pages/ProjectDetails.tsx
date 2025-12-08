import React, { useState } from 'react';
import { Project, Inquiry } from '../types';
import { MapPin, Check, ArrowLeft, Download, Phone, Calendar, Sprout, TrendingUp, Wallet, PieChart } from 'lucide-react';

interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
  onSubmitInquiry: (inquiry: Inquiry) => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onBack, onSubmitInquiry }) => {
  const [activeImage, setActiveImage] = useState(project.thumbnail);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if required fields are filled
    if (!inquiryForm.name.trim() || !inquiryForm.phone.trim() || !inquiryForm.email.trim()) {
      alert('Please fill in all required details (Name, Phone, Email) before downloading the brochure.');
      return;
    }
    onSubmitInquiry({
      id: Math.random().toString(36).substr(2, 9),
      ...inquiryForm,
      projectId: project.id,
      projectTitle: project.title,
      createdAt: Date.now()
    });
    setSubmitted(true);
    // Also download brochure after submitting inquiry
    handleDownloadBrochure();
  };

  const handleDownloadBrochure = async () => {
    if (project.brochureUrl) {
      console.log('Brochure URL:', project.brochureUrl);
      try {
        const response = await fetch(project.brochureUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${project.slug}-brochure.pdf`;
        link.style.display = 'none';
        document.body.appendChild(link);
        console.log('Blob URL created:', url);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Download failed:', error);
        alert('Failed to download brochure. Please try again.');
      }
    } else {
      alert('Brochure not available for this project.');
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumSignificantDigits: 3
    }).format(price);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-stone-500 hover:text-emerald-700 mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Projects
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column: Gallery & Details */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Gallery */}
          <div className="space-y-4">
            <div className="h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg bg-stone-200">
              <img src={activeImage} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {[project.thumbnail, ...project.images].map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? 'border-emerald-600' : 'border-transparent'}`}
                >
                  <img src={img} alt="Thumbnail" loading="lazy" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Title & Stats */}
          <div>
            <div className="flex items-start justify-between">
               <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-2">{project.title}</h1>
                  <div className="flex items-center text-stone-500 gap-2 text-lg">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                    <span>{project.city}, {project.state}</span>
                  </div>
               </div>
               <div className="text-right hidden md:block">
                  <p className="text-sm text-stone-500 uppercase tracking-wide">Starting Price</p>
                  <p className="text-3xl font-bold text-emerald-700">{formatPrice(project.price)}</p>
               </div>
            </div>
            
            {/* Mobile Price */}
             <div className="mt-4 md:hidden">
                <p className="text-sm text-stone-500 uppercase tracking-wide">Starting Price</p>
                <p className="text-3xl font-bold text-emerald-700">{formatPrice(project.price)}</p>
             </div>
          </div>

          <hr className="border-stone-200" />

          {/* Description */}
          <div className="prose prose-stone max-w-none">
            <h3 className="text-xl font-bold text-stone-900 mb-4">About this Project</h3>
            <p className="text-stone-600 leading-relaxed whitespace-pre-line">{project.longDescription}</p>
          </div>

          {/* --- NEW SECTION: Key Highlights (Slide 4) --- */}
          {project.keyHighlights && project.keyHighlights.length > 0 && (
            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" /> Investment Highlights
              </h3>
              <ul className="space-y-3">
                {project.keyHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="bg-emerald-200 p-1 rounded-full mt-0.5 shrink-0">
                       <Check className="h-3 w-3 text-emerald-900" />
                    </div>
                    <span className="text-stone-700 font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* --- NEW SECTION: Financial Snapshot (Slide 3) --- */}
          {project.investmentBreakdown && (
            <div>
               <h3 className="text-xl font-bold text-stone-900 mb-6 flex items-center gap-2">
                 <Wallet className="h-6 w-6 text-emerald-700" /> Financial Snapshot
               </h3>
               <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="grid grid-cols-2 bg-emerald-900 text-white p-4 font-semibold text-sm uppercase">
                    <div>Item</div>
                    <div className="text-right">Amount (INR)</div>
                  </div>
                  <div className="divide-y divide-stone-100">
                    {project.investmentBreakdown.map((item, idx) => (
                      <div key={idx} className={`grid grid-cols-2 p-4 text-stone-700 ${idx === project.investmentBreakdown!.length - 1 ? 'bg-emerald-50 font-bold text-emerald-900' : ''}`}>
                         <div>{item.label}</div>
                         <div className="text-right">{item.amount.toLocaleString('en-IN')}</div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          )}

          {/* --- NEW SECTION: ROI Models (Slide 3) --- */}
          {project.roiModels && (
            <div>
              <h3 className="text-xl font-bold text-stone-900 mb-6 flex items-center gap-2">
                <PieChart className="h-6 w-6 text-emerald-700" /> Potential Returns
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                 {project.roiModels.map((model, idx) => (
                   <div key={idx} className="border border-stone-200 rounded-xl p-5 hover:shadow-lg transition-shadow bg-white flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-emerald-100 p-2 rounded-lg text-emerald-800">
                           <Sprout className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-stone-900 leading-tight">{model.title}</h4>
                          <span className="text-xs text-stone-500 font-medium">{model.area}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-6 flex-grow">
                        {model.highlights.map((h, i) => (
                          <li key={i} className="text-xs text-stone-600 flex items-start gap-2">
                             <div className="w-1 h-1 bg-stone-400 rounded-full mt-1.5 shrink-0"></div>
                             {h}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-4 border-t border-stone-100">
                         <p className="text-xs text-stone-400 uppercase font-bold">Projected Return</p>
                         <p className="text-emerald-700 font-bold text-sm">{model.returnText}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          )}

          {/* Amenities */}
          <div>
            <h3 className="text-xl font-bold text-stone-900 mb-6">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-stone-50 rounded-lg border border-stone-100">
                  <div className="bg-emerald-100 p-1.5 rounded-full">
                    <Check className="h-3 w-3 text-emerald-700" />
                  </div>
                  <span className="text-sm font-medium text-stone-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Embed (Static Placeholder) */}
          <div>
            <h3 className="text-xl font-bold text-stone-900 mb-4">Location</h3>
            <div className="bg-stone-200 h-64 rounded-xl flex items-center justify-center relative overflow-hidden group">
               <img 
                src="https://picsum.photos/id/124/800/400" 
                alt="Map Placeholder" 
                loading="lazy"
                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <button className="bg-white text-emerald-900 px-6 py-2 rounded-full shadow-lg font-semibold hover:bg-emerald-50 transition">
                   View on Google Maps
                 </button>
               </div>
            </div>
            <p className="text-xs text-stone-400 mt-2 text-center">Latitude: {project.location.lat}, Longitude: {project.location.lng}</p>
          </div>

        </div>

        {/* Right Column: Inquiry Form & Sticky Actions */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            
            {/* Inquiry Form */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100">
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Interested?</h3>
              <p className="text-sm text-stone-500 mb-6">Fill out the form below and our team will get back to you shortly.</p>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-600 uppercase mb-1">Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-600 uppercase mb-1">Phone</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-600 uppercase mb-1">Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-600 uppercase mb-1">Message</label>
                    <textarea 
                      rows={3}
                      className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none resize-none"
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-800 text-white font-bold py-3 rounded-lg hover:bg-emerald-900 transition-colors shadow-md active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Download className="h-5 w-5" /> Download Brochure (PDF)
                  </button>
                </form>
              ) : (
                <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-lg text-center">
                   <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                     <Check className="h-6 w-6 text-emerald-600" />
                   </div>
                   <h4 className="text-lg font-bold text-emerald-900">Thank You!</h4>
                   <p className="text-sm text-stone-600 mt-2">We have received your details. Our representative will call you within 24 hours.</p>
                   <button 
                     onClick={() => setSubmitted(false)}
                     className="text-xs text-emerald-700 underline mt-4"
                   >
                     Send another response
                   </button>
                </div>
              )}
            </div>

            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
               <div className="flex items-center gap-3 text-emerald-900 font-semibold mb-2">
                 <Phone className="h-5 w-5" /> Direct Sales Line
               </div>
               <p className="text-2xl font-bold text-emerald-800">+91 1234567890</p>
               <p className="text-xs text-stone-500 mt-1">Available 9 AM - 7 PM</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
