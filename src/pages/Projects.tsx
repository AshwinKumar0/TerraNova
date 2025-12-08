import React, { useState, useEffect } from 'react';
import { Project, FilterState } from '../types';
import ProjectCard from '../components/ProjectCard';
import { Search, SlidersHorizontal, X } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [filters, setFilters] = useState<FilterState>({
    city: '',
    type: '',
    minPrice: 0,
    maxPrice: 10000000,
    search: '',
  });

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Extract unique cities for filter dropdown
  const cities = Array.from(new Set(projects.map(p => p.city)));

  useEffect(() => {
    let result = projects;

    if (filters.search) {
      const q = filters.search.toLowerCase();
      result = result.filter(p => p.title.toLowerCase().includes(q) || p.city.toLowerCase().includes(q));
    }

    if (filters.city) {
      result = result.filter(p => p.city === filters.city);
    }

    if (filters.type) {
      result = result.filter(p => p.type === filters.type);
    }

    result = result.filter(p => p.price >= filters.minPrice && p.price <= filters.maxPrice);

    setFilteredProjects(result);
  }, [filters, projects]);

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      city: '',
      type: '',
      minPrice: 0,
      maxPrice: 10000000,
      search: '',
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
           <h1 className="text-3xl font-bold text-emerald-950">Our Projects</h1>
           <p className="text-stone-500 mt-1">Found {filteredProjects.length} properties matching your criteria</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 h-5 w-5" />
          <input 
            type="text" 
            placeholder="Search by name or location..." 
            className="w-full pl-10 pr-4 py-3 rounded-full border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white shadow-sm"
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
          />
        </div>

        {/* Mobile Filter Toggle */}
        <button 
          className="md:hidden flex items-center gap-2 bg-stone-200 px-4 py-2 rounded-lg text-sm font-semibold"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className={`lg:w-1/4 bg-white p-6 rounded-2xl shadow-sm border border-stone-100 h-fit ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-emerald-900">Filters</h3>
            <button onClick={clearFilters} className="text-xs text-stone-500 underline hover:text-emerald-600">Clear All</button>
          </div>

          <div className="space-y-6">
            {/* Type */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Property Type</label>
              <select 
                className="w-full p-2 border border-stone-200 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
              >
                <option value="">All Types</option>
                <option value="plot">Plot</option>
                <option value="villa">Villa</option>
                <option value="resort">Resort</option>
              </select>
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Location</label>
              <select 
                className="w-full p-2 border border-stone-200 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                value={filters.city}
                onChange={(e) => handleFilterChange('city', e.target.value)}
              >
                <option value="">All Locations</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Max Price: ₹{(filters.maxPrice / 100000).toFixed(1)} Lakhs
              </label>
              <input 
                type="range" 
                min="0" 
                max="20000000" 
                step="100000"
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value))}
              />
              <div className="flex justify-between text-xs text-stone-400 mt-1">
                <span>0</span>
                <span>2Cr+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="lg:w-3/4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-stone-100 dashed">
              <div className="mx-auto w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mb-4">
                 <X className="h-8 w-8 text-stone-400" />
              </div>
              <h3 className="text-xl font-bold text-stone-900">No Projects Found</h3>
              <p className="text-stone-500">Try adjusting your filters or search query.</p>
              <button onClick={clearFilters} className="mt-4 text-emerald-600 font-semibold hover:underline">Reset Filters</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
