import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-emerald-950 mb-4">Get In Touch</h1>
        <p className="text-stone-500 max-w-xl mx-auto">Whether you're looking to buy a plot, visit a site, or just want to chat about organic farming, we are here for you.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-10">
           <div>
             <h2 className="text-2xl font-bold text-stone-900 mb-6">Contact Information</h2>
             <div className="space-y-6">
               <div className="flex items-start gap-4">
                 <div className="bg-emerald-100 p-3 rounded-lg text-emerald-800">
                   <MapPin className="h-6 w-6" />
                 </div>
                 <div>
                   <h3 className="font-bold text-stone-900">Head Office</h3>
                   <p className="text-stone-600">Redknox Estates Pvt Ltd.<br/><br/>Pune, India</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="bg-emerald-100 p-3 rounded-lg text-emerald-800">
                   <Phone className="h-6 w-6" />
                 </div>
                 <div>
                   <h3 className="font-bold text-stone-900">Phone</h3>
                   <p className="text-stone-600">+971 5570000545</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="bg-emerald-100 p-3 rounded-lg text-emerald-800">
                   <Mail className="h-6 w-6" />
                 </div>
                 <div>
                   <h3 className="font-bold text-stone-900">Email</h3>
                   <p className="text-stone-600">sujitsin@gmail.com</p>
                   <p className="text-stone-600">support@redknox.com</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="bg-emerald-100 p-3 rounded-lg text-emerald-800">
                   <Clock className="h-6 w-6" />
                 </div>
                 <div>
                   <h3 className="font-bold text-stone-900">Working Hours</h3>
                   <p className="text-stone-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                   <p className="text-stone-600">Sunday: Closed</p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100">
          <h2 className="text-2xl font-bold text-emerald-900 mb-6">Send us a Message</h2>
          <form className="space-y-4">
             <div className="grid grid-cols-2 gap-4">
               <div>
                 <label className="block text-sm font-semibold text-stone-600 mb-1">First Name</label>
                 <input type="text" className="w-full p-3 bg-stone-50 rounded-lg border border-stone-200 outline-none focus:ring-2 focus:ring-emerald-500" />
               </div>
               <div>
                 <label className="block text-sm font-semibold text-stone-600 mb-1">Last Name</label>
                 <input type="text" className="w-full p-3 bg-stone-50 rounded-lg border border-stone-200 outline-none focus:ring-2 focus:ring-emerald-500" />
               </div>
             </div>
             <div>
               <label className="block text-sm font-semibold text-stone-600 mb-1">Email Address</label>
               <input type="email" className="w-full p-3 bg-stone-50 rounded-lg border border-stone-200 outline-none focus:ring-2 focus:ring-emerald-500" />
             </div>
             <div>
               <label className="block text-sm font-semibold text-stone-600 mb-1">Subject</label>
               <select className="w-full p-3 bg-stone-50 rounded-lg border border-stone-200 outline-none focus:ring-2 focus:ring-emerald-500">
                 <option>General Inquiry</option>
                 <option>Site Visit</option>
                 <option>Partnership</option>
               </select>
             </div>
             <div>
               <label className="block text-sm font-semibold text-stone-600 mb-1">Message</label>
               <textarea rows={4} className="w-full p-3 bg-stone-50 rounded-lg border border-stone-200 outline-none focus:ring-2 focus:ring-emerald-500"></textarea>
             </div>
             <button className="w-full bg-emerald-800 text-white font-bold py-3 rounded-lg hover:bg-emerald-900 transition shadow-lg">Submit Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
