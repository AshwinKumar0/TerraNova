import React from 'react';
import { Leaf, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in pb-16">
      {/* Hero */}
      <div className="relative h-[400px] flex items-center justify-center">
        <img 
          src="https://picsum.photos/id/116/1920/600" 
          alt="Forest" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-950/70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">Reconnecting humanity with nature, one plot at a time.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl space-y-8">
           <div className="space-y-4">
             <h2 className="text-3xl font-bold text-emerald-950">Who We Are</h2>
             <p className="text-stone-600 text-lg leading-relaxed">
               Founded in 2015, RedKnox Estates began with a simple vision: to make owning a piece of nature accessible, safe, and sustainable. We realized that city dwellers yearned for a sanctuary, but the process of buying rural land was fraught with legal complexities and lack of infrastructure.
             </p>
             <p className="text-stone-600 text-lg leading-relaxed">
               Today, we are the leading developer of managed farmland communities and luxury countryside villas. We don't just sell land; we build ecosystems where you can grow your own food, breathe clean air, and leave a legacy for future generations.
             </p>
           </div>

           <hr className="border-stone-100" />

           <div>
              <h2 className="text-3xl font-bold text-emerald-950 mb-8 text-center">Our Philosophy</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-3">
                  <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-emerald-800">
                    <Leaf className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-lg">Sustainability First</h3>
                  <p className="text-sm text-stone-500">Every project preserves local flora and fauna. We plant 100 trees for every villa built.</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-emerald-800">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-lg">Community Living</h3>
                  <p className="text-sm text-stone-500">We foster like-minded communities that value peace, privacy, and organic living.</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-emerald-800">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-lg">Transparency</h3>
                  <p className="text-sm text-stone-500">No hidden clauses. We pride ourselves on the cleanest land titles in the industry.</p>
                </div>
              </div>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-20 text-center">
         <h2 className="text-3xl font-bold text-emerald-950 mb-10">Meet The Team</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1,2,3].map((i) => (
              <div key={i} className="group">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={`https://picsum.photos/id/${60+i}/400/400`} alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">Name Surname</h3>
                <p className="text-emerald-700 font-medium text-sm">Designation</p>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default About;
