import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../types';
import ProjectCard from '../components/ProjectCard';
import { ArrowRight, Leaf, ShieldCheck, Sun } from 'lucide-react';

interface HomeProps {
  projects: Project[];
}

const Home: React.FC<HomeProps> = ({ projects }) => {
  const navigate = useNavigate();
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/10/1920/1080" 
            alt="Nature landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Find Your Sanctuary in <br />
            <span className="text-emerald-300">Nature's Embrace</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover premium countryside plots, luxury villas, and sustainable resorts tailored for a life of peace and tranquility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/projects')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Explore Properties
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white hover:bg-stone-100 text-emerald-900 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-emerald-950 mb-2">Featured Projects</h2>
            <p className="text-stone-500">Handpicked properties just for you.</p>
          </div>
          <button 
            onClick={() => navigate('/projects')}
            className="hidden md:flex items-center gap-2 text-emerald-700 font-semibold hover:gap-3 transition-all"
          >
            View All <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project}
            />
          ))}
        </div>
        
        <div className="md:hidden mt-8 text-center">
             <button 
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 text-emerald-700 font-semibold mx-auto"
          >
            View All Projects <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-emerald-950 mb-4">Why Choose TerraNova?</h2>
            <p className="text-stone-600">We go beyond selling land. We curate lifestyles embedded in nature, ensuring sustainability and legal transparency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Eco-Friendly Living</h3>
              <p className="text-stone-600">All our projects maintain a 70% green cover policy, ensuring you live amidst pure air and biodiversity.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">100% Verified Titles</h3>
              <p className="text-stone-600">Zero legal hassles. Every property goes through a rigorous 25-point legal checklist before listing.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun className="h-8 w-8 text-sky-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Resort-Style Amenities</h3>
              <p className="text-stone-600">Enjoy clubhouses, pools, and managed services even in remote countryside locations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-emerald-950 mb-12 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-stone-200 p-8 rounded-2xl relative">
            <p className="text-stone-600 italic mb-6">"Buying a plot in Coorg through TerraNova was seamless. The team helped with everything from documentation to fencing. The location is magical."</p>
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-stone-300 rounded-full overflow-hidden">
                 <img src="https://picsum.photos/id/64/100/100" alt="User" />
               </div>
               <div>
                 <p className="font-bold text-stone-900">Rahul Verma</p>
                 <p className="text-xs text-stone-500">Software Architect, Bangalore</p>
               </div>
            </div>
          </div>
          <div className="bg-white border border-stone-200 p-8 rounded-2xl relative">
            <p className="text-stone-600 italic mb-6">"We wanted a retirement home away from the pollution. The villa in Munnar exceeded our expectations. Truly a premium experience."</p>
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-stone-300 rounded-full overflow-hidden">
                 <img src="https://picsum.photos/id/65/100/100" alt="User" />
               </div>
               <div>
                 <p className="font-bold text-stone-900">Anita Desai</p>
                 <p className="text-xs text-stone-500">Retired Banker, Mumbai</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-emerald-900 rounded-3xl p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
           <div className="relative z-10 max-w-2xl">
             <h2 className="text-3xl font-bold text-white mb-4">Ready to find your piece of paradise?</h2>
             <p className="text-emerald-200 text-lg">Schedule a site visit today and experience the tranquility firsthand.</p>
           </div>
           <div className="relative z-10 mt-8 md:mt-0">
             <button 
              onClick={() => navigate('/contact')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-bold shadow-lg transition-transform hover:scale-105"
             >
               Book a Site Visit
             </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
