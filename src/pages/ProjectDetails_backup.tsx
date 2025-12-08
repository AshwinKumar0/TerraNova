import React, { useState } from 'react';
import { Project, Inquiry } from '../types';
import { MapPin, Check, ArrowLeft, Download, Phone, Mail, Calendar } from 'lucide-react';

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
    onSubmitInquiry({
      id: Math.random().toString(36).substr(2, 9),
      ...inquiryForm,
      projectId: project.id,
      projectTitle: project.title,
      createdAt: Date.now()
    });
    setSubmitted(true);
  };

  const handleDownloadBrochure = () => {
    if (project.brochureUrl) {
      const link = document.createElement('a');
      link.href = project.brochureUrl;
      link.download = `${project.slug}-brochure.pdf`;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
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
                    className="w-full bg-emerald-800 text-white font-bold py-3 rounded-lg hover:bg-emerald-900 transition-colors shadow-md"
                  >
                    Send Inquiry
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

            {/* Brochure Download */}
            <button 
              onClick={handleDownloadBrochure}
              className="w-full bg-stone-800 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-stone-900 transition-colors shadow-md active:scale-95"
            >
              <Download className="h-5 w-5" /> Download Brochure (PDF)
            </button>
            
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
               <div className="flex items-center gap-3 text-emerald-900 font-semibold mb-2">
                 <Phone className="h-5 w-5" /> Direct Sales Line
               </div>
               <p className="text-2xl font-bold text-emerald-800">+91 98765 00000</p>
               <p className="text-xs text-stone-500 mt-1">Available 9 AM - 7 PM</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
